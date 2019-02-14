-- DROP TABLE Genre;

-- CREATE TABLE Genre(
--     Id INTEGER PRIMARY KEY,
--     Name VARCHAR(50)
-- );

-- INSERT INTO Genre VALUES(1,'Fiction');
-- INSERT INTO Genre VALUES(2,'Romance');
-- INSERT INTO Genre VALUES(3,'Thriller');
-- INSERT INTO Genre VALUES(4,'Humor');
-- INSERT INTO Genre VALUES(5,'Poetry');
-- INSERT INTO Genre VALUES(6,'Historical Fiction');

-- DROP TABLE Book;

-- CREATE TABLE Book(
--     Id INTEGER PRIMARY KEY,
--     GenreId INTEGER NOT NULL,
--     Name VARCHAR(50),
--     Author VARCHAR(50),
--     ImageURL VARCHAR(1000),    
--     FOREIGN KEY (GenreId) REFERENCES Genre(Id)
-- );


-- -- DELETE FROM Book;

-- -- Fiction 
-- INSERT INTO Book VALUES(1,1,'Every Note Played','Lisa Genova','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781925685299/every-note-played-9781925685299_lg.jpg');
-- INSERT INTO Book VALUES(2,1,'How to Walk Away','Katherine Center','http://katherinecenter.com/wp-content/uploads/2017/10/how-to-walk-away-book.jpg');
-- INSERT INTO Book VALUES(3,1,'Origin','Dan Brown','https://images-eu.ssl-images-amazon.com/images/I/51IcW1-fwVL.jpg');
-- INSERT INTO Book VALUES(4,1,'Nine Perfect Strangers','Liane Moriarty','https://prodimage.images-bn.com/pimages/9781250069825_p0_v4_s550x406.jpg');

-- -- Romance
-- INSERT INTO Book VALUES(5,2,'All Your Perfects','Colleen Hoover','https://images.gr-assets.com/books/1531682842l/38926487.jpg');
-- INSERT INTO Book VALUES(6,2,'Darker','E.L. James','http://katherinecenter.com/wp-content/uploads/2017/10/how-to-walk-away-book.jpg');
-- INSERT INTO Book VALUES(7,2,'Pestilence','Laura Thalassa','https://images-eu.ssl-images-amazon.com/images/I/51IcW1-fwVL.jpg');
-- INSERT INTO Book VALUES(8,2,'Roomies','Christina Lauren','https://prodimage.images-bn.com/pimages/9781250069825_p0_v4_s550x406.jpg');

-- -- Thriller
-- INSERT INTO Book VALUES(9,3,'Wrecked','Joe Ide','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781925685299/every-note-played-9781925685299_lg.jpg');
-- INSERT INTO Book VALUES(10,3,'Jane Doe','Victoria Helen Stone','http://katherinecenter.com/wp-content/uploads/2017/10/how-to-walk-away-book.jpg');
-- INSERT INTO Book VALUES(11,3,'Something in the Water','Catherine Steadman','https://images-eu.ssl-images-amazon.com/images/I/51IcW1-fwVL.jpg');
-- INSERT INTO Book VALUES(12,3,'Force of Nature','Jane Harper','https://prodimage.images-bn.com/pimages/9781250069825_p0_v4_s550x406.jpg');

-- Humor
-- INSERT INTO Book VALUES(13,4,'Springfield Confidential','Mike Reiss','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781925685299/every-note-played-9781925685299_lg.jpg');
-- INSERT INTO Book VALUES(14,4,'Feminasty','Erin Gibson','http://katherinecenter.com/wp-content/uploads/2017/10/how-to-walk-away-book.jpg');
-- INSERT INTO Book VALUES(15,4,'Look Alive Out There','Sloane Crosley','https://images-eu.ssl-images-amazon.com/images/I/51IcW1-fwVL.jpg');
-- INSERT INTO Book VALUES(16,4,'Hits and Misses','Simon Rich','https://prodimage.images-bn.com/pimages/9781250069825_p0_v4_s550x406.jpg');

-- Poetry
-- INSERT INTO Book VALUES(17,5,'Taking the Arrow Out of the Heart','Alice Walker','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781925685299/every-note-played-9781925685299_lg.jpg');
-- INSERT INTO Book VALUES(18,5,'Helium','Rudy Francisco','http://katherinecenter.com/wp-content/uploads/2017/10/how-to-walk-away-book.jpg');
-- INSERT INTO Book VALUES(19,5,'The Future','Neil Hilborn','https://images-eu.ssl-images-amazon.com/images/I/51IcW1-fwVL.jpg');
-- INSERT INTO Book VALUES(20,5,'The Flame','Leonard Cohen','https://prodimage.images-bn.com/pimages/9781250069825_p0_v4_s550x406.jpg');

-- -- Historical Fiction
-- INSERT INTO Book VALUES(21,6,'The Great Alone','Kristin Hannah','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781925685299/every-note-played-9781925685299_lg.jpg');
-- INSERT INTO Book VALUES(22,6,'The Clockmakers Daughter','Kate Morton','http://katherinecenter.com/wp-content/uploads/2017/10/how-to-walk-away-book.jpg');
-- INSERT INTO Book VALUES(23,6,'My Dear Hamilton','Stephanie Dray','https://images-eu.ssl-images-amazon.com/images/I/51IcW1-fwVL.jpg');
-- INSERT INTO Book VALUES(24,6,'Love and Ruin','Paula McLain','https://prodimage.images-bn.com/pimages/9781250069825_p0_v4_s550x406.jpg');


-- SELECT * FROM Genre;

-- SELECT * FROM Book;

-- CREATE TABLE UserCart(
--     Id INTEGER IDENTITY(1,1) PRIMARY KEY,
--     Username VARCHAR(100)
-- );

-- DROP TABLE Cart;

-- CREATE TABLE Cart(
--     Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
--     Username VARCHAR(50),
--     BookId INTEGER,
--     Quantity INTEGER,
--     FOREIGN KEY (BookId) REFERENCES Book(Id)
-- );


-- INSERT INTO Cart VALUES(1,'laxmikanth@gmail.com',1,1);

-- DELETE FROM Cart;

SELECT * FROM Book;

SELECT * FROM Cart; 

-- laxmikanth@gmail.com
