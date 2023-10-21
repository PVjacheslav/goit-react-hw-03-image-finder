import { Component } from "react"
import { SearchBar } from "components/Searchbar/SearchBar";

export class App extends Component{
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  }


  render() {

    return (
      <div>
        <div />
        <SearchBar />
        <p></p>
        <button></button>
        React homework template
      </div>
    );
  }
};
