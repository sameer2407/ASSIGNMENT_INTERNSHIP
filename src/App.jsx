import "./App.css";
import Header from "./components/header";
import FilterComponent from "./components/FilterComponent";
import Retreat from "./components/Retreat";
import { useState } from "react";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState("");
  return (
    <>
      {" "}
      <div>
        <Header />
        <div className="hidden sm:block">
          <Background />
        </div>

        <FilterComponent
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          page={page}
          setPage={setPage}
        />
        <Retreat
          searchQuery={searchQuery}
          filterType={filterType}
          page={page}
          setPage={setPage}
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
