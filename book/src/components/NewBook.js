import React from "react";
import dataSource from "../dataSource";

class NewBook extends React.Component
{
    state = {
        title: "Title",
        author: "Author",
        genre: "Genre",
        cost: -1,
        stock: -1
    }

    updateTitle = (event) => {
        this.setState({title: event.target.value});
    }

    updateAuthor = (event) => {
        this.setState({author: event.target.value});
    }

    updateGenre = (event) => {
        this.setState({genre: event.target.value});
    }

    updateCost = (event) => {
        this.setState({cost: event.target.value});
    }

    updateStock = (event) => {
        this.setState({stock: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.saveBook(this.state);
        this.clearFields(event);
    }

    handleCancel = (event) => {
        this.props.onCancel();
    }

    clearFields = (event) => {
        event.target.reset();
    }

    saveBook = async(book) => {
        const response = await dataSource.post('/books/addBook', book);
        console.log(response);
        console.log(response.data);
    }

    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Create Book</h1>
                    <div className="form-group">
                        <label htmlFor="bookTitle">Book Title</label>
                        <input type="text" className="form-control" id="bookTitle" placeholder="Enter Book Title" onChange={this.updateTitle} />
                        <label htmlFor="bookAuthor">Author</label>
                        <input type="text" className="form-control" id="bookAuthor" placeholder="Enter Book Author" onChange={this.updateAuthor} />
                        <label htmlFor="bookGenre">Genre</label>
                        <input type="text" className="form-control" id="bookGenre" placeholder="Enter Book Genre" onChange={this.updateGenre} />
                        <label htmlFor="bookCost">Cost</label>
                        <input type="text" className="form-control" id="bookCost" placeholder="Enter Book Cost" onChange={this.updateCost} />
                        <label htmlFor="bookStock">Stock</label>
                        <input type="text" className="form-control" id="bookStock" placeholder="Enter Book Stock" onChange={this.updateStock} />
                    </div>
                    <div align="center">
                        <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>);
    }
}

export default NewBook;