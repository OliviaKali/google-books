import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import {Container, Row, Col} from "../components/Grid"
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import ResultListItem from "../components/ResultList";

class Search extends Component {
  state = {
    books: [],
    search: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.search)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  SavedBook = data => {
    console.log("Book saved");
    console.log(data);
    API.saveBook(data)
    .then(res => alert("Book Saved") && this.loadBooks())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        
        <Container fluid>
        <SearchBar 
          value={this.state.search}
          onChange={this.handleInputChange}
          name="search"
          placeholder="Search for a Book"
          />
          <button type="button" className="btn btn-secondary" onClick={this.handleFormSubmit}>Search</button>
        <h1>Book Results</h1>
            <Row>
            <Col size="md-12">
            <div>
                  {this.state.books.map(books => {
                    return(
                      <ResultListItem 
                        key={books.id}
                        title={books.volumeInfo.title}
                        author={books.volumeInfo.authors}
                        id={books.id}
                        link={books.volumeInfo.previewLink}
                        image={books.volumeInfo.imageLinks.thumbnail}
                        description={books.volumeInfo.description}
                        SavedBook={() => this.SavedBook({
                          title: books.volumeInfo.title,
                          author: books.volumeInfo.authors,
                          id: books.id,
                          link: books.volumeInfo.previewLink,
                          image: books.volumeInfo.imageLinks.thumbnail,
                          description: books.volumeInfo.description
                        })}
                      />   
                      // <button type="button" className="btn btn-secondary" onClick={this.SavedBook}>Save Book</button> 
                  );              
                  })}                              
               </div>
              </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default Search;
