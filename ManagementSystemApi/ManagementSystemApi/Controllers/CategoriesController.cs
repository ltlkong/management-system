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
    [EnableCors("APolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ManagementSystemDbContext _context;

        public CategoriesController(ManagementSystemDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<IEnumerable<Category>> GetCategories(User user)
        {
            LoginStatusResponse loginStatus = VertifyUser.IsAdmin(user, _context);

            if(loginStatus.Status == 0)
            {
                return _context.Categories;
            }

            return null;
        }

        [HttpPost("{filter}")]
        public ActionResult<ICollection<Category>> GetProductsByName(RequestModel<string> requestInfo)
        {
            LoginStatusResponse loginStatus = VertifyUser.IsAdmin(requestInfo.User, _context);

            var categories = _context.Categories.Where(pr => pr.Name.ToLower().Contains(requestInfo.Content.ToLower())).ToList();

            if (loginStatus.Status == 0 && categories.Count > 0)
            {
                return categories;
            }

            return null;
        }

        //// PUT: api/Categories/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutCategory(int id, Category category)
        //{
        //    if (id != category.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(category).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CategoryExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Categories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost("{create}")]
        //public async Task<ActionResult<IEnumerable<Category>>> PostCategory(Category category)
        //{
        //    var categoryInDb = _context.Categories.FirstOrDefault(c => c.Name == category.Name);

        //    if (categoryInDb == null)
        //    {
        //        _context.Categories.Add(category);
        //        await _context.SaveChangesAsync();
        //    }

        //    return await _context.Categories.ToListAsync();
        //}

        //// DELETE: api/Categories/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Category>> DeleteCategory(int id)
        //{
        //    var category = await _context.Categories.FindAsync(id);
        //    if (category == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Categories.Remove(category);
        //    await _context.SaveChangesAsync();

        //    return category;
        //}

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
