import React from "react";
import { Segment,Grid, Image, Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";

class BookForm extends React.Component {
  state = {
    data: {
      goodreadsId: this.props.book.goodreadsId,
      title: this.props.book.title,
      authors: this.props.book.authors,
      cover: this.props.book.covers[0],
      pages: this.props.book.pages,
    },
    covers: this.props.book.covers,
    loading: false,
  };

  onChange = (e) =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = (data) => {
    const errors = {};

    if (!data.title) {
      errors.title = "Can't be blank";
    }
    if (!data.authors) {
      errors.authors = "Can't be blank";
    }
    if (!data.pages) {
      errors.pages = "Can't be blank";
    }
    return errors;
  };

  render() {
    const { data: book, errors } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit}>
          <Grid stackable fluid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label htmlFor="title">Title</label>
                  <input
                    onChange={this.onChange}
                    type="text"
                    id="title"
                    name="title"
                    value={book.title}
                  />
                  {errors && errors.title && (
                    <InlineError text={errors.title} />
                  )}
                </Form.Field>
                <Form.Field>
                  <label htmlFor="author">Author</label>
                  <input
                    onChange={this.onChange}
                    type="text"
                    id="author"
                    name="author"
                    value={book.authors}
                  />
                  {errors && errors.authors && (
                    <InlineError text={errors.authors} />
                  )}
                </Form.Field>
                <Form.Field>
                  <label htmlFor="pages">Pages</label>
                  <input
                    onChange={this.onChange}
                    type="text"
                    id="pages"
                    name="pages"
                    value={book.pages}
                  />
                  {errors && errors.pages && (
                    <InlineError text={errors.pages} />
                  )}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Image src={book.cover} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    goodreadsId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    pages: PropTypes.number.isRequired,
  }),
};

export default BookForm;
