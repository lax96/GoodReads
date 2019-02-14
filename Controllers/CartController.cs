using System.Collections.Generic;
using System.Linq;
using GoodReads.Model;
using Microsoft.AspNetCore.Mvc;

namespace GoodReads.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly BooksContext booksContext;

        public CartController(BooksContext booksContext)
        {
            this.booksContext = booksContext;
        }

        [HttpPost("addToCart")]
        public void AddToCart([FromBody] Cart cart)
        {
            var userCart = this.booksContext.Cart
                            .SingleOrDefault(x => x.Username == cart.Username
                            && x.BookId == cart.BookId);
            if (userCart != null)
            {
                userCart.Quantity = userCart.Quantity + cart.Quantity;
            }
            else
            {
                this.booksContext.Cart.Add(new Cart
                {
                    Username = cart.Username
                    ,
                    BookId = cart.BookId
                    ,
                    Quantity = cart.Quantity
                });
            }

            this.booksContext.SaveChanges();
        }

        [HttpGet("getCartSize")]
        public int GetCartSize(string username) {
           
           // return 4;

            return this.booksContext.Cart.Where(x => x.Username == username)
                                .Select(y => y.Quantity)
                                .Sum();
        }

        [HttpGet("getCart")]
        public IEnumerable<Cart> GetCart(string username) {
            return this.booksContext.Cart.Where(x => x.Username == username)
                            .Select(x => (Cart)x)
                            .ToList();
        }
    }
}