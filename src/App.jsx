import "./App.css";
import Navbar from "@/components/Navbar";
import Hero from "./pages/Hero";
import Categories from "./components/Categories";
import ProductsList from "./pages/ProductsList";
import ProductsFeatured from "./pages/ProductsFeatured";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Categories />
        <ProductsList />
        <ProductsFeatured />
        <footer className="footer">Footer</footer>
      </main>
    </>
  );
}

export default App;
