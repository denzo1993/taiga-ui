"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[4147],{4147:e=>{e.exports=JSON.parse('{"name":"@taiga-ui/components","version":"3.20.0","description":"Taiga UI by Tinkoff is a set of components, services, directives and other tools to build high quality UI using modern Angular framework","keywords":["angular","kit","ui","component-library","component","service","directive"],"homepage":"https://github.com/tinkoff/taiga-ui","repository":"https://github.com/tinkoff/taiga-ui","license":"Apache-2.0","maintainers":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>"],"workspaces":["projects/*"],"scripts":{"postinstall":"ts-node ./scripts/postinstall.ts","start":"nx serve demo","start:fast":"nx serve demo -c fast","start:default":"nx serve demo -c def","start:coalescing":"nx serve demo -c coalescing","start:shadow":"nx serve demo -c shadow","start:ip":"nx serve-ip demo","build:ssr":"nx build demo && nx run demo:server:production","prerender":"nx run demo:prerender","*** Workflow ***":"","stylelint":"stylelint \'**/*.{less,css}\'","lint":"eslint --cache --cache-location node_modules/.cache/eslint","prettier":"prettier \'**/*.{svg,yml,js,ts,html,md,less,json}\' --cache node_modules/.cache/prettier","typecheck":"tsc --noEmit --strict --incremental false --tsBuildInfoFile null --project tsconfig.spec.json","*** Build **":"","build:demo":"nx build demo","build:demo:next":"nx build demo -c next --skip-nx-cache","*** Release ***":"","release":"standard-version -a --no-verify","release:patch":"ts-node ./scripts/release.ts --release-as patch","release:minor":"ts-node ./scripts/release.ts --release-as minor","release:major":"ts-node ./scripts/release.ts --release-as major","*** CI ***":"","affected:test:libs":"nx affected --target test --exclude=demo --output-style=stream","affected:build:libs":"nx affected --target build --exclude=demo --output-style=stream","run-many:build:libs":"nx run-many --target build --all --exclude=demo --output-style=stream","run-many:publish:libs":"nx run-many --target publish --all --output-style=stream"},"lint-staged":{"*.{js,ts,html,md,less,json}":["npm run lint -- --fix","prettier --write"],"*.less":["stylelint --fix"]},"dependencies":{"@angular/animations":"12.2.17","@angular/cdk":"12.2.13","@angular/common":"12.2.17","@angular/compiler":"12.2.17","@angular/core":"12.2.17","@angular/forms":"12.2.17","@angular/localize":"12.2.17","@angular/platform-browser":"12.2.17","@angular/platform-browser-dynamic":"12.2.17","@angular/platform-server":"12.2.17","@angular/router":"12.2.17","core-js":"2.6.12","parse5":"6.0.1","rxjs":"6.6.7","zone.js":"0.11.8"},"devDependencies":{"@angular-builders/custom-webpack":"12.1.3","@angular-devkit/build-angular":"12.2.18","@angular-devkit/core":"12.2.18","@angular/cli":"12.2.18","@angular/compiler-cli":"12.2.17","@angular/language-service":"12.2.17","@commitlint/cli":"17.4.4","@commitlint/config-conventional":"17.4.4","@nrwl/cli":"15.8.7","@nrwl/node":"15.8.7","@nrwl/nx-cloud":"15.2.3","@nrwl/tao":"15.8.7","@nrwl/workspace":"15.8.7","@testing-library/cypress":"9.0.0","@tinkoff/prettier-config":"1.47.1","@tinkoff/stylelint-config":"1.46.2","@types/glob":"8.1.0","@types/node":"18.15.3","@types/parse5":"6.0.3","@types/webpack-env":"1.18.0","angular-http-server":"1.11.1","babel-loader":"9.1.2","bundlemon":"2.0.1","cpy-cli":"4.2.0","cy2":"4.0.6","cypress":"12.8.1","cypress-real-events":"1.7.6","eslint":"8.36.0","find-in-files":"0.5.0","http-server":"0.13.0","husky":"8.0.3","kill-port":"2.0.1","lint-staged":"13.2.0","ng-packagr":"12.2.7","postcss":"8.4.21","prettier":"2.8.5","rollup":"2.79.1","standard-version":"8.0.2","ts-loader":"9.4.2","ts-mockito":"2.6.1","ts-node":"10.9.1","typescript":"4.3.5","wait-on":"6.0.1","webpack":"5.76.2"},"engines":{"node":">= 16.14","npm":">= 8.3","yarn":"Please use npm instead of yarn to install dependencies"},"authors":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>"],"overrides":{"webpack":"$webpack","babel-loader":"$babel-loader"},"standard-version":{"scripts":{"postchangelog":"ts-node ./scripts/postchangelog.ts","postbump":"ts-node ./scripts/postbump.ts"},"types":[{"type":"feat","section":"Features"},{"type":"fix","section":"Bug Fixes"},{"type":"deprecate","section":"Deprecations"}]}}')}}]);