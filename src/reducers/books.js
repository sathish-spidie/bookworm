import { createSelector } from "reselect";
import { BOOK_FETCHED } from "../types.js";

export default (state = {}, actions = {}) => {
	switch (actions.type) {
		case BOOK_FETCHED:
			return { ...state, ...actions.data.entities.books };
		default:
			return state;
	}
};

// 	SELECTORS

const bookSelector = (state) => state.books;

export const allBookSelector = createSelector(bookSelector, (bookHash) =>
	Object.values(bookHash)
);
