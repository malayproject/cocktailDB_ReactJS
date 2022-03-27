import React from "react";

const CocktailDetail = ({ cocktailDetail }) => {
  return (
    <div className="cocktaildetail">
      <div className="name">{cocktailDetail[0].strDrink}</div>
      <div className="image-info">
        <img src={cocktailDetail[0].strDrinkThumb} alt="drink image" />
        <div className="info">
          <span className="withbg">Name: </span>
          {cocktailDetail[0].strDrink}
          <br />
          <br />
          <span className="withbg">Category: </span>
          {cocktailDetail[0].strCategory}
          <br />
          <br />
          <span className="withbg">Info: </span>
          {cocktailDetail[0].strAlcoholic}
          <br />
          <br />
          <span className="withbg">Glass: </span>
          {cocktailDetail[0].strGlass}
          <br />
          <br />
          <span className="withbg">Instructions: </span>
          {cocktailDetail[0].strInstructions}
          <br />
          <br />
          <span className="withbg">Ingredients: </span>
          {cocktailDetail[0].strIngredient1}
          <br />
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
