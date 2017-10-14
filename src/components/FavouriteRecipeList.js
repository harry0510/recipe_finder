import React,{ Component } from "react";
import { connect } from "react-redux";

class FavouriteRecipeList extends Component{
  render(){

  }
}

function mapStateToProps(state){
  return{
    favouriteRecipe: state.favouriteRecipe;
  }
}

export default connect(mapStateToProps,null)(FavouriteRecipeList);
