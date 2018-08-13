import traverse from '@babel/traverse';
import * as t from '@babel/types';
import template from '@babel/template';
import generate from '@babel/generator';
import path from 'path';
import PathParser from '../helpers/pathParser';
import {getDistPath, isFile, readFile, isDir} from '../utils';
import findRoot from 'find-root';
import resolveAlias from '../helpers/alias';
import DependencyResolver from '../helpers/dependencyResolver';
import debugPKG from 'debug';

let debug = debugPKG('WXA:ASTManager');

export default class ASTManager {
    constructor(resolve, meta) {
        debug('resolve %o ', resolve);
        debug('meta %o ', meta);

        this.resolve = resolve;
        this.meta = meta;

        this.modulesPath = path.join(meta.current, 'node_modules', path.sep);
        this.npmPath = path.join(meta.current, meta.dist, 'npm', path.sep);
    }

    parse(mdl) {
        debug('parse start');
        if (mdl.ast == null) return [];

        let self = this;
        let libs = [];
        traverse(mdl.ast, {
            CallExpression(path) {
                // commandJS module
                if (
                    path.node.callee &&
                    path.node.callee.name === 'require' &&
                    path.node.arguments.length
                ) {
                    let dep = path.node.arguments[0].value;

                    let dr = new DependencyResolver(self.meta.current, self.resolve, self.meta);

                    let meta = dr.resolveDep(dep, mdl, {needFindExt: true});
                    let resolved = dr.getResolved(meta.lib, meta.source, meta.target, mdl);

                    libs.push({
                        src: meta.source,
                        pret: meta.pret,
                        $$meta: meta,
                        reference: {
                            $$ASTPath: path,
                            $$category: 'ast',
                            resolved,
                        },
                    });

                    // path.replaceWithSourceString(`require(${resolved})`);
                }
            },
            ImportDeclaration(path) {
                // es module
                if (
                    path.node.source &&
                    path.node.source.value
                ) {
                    let dep = path.node.source.value;

                    let dr = new DependencyResolver(self.meta.current, self.resolve, self.meta);

                    let meta = dr.resolveDep(dep, mdl, {needFindExt: true});
                    let resolved = dr.getResolved(meta.lib, meta.source, meta.target, mdl);

                    libs.push({
                        src: meta.source,
                        pret: meta.pret,
                        $$meta: meta,
                        reference: {
                            $$ASTPath: path,
                            $$category: 'ast',
                            resolved,
                        },
                    });

                    // replace source node
                    // path.get('source').replaceWith(t.stringLiteral(resolved));
                }
            },
        });

        debug('dependencies libs %O', libs);
        return libs;
    }

    optimize(mdl) {
        debug('optimize start');
        if (mdl.ast == null) return;

        if (~['app', 'page', 'component'].indexOf(mdl.category)) {
            // entry.
            // traverse(mdl.ast, {
            //     Program(path) {
            //         let buildIIFE = template(`

            //             ;(function() {\nBODY;\n})()
            //         `);

            //         let iife = buildIIFE({
            //             BODY: path.node.body,
            //         });
            //         iife[1].expression.callee.body.directives = path.node.directives;

            //         path.replaceWith(
            //             t.program(iife)
            //         );

            //         path.stop();
            //     },
            // });
            // let wxaWrap = `
            //     require()
            // `
            debug('body, %O', mdl.ast.program.body);

            let c = generate(mdl.ast, {});
            console.log('generated %O', c);
            process.exit(0);
        }
    }
}
