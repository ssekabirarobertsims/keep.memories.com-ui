import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

// category searched about should be displayed here
const FilterBarSimilarSearchesComponent: React.FC = () => {
  return (
    <aside className="filter-bar-similar-searches-component">
      <div>
        <aside>
          <img
            src="/uploads/mixed-race-beautiful-woman-with-perfect-teeth-hairs-spending-her-leisure-park_273443-1975.jpg"
            alt=""
          />
        </aside>
        <aside>
          <img src="/uploads/bright-parrot-branch_1161-178.jpg" alt="" />
        </aside>
        <aside>
          <img
            src="/uploads/child-with-helmet-his-head-word-go-it_910054-79625.jpg"
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
          <img src="/uploads/closeup-giraffe-zoo_53876-42891.jpg" alt="" />
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
