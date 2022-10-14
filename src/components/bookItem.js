import React from "react";
//import the stylesheet app.css
import '../App.css';

import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            // <div>
            //     <h3>{this.props.book.title}</h3>
            //     <img src={this.props.book.thumbnailUrl}></img>
            //     <h6>{this.props.book.authors[0]}</h6>
            // </div>


            //cards weren't centering so add a class in the App.css to fix it
            //Grabbed a card style from https://react-bootstrap.github.io/components/cards/
            //used the book that was passed through from books.js and called its thumbnailUrl property for the img source
            //did the same for the cards title with the books title.

            <div className="AppCard">
                <Card style={{ width: '18rem', }}>
                    <Card.Img src={this.props.book.thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}