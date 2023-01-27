import React from "react";
import dataSource from "./dataSource";

class EditAlbum extends React.Component
{
    state = {
        id: this.props.album.id,
        title: this.props.album.title,
        artist: this.props.album.artist,
        description: this.props.album.description,
        year: this.props.album.year,
        image: this.props.album.image,
        tracks: this.props.album.tracks
    }

    updateTitle = (event) => {
        console.log("Updating Title with ", event.target.value);
        this.setState({title: event.target.value});
    }

    updateArtist = (event) => {
        console.log("Updating Artist with ", event.target.value);
        this.setState({artist: event.target.value});
    }

    updateDescription = (event) => {
        console.log("Updating Description with ", event.target.value);
        this.setState({description: event.target.value});
    }

    updateYear = (event) => {
        console.log("Updating Year with ", event.target.value);
        this.setState({year: event.target.value});
    }

    updateImage = (event) => {
        console.log("Updating Image with ", event.target.value);
        this.setState({image: event.target.value});
    }

    handleCancel = (event) => {
        console.log("Canceling Edit Album");
        this.props.onCancel();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.saveAlbum(this.state);
    }

    saveAlbum = async(album) => {
        const response = await dataSource.put('/albums', album);
        console.log(response);
        console.log(response.data);
    }

    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Edit Album</h1>
                    <div className="form-group">
                        <label htmlFor="albumTitle">Album Title</label>
                        <input type="text" className="form-control" id="albumTitle" placeholder="Enter Album Title" value={this.state.title} onChange={this.updateTitle} />
                        <label htmlFor="albumArtist">Artist</label>
                        <input type="text" className="form-control" id="albumArtist" placeholder="Enter Album Artist" value={this.state.artist} onChange={this.updateArtist} />
                        <label htmlFor="albumDescription">Description</label>
                        <textarea type="text" className="form-control" id="albumDescription" placeholder="Enter Album Description" value={this.state.description} onChange={this.updateDescription} />
                        <label htmlFor="albumYear">Year</label>
                        <input type="text" className="form-control" id="albumYear" placeholder="Enter Album Year" value={this.state.year} onChange={this.updateYear} />
                        <label htmlFor="albumImage">Image</label>
                        <input type="text" className="form-control" id="albumImage" placeholder="Enter Album Image" value={this.state.image} onChange={this.updateImage} />
                    </div>
                    <div align="center">
                        <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>);
    }
}

export default EditAlbum;