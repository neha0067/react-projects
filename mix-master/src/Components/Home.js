import React, {  } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import CocktailList from "./CocktailList";
//import { AppContext } from "../App";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="main-body">
                <SearchForm />
                <CocktailList />
            </main>
            
        </div>
    )
}