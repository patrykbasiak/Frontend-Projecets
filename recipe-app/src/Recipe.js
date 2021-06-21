import React from "react";

const Recipe = ({ item }) => {
  const { label, calories, image, ingredientLines, url } = item;
  return (
    <div className="recipe">
      <h1>{label}</h1>
      <p>Calories: {Math.round(calories)} kcal</p>
      <div className="image-container">
              <a href={url} target='blank'><img style={{ borderRadius: "10px" }} src={image} alt="" /></a>
      </div>

      {/* {ingredientLines.map((ing, index) => {
                return (
                    <p key={index}>{ing}</p>
                )
            })} */}
    </div>
  );
};

export default Recipe;
