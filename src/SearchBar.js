import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form>
                <div className="form-group" style={{ margin: '20px' }}>
                    <input type="text" className="form-control" id="search_bar" value={this.props.term}
                        onChange={(event) => this.props.handleOnInputChange(event.target.value)} />
                </div>
            </form>
        );
    }
}

export default SearchBar;