import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    this.props.searchSubmit(value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form className="container">
          <input
            className="form-control"
            aria-label="Search"
            onChange={event => this.genericOnChange(event)}
            value={this.props.searchString}
            type="search"
            name="searchString"
            placeholder="Enter a word"
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
