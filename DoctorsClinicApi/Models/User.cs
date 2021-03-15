namespace DoctorsClinicApi.Models
{
    public class User
    {

        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public byte[] passwordHash { get; set; }
        public byte[] passwordSalt { get; set; }
        public string gender { get; set; }
        public int phone  { get; set; }
        public string brithday  { get; set; }
        public string role  { get; set; }

    }
}