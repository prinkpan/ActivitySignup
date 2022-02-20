using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup.ViewModels
{
    public class SignupVm
    {
        public int Id { get; set; }
        [Required]
        [RegularExpression(@"^[A-Za-z\s]+$")]
        public string Firstname { get; set; }
        [Required]
        [RegularExpression(@"^[A-Za-z\s]+$")]
        public string Lastname { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string StartDate { get; set; }
        [Required]
        [Range(0, 100)]
        public string Experience { get; set; }
        [Required]
        public string Activity { get; set; }
        [Required]
        public string Comments { get; set; }
    }
}
