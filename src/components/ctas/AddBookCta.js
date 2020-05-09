import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class AddBookCta extends React.Component {
	render() {
		return (
			<>
				<Card centered>
					<Card.Content textAlign="center">
						<Card.Header>Add new book</Card.Header>
						<Link to="/books/new">
							<Icon
								style={{ cursor: "pointer" }}
								name="plus circle"
								size="massive"
							/>
						</Link>
					</Card.Content>
				</Card>
			</>
		);
	}
}
