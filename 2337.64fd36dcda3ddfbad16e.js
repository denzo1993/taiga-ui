"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[2337],{2337:n=>{n.exports='# angular.json\n\n```json\n{\n  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n  "version": 1,\n  "newProjectRoot": "projects",\n  "projects": {\n    "demo": {\n      "root": "",\n      "sourceRoot": "",\n      "projectType": "application",\n      "prefix": "my-app",\n      "architect": {\n        "build": {\n          "builder": "@angular-devkit/build-angular:browser",\n          "options": {\n            "outputPath": "dist/demo",\n            "index": "src/index.html",\n            "main": "src/main.ts",\n            "polyfills": "src/polyfills.ts",\n            "tsConfig": "src/tsconfig.app.json",\n            "assets": ["src/favicon.ico", "src/assets"],\n            "styles": ["src/styles.less"]\n          },\n          "configurations": {\n            "production": {\n              "fileReplacements": [\n                {\n                  "replace": "src/environments/environment.ts",\n                  "with": "src/environments/environment.prod.ts"\n                }\n              ],\n              "optimization": true,\n              "outputHashing": "all",\n              "sourceMap": false,\n              "extractCss": true,\n              "namedChunks": false,\n              "aot": true,\n              "extractLicenses": true,\n              "vendorChunk": false,\n              "buildOptimizer": true\n            }\n          }\n        },\n        "serve": {\n          "builder": "@angular-devkit/build-angular:dev-server",\n          "options": {"browserTarget": "demo:build"}\n        }\n      }\n    }\n  },\n  "defaultProject": "demo"\n}\n```\n\n# tsconfig.json\n\n```json\n{\n  "compileOnSave": false,\n  "compilerOptions": {\n    "baseUrl": "./",\n    "outDir": "./dist/out-tsc",\n    "sourceMap": false,\n    "declaration": false,\n    "downlevelIteration": false,\n    "experimentalDecorators": true,\n    "module": "es2020",\n    "moduleResolution": "node",\n    "importHelpers": true,\n    "target": "es2015",\n    "typeRoots": ["node_modules/@types"],\n    "lib": ["esnext", "dom"]\n  },\n  "angularCompilerOptions": {\n    "enableIvy": true,\n    "fullTemplateTypeCheck": true,\n    "strictInjectionParameters": true\n  }\n}\n```\n'}}]);