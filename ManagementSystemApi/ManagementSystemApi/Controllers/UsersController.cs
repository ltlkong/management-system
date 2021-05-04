using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManagementSystemApi.Models;
using Microsoft.AspNetCore.Cors;
using ManagementSystemApi.Algorithm;

namespace ManagementSystemApi.Controllers
{   
    //allow cors
    [EnableCors("APolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ManagementSystemDbContext _context;

        public UsersController(ManagementSystemDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<IEnumerable<User>> GetUsers(User user)
        {
            LoginStatusResponse loginStatus = VertifyUser.IsAdmin(user, _context);

            if (loginStatus.Status == 0)
            {
                return _context.Users;
            }

            return null;
        }

     
    }
}
