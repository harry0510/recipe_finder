import React,{ Component } from "react";
import { favouriteRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component{
  constructor(){
    super();

    this.state={
      favourited : false
    }
  }
  favourite(recipe){
    this.props.favouriteRecipe(recipe);
    this.setState({favourited : true});
  }
  render(){
    let { recipe } = this.props;
    return(
      <div className="recipeItem">
        {
          this.props.favouriteButton ?
            this.state.favourited?
              <div
                className="star"
                >
                &#9733;
              </div>
            :
              <div
                onClick={()=>this.favourite(recipe)}
                className="star"
              >
                &#9734;
              </div>
          :
          <div></div>
        }

        <div className="recipeText">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img
          src={recipe.thumbnail}
          alt={recipe.title}
          className="recipeImg"
        />
      </div>
    )
  }
}

export default connect(null,{favouriteRecipe})(RecipeItem);
