using System;
using System.Threading.Tasks;
using DoctorsClinicApi.Models;
using Microsoft.EntityFrameworkCore;
namespace DoctorsClinicApi.Data
{
    public class AuthRepository: IAuthRepository
    {
        private DataContext _context;

        public AuthRepository(DataContext context)
        {
             _context = context;

        }

        public async Task<User> Login(string name, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x=>x.name==name);
            if(user==null)return null;
            if(!VerifyPasswordHash(password,user.passwordSalt,user.passwordHash))
            return null;
            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt)){
                
                var ComputedHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < ComputedHash.Length; i++)
                {
                    if(ComputedHash[i]!=passwordHash[i]){
                        return false;
                    }
                }
                return true;

            }
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash,passwordSalt;
            CreatePasswordHash(password,out passwordHash,out passwordSalt );
            user.passwordSalt=passwordSalt;
            user.passwordHash=passwordHash;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            }
            
        }

        public async Task<bool> EmailExists(string email)
        {
              if(await _context.Users.AnyAsync(x=>x.email==email))return true;
              return false;
        }



        /*  public async Task<bool> EmailExists(string email)
          {
              this.email = email;
              if(await _context.Users.AnyAsync(x=>x.email==email))return true;
              return false;
          } */
    }
}