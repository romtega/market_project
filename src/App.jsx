import { useState } from "react";

import "./App.css";

import Navbar from "@/components/Navbar";
import Hero from "./pages/Hero";
import Categories from "./components/Categories";
import ProductsList from "./pages/ProductsList";
import ProductsFeatured from "./pages/ProductsFeatured";

function App() {
  const [item, setItem] = useState([]);

  function handleAddItems(navbarSearch) {
    setItem((arr) => [...arr, navbarSearch]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item, i) => i !== id));
  }

  return (
    <>
      <main>
        <Navbar handleAddItems={handleAddItems} />
        <Hero />
        <Categories />
        <ProductsList searchedItem={item} />
        <ProductsFeatured />
        <footer className="footer">Footer</footer>
        <button onClick={() => handleDeleteItem(3)}>X</button>
      </main>
    </>
  );
}

export default App;
