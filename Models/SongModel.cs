using System;

namespace rockstar.Models
{
    public class SongModel
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public string Lyrics { get; set; }
    }
}
