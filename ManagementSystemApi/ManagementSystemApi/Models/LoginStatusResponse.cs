using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystemApi.Models
{
    public class LoginStatusResponse
    {
        public int Status { get; set; }
        public string Msg { get; set; }
        public User User { get; set; }
    }
}
