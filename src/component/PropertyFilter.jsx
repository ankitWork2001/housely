import React, { useState } from "react";

const filtersData = [
  // Budget is a single-slider that returns a number (crore)
  { title: "Budget", key: "budget", type: "range", min: 0, max: 100, step: 0.1, unit: "Cr" },

  // other filters (checkbox)
  { title: "Type of property", key: "type", options: ["Residential Apartment", "Independent/Builder Floor", "Independent House/Villa", "Residential Land", "1BHK"], type: "checkbox" },
  { title: "No. of Bedrooms", key: "bedrooms", options: ["1RK/1BHK", "2 BHK", "3 BHK", "4 BHK"], type: "checkbox" },
  { title: "Construction Status", key: "status", options: ["New Launch", "Under Construction", "Ready to move"], type: "checkbox" },
  { title: "Posted by", key: "postedBy", options: ["Owner", "Builder", "Dealer", "Feature Dealer"], type: "checkbox" },
  // keep Area as range if you later add numeric area on properties
  { title: "Area", key: "area", type: "range", min: 0, max: 5000, step: 50, unit: "sqft" },
  { title: "Localities", key: "locality", options: ["Andheri", "Kandivali", "Mulund", "Chembur", "Worli"], type: "checkbox" },
  { title: "Purchase type", key: "purchaseType", options: ["Resale", "New Booking"], type: "checkbox" },
  { title: "Amenities", key: "amenities", options: ["Lift", "Parking", "Power Backup", "Park", "Gymnasium"], type: "checkbox" },
  { title: "Furnishing status", key: "furnishing", options: ["Unfurnished", "Semifurnished", "Furnished"], type: "checkbox" },
  { title: "RERA Approved", key: "rera", options: ["RERA approved properties", "RERA registered dealers"], type: "checkbox" },
];

const PropertyFilter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  // toggle for checkbox filters (selectedFilters[key] => array)
  const toggleFilter = (key, option) => {
    setSelectedFilters((prev) => {
      const current = prev[key] || [];
      const updated = current.includes(option)
        ? { ...prev, [key]: current.filter((o) => o !== option) }
        : { ...prev, [key]: [...current, option] };
      onFilterChange(updated);
      return updated;
    });
  };

  // range handler stores a numeric value (not array) e.g. selectedFilters.budget = 5.5 (crores)
  const handleRangeChange = (key, value) => {
    const numeric = Number(value);
    const updated = { ...selectedFilters, [key]: numeric };
    setSelectedFilters(updated);
    onFilterChange(updated);
  };

  const handleClear = () => {
    setSelectedFilters({});
    onFilterChange({});
  };

  return (
    <aside className="bg-cardProBg  p-8 rounded-2xl shadow-sm  md:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Apply filter</h2>
        <button onClick={handleClear} className="text-xl text-lightBtn cursor-pointer">Clear all</button>
      </div>

      {filtersData.map((filter) => (
        <div key={filter.key} className="mb-5">
          <h3 className="text-xl font-semibold mb-2">{filter.title}</h3>

          {filter.type === "range" ? (
            <div>
              <input
                type="range"
                min={filter.min}
                max={filter.max}
                step={filter.step}
                value={selectedFilters[filter.key] ?? filter.max}
                onChange={(e) => handleRangeChange(filter.key, e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-lg text-textDark mt-1">
                <span>{filter.min} {filter.unit}</span>
                <span>
                  {selectedFilters[filter.key] ?? filter.max} {filter.unit}
                </span>
                <span>{filter.max} {filter.unit}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {filter.options?.map((opt) => {
                const isActive = selectedFilters[filter.key]?.includes(opt) || false;
                return (
                  <button
                    key={opt}
                    onClick={() => toggleFilter(filter.key, opt)}
                    className={`text-lg px-3 py-1 border rounded cursor-pointer transition ${
                      isActive ? "bg-lightBtn text-white border-lightBtn" : "bg-white text-textDark hover:bg-gray-100"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default PropertyFilter;
