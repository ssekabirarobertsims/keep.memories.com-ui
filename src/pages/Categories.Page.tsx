import { Route, Routes } from "react-router-dom";
import Food from "./categories/Food";
import All from "./categories/All";
import Nature from "./categories/Nature";
import Animals from "./categories/Animals";
import Technology from "./categories/Technology";
import People from "./categories/People";
import Sports from "./categories/Sports";
import Illustrations from "./categories/Illustrations";
import DarkPhotos from "./categories/Dark.Photos";

function Categories() {
  return (
    <Routes>
      <Route path="/categories/all" element={<All />}></Route>
      <Route path="/categories/food" element={<Food />}></Route>
      <Route path="/categories/nature" element={<Nature />}></Route>
      <Route path="/categories/animals" element={<Animals />}></Route>
      <Route
        path="/categories/illustrations"
        element={<Illustrations />}
      ></Route>
      <Route path="/categories/dark-photos" element={<DarkPhotos />}></Route>
      <Route path="/categories/technology" element={<Technology />}></Route>
      <Route path="/categories/people" element={<People />}></Route>
      <Route path="/categories/sports" element={<Sports />}></Route>
    </Routes>
  );
}

export default Categories;
