import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() setting: any

    title = 'app';

    msg: string;

    public settings = {
        min: 0,
        max: 10,
        step: 1
    };

    constructor() {

    }


    handleMaxReached() {
        this.showMsg('Hold your horses! You\'re trying to go too high!');
    }

    handleMinReached() {
        this.showMsg('Can\'t go any lower!');
    }

    private showMsg(message: string) {
        this.msg = message;

        setTimeout(() => {
            this.msg = null;
        }, 2000);
    }
}
