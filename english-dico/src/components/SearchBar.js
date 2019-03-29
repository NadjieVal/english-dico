import React, { Component } from "react";
import Dictionary from "../dictionary_alpha_arrays.json";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      dictionaryArray: Dictionary,
      searchTarget: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    console.log("generic on change in search bar ", value);
    this.props.searchSubmit(value);
    this.setState({ [name]: value });
  }

  render() {
    // const { dictionaryArray, searchTarget } = this.state;
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
          <button className="search-btn">Search</button>
        </form>
        {/* {searchTarget === "" ? null : (
          <div>
            <ul>
              {dictionaryArray.map(wordByLetter => {
                return Object.keys(wordByLetter).map(oneWord => {
                  return (
                    <li>
                      <p>Word {oneWord}</p>
                      <p>Definition {wordByLetter[oneWord]}</p>
                    </li>
                  );
                });
              })}
            </ul>
          </div>
        )} */}
      </section>
    );
  }
}

export default SearchBar;
