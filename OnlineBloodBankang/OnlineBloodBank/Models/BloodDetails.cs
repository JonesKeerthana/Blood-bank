using System;
using System.Collections.Generic;

namespace OnlineBloodBank.Models
{
    public partial class BloodDetails
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string BloodGroup { get; set; }
        public string State { get; set; }
        public string Area { get; set; }
        public int PinCode { get; set; }
        public long Contact { get; set; }
        public string Status { get; set; }

        public UserDetails User { get; set; }
    }
}
