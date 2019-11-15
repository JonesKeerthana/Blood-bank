using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bloodbanksearch.Models
{
    public class blooduservm
    {


     
        public blooduservm()
        {

        }

        public blooduservm(int? userId, string firstName, string lastName, long contact, string bloodGroup, string state, string area, int pinCode)
        {
            UserId = userId;
            FirstName = firstName;
            LastName = lastName;
            Contact = contact;
            BloodGroup = bloodGroup;
            State = state;
            Area = area;
            PinCode = pinCode;
        }

        public int? UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long Contact { get; set; }
        
        public string BloodGroup { get; set; }
        public string State { get; set; }
        public string Area { get; set; }
        public int PinCode { get; set; }

    }
}
