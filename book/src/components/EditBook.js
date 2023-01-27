import React from "react";
import dataSource from "../dataSource";

class EditBook extends React.Component
{
    state = {
        id: this.props.book.id,
        title: this.props.book.title,
        author: this.props.book.author,
        genre: this.props.book.genre,
        cost: this.props.book.cost,
        stock: this.props.book.stock
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

    handleCancel = (event) => {
        this.props.onCancel();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.saveBook(this.state);
    }

    saveBook = async(book) => {
        const response = await dataSource.put('/books/updateBook', book);
        console.log(response);
        console.log(response.data);
    }

    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Edit Book</h1>
                    <div className="form-group">
                        <label htmlFor="bookTitle">Book Title</label>
                        <input type="text" className="form-control" id="bookTitle" placeholder={this.state.title} onChange={this.updateTitle} />
                        <label htmlFor="bookAuthor">Author</label>
                        <input type="text" className="form-control" id="bookAuthor" placeholder={this.state.author} onChange={this.updateAuthor} />
                        <label htmlFor="bookGenre">Genre</label>
                        <input type="text" className="form-control" id="bookGenre" placeholder={this.state.genre} onChange={this.updateGenre} />
                        <label htmlFor="bookCost">Cost</label>
                        <input type="text" className="form-control" id="bookCost" placeholder={this.state.cost} onChange={this.updateCost} />
                        <label htmlFor="bookStock">Stock</label>
                        <input type="text" className="form-control" id="bookStock" placeholder={this.state.stock} onChange={this.updateStock} />
                    </div>
                    <div align="center">
                        <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>);
    }
}

export default EditBook;