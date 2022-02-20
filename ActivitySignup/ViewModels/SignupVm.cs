using System;
using System.ComponentModel.DataAnnotations;

namespace ActivitySignup.ViewModels
{
    public class SignupVm
    {
        public int Id { get; set; }
        [Required]
        [RegularExpression(@"^[A-Za-z\s]+$")]
        [StringLength(50)]
        public string Firstname { get; set; }
        [Required]
        [RegularExpression(@"^[A-Za-z\s]+$")]
        [StringLength(50)]
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
        [StringLength(500)]
        public string Comments { get; set; }
    }
}
