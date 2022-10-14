import React from "react";
//import the bookItem page to call it withing the return
import { BookItem } from "./bookItem";

export class Books extends React.Component{

    render(){
        return this.props.books.map(
            //create a function for passing each book from the book array that was passed from read.js
            //to the bookItem page to be displayed in cards
            //use each books isbn as a unique key to avoid unending loop
            (book)=>{
                return <BookItem book={book} key={book.isbn}></BookItem>

            }
        );
    }
}