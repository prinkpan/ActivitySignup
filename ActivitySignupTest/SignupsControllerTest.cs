using ActivitySignup.Controllers;
using ActivitySignup.Models;
using ActivitySignup.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace ActivitySignupTest
{
    public class SignupsControllerTest : IClassFixture<TestDatabaseFixture>
    {
        public SignupsControllerTest(TestDatabaseFixture fixture)
        => Fixture = fixture;

        public TestDatabaseFixture Fixture { get; }

        [Fact]
        public void GetSignups()
        {
            using var context = Fixture.CreateContext();
            var controller = new SignupsController(context);
            
            var actionResult = controller.GetSignups();
            Assert.NotNull(actionResult);
            Assert.IsType<JsonResult>(actionResult);

            var jsonResult = actionResult as JsonResult;
            Assert.NotNull(jsonResult);

            var signups = jsonResult.Value as IEnumerable<Signup>;
            Assert.NotNull(signups);
            Assert.Equal(2, signups.ToList().Count);
        }

        [Fact]
        public async Task PostSignupInvalidModelState()
        {
            using var context = Fixture.CreateContext();
            
            var controller = new SignupsController(context);
            controller.ModelState.AddModelError("Firstname", "Mocking invalid modelstate");

            var actionResult = await controller.PostSignup(new SignupVm
            {
                Firstname = "Joe",
                Lastname = "Bloggs",
                Email = "joe.bloggs@somedomain.com",
                StartDate = DateTime.Now.ToString("O"),
                Experience = "2",
                Activity = "1",
                Comments = "Test comment"
            });
            Assert.IsType<BadRequestObjectResult>(actionResult);
        }

        [Fact]
        public async Task PostSignupValidModelState()
        {
            using var context = Fixture.CreateContext();

            var controller = new SignupsController(context);
            context.Database.BeginTransaction();

            var actionResult = await controller.PostSignup(new SignupVm
            {
                Firstname = "Mike",
                Lastname = "Bloggs",
                Email = "joe.bloggs@somedomain.com",
                StartDate = DateTime.Now.ToString("O"),
                Experience = "2",
                Activity = "1",
                Comments = "Test comment for Mike"
            });
            var changedEntriesCopy = context.ChangeTracker.Entries()
            .Where(e => e.State == EntityState.Added ||
                e.State == EntityState.Modified ||
                e.State == EntityState.Deleted)
            .ToList();
            foreach (var entry in changedEntriesCopy)
                entry.State = EntityState.Detached;

            Assert.IsType<JsonResult>(actionResult);

            var jsonResult = actionResult as JsonResult;
            Assert.NotNull(jsonResult);

            var signup = context.Signups.Single(s => s.Firstname == "Mike");
            Assert.Equal("Test comment for Mike", signup.Comments);
        }
    }
}
