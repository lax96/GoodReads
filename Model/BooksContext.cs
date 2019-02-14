using GooodReads.Model;
using Microsoft.EntityFrameworkCore;

namespace GoodReads.Model
{    
    public class BooksContext : DbContext
    {
        public BooksContext(DbContextOptions<BooksContext> options)
            : base(options)
        {   
        }

        public DbSet<Book> Book {get; set;}

        public DbSet<Genre> Genre { get; set; }

        public DbSet<Cart> Cart { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure Primary key to Book table
            modelBuilder.Entity<Book>().HasKey(x => x.Id);

            // Foreignkey relationship between Book and Genre.
            modelBuilder.Entity<Book>()
                .HasOne(x => x.Genre);

            modelBuilder.Entity<Cart>()
                .HasOne(x => x.Book);

            modelBuilder.Entity<Cart>()
                .Property(x => x.Id)
                .ValueGeneratedOnAdd();
        } 
    }
}