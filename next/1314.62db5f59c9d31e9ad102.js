(window.webpackJsonp=window.webpackJsonp||[]).push([[1314],{IxAl:function(n,e,t){"use strict";t.r(e),e.default='<button\n    tuiButton\n    (click)="toggle()"\n>\n    Show/Hide\n</button>\n<ng-template\n    [tuiSheetOptions]="options"\n    [(tuiSheet)]="open"\n>\n    <ng-container waIntersectionObserver>\n        <h2 tuiSheetHeading>\n            <label\n                tuiLabel\n                label="Monty Python"\n            >\n                And the Holy Grail\n            </label>\n        </h2>\n        <img\n            *ngFor="let image of images"\n            #img\n            alt=""\n            class="image"\n            [src]="image"\n            (waIntersectionObservee)="onIntersection($event, img)"\n        />\n    </ng-container>\n</ng-template>\n'}}]);