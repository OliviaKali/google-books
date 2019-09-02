import React, { Component } from "react";
// import SearchBar from "../components/SearchBar";
import {Container, Row, Col} from "../components/Grid"
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import SavedResultListItem from "../components/SavedResult";


class Saved extends Component {
    state = {
        books: [],
      };

      componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    
    render() {
        return (
            <div>
            <Jumbotron/>
            <h1>Saved Books</h1>
            <Container fluid>
            <div>
                  {this.state.books.map(book => {
                    return(
                      <SavedResultListItem 
                      key={book._id}
                      title={book.title}
                      author={book.author}
                      link={book.link}
                      image={book.image}
                      description={book.description}
                      deleteBook={() => this.deleteBook(book._id)}
                      />    
                  );              
                  })}                              
               </div>
               </Container>
            </div>
        )
    }
}

export default Saved;