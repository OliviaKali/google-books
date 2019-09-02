import React from "react";

function SearchBar(props) {
    return (
        <div className="active-cyan-3 active-cyan-4 mb-4">
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

export default SearchBar;