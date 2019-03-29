import React, { Component } from "react";
import { Switch } from "react-router-dom";

import "./App.css";
import SearchBar from "./components/SearchBar";

import Dictionary from "./dictionary_alpha_arrays.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionaryArray: Dictionary,
      searchTarget: ""
    };
  }

  searchSubmit(userText) {
    this.setState({
      searchTarget: userText
    });
  }

  render() {
    const { dictionaryArray, searchTarget } = this.state;
    return (
      <div className="App">
        <Switch>
          <SearchBar
            searchSubmit={userText => this.searchSubmit(userText)}
            searchString={searchTarget}
            searchFilter={searchTarget}
          />

          {dictionaryArray.map(wordByLetter => {
            if (searchTarget !== "") {
              return Object.keys(wordByLetter).map(oneWord => {
                if (oneWord === searchTarget.toLowerCase()) {
                  console.log(oneWord);
                  console.log(wordByLetter[oneWord]);
                  return (
                    <div key={oneWord}>
                      <li>
                        <p>Word {oneWord}</p>
                        <p>Definition {wordByLetter[oneWord]}</p>
                      </li>
                    </div>
                  );
                }
              });
            }
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
