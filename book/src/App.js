import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import BookList from "./components/bookList";
import NewBook from "./components/NewBook";
import OneBook from "./components/OneBook";
import NavBar from "./NavBar";
import EditBook from "./components/EditBook";
import "./App.css";
import dataSource from "./dataSource";

const history = createBrowserHistory({basename: '.'});

class App extends React.Component
{
      state = { bookList: [ ], currentlySelectedbookId: -1, loading: true}

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

     cancelNewBook = () =>
     {
          history.push('/');       
     }

     cancelEditBook = () =>
     {
          history.push('/');       
     }

     cancelDisplayBook = () =>
     {
          history.push('/');        
     }

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
                                                  <BookList bookList={this.state.bookList} onClick={this.updateSinglebook} onEditBook={this.editBook} />
                                             </div> 
                                        
                                        )
                                   }}
                              } />
                         </Switch>
                         <Route exact path="/new" render = {
                             () => <NewBook onCancel={this.cancelNewBook}/>
                         } />
                         <Route exact path="/show/:bookId" render = {
                              () => <OneBook book={this.state.bookList[this.state.currentlySelectedbookId]} onCancel={this.cancelDisplayBook}/>
                         } />
                         <Route exact path="/edit/:bookId" render = {
                              () => <EditBook book={this.state.bookList[this.state.currentlySelectedbookId]} onCancel={this.cancelEditBook}/>
                         } />
                     </div>
               </Router> )

     }
}

export default App;
