(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{akjl:function(n,t,i){"use strict";i.r(t),t.default='<h3>TODO:</h3>\n<p>(click on item if it is finished)</p>\n\n<ul class="tui-list">\n    <li\n        *ngFor="let task of todoTasks"\n        class="tui-list__item"\n        (click)="task.completed = !task.completed"\n    >\n        {{task.title}}\n        <tui-svg\n            *ngIf="task.completed"\n            src="tuiIconCheckLarge"\n            [@tuiScaleIn]="getAnimation(speed)"\n        ></tui-svg>\n    </li>\n</ul>\n'}}]);