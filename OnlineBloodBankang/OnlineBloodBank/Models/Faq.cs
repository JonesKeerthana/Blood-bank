using System;
using System.Collections.Generic;

namespace OnlineBloodBank.Models
{
    public partial class Faq
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Questions { get; set; }
        public string Answers { get; set; }

        public UserDetails User { get; set; }
    }
}
