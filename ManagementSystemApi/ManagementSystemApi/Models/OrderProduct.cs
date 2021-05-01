using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystemApi.Models
{
    public partial class OrderProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public int? OrderId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}
