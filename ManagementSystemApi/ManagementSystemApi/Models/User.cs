using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystemApi.Models
{
    public partial class User
    {
        public User()
        {
            RoleUsers = new HashSet<RoleUser>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool LoginStatus { get; set; }
        public virtual ICollection<RoleUser> RoleUsers { get; set; }
    }
}
