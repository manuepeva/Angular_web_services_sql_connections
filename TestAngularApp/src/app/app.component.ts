import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<list-employee></list-employee>`
})
export class AppComponent {
    userText: string = 'Pragim';
}