using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using admin.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class faqController : ControllerBase
    {
        onlinebloodbankContext con = new onlinebloodbankContext();
      
        // GET: api/faq
        [HttpGet]
        public IEnumerable<Faq> Get()
        {
            return this.con.Faq.FromSql("spdisplayque").ToList();
        }
        
      
        // GET: api/faq/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/faq
        [HttpPost("{usid}/{questions}")]
        public void Post(int usid,string questions)
        {
            this.con.Database.ExecuteSqlCommand("spaddques " + usid + ",'"+questions+"' ");
        }

        // PUT: api/faq/5
        [HttpPut("{id}/{answer}")]
        public void Put(int id, string answer)
        {
            this.con.Database.ExecuteSqlCommand("spaddans " + id + ",'" + answer + "' ");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
