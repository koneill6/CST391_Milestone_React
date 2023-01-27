import React from "react";

class OneBook extends React.Component
{

    handleCancel = (event) => {
        console.log(this.props.album);
        console.log("Canceling Display Album");
        this.props.onCancel();
    }



    render()
    {
        return (
            <div>
                <div align="center">
                <h2>Book Details</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md center">
                            <div className="book-body-one">
                            <h5 className="book-title">Title: {this.props.book.title}</h5>
                            <p className="book-author">Author: {this.props.book.author}</p>
                            <p className="book-genre">Genre: {this.props.book.genre}</p>
                            <p className="book-cost">Cost: {this.props.book.cost}</p>
                            <p className="book-stock">Stock: {this.props.book.stock}</p>
                            <div className="mt-auto" align="center">
                                <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneBook;