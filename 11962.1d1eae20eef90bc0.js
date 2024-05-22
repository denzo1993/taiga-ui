(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[11962],{11962:n=>{n.exports="import {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TUI_DEFAULT_MATCHER, TuiLetDirective} from '@taiga-ui/cdk';\nimport {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiInputModule} from '@taiga-ui/kit';\nimport type {Observable} from 'rxjs';\nimport {map, of, startWith, switchMap} from 'rxjs';\n\nclass User {\n    constructor(\n        public readonly firstName: string,\n        public readonly lastName: string,\n        public readonly avatarUrl: string | null = null,\n        public readonly disabled = false,\n    ) {}\n\n    public toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: readonly User[] = [\n    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),\n    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),\n    new User('Gabriel José', 'de la Concordia «Gabo» García Márquez'),\n];\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiInputModule,\n        TuiLetDirective,\n        ReactiveFormsModule,\n        AsyncPipe,\n        TuiDataList,\n        NgIf,\n        NgForOf,\n        TuiAvatarComponent,\n        TuiInitialsPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly control = new FormControl('');\n\n    protected firstName = '';\n    protected lastName = '';\n\n    protected readonly items$ = this.control.valueChanges.pipe(\n        startWith(''),\n        switchMap(value =>\n            this.request(value ?? '').pipe(\n                map(response => {\n                    if (response.length === 1 && String(response[0]) === value) {\n                        this.onClick(response[0]);\n\n                        return [];\n                    }\n\n                    return response;\n                }),\n            ),\n        ),\n        startWith(DATA),\n    );\n\n    protected onClick({lastName, firstName}: User): void {\n        this.lastName = lastName;\n        this.firstName = firstName;\n    }\n\n    // Request imitation\n    private request(query: string): Observable<readonly User[]> {\n        return of(DATA.filter(item => TUI_DEFAULT_MATCHER(item, query)));\n    }\n}\n"}}]);