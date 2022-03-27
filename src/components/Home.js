import axios from "axios";
import React, { useState, useEffect } from "react";
import CocktailsCon from "./CocktailsCon";
import Loading from "./Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktailItems, setCocktailItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setCocktailItems(res.data.drinks);
        });
    } catch (err) {}
  }, [searchTerm]);

  useEffect(() => {
    try {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m")
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setCocktailItems(res.data.drinks);
        });
    } catch (err) {}
  }, []);

  return (
    <div className="home">
      <div className="searchcon">
        <label
          style={{
            fontSize: "1rem",
            color: "#555",
            width: "20rem",
            textAlign: "left",
          }}
          htmlFor="search"
        >
          &nbsp;&nbsp;Search your favourite cocktail
        </label>
        <input
          type="search"
          id="search"
          placeholder="search cocktails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20rem",
            height: "2.5rem",
            borderRadius: "1.25rem",
            fontSize: "1.2rem",
            padding: "0.5rem",
            // border: "0.01rem solid black",
          }}
          className="input"
        />
      </div>
      {isLoading ? <Loading /> : <CocktailsCon cocktailItems={cocktailItems} />}
    </div>
  );
};

export default Home;
