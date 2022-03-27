import React from "react";
import { Link } from "react-router-dom";

const CocktailsCon = ({ cocktailItems }) => {
  return (
    <div className="cocktailscon">
      <h2
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          paddingTop: "1.5rem",
          letterSpacing: "0.2rem",
        }}
      >
        Cocktails
      </h2>
      <div className="cocktailsGrid">
        {cocktailItems.map((cocktail) => {
          console.log("id: ", cocktail.idDrink);
          return (
            <>
              <div key={cocktail.idDrink} className="cocktailItem">
                <img className="img" src={cocktail.strDrinkThumb}></img>
                <div className="name">{cocktail.strDrink}</div>
                <div className="glass">{cocktail.strGlass}</div>
                <div className="category">{cocktail.strAlcoholic}</div>
                <Link to={`/cocktail/${cocktail.idDrink}`}>
                  <button className="btn">Details</button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailsCon;
