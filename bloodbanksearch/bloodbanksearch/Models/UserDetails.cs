using System;
using System.Collections.Generic;

namespace bloodbanksearch.Models
{
    public partial class UserDetails
    {
        public UserDetails()
        {
            BloodDetails = new HashSet<BloodDetails>();
            Faq = new HashSet<Faq>();
            SlotDetails = new HashSet<SlotDetails>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public long Contact { get; set; }
        public string Pass { get; set; }
        public int Weight { get; set; }
        public string State { get; set; }
        public string Area { get; set; }
        public long PinCode { get; set; }
        public string BloodGroup { get; set; }
        public string Role { get; set; }

        public ICollection<BloodDetails> BloodDetails { get; set; }
        public ICollection<Faq> Faq { get; set; }
        public ICollection<SlotDetails> SlotDetails { get; set; }
    }
}
