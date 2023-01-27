import React from "react";

class OneAlbum extends React.Component
{
    state = {
        lyrics: "No track selected to find lyrics",
        url: "No track selected to find URL",
    }
    handleCancel = (event) => {
        console.log(this.props.album);
        console.log("Canceling Display Album");
        this.props.onCancel();
    }

    getDetails(track){
        this.setState({lyrics: track.lyrics});
        this.setState({url: track.video});
    }



    render()
    {
        const hasNoTracks = this.props.album.tracks.length === 0;
        let tracksMessage;

        if(hasNoTracks){
            tracksMessage = <p>This album has no tracks</p>;
        } else {
            tracksMessage = this.props.album.tracks.map((track) => 
                <p className="card card_album" onClick={() => this.getDetails(track)} key={track.id}>{track.title}</p>
            );
        }
        console.log(hasNoTracks);
        return (
            <div>
                <div align="center">
                <h2>Album Details</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md">
                            <div className="card">
                                <img src={"../assets/images/" + this.props.album.image} className="card-img-top" alt={this.props.album.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.album.title}</h5>
                                    <p className="card-text" align="center">{this.props.album.year}</p>
                                    <p className="card-text">{this.props.album.description}</p>
                                    <div className="card">{tracksMessage}</div>
                                    <div align="center">
                                        <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-9">
                            <div className="card">
                                {this.state.lyrics}
                            </div>
                            <div className="card">
                                {this.state.url}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneAlbum;