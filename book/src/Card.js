import React from "react";

class Card extends React.Component
{
    handleButtonClick = (event) =>
    {
        console.log("ID clicked is " + this.props.albumId);
        this.props.onClick(this.props.albumId);
    }

    handleAlbumEdit = (event) => {
        this.props.editAlbum(this.props.albumId);
    }

    render()
    {
        return (
            <div className="card" style= {{width: '18rem'}}>
                <img src={"assets/images/" + this.props.imgURL} className="card-img-top" alt="Test Name"/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{this.props.albumTitle}</h5>
                    <p className="card-text" align="center">{this.props.albumYear}</p>
                    <p className="card-text">{this.props.albumDescription}</p>
                    <div className="mt-auto" align="center">
                        <button href="#" onClick={this.handleButtonClick} className="btn btn-primary mr-1">Details</button>
                        <button href="#" onClick={this.handleAlbumEdit} className="btn btn-success mr-1">Edit</button>
                    </div>
                </div>
            </div> )
    }
}

export default Card;