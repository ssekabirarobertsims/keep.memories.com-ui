import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const FilterBarSimilarSearchesComponent: React.FC = () => {
  return (
    <aside className="filter-bar-similar-searches-component">
      <div>
        <aside>
          <img src="/uploads/s2f86bcxemz21.jpg" alt="" />
        </aside>
        <aside>
          <img
            src="/uploads/digital-art-style-illustration-graphic-designer_23-2151536966.avif"
            alt=""
          />
        </aside>
        <aside>
          <img
            src="/uploads/sunrise-mesa-arch-canyonlands-national-park-near-moab-utah-usa_268835-1016.jpg"
            alt=""
          />
        </aside>
        <aside>
          <img
            src="/uploads/child-with-helmet-his-head-word-go-it_910054-79625.jpg"
            alt=""
          />
        </aside>
        <aside>
          <img src="/uploads/226878-animals-kangaroos-closeup.jpg" alt="" />
        </aside>
      </div>
      <article>
        <Link
          to={{
            pathname: "/photos/categories/collection",
          }}
        >
          Show More <FaArrowRightLong />
        </Link>
      </article>
    </aside>
  );
};

export default FilterBarSimilarSearchesComponent;
