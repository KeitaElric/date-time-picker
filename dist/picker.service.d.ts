import { DialogType } from './dialog.component';
import { Moment } from 'moment/moment';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
export declare class PickerService {
    refreshCalendarSource: Subject<Moment>;
    refreshCalendar: Observable<Moment>;
    private _dtAutoClose;
    readonly dtAutoClose: boolean;
    private _dtDisabled;
    dtDisabled: boolean;
    private _dtLocale;
    readonly dtLocale: string;
    private _dtViewFormat;
    readonly dtViewFormat: string;
    private _dtReturnObject;
    readonly dtReturnObject: string;
    private _dtDialogType;
    readonly dtDialogType: DialogType;
    private _dtPickerType;
    dtPickerType: 'both' | 'date' | 'time';
    private _dtPosition;
    readonly dtPosition: 'top' | 'right' | 'bottom' | 'left';
    private _dtPositionOffset;
    readonly dtPositionOffset: string;
    private _dtMode;
    readonly dtMode: 'popup' | 'dropdown' | 'inline';
    private _dtHourTime;
    readonly dtHourTime: '12' | '24';
    private _dtShowSeconds;
    readonly dtShowSeconds: boolean;
    private _dtOnlyCurrentMonth;
    readonly dtOnlyCurrentMonth: boolean;
    private _dtMinMoment;
    readonly dtMinMoment: Moment;
    private _dtMaxMoment;
    readonly dtMaxMoment: Moment;
    private _selectedMoment;
    selectedMoment: Moment;
    private momentFunc;
    private _now;
    readonly now: Moment;
    constructor();
    setPickerOptions(dtAutoClose: boolean, dtLocale: string, dtViewFormat: string, dtReturnObject: string, dtPosition: 'top' | 'right' | 'bottom' | 'left', dtPositionOffset: string, dtMode: 'popup' | 'dropdown' | 'inline', dtHourTime: '12' | '24', dtPickerType: 'both' | 'date' | 'time', dtShowSeconds: boolean, dtOnlyCurrentMonth: boolean, dtMinMoment: string, dtMaxMoment: string): void;
    setMoment(value: any): void;
    setDate(moment: Moment): boolean;
    setTime(hour: number, minute: number, second: number, meridian: string): boolean;
    parseToReturnObjectType(): any;
    isValidDate(moment: Moment): boolean;
    isValidMoment(moment: Moment): boolean;
    isTheSameDay(day_1: Moment, day_2: Moment): boolean;
    resetMinMaxMoment(minString: string, maxString: string): void;
    private setMinMoment(minString);
    private setMaxMoment(maxString);
}
