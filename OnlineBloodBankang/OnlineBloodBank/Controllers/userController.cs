using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineBloodBank.Models;
using Microsoft.EntityFrameworkCore;
namespace OnlineBloodBank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userController : ControllerBase
    {
        onlinebloodbankContext con = new onlinebloodbankContext();
        // GET: api/user
        [HttpGet(Name = "Getuser")]
        public IEnumerable<UserDetails> Get()
        {
            return con.UserDetails.FromSql("spgetuser").ToList();
        }


        [HttpGet]
        [Route("GetEmails")]
        public IEnumerable<string> GetEmails()
        {
            List<UserDetails> list = con.UserDetails.ToList();
            List<string> emails = new List<string>();
            foreach (UserDetails user in list)
            {
                emails.Add(user.Email);
            }
            return emails;
        }

        [HttpGet]
        [Route("GetContact")]
        public IEnumerable<long> GetContact()
        {
            List<UserDetails> list = con.UserDetails.ToList();
            List<long> contact = new List<long>();
            foreach (UserDetails user in list)
            {
                contact.Add(user.Contact);
            }
            return contact;
        }

        // GET: api/user/1007/selvi
        [HttpGet("{userid}/{pass}", Name = "Login")]
        public UserDetails Get(int userid,string pass)
        {
            try
            {
                return con.UserDetails.FromSql("sploginuser'" + userid + "','" + pass + "'").Single();
            }
            catch(Exception e)
            {
                return null;
            }
        }

        // POST: api/user
        [HttpPost( Name = "register")]
        public void Post([FromBody] UserDetails ud)
        {
            con.Database.ExecuteSqlCommand("spregisteruser'" + ud.FirstName+"','" + ud.LastName+"','"+ud.Age+"','"+ud.Gender+"','"+ud.Email+"','"+ud.Contact+"','"
                +ud.Pass+"','"+ud.Weight+"','"+ud.State+"','"+ud.Area+"','"+ud.PinCode+"','"+ud.BloodGroup+"'");

        }

        // PUT: api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
