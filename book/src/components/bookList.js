import React from "react";
import Book from "./book";

class BookList extends React.Component
{
    handleSelectionOne = (bookId) =>
    {
        console.log("Selected ID is " + bookId);
        this.props.onClick(bookId);
    }

    handleEditBook = (bookId) => 
    {
        console.log("Edit ID is " + bookId);
        this.props.onEditBook(bookId);       
    }

    render ()
    {
        const books = this.props.bookList.map (
            (book) => {
                       return (<Book key={book.id} 
                                bookId={book.id}
                                bookTitle={book.title} 
                                bookAuthor={book.author} 
                                bookGenre={book.genre}
                                bookCost={book.cost}
                                bookStock={book.stock}
                                buttonText="OK"
                                onClick={this.handleSelectionOne}
                                editAlbum={this.handleEditBook}/>);
            });
            return (
                <div className="container">
                    {books}
                </div>
            );
    }
}

export default BookList;
