import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowCard from "./Components/ShowCard";
import HeroDetail from "./Components/HeroDetail";
import Sidebar from "./Components/SideBar"; // Sidebar with About section
import StrengthChart from "./Components/StrengthChart";
import IntelligenceStrengthChart from "./Components/IntelligenceStrengthChart";
import About from "./Components/About"; // Import About page
import "./App.css";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterStrength, setFilterStrength] = useState(0);
  const [filterIntelligence, setFilterIntelligence] = useState(0);
  const [showCharts, setShowCharts] = useState(true); // State to toggle charts

  const API_KEY = "d8e1f7d5e17f7752f525b2479ace29a3";
  const DEFAULT_QUERY = "b";

  const fetchSuperheroes = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    const url = `https://www.superheroapi.com/api.php/${API_KEY}/search/${query}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const json = await response.json();
      if (json.results?.length > 0) {
        setHeroes(json.results);
        setFilteredHeroes(json.results);
      } else {
        setError("No superheroes found.");
      }
    } catch (error) {
      console.error("Error fetching superheroes:", error);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchSuperheroes(searchInput.trim());
  };

  useEffect(() => {
    let filteredList = [...heroes];

    if (filterStrength > 0) {
      filteredList = filteredList.filter(
        (hero) => parseInt(hero.powerstats.strength, 10) >= filterStrength
      );
    }
    if (filterIntelligence > 0) {
      filteredList = filteredList.filter(
        (hero) => parseInt(hero.powerstats.intelligence, 10) >= filterIntelligence
      );
    }

    setFilteredHeroes(filteredList);
  }, [filterStrength, filterIntelligence, heroes]);

  useEffect(() => {
    fetchSuperheroes(DEFAULT_QUERY);
  }, []);

  return (
    <Router>
      <div className="content">
        <Sidebar /> {/* Sidebar added here */}
        <div className="main-content">
          <h1>Superhero Dashboard</h1>
          <h2>By: Tahim Bhuiya (Z23493520)</h2>

          <div className="filters">
            <input
              type="text"
              placeholder="Search for a superhero..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div className="filter-inputs">
              <label>
                Strength: {filterStrength}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filterStrength}
                  onChange={(e) => setFilterStrength(e.target.value)}
                />
              </label>
              <label>
                Intelligence: {filterIntelligence}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filterIntelligence}
                  onChange={(e) => setFilterIntelligence(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Toggle button for showing/hiding charts */}
          <button onClick={() => setShowCharts(!showCharts)}>
            {showCharts ? "Hide Charts" : "Show Charts"}
          </button>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showCharts && (
                    <div className="chart-box">
                      <StrengthChart heroes={filteredHeroes} />
                      <IntelligenceStrengthChart heroes={filteredHeroes} />
                    </div>
                  )}

                  <ul className="show-list">
                    {filteredHeroes.map((hero) => (
                      <ShowCard key={hero.id} hero={hero} />
                    ))}
                  </ul>
                </>
              }
            />

            <Route path="/hero/:id" element={<HeroDetail heroes={heroes} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
