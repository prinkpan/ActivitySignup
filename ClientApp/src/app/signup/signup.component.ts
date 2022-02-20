import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../../model/signup.model';
import { Activity } from '../../model/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
    private signups: Signup[];
    public activitiesEnum = [];
    activityList = Activity;
    isFormValid: boolean = true;
    signupForm: FormGroup;
    signupRecord: Signup;

    constructor(
        private signupFB: FormBuilder,
        private activityService: ActivityService
    )
    {
        this.activitiesEnum = Object.keys(Activity).filter(f => !isNaN(Number(f)));
    }

    ngOnInit(): void {
        this.signupRecord = new Signup();
        this.signupForm = this.signupFB.group({
            firstname: [this.signupRecord.firstname, [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
            lastname: [this.signupRecord.lastname, [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
            email: [this.signupRecord.email, [Validators.required, Validators.email]],
            startdate: [this.signupRecord.startdate, [Validators.required]],
            experience: [this.signupRecord.experience, [Validators.required, Validators.min(0), Validators.max(100)]],
            activity: [this.signupRecord.activity, [Validators.required]],
            comments: [this.signupRecord.comments, [Validators.required]]
        });
    }

    onClearClick(): void {
        this.isFormValid = true;
        this.signupForm.reset();
    }

    onSubmit() {
        this.isFormValid = this.signupForm.valid;
        if (this.isFormValid) {
            let submittedSignup = new Signup(this.signupForm.value);
            this.activityService.postSignup(submittedSignup)
                .subscribe(response => {
                    this.signups = response
                });
        }
    }

    fetchSignups(): void {
        this.activityService.getSignups()
            .subscribe(response => {
                this.signups = response;
            });
    }
}
