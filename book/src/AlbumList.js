import React from "react";
import Card from "./Card";

class AlbumList extends React.Component
{
    handleSelectionOne = (albumId) =>
    {
        console.log("Selected ID is " + albumId);
        this.props.onClick(albumId);
    }

    handleEditAlbum = (albumId) => 
    {
        console.log("Edit ID is " + albumId);
        this.props.onEditAlbum(albumId);       
    }

    render ()
    {
        const albums = this.props.albumList.map (
            (album) => {
                       return (<Card key={album.id} 
                                albumId={album.id}
                                albumTitle={album.title} 
                                albumDescription={album.description} 
                                albumYear={album.year}
                                buttonText="OK" 
                                imgURL={album.image}
                                onClick={this.handleSelectionOne}
                                editAlbum={this.handleEditAlbum}/>);
            });
            return (
                <div className="container">
                    {albums}
                </div>
            );
    }
}

export default AlbumList;
