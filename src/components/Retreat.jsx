import React, { useEffect, useState } from "react";
import RetreatCard from "./RetreatCard";

const Retreat = ({ searchQuery, filterType, page, setPage }) => {
  const [data, setData] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);

  const fetchRetreats = async (page, query, type) => {
    try {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=3`;
      if (query) {
        url += `&search=${query}`;
      }
      if (type) {
        url += `&filter=${type}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      setHasMorePages(data.length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRetreats(page, searchQuery, filterType);
  }, [page, searchQuery, filterType]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-[#1B3252] text-[#F3F5F6] mx-2 px-4 py-2 rounded"
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          disabled={page <= 1}
        >
          Prev
        </button>
        <span className="mx-4 text-lg text-[#1B3252]">Page {page}</span>
        <button
          className="bg-[#1B3252] text-[#F3F5F6] mx-2 px-4 py-2 rounded"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={!hasMorePages}
        >
          Next
        </button>
      </div>
      {!hasMorePages && (
        <div className="text-center text-[#1B3252] mt-4">
          <p>No more pages left.</p>
        </div>
      )}
    </>
  );
};

export default Retreat;
