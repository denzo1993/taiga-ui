(window.webpackJsonp=window.webpackJsonp||[]).push([[954],{"q/+G":function(n,t,a){"use strict";a.r(t),t.default='<form\n    class="container"\n    [formGroup]="testForm"\n>\n    <tui-input\n        *tuiLet="users$ | async as users"\n        formControlName="user"\n        [tuiTextfieldCustomContent]="content"\n    >\n        User\n        <input\n            tuiTextfield\n            placeholder="Type your name or surname"\n        />\n        <ng-container *ngIf="users.length">\n            <tui-data-list *tuiDataList>\n                <button\n                    *ngFor="let user of users"\n                    tuiOption\n                    [value]="user.toString()"\n                    (click)="onSelected(user)"\n                >\n                    {{ user }}\n                    <tui-avatar\n                        size="xs"\n                        [avatarUrl]="user.avatarUrl || null"\n                        [text]="user.toString()"\n                    ></tui-avatar>\n                </button>\n            </tui-data-list>\n        </ng-container>\n    </tui-input>\n    <ng-template #avatar>\n        <tui-avatar\n            *ngIf="lastUser"\n            size="s"\n            [rounded]="true"\n            [avatarUrl]="lastUser.avatarUrl || null"\n            [text]="lastUser.toString()"\n        ></tui-avatar>\n    </ng-template>\n    <tui-input\n        formControlName="account"\n        class="tui-space_vertical-5"\n    >\n        Account\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="accounts"\n            [itemContent]="accountContent"\n        ></tui-data-list-wrapper>\n        <ng-template\n            #accountContent\n            let-account\n        >\n            <div>\n                {{ account.name }}\n                <tui-money [value]="account.amount"></tui-money>\n            </div>\n        </ng-template>\n    </tui-input>\n    <tui-input-card\n        formControlName="card"\n        [tuiTextfieldCleaner]="true"\n        [cardSrc]="card"\n    >\n        Card number\n    </tui-input-card>\n</form>\n'}}]);