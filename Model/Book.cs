using GooodReads.Model;

namespace GoodReads.Model
{
    public class Book
    {
        public int Id { get; set; }
        public int GenreId { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string ImageURL { get; set; }
        public virtual Genre Genre { get; set; }
    }
}