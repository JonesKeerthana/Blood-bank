using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bloodbanksearch.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bloodbanksearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class searchController : ControllerBase
    {
        onlinebloodbankContext con = new onlinebloodbankContext();
        // GET: api/search
        [HttpGet]
        public IEnumerable<BloodDetails> Get()
        {

            return this.con.BloodDetails.FromSql("spdisplayreq").ToList();
        }

        // GET: api/search/A-/Tamilnadu/Mettukupam/60001
        [HttpGet("{bloodGroup}/{state}/{area}/{pinCode}", Name = "Get")]
        public IEnumerable<blooduservm> Get(string bloodGroup, string state,string area,int pinCode)
        {
            List<BloodDetails> BD= this.con.BloodDetails.FromSql("spsearchbl2 '" + bloodGroup + "','" + state + "','" + area + "','" + pinCode + "'").ToList();
            List<UserDetails> UD = this.con.UserDetails.FromSql("spgetuser").ToList();
            List<blooduservm> vm = new List<blooduservm>();
            foreach (UserDetails u in UD)
            {
                foreach (BloodDetails b in BD)
                {
                    if(u.UserId==b.UserId)
                    {
                        vm.Add(new blooduservm(u.UserId, u.FirstName, u.LastName, b.Contact, b.BloodGroup, b.State, b.Area, b.PinCode));
                    }
                }
            }
            return vm;
        }

        // POST: api/search
        [HttpPost("{UserId}")]
        public void Post(int UserId,[FromBody] BloodDetails bd) { 
        
            this.con.Database.ExecuteSqlCommand("spreqPostBlood '"+UserId+"' ,'"+bd.BloodGroup+"', '"+bd.State+"' ,'"+bd.Area+"', '"+bd.PinCode+"','"+bd.Contact+"'");
        }

        // PUT: api/search/5
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
