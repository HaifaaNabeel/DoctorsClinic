using System.Threading.Tasks;
using DoctorsClinicApi.Models;

namespace DoctorsClinicApi.Data
{
    public interface IAuthRepository 
    {
         Task<User> Register (User user,string password);
         Task<User> Login(string name,string password);
         Task<bool> EmailExists(string email);
    }
}