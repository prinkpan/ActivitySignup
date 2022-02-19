"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
var Signup = /** @class */ (function () {
    function Signup(s) {
        if (s === void 0) { s = {}; }
        var _a = s.id, id = _a === void 0 ? 0 : _a, _b = s.firstname, firstname = _b === void 0 ? '' : _b, _c = s.lastname, lastname = _c === void 0 ? '' : _c, _d = s.email, email = _d === void 0 ? '' : _d, _e = s.startdate, startdate = _e === void 0 ? new Date() : _e, _f = s.experience, experience = _f === void 0 ? 0 : _f, _g = s.activity, activity = _g === void 0 ? null : _g, _h = s.comments, comments = _h === void 0 ? '' : _h;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.startdate = startdate;
        this.experience = experience;
        this.activity = activity;
        this.comments = comments;
    }
    return Signup;
}());
exports.Signup = Signup;
//# sourceMappingURL=signup.model.js.map