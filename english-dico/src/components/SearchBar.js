import React, { Component } from "react";
// import Dictionary from "../dictionary_alpha_arrays.json";

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
        <form>
          <input
            className="search-input"
            onChange={event => this.genericOnChange(event)}
            value={this.props.searchString}
            type="text"
            name="searchString"
            placeholder="Search"
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
