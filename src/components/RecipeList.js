import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import RecipeItem from "./RecipeItem";

import "../styles/index.css";

class RecipeList extends Component{
  render(){
    return(
      <div>
        <h4 className="link"><Link to='/favourites'>Favourites</Link></h4>
        <h4>Recipe List</h4>
          {
            this.props.recipes.map((recipe,index) => {
            return(
              <RecipeItem
                key={index}
                recipe={recipe}
                favouriteButton = {true}
              />
            )
            })
          }
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(RecipeList);
