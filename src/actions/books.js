import { BOOK_FETCHED, BOOK_CREATED } from "../types";
import api from "../api";
import { normalize } from "normalizr";
import { bookSchema } from "../schemas";

// data.entities.books
export const bookFetched = (data) => ({
	type: BOOK_FETCHED,
	data,
});

export const fetchBooks = () => (dispatch) => {
	api.book.fetchAllBook().then((books) => {
		dispatch(bookFetched(normalize(books, [bookSchema])));
	});
};

export const createBook = (books) => () => api.book.createBook(books);
