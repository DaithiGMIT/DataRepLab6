import React from "react";
//import Book.js to use in the render
import { Books } from "./Books";
//import axios to act as a http client to recieve the json from the web
import axios from "axios";

export class Read extends React.Component{

    //when component becomes visible on the page
    componentDidMount() {
        //calls the web address for the json file
        //function in the then() waits for the get() to complete before executing
        //if the get() fails the catch() executes
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
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
    
    //All Data for the class is stored in the state
    state = {
        //add the books Json
        //{}objects
        //[]array
        //Empty the Array for lab 4
        books:[]
    }


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