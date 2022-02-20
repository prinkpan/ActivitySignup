import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../../model/signup.model';
import { Activity } from '../../model/activity';
import { ActivityService } from '../../services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
    signups: Signup[] = [];
    activitiesEnum = [];
    activityList = Activity;
    isFormValid: boolean = true;
    signupForm: FormGroup;
    signupRecord: Signup;

    constructor(
        private signupFB: FormBuilder,
        private activityService: ActivityService,
        private router: Router
    )
    {
        this.activitiesEnum = Object.keys(Activity).filter(f => !isNaN(Number(f)));
    }

    ngOnInit(): void {
        this.signupRecord = new Signup();
        this.signupForm = this.signupFB.group({
            firstname: [this.signupRecord.firstname, [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z\s]+$/)]],
            lastname: [this.signupRecord.lastname, [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z\s]+$/)]],
            email: [this.signupRecord.email, [Validators.required, Validators.email]],
            startdate: [this.signupRecord.startdate, [Validators.required]],
            experience: [this.signupRecord.experience, [Validators.required, Validators.min(0), Validators.max(100)]],
            activity: [this.signupRecord.activity, [Validators.required]],
            comments: [this.signupRecord.comments, [Validators.required, Validators.maxLength(500)]]
        });
    }

    onClear(): void {
        this.isFormValid = true;
        this.signupForm.reset();
    }

    onSubmit() {
        this.isFormValid = this.signupForm.valid;
        if (this.isFormValid) {
            let submittedSignup = new Signup(this.signupForm.value);
            this.activityService.postSignup(submittedSignup)
                .then(() => { this.router.navigate(['/']) })
                .catch(response => { console.log(response); });
        }
    }
}
