using ManagementSystemApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementSystemApi.Algorithm
{
    public static class VertifyUser
    {
        public static LoginStatusResponse IsAdmin(User loginInfo, ManagementSystemDbContext context)
        {
            var user = context.Users.FirstOrDefault(user =>
                user.UserName == loginInfo.UserName
                && user.Password == loginInfo.Password
            );

            LoginStatusResponse loginStatus = new LoginStatusResponse();

            //vertify is user admin
            if (user == null)
            {
                loginStatus.Status = 1;
                loginStatus.Msg = "Incorrect username or password";

                return loginStatus;
            }

            var AdminRole = context.Roles.FirstOrDefault(r => r.RoleName == "Admin");
            var isAdmin = context.RoleUsers.FirstOrDefault(ru => ru.UserId == user.Id && ru.RoleId == AdminRole.Id);

            if (isAdmin != null)
            {
                loginStatus.User = user;
                loginStatus.Status = 0;
            }
            else
            {
                //Need to check which website send the post.
                loginStatus.Status = 1;
                loginStatus.Msg = "You don't have permission to access to the Management System";
            }

            return loginStatus;
        }
    }
}
