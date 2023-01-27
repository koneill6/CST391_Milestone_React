import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchForm from "./SearchForm";
import AlbumList from "./AlbumList";
import BookList from "./components/bookList";
import NavBar from "./NavBar";
import NewAlbum from "./NewAlbum";
import OneAlbum from "./OneAlbum";
import EditAlbum from "./EditAlbum";
import "./App.css";
import dataSource from "./dataSource";

const history = createBrowserHistory({basename: '.'});

class App extends React.Component
{
      state = { albumList: [ ], bookList: [ ], searchPhrase: "", currentlySelectedalbumId: -1, currentlySelectedbookId: -1, loading: true}

     componentDidMount()
     {
          this.loadBooks();
     }

     loadBooks = async () =>
     {
          this.setState( { loading: true} );
          const response = await dataSource.get('/books');
          this.setState( { loading: false} );
          this.setState( { bookList: response.data} );
     }

     // updateSearchResults = async (phrase) =>
     // {
     //      console.log("phrase is " + phrase);
     //      this.setState( {searchPhrase: phrase});
     //      const response = await dataSource.get('/albums/search/description/' + phrase);
     //      this.setState( {albumList: response.data} );
     // }

     updateSinglebook = (id) =>
     {
          var indexNumber = 0;
          for(var i=0;i < this.state.bookList.length;++i)
          {
               if(this.state.bookList[i].id === id)
                    indexNumber = i;
          }
          this.setState( {currentlySelectedbookId: indexNumber},
               console.log("This is it " + indexNumber),
               history.push("/show/" + indexNumber)
          );
     }

     editBook = (bookId) => 
     {
          var indexNumber = 0;
          for(var i=0;i < this.state.bookList.length;++i)
          {
               if(this.state.bookList[i].id === bookId)
                    indexNumber = i;
          }
          this.setState({currentlySelectedbookId: indexNumber},
               history.push('/edit/' + indexNumber),
               console.log("State is ", this.state));
     }

     // cancelNewAlbum = () =>
     // {
     //      history.push('/');
     //      console.log("Cancelling New Album");          
     // }

     // cancelEditlbum = () =>
     // {
     //      history.push('/');
     //      console.log("Cancelling Edit Album");          
     // }

     // cancelDisplaylbum = () =>
     // {
     //      history.push('/');
     //      console.log("Cancelling Display Album");          
     // }

     render()
     {
          return (
               <Router history={history}>
                    <div>
                         <NavBar />
                         <Switch>
                              <Route exact path="/" render ={ () => {
                                   if(this.state.loading)
                                   {
                                        return (
                                             <div className="container" align="center">
                                                  <h5>Please wait……loading</h5>
                                             </div>
                                        )
                                   }
                                   else
                                   {
                                        return (
                                             <div className="container">
                                                  <SearchForm onSubmit={this.updateSearchResults} />
                                                  <BookList bookList={this.state.bookList} onClick={this.updateSinglebook} onEditBook={this.editBook} />
                                             </div> 
                                        
                                        )
                                   }}
                              } />
                         </Switch>
                         <Route exact path="/new" render = {
                             () => <NewAlbum onCancel={this.cancelNewAlbum}/>
                         } />
                         <Route exact path="/show/:albumId" render = {
                              () => <OneAlbum album={this.state.albumList[this.state.currentlySelectedalbumId]} onCancel={this.cancelDisplaylbum}/>
                         } />
                         <Route exact path="/edit/:albumId" render = {
                              () => <EditAlbum album={this.state.albumList[this.state.currentlySelectedalbumId]} onCancel={this.cancelEditlbum}/>
                         } />
                     </div>
               </Router> )

     }
}

export default App;
