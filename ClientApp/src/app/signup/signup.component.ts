import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../../model/signup.model';
import { Activity } from '../../model/activity';

@Component({
  selector: 'app-home',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
    private signups: Signup[];
    public activities = Object.values(Activity);
    isFormValid: boolean = true;
    signupForm: FormGroup;
    signupRecord: Signup;

    constructor(private signupFB: FormBuilder)
    { }

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
            console.log(submittedSignup);
            //this.activityService.postCustomer(submittedSignup)
            //    .then(() => this.fetchSignups())
            //    .catch(this.handleError);
        }
    }

    fetchSignups(): void {
        //this.activityService.getCustomers().then(response => {
        //    this.signups = response;
        //}).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
