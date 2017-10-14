import React, { Component } from "react";
import SearchRecipes from "./SearchRecipes";
import RecipeList from "./RecipeList";
import "../styles/index.css";

class App extends Component{
  render(){
    return (
      <div>
        <h3>Am back to do the recipe finder</h3>
        <SearchRecipes/>
        <RecipeList/>
      </div>
    )
  }
}

export default App;
