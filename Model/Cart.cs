using GoodReads.Model;

namespace GoodReads.Model
{
    public class Cart
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
        public virtual Book Book { get; set; }
    }
}