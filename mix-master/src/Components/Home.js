import React, {  } from "react";
import SearchForm from "./SearchForm";
import CocktailList from "./CocktailList";

export default function Home() {
    return (
        <div>
            <main className="main-body">
                <SearchForm />
                <CocktailList />
            </main>
            
        </div>
    )
}