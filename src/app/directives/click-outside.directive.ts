import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  /* @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    const isOpen = this._elementRef.nativeElement.classList.contains('opened');
    console.log('inside', clickedInside, ', class', isOpen);
    if (!clickedInside && !isOpen) {
      this.clickOutside.emit(true);
    } else {

    }
  } */
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const isIcon = this._elementRef.nativeElement.className;
    console.log('icon str', isIcon);

    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    const isOpen = this._elementRef.nativeElement.classList.contains('opened');
    console.log(
      'inside',
      clickedInside,
      ', class',
      isOpen,
      ' , is icon',
      isIcon
    );
    console.log('event', event);
    if (!clickedInside && !isOpen) {
      this.clickOutside.emit(true);
    } else {
      this.clickOutside.emit(false);
    }
  }
}
