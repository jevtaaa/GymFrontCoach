import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    loginSpinnerFlag: boolean;
    ngrok: string = 'https://8ee16adb86b5.ngrok.io';
    constructor() {}
}