import React from "react";
// import style from "./recipimodule.css";
const Recipi_info = ({ title, calories, img, ingredients }) => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <h1>{title}</h1>
            <img src={img} alt="hii" />
          </td>
          <td>
            <ol>
              {ingredients.map((ingredients) => (
                <li>{ingredients.text}</li>
              ))}
            </ol>

            <h3>Calories:{calories}</h3>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Recipi_info;
