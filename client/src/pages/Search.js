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
    console.log("Book saved")
    console.log(data)
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
          onClick={this.handleFormSubmit}
          />
          <button type="button" class="btn btn-secondary" onClick={this.handleFormSubmit}>Search</button>
        <h1>Book Results</h1>
            <Row>
            <Col size="md-12">
        {this.state.books.map(book => {
          return (
            <ResultListItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
              link={book.link}
              SavedBook={() => this.SavedBook({
                id:book.id,
                title:book.title,
                author:book.author,
                description:book.description,
                image:book.image,
                link:book.link
              })}
            />
          );
        })}
              </Col>
          </Row>
      </Container>
        {/* <ResultList>
            {this.state.recipes.map(recipe => (
                  <RecipeListItem 
                  key={recipe.title}
                  title={recipe.title}
                  author={recipe.author}
                  description={recipe.description}
                  image={recipe.image}
                  link={recipe.link}
                  date={recipe.date}
                  />
                ))}
            </ResultList> */}
      </div>
    );
  }
}

export default Search;
