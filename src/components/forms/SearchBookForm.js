import React from "react";
import { Message, Form, Dropdown } from "semantic-ui-react";
import axios from "axios";
import PropTypes from "prop-types";

class SearchBookForm extends React.Component {
	state = {
		query: "",
		loading: false,
		options: [],
		books: {},
		errors: {},
	};

	onSearchChange = (e, data) => {
		clearTimeout(this.timer);
		this.setState({
			query: data.searchQuery,
		});
		this.timer = setTimeout(this.fetchOptions, 1000);
	};

	fetchOptions = () => {
		if (!this.state.query) {
			return;
		}
		this.setState({
			loading: true,
		});
		axios.get(`/api/books/search?q=${this.state.query}`).then((res) => {
			if (res.data.books) {
				const options = [];
				const booksHash = {};
				res.data.books.forEach((book) => {
					booksHash[book.goodreadsId] = book;
					options.push({
						key: book.goodreadsId,
						value: book.goodreadsId,
						text: "" + book.title,
					});
				});
				this.setState({ loading: false, options, books: booksHash,errors:{} });
			} else {
				this.setState({
					loading: false,
					errors: {
						err: "Please Try again",
					},
				});
			}
		});
	};

	onChange = (e, data) => {
		this.setState({ query: "" });
		this.props.onBookSelect(this.state.books[data.value]);
	};

	render() {
		return (
			<>
				<Form>
					{this.state.errors.err && (
						<Message negative>
							<Message.Header>
								Something Went wrong
							</Message.Header>
							<p>{this.state.errors.err}</p>
						</Message>
					)}
					<Dropdown
						search
						fluid
						options={this.state.options}
						placeholder="Search a book by title"
						value={this.state.query}
						onSearchChange={this.onSearchChange}
						loading={this.state.loading}
						onChange={this.onChange}
					></Dropdown>
				</Form>
			</>
		);
	}
}

SearchBookForm.propTypes = {
	onBookSelect: PropTypes.func.isRequired,
};

export default SearchBookForm;
