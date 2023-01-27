import React from "react";

class Book extends React.Component
{
    handleButtonClick = (event) =>
    {
        console.log("ID clicked is " + this.props.bookId);
        this.props.onClick(this.props.bookId);
    }

    handleAlbumEdit = (event) => {
        this.props.editAlbum(this.props.albumId);
    }

    render()
    {
        return (
            <div className="book" >
                <div className="book-body">
                    <h5 className="book-title">{this.props.bookTitle}</h5>
                    <p className="book-author">{this.props.bookAuthor}</p>
                    <p className="book-genre">{this.props.bookGenre}</p>
                    <p className="book-cost">Cost: {this.props.bookCost}</p>
                    <p className="book-stock">Stock: {this.props.bookStock}</p>
                    <div className="mt-auto" align="center">
                        <button href="#" onClick={this.handleButtonClick} className="btn btn-primary mr-1">Details</button>
                        <button href="#" onClick={this.handleAlbumEdit} className="btn btn-success mr-1">Edit</button>
                    </div>
                </div>
            </div> )
    }
}

export default Book;