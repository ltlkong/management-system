using ManagementSystemApi.Algorithm;
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
    //allow cors for testing
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
            LoginStatus loginStatus = VertifyUser.IsAdmin(loginInfo, _context);

            return loginStatus;
        }
    }
}
