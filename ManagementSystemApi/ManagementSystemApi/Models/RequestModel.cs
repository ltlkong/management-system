using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystemApi.Models
{
    public class RequestModel<type>
    {
        public type Content { get; set; }
        public User User { get; set; }

    }
}
