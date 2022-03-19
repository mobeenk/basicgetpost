import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'orange';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private renderer: Renderer2,private el: ElementRef) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,'background-color','red');
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
   // this.renderer.setStyle(this.el.nativeElement,'background-color','orange');
   this.backgroundColor= this.highlightColor ;

  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
   // this.renderer.setStyle(this.el.nativeElement,'background-color','blue');
   this.backgroundColor= this.defaultColor;

  }

}
