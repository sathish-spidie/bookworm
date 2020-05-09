import React, { useState, useEffect, useRef } from "react";
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";
import axios from "axios";
import { createBook } from "../../actions/books";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const NewBookPage = (props) => {
	const [myState, setState] = useState({});

	const [pages, setPages] = useState("");

	const onBookSelect = (book) => {
		setPages("loading...");
		axios
			.get(`/api/books/fetchPages?id=${book.goodreadsId}`)
			.then((res) =>
				res.data.pages === ""
					? setPages(0)
					: setPages(parseInt(res.data.pages), 10)
			);
		setState({ book });
	};

	const submit = (book) => {
		props.createBook(book).then((myBook)=>props.push("/dashboard"))
	};

	return (
		<>
			<Segment>
				<h1>Add new book to your collection</h1>
				<SearchBookForm onBookSelect={onBookSelect} />
				{myState.book && (
					<BookForm submit={submit} pages={pages} book={myState.book} />
				)}
			</Segment>
		</>
	);
};

// NewBookPage.propTypes = {
// 	createBook: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
// 	createBook,
// });

export default connect(null, { createBook })(NewBookPage);
