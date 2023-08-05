import React, { useContext } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import CocktailList from "./CocktailList";
import { AppContext } from "../App";

export default function Home() {  
    const { cocktails } = useContext(AppContext);
    //console.log(cocktails);  
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