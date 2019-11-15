using System;
using System.Collections.Generic;

namespace bloodbanksearch.Models
{
    public partial class SlotDetails
    {
        public int SlotId { get; set; }
        public int? UserId { get; set; }
        public string Hospital { get; set; }
        public string City { get; set; }
        public DateTime DateForDonating { get; set; }
        public string TimeForDonating { get; set; }
        public string FeedBack { get; set; }

        public UserDetails User { get; set; }
    }
}
