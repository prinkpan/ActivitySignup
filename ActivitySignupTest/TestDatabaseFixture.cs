using ActivitySignup.Data;
using ActivitySignup.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace ActivitySignupTest
{
    public class TestDatabaseFixture
    {
        private const string ConnectionString = @"Server=(localdb)\mssqllocaldb;Database=ActivitySignupTest;Trusted_Connection=True;MultipleActiveResultSets=True";

        private static readonly object _lock = new object();
        private static bool _databaseInitialized;

        public TestDatabaseFixture()
        {
            lock (_lock)
            {
                if (!_databaseInitialized)
                {
                    using (var context = CreateContext())
                    {
                        context.Database.EnsureDeleted();
                        context.Database.EnsureCreated();
                        context.Signups.RemoveRange(context.Signups);
                        context.AddRange(
                            new Signup 
                            {
                                Firstname = "Joe",
                                Lastname = "Bloggs",
                                Email = "joe.bloggs@somedomain.com",
                                StartDate = DateTime.Now,
                                Experience = 5,
                                Activity = Activity.Cycling,
                                Comments = "Test comments for joe bloggs"
                            },
                            new Signup
                            {
                                Firstname = "Jane",
                                Lastname = "Doe",
                                Email = "jane.doe@somedomain.com",
                                StartDate = DateTime.Now,
                                Experience = 3,
                                Activity = Activity.Running,
                                Comments = "Test comments for jane doe"
                            }
                        );
                        context.SaveChanges();
                    }

                    _databaseInitialized = true;
                }
            }
        }

        public ApplicationDbContext CreateContext()
            => new ApplicationDbContext(
                new DbContextOptionsBuilder<ApplicationDbContext>()
                    .UseSqlServer(ConnectionString)
                    .Options);
    }
}
