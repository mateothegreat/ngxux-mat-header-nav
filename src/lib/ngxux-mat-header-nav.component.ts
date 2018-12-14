import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxuxMatHeaderNavButton }                from './ngxux-mat-header-nav-button';

@Component({

    selector: 'ngxux-mat-header-nav',

    template: `

        <div class="wrapper mat-elevation-z2">

            <div class="top">

                <div class="left">

                    <div class="title">

                        {{ title }}

                    </div>

                </div>

                <div class="right">

                    <button *ngFor="let button of buttons"
                            [routerLink]="button.path ? [ button.path ] : null"
                            (click)="onButtonClick(button)"
                            mat-raised-button>

                        {{ button.label }}

                    </button>

                </div>

            </div>

            <div class="bottom">

                <nav mat-tab-nav-bar>

                    <a mat-tab-link
                       *ngFor="let tab of tabs"
                       [routerLink]="tab.path"
                       routerLinkActive
                       #rla="routerLinkActive"
                       [active]="rla.isActive">

                        {{ tab.label }}

                    </a>

                </nav>

            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-header-nav.component.scss' ]

})
export class NgxuxMatHeaderNavComponent {

    @Input() public title;
    @Input() public buttons: Array<NgxuxMatHeaderNavButton>;
    @Input() public tabs: Array<NgxuxMatHeaderNavButton>;

    @Output() public buttonClick = new EventEmitter();

    public onButtonClick(button: NgxuxMatHeaderNavButton): void {

        this.buttonClick.emit(button);

    }

}
