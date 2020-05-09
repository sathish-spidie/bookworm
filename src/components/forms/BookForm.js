import React, { useState, useEffect } from "react";
import { Segment, Grid, Image, Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";

const BookForm = React.memo((props) => {


	const [state, setState] = useState({
		covers: props.book.covers,
		loading: false,
		errors: {},
		index: 0,
	})

	const [data, setData] = useState({
		goodreadsId: props.book.goodreadsId,
		title: props.book.title,
		authors: props.book.authors,
		cover: props.book.covers[0],
	});

	useEffect(() => {
		setData((prev) => {
			return {
				...prev,
				goodreadsId: props.book.goodreadsId,
				title: props.book.title,
				authors: props.book.authors,
				cover: props.book.covers[0],
				pages:props.pages,
			};
		});

		setState((prev) => ({ ...prev, covers: props.book.covers }));
	}, [props.book, props.pages]);

	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const errors = validate(data);
		setState({ errors });
		if (Object.keys(errors).length === 0) {
			props.submit(data);
		}
	};

	const changeCover = (e) => {
		e.preventDefault();
		const newIndex =
			state.index + 1 >= state.covers.length ? 0 : state.index + 1;
		setData((prev) => ({ ...prev, cover: state.covers[newIndex] }));
		setState((prev) => ({ ...prev, index: newIndex }));
	};

	const validate = (data) => {
		const errors = {};

		if (!data.title) {
			errors.title = "Can't be blank";
		}
		if (!data.authors) {
			errors.authors = "Can't be blank";
		}
		if (!data.pages && typeof data.pages !== "number") {
			errors.pages = "Can't be blank and Must be a number";
		}
		return errors;
	};

	const { errors } = state;

	return (
		<>
			<Segment>
				<Form onSubmit={onSubmit}>
					<Grid stackable fluid="true" columns={2}>
						<Grid.Row>
							<Grid.Column>
								<Form.Field>
									<label htmlFor="title">Title</label>
									<input
										onChange={onChange}
										type="text"
										id="title"
										name="title"
										value={data.title}
									/>
									{errors && errors.title && (
										<InlineError text={errors.title} />
									)}
								</Form.Field>
								<Form.Field>
									<label htmlFor="authors">Author</label>
									<input
										onChange={onChange}
										type="text"
										id="authors"
										name="authors"
										value={data.authors}
									/>
									{errors && errors.authors && (
										<InlineError text={errors.authors} />
									)}
								</Form.Field>
								<Form.Field>
									<label htmlFor="pages">Pages</label>
									<input
										onChange={onChange}
										type={typeof data.pages === "string" ? "text" : "number"}
										id="pages"
										name="pages"
										value={data.pages ===  undefined ? 0 : data.pages}
									/>
									{errors && errors.pages && (
										<InlineError text={errors.pages} />
									)}
								</Form.Field>
							</Grid.Column>
							<Grid.Column>
								<Image src={data.cover} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							{state.covers && state.covers.length > 1 && (
								<Button primary onClick={changeCover}>
									Another
								</Button>
							)}
						</Grid.Row>
						<Grid.Row>
							<button type="submit">Save</button>
						</Grid.Row>
					</Grid>
				</Form>
			</Segment>
		</>
	);
});

BookForm.propTypes = {
	submit: PropTypes.func.isRequired,
	book: PropTypes.shape({
		goodreadsId: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		authors: PropTypes.string.isRequired,
		covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
		pages: PropTypes.number,
	}),
};

export default BookForm;
