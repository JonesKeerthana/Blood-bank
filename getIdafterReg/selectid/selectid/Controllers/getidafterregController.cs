using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using selectid.Models;

namespace selectid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class getidafterregController : ControllerBase
    { onlinebloodbankContext con = new onlinebloodbankContext();
        // GET: api/getidafterreg
        [HttpGet]
        public UserDetails Get()
        {
            return this.con.UserDetails.FromSql("spgetidafterreg").SingleOrDefault();
        }

        // GET: api/getidafterreg/joyce
        [HttpGet("{firstname}", Name = "GetId")]
        public IEnumerable<UserDetails> Get(string firstname)
        {
            return this.con.UserDetails.FromSql("spgetid'" + firstname + "'").ToList();
        }

        // POST: api/getidafterreg
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/getidafterreg/5
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
