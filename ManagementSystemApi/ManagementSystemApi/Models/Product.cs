using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystemApi.Models
{
    public partial class Product
    {
        public Product()
        {
            CategoryProducts = new HashSet<CategoryProduct>();
            OrderProducts = new HashSet<OrderProduct>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Stock { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }

        public virtual ICollection<CategoryProduct> CategoryProducts { get; set; }
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
