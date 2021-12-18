import React, {useRef } from "react";

function Search({term, searchKeyword }) {
  const inputEl = useRef("")

  const getSearchTerm = () => {
    // console.log(inputEl.current.value) to test in the console. useRef hook. here achieve the same result as using target.value
    searchKeyword(inputEl.current.value)
  }

  return (
    <div className="ui search"  >
      <div className="ui icon input">
        <input 
          ref={inputEl} //pass ref down from line 4
          type="text" 
          className="prompt" 
          value={term} 
          onChange={getSearchTerm}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
