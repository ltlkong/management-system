using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystemApi.Models
{
    public class FilterResponse<type>
    {
        public int Status { get; set; }
        public type ResponseType { get; set; }
    }
}
