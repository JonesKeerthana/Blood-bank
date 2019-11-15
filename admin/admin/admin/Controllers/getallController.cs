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
    public class getallController : ControllerBase
    {
        onlinebloodbankContext con = new onlinebloodbankContext();

        // GET: api/Default
        [HttpGet(Name = "Getall")]
        public IEnumerable<Faq> Get()
        {
            return this.con.Faq.FromSql("spgetfaq").ToList(); ;

        }
       
    }
}
