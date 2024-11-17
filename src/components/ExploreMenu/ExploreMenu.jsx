import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a world of delicious flavors crafted to delight your taste
        buds. From timeless classics to innovative creations, our menu offers
        something for every craving. Experience the perfect blend of fresh
        ingredients, expert preparation, and culinary passion. Dive into a
        dining experience that's unforgettable—your next favorite dish is just a
        bite away!
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((pre) =>
                  pre === item?.menu_name ? "All" : item?.menu_name
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={category === item?.menu_name ? "active" : " "}
                src={item?.menu_image}
                alt=""
              />
              <p>{item?.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
