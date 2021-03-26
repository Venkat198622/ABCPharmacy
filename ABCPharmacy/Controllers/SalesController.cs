using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ABCPharmacy.DataAccess;
using ABCPharmacy.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ABCPharmacy.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {

        private readonly SalesContext _context;
        private readonly IDataRepository<SalesModel> _repo;
        private readonly ILogger<SalesController> _logger;

        public SalesController(SalesContext context, IDataRepository<SalesModel> repo, ILogger<SalesController> logger)
        {
            _context = context;
            _repo = repo;
            _logger = logger;
        }

        // GET: api/Sales
        [HttpGet]
        public  IEnumerable<SalesModel> GetSales()
        {
            try
            {
                return _context.Sales.OrderByDescending(s => s.Id);
                
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }

            
        }

        // GET: api/Sales
        [HttpGet]
        public async Task<IActionResult> GetSale(int id)
        {
             if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
             }
            try
            {
                var sale = await _context.Sales.FindAsync(id);

                if (sale == null)
                {
                    return NotFound();
                }

                return Ok(sale);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }


        }

        // POST: api/Sales
        [HttpPost]
        public async Task<IActionResult> PostSales([FromBody] SalesModel salesModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _repo.Add(salesModel);
                var save = await _repo.SaveAsync(salesModel);

                return Ok(salesModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
           
        }

    }
}
