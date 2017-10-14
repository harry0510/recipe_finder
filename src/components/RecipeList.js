import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

class RecipeList extends Component{
  render(){
    return(
      <div>
        <h4>Recipe List</h4>
          {
            this.props.recipes.map((recipe,index) => {
            return(
              <RecipeItem key={index} recipe={recipe} />
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
