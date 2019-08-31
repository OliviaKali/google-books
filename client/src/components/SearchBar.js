import React from "react";

function SearchBar() {
    return (
        <div className="active-cyan-3 active-cyan-4 mb-4">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            <button type="button" class="btn btn-secondary">Secondary</button>
        </div>
      
    );
}

export default SearchBar;