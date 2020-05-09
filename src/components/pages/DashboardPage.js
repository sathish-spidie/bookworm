import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBookSelector } from "../../reducers/books";
import AddBookCta from "../ctas/AddBookCta";
import { fetchBooks } from "../../actions/books";

const DashboardPage = ({ isConfirmed, books, fetchBooks }) => {
	useEffect(() => {
		fetchBooks();
	}, []);
	return (
		<div>
			{!isConfirmed && <ConfirmEmailMessage />}
			 {/*{books.length === 0 && <AddBookCta />}*/}
			<AddBookCta/>
			<div style={{"width":"100px",}}>
			 <pre >{JSON.stringify(books)}</pre>
			</div>
		</div>
	);
};

DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	books: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	fetchBooks: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed,
		books: allBookSelector(state),
	};
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);
