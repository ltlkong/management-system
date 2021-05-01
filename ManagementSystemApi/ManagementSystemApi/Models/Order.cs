using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystemApi.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderProducts = new HashSet<OrderProduct>();
        }

        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public double Price { get; set; }

        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
