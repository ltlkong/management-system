using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystemApi.Models
{
    public partial class Role
    {
        public Role()
        {
            RoleUsers = new HashSet<RoleUser>();
        }

        public int Id { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<RoleUser> RoleUsers { get; set; }
    }
}
