import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function SearchForm() {
    const {setSearchTerm } = useContext(AppContext);
    let searchTerm = '';


    function search(e){
        e.preventDefault();
        console.log(searchTerm)
        setSearchTerm(searchTerm)
    }
    
    return (
        <div className="form-container">
            <form onSubmit={search} className="form">
                <input type= "text" onChange={(e) => searchTerm = e.target.value}/>
                <button>Search</button>
            </form>
        </div>
    )
}