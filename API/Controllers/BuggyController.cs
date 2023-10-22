using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    /// <summary>
    /// returns http error responses to the client
    /// </summary>
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;

        }

        [Authorize]
        [HttpGetAttribute("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGetAttribute("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var thing = _context.Users.Find(-1);
            if (thing == null)
                return NotFound();
            return thing;
        }

        [HttpGetAttribute("server-error")]
        public ActionResult<string> GetServerError()
        {
            var thing = _context.Users.Find(-1);
            var thingToReturn = thing.ToString();
            return thingToReturn;
        }

        [HttpGetAttribute("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("this wad not a good request");
        }

    }
}