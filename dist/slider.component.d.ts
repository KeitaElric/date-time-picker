import { OnInit, ElementRef, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const SLIDER_VALUE_ACCESSOR: any;
export declare class SlideControlComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
    private renderer;
    min: number;
    max: number;
    style: any;
    sliderElm: ElementRef;
    handleValue: number;
    isDragging: boolean;
    initY: number;
    sliderHeight: number;
    startHandleValue: number;
    startY: number;
    value: number;
    onModelChange: Function;
    onModelTouched: Function;
    private dragListener;
    private mouseUpListener;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onMouseDown(event: any): void;
    onTouchStart(event: any): void;
    onTouchMove(event: any): void;
    updateSliderData(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(isDisabled: boolean): void;
    private handleChange(event);
    private calculateHandleValue(event);
    private setValueFromHandle(event, handleValue);
    private getValueFromHandle(handleValue);
    private updateHandleValue();
    private updateValue(val, event?);
    getWindowScrollTop(): number;
}
