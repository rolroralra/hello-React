import React, { useState } from 'react'
// import SearchBar from './SearchBar';
import SearchBar from './SearchBarFunctionComp';
// import NewsItemList from './NewsItemList';
import NewsItemList from './NewsItemListFunctionComp';

function AppFunctionComp() {
  const [term, setTerm] = useState('');

  const handleOnInputChange = (term) => {
    setTerm(term);
  }

  handleOnInputChange.bind(this);

  return (
    <React.Fragment>
      <SearchBar handleOnInputChange={handleOnInputChange} term={term} />
      <NewsItemList term={term} />
    </React.Fragment>
  )
}

export default AppFunctionComp;