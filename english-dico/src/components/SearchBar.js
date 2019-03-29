import React, { Component } from "react";

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
            className="form-control mr-sm-2"
            aria-label="Search"
            onChange={event => this.genericOnChange(event)}
            value={this.props.searchString}
            type="search"
            name="searchString"
            placeholder="Search"
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
