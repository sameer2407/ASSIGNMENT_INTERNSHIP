import React, { useState } from "react";

const FilterComponent = ({ onSearch, onFilter, page, setPage }) => {
  const [datePlaceholder, setDatePlaceholder] = useState("Filter by date");

  const handleDateFocus = () => {
    setDatePlaceholder("");
  };

  const handleDateBlur = (e) => {
    if (!e.target.value) {
      setDatePlaceholder("Filter by date");
    }
  };

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
    setPage(1);
  };

  const handleFilterChange = (e) => {
    onFilter(e.target.value);
    setPage(1);
  };

  return (
    <div className="p-4 space-y-4 md:space-y-0 md:flex md:space-x-4">
      <div className="flex-1">
        <input
          type="text"
          className="w-full p-2 border bg-[#EFEFEF] text-[#374151] md:text-sm md:bg-[#1B3252] md:text-[#F3F5F6] rounded-md"
          placeholder={datePlaceholder}
          onFocus={handleDateFocus}
          onBlur={handleDateBlur}
          onClick={(e) => (e.target.type = "date")}
          onChange={(e) => (e.target.type = "date")}
        />
      </div>
      <div className="flex-1">
        <select
          className="w-full p-2 border text-[#374151] md:text-sm md:bg-[#1B3252] md:text-[#F3F5F6] rounded-md"
          onChange={handleFilterChange}
        >
          <option value="">Filter by Retreat Type</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Detox">Detox</option>
          <option value="Wellness">Wellness</option>
        </select>
      </div>
      <div className="flex-1">
        <input
          type="text"
          className="w-full p-2 border bg-[#EFEFEF] text-[#374151] md:bg-[#1B3252] md:text-[#F3F5F6] md:text-sm rounded-md"
          placeholder="Search retreats by title"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default FilterComponent;
