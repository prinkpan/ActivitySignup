using ActivitySignup.Data;
using ActivitySignup.Models;
using ActivitySignup.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace ActivitySignup.Controllers
{
    [Route("api/Signups")]
    public class SignupsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public SignupsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetSignups()
        {
            return Json(_context.Signups);
        }

        [HttpPost]
        public async Task<IActionResult> PostSignup([FromBody] SignupVm signup)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var m = new Signup
            {
                Firstname = signup.Firstname,
                Lastname = signup.Lastname,
                Email = signup.Email,
                Experience = int.Parse(signup.Experience),
                Activity = (Activity)int.Parse(signup.Activity),
                StartDate = DateTime.Parse(signup.StartDate),
                Comments = signup.Comments
            };
            _context.Add(m);
            await _context.SaveChangesAsync();
            return Json(_context.Signups);
        }
    }
}
