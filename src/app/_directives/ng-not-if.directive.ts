import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NgNotIf]'
})
export class NgNotIfDirective {
  @Input() set NgNotIf(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.tr);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private tr: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
