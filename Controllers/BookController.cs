using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using GoodReads.Model;
using GooodReads.Model;
using Microsoft.AspNetCore.Authorization;

namespace GoodReads.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private readonly BooksContext booksContext;
        public BookController(BooksContext booksContext)
        {
            this.booksContext = booksContext;
        }

        [HttpGet("[action]")]
        public IEnumerable<Book> GetBooks(string genre)
        {
            Console.WriteLine("Received Genre: " + genre);
            return this.booksContext.Book
                    .Where(x => x.GenreId == Convert.ToInt32(genre))
                    .ToList();
        }

        [Authorize]
        [HttpGet("[action]")]
        public IEnumerable<Genre> GetGenres()
        {
            return this.booksContext.Genre
                                    .Select(x => (Genre)x)
                                    .ToList();

            // throw new Exception("Customer error.");
        }        
    }
}
