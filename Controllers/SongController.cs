using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using rockstar.Models;

namespace rockstar.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SongController : ControllerBase
    {
        private static readonly string[] Songs = new[]
        {
            "Song 1", "Song 2", "Song 3"
        };

        private readonly ILogger<SongController> _logger;

        public SongController(ILogger<SongController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public SongModel Get()
        {
            var rng = new Random();
            return new SongModel
            {
                Name = Songs[rng.Next(Songs.Length)]
            };
        }
    }
}
