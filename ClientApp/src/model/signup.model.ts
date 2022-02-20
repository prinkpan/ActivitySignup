import { Activity } from './activity';

export class Signup {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    startdate: Date;
    experience: number;
    activity?: Activity;
    comments: string;
    constructor(s: Signup = {} as Signup) {
        let {
            id = 0,
            firstname = '',
            lastname = '',
            email = '',
            startdate = new Date(),
            experience = 0,
            activity = null,
            comments = ''
        } = s;

        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.startdate = startdate;
        this.experience = experience;
        this.activity = activity;
        this.comments = comments;
    }
}