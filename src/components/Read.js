import React from "react";
//import Book.js to use in the render
import { Books } from "./Books";
//import axios to act as a http client to recieve the json from the web
//in lab 6 this is changes to be an api from our own server
import axios from "axios";

export class Read extends React.Component{

    //create a constructor for the state
    constructor() {
        super();
        //All Data for the class is stored in the state
        //initialises a default empty state
        this.state = {
          books: [
            {
              "title": "",
              "isbn": "",
              "pageCount": 0,
              "thumbnailUrl": "",
              "status": "",
              "authors": [],
              "categories": []
            }
          ]
        }
      }

    //when component becomes visible on the page
    componentDidMount() {
        //calls the web address for the json file
        //changed for lab 6 to call from our own server
        //function in the then() waits for the get() to complete before executing
        //if the get() fails the catch() executes
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({
                //populates the book[] in state with the data recieved from the get()
                books:response.data
            })

        })
        .catch((error)=>{
            //informs console if there is an error
            console.log(error);
        });

    }
    
    //old code from lab 4
    // state = {
    //     books: []
    //   }


    render(){
        return(
            <div>
                <h1>Hello from Read Component.</h1>
                {/* Pass the books array from state to the Books Page */}
                <Books books={this.state.books}></Books>
            </div>

        );
    }
}