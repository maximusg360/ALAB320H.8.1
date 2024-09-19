import { getAllStarships } from "./services/sw-api";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStarships();
      setStarships(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div id="container">
        {starships.map((starship, index) => (
          <StarShipCard key={index} name={starship.name} />
        ))}
      </div>
    </>
  );
}

export default App;
