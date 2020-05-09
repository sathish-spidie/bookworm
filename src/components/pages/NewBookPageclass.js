import React ,{Component} from "react";
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";

class NewBookPage extends Component {
	state = {
		book: null,
	};

	onBookSelect = (book) => {
		this.setState({ book });
	};

	submit = (book) => console.log(book);

	render() {
		return (
			<>
				<Segment>
					<h1>Add new book to your collection</h1>
					<SearchBookForm onBookSelect={this.onBookSelect} />
					{this.state.book && (
						<BookForm submit={this.submit} book={this.state.book} />
					)}
				</Segment>
			</>
		);
	}
}

export default NewBookPage