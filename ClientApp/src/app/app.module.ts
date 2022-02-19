import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { Select2Component } from 'angular-select2-component';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListComponent } from './list/list.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        //Select2Component,
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
