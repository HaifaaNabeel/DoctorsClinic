using System.ComponentModel.DataAnnotations;

namespace DoctorsClinicApi.DTOs
{
    public class UserRegister
    {
        [Required]
        public string name { get; set; }

        [StringLength(8,MinimumLength=4,ErrorMessage="must max length 8 and min length 4")]
        public string password { get; set; }

        [EmailAddress]
        public string email { get; set; }

        //[Phone]
         [Required]
        public int phone { get; set; }

        [Required]
        public string brithday { get; set; }

        [Required]
        public string gender { get; set; }
    }
}