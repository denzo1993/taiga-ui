(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38177],{38177:n=>{n.exports="import {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTable} from '@taiga-ui/addon-table';\nimport {TuiLet} from '@taiga-ui/cdk';\nimport {TuiAutoColorPipe, TuiButton, TuiLink} from '@taiga-ui/core';\nimport {TuiChip} from '@taiga-ui/kit';\nimport {BehaviorSubject} from 'rxjs';\n\ninterface User {\n    readonly email: string;\n    readonly name: string;\n    readonly status: 'alive' | 'deceased';\n    readonly tags: readonly string[];\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    selector: 'tui-table-example-2',\n    imports: [\n        TuiTable,\n        TuiChip,\n        NgForOf,\n        TuiAutoColorPipe,\n        TuiLink,\n        NgIf,\n        TuiButton,\n        TuiLet,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly columns = ['name', 'email', 'status', 'tags', 'actions'];\n\n    protected users$ = new BehaviorSubject<User[]>([\n        {\n            name: 'Michael Palin',\n            email: 'm.palin@montypython.com',\n            status: 'alive',\n            tags: ['Funny'],\n        },\n        {\n            name: 'Eric Idle',\n            email: 'e.idle@montypython.com',\n            status: 'alive',\n            tags: ['Funny', 'Music'],\n        },\n        {\n            name: 'John Cleese',\n            email: 'j.cleese@montypython.com',\n            status: 'alive',\n            tags: ['Funny', 'Tall', 'Actor'],\n        },\n        {\n            name: 'Terry Jones',\n            email: '',\n            status: 'deceased',\n            tags: ['Funny', 'Director'],\n        },\n        {\n            name: 'Terry Gilliam',\n            email: 't.gilliam@montypython.com',\n            status: 'alive',\n            tags: ['Funny', 'Director'],\n        },\n        {\n            name: 'Graham Chapman',\n            email: '',\n            status: 'deceased',\n            tags: ['Funny', 'King Arthur'],\n        },\n    ]);\n\n    protected remove(item: User): void {\n        const users = this.users$.getValue().filter(user => user !== item);\n\n        this.users$.next(users);\n    }\n}\n"}}]);