import React from "react";
import FormTextArea from "./FormTextArea";
import dataSource from "./dataSource";

class NewAlbum extends React.Component
{
    state = {
        title: "Title",
        artist: "Someone famous",
        description: "Great album",
        year: 1960,
        image: "image.png",
        tracks: []
    }

    updateTitle = (event) => {
        console.log("Updating Title with ", event.target.value);
        this.setState({title: event.target.value});
    }

    updateArtist = (event) => {
        console.log("Updating Artist with ", event.target.value);
        this.setState({artist: event.target.value});
    }

    updateDescription = (t) => {
        console.log("Updating Description with ", t);
        this.setState({description: t});
    }

    updateYear = (event) => {
        console.log("Updating Year with ", event.target.value);
        this.setState({year: event.target.value});
    }

    updateImage = (event) => {
        console.log("Updating Image with ", event.target.value);
        this.setState({image: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.saveAlbum(this.state);
        this.clearFields(event);
    }

    handleCancel = (event) => {
        console.log("Canceling New Album");
        this.props.onCancel();
    }

    clearFields = (event) => {
        event.target.reset();
    }

    saveAlbum = async(album) => {
        const response = await dataSource.post('/albums', album);
        console.log(response);
        console.log(response.data);
    }

    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Create Album</h1>
                    <div className="form-group">
                        <label htmlFor="albumTitle">Album Title</label>
                        <input type="text" className="form-control" id="albumTitle" placeholder="Enter Album Title" onChange={this.updateTitle} />
                        <label htmlFor="albumArtist">Artist</label>
                        <input type="text" className="form-control" id="albumArtist" placeholder="Enter Album Artist" onChange={this.updateArtist} />
                        <FormTextArea id="albumDescription" title="Description" placeholder="Write something about the album" onChange={this.updateDescription}/>
                        <label htmlFor="albumYear">Year</label>
                        <input type="text" className="form-control" id="albumYear" placeholder="Enter Album Year" onChange={this.updateYear} />
                        <label htmlFor="albumImage">Image</label>
                        <input type="text" className="form-control" id="albumImage" placeholder="Enter Album Image" onChange={this.updateImage} />
                    </div>
                    <div align="center">
                        <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>);
    }
}

export default NewAlbum;