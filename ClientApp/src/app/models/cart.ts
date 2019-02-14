import { Book } from './book';
export interface Cart {
    id: number;
    username: string;
    bookid: number;
    quantity: number;
    book: Book;
}
