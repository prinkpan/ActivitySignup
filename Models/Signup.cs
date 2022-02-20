using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup.Models
{
    public class Signup
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public DateTime StartDate { get; set; }
        public int Experience { get; set; }
        public Activity Activity { get; set; }
        public string Comments { get; set; }
    }

    public enum Activity
    {
        Cycling,
        Running,
        Swimming
    }
}
