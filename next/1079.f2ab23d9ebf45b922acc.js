(window.webpackJsonp=window.webpackJsonp||[]).push([[1079],{Ow5d:function(e,n,i){"use strict";i.r(n),n.default="```ts\nimport {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n  // ...\n})\nexport class SomeComponent {\n  @ViewChild('preview')\n  readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n  constructor(@Inject(PreviewDialogService) private readonly previewDialogService: PreviewDialogService) {}\n\n  show() {\n    this.previewDialogService.open(this.preview).subscribe();\n  }\n}\n```\n"}}]);