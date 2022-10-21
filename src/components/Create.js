import React from "react";

//tutorial used https://reactjs.org/docs/forms.html

export class Create extends React.Component {

    constructor() {
        //call the parent constructor
        super();
        //bind each of the events to this event
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        //create a state that will take the data entered
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }

    //create a function to handle the imput button in our form and bind it in the constructor
    handleSubmit(e) {
        e.preventDefault();
        //display the states values on error
        //future labs will have this data sent to the server and update the api
        console.log(`${this.state.title},${this.state.cover},${this.state.author}`);
    }
    //title change event
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    //author change event
    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
    //cover change event
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    render() {



        return (
            <div>
                <h1>Hello from Create Component.</h1>

                {/* create form with a submission button link it to the handleSubmit function
                    for each element that you wish to add we add a new div with its own event
                    for author title and cover to be changed when it is typed in
                    submission button can then be clicked for submitting the book
                */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add BookCover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Book" />
                </form>
            </div>

        );
    }
}