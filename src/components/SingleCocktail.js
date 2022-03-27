import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CocktailDetail from "./CocktailDetail";
import Loading from "./Loading";

const SingleCocktail = () => {
  const [cocktailDetail, setCocktailDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          console.log(res);
          setCocktailDetail(res.data.drinks);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="singlecocktail">
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      {isLoading ? (
        <Loading />
      ) : cocktailDetail ? (
        <CocktailDetail cocktailDetail={cocktailDetail} />
      ) : (
        <div className="nullres">No drink details found.</div>
      )}
    </div>
  );
};

export default SingleCocktail;
