import React from 'react'

function SearchBarFunctionComp({ term, handleOnInputChange }) {
    return (
        <form>
            <div className="form-group" style={{ margin: '20px' }}>
                <input type="text" className="form-control" id="search_bar" value={term}
                    onChange={(event) => handleOnInputChange(event.target.value)} />
            </div>
        </form>
    )
}

export default SearchBarFunctionComp;