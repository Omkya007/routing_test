import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleNavbar]'
})
export class ToggleNavbarDirective {
  private isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  toggleCollapse() {
    const content = this.el.nativeElement.nextElementSibling;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(content, 'show');
    } else {
      this.renderer.removeClass(content, 'show');
    }
  }
}
