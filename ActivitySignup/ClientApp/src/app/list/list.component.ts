import { Component, OnInit } from '@angular/core';
import { Signup } from '../../model/signup.model';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../model/activity';

@Component({
    selector: 'app-home',
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
    signups: Signup[] = [];
    activityList = Activity;

    constructor(
        private activityService: ActivityService
    ) { }

    ngOnInit(): void {
        this.fetchSignups();
    }

    fetchSignups(): void {
        this.activityService.getSignups()
            .subscribe(response => {
                this.signups = response;
            });
    }
}
