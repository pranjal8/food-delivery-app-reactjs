import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your food here</h2>
        <p>
          Hungry? Satisfy your cravings with just a few clicks! Browse our menu,
          choose your favorites, and enjoy delicious meals delivered straight to
          your doorstep. Fast, fresh, and hassle-free – your perfect meal is
          just a tap away!
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
