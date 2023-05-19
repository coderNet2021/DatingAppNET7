using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // so when we want to hit this controller we write localhost..../api/users
    public class BaseApiController : ControllerBase
    {

    }
}