using ManagementSystemApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ManagementSystemApi.Controllers
{
    [EnableCors("APolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ManagementSystemDbContext _context;

        public LoginController(ManagementSystemDbContext context)
        {
            _context = context;
        }

        //check user login information {UserName:"",Password:""}
        [HttpPost]
        public ActionResult<LoginStatus> CheckLoginInfo(User loginInfo)
        {
            var user = _context.Users.FirstOrDefault(user =>
                user.UserName == loginInfo.UserName
                && user.Password == loginInfo.Password
            );

            LoginStatus loginStatus = new LoginStatus();

            //vertify is user admin
            if (user == null)
            {
                loginStatus.Status = 1;
                loginStatus.Msg = "Incorrect username or password";

                return loginStatus;
            }

            var AdminRole = _context.Roles.FirstOrDefault(r => r.RoleName == "Admin");
            var isAdmin = _context.RoleUsers.FirstOrDefault(ru => ru.UserId == user.Id && ru.RoleId == AdminRole.Id);

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
