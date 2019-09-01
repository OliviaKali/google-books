import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import ResultListItem from "../components/ResultList";
// import {ResultList, RecipeListItem } from "../components/ResultList"

class Search extends Component {
  state = {
    books: [],
    search: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
    // date: new Date(Date.now())
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
      // if (this.state.title && this.state.author) {
      //   API.saveBook({
      //     title: this.state.title,
      //     author: this.state.author,
      //     description: this.state.description,
      //     image: this.state.image,
      //     link: this.state.link,
      //     date: this.state.date
      // })
      // .then(res => this.loadBooks())
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
        <SearchBar />
        <h1>Book Results</h1>
        {this.state.books.map(book => {
          return (
            <ResultListItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
            />
          );
        })}
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
