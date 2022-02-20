using ActivitySignup.Models;
using ActivitySignup.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup.Controllers
{
    [Route("api/Signups")]
    public class SignupsController : Controller
    {
        [HttpGet]
        public IActionResult GetSignups()
        {
            return null;
        }

        [HttpPost]
        public IActionResult PostSignup([FromBody] SignupVm signup)
        {
            var m = new Signup
            {
                Id = signup.Id,
                Firstname = signup.Firstname,
                Lastname = signup.Lastname,
                Email = signup.Email,
                Experience = int.Parse(signup.Experience),
                Activity = (Activity)int.Parse(signup.Activity),
                StartDate = DateTime.Parse(signup.StartDate),
                Comments = signup.Comments
            };
            return null;
        }
    }
}
