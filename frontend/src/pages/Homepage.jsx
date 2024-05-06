import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../components/Events/Events.jsx";

const Homepage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeaturedProduct/>

    </div>
  );
};

export default Homepage;
