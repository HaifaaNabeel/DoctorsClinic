using System.ComponentModel.DataAnnotations;

namespace DoctorsClinicApi.DTOs
{
    public class UserLogin
    {
        [Required]
        public string name { get; set; }

        [Required]
        public string password { get; set; }
    }
}