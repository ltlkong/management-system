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
using System.Text.RegularExpressions;

namespace ManagementSystemApi.Controllers
{
    [EnableCors("APolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ManagementSystemDbContext _context;

        public ProductsController(ManagementSystemDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<IEnumerable<Product>> GetProducts(User user)
        {
            LoginStatusResponse loginStatus = VertifyUser.IsAdmin(user, _context);

            if (loginStatus.Status == 0)
            {
                return _context.Products;
            }

            return null;
        }

        [HttpPost("{filter}")]
        public ActionResult<ICollection<Product>> GetProductsByName(RequestModel<string> requestInfo)
        {
            LoginStatusResponse loginStatus = VertifyUser.IsAdmin(requestInfo.User, _context);

            var products = _context.Products.Where(pr => pr.Name.ToLower().Contains(requestInfo.Content.ToLower())).ToList();

            if (loginStatus.Status == 0 && products.Count > 0)
            {
                return products;
            }

            return null;
        }

        //// GET: api/Products
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        //{
        //    return await _context.Products.ToListAsync();
        //}

        //// GET: api/Products/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Product>> GetProduct(int id)
        //{
        //    var product = await _context.Products.FindAsync(id);

        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    return product;
        //}

        //// PUT: api/Products/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutProduct(int id, Product product)
        //{
        //    if (id != product.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(product).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductExists(id))
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

        //// POST: api/Products
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Product>> PostProduct(Product product)
        //{
        //    _context.Products.Add(product);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        //}

        //// DELETE: api/Products/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Product>> DeleteProduct(int id)
        //{
        //    var product = await _context.Products.FindAsync(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Products.Remove(product);
        //    await _context.SaveChangesAsync();

        //    return product;
        //}

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
