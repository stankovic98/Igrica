import { Directive, Renderer, ElementRef } from '@angular/core';


@Directive({
    selector: '[exploreRenderer]'
})
export class ExploreRendererDirective {
    private nativeElement: Node;
    constructor(private renderer: Renderer, private element: ElementRef) {
        this.nativeElement = element.nativeElement;
        let inputElement = this.renderer.createElement(this.nativeElement, 'appitem');
        console.dir(inputElement);
    }
}