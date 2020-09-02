import React, { Component } from 'react'
// import SearchBar from './SearchBar';
import SearchBar from './FunctionComponent/SearchBarFunctionComp';
// import NewsItemList from './NewsItemList';
import NewsItemList from './FunctionComponent/NewsItemListFunctionComp';

// rcc
class App extends Component {
  // rconst
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

    // Function this Binding
    this.handleOnInputChange.bind(this);
  }

  handleOnInputChange = (term) => {
    console.log(this.state);

    this.setState({
      ...this.state,  // ES6 Spread Operator
      term            // ES6 Enhanced Object Literal
    })
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar handleOnInputChange={this.handleOnInputChange} term={this.state.term} />
        <NewsItemList term={this.state.term} />
      </React.Fragment>
    )
  }
}

export default App;