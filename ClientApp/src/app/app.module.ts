import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListComponent } from './list/list.component';
import { SignupComponent } from './signup/signup.component';
import { ActivityService } from '../services/activity.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        ListComponent,
        SignupComponent
      ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: ListComponent, pathMatch: 'full' },
            { path: 'signup', component: SignupComponent }
        ])
    ],
    providers: [
        ActivityService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}