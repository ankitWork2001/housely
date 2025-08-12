import React, { useState } from "react";
import PropertyFilter from "../../component/PropertyFilter.jsx";

const propertiesData = [
  {
    id: 1,
    title: "Sai Sankul Co Op Housing Society",
    location: "4 BHK Flat in Khadakpada, Kalyan West",
    budget: 1.25,
    pricePerSqft: "₹7,102 /sqft",
    sqft: "Super Built-up Area",
    bedrooms: "4 BHK",
    status: "Ready to move",
    locality: "Kalyan West",
    amenities: ["Lift", "Parking"],
    postedBy: "Dealer",
    purchaseType: "Resale",
    furnishing: "Semifurnished",
    rera: "RERA approved properties",
    highlights: ["North Facing", "Top Floor", "Close To School", "Close To Hospital"],
    description:
      "This 4 BHK Flat is Located in Sai Sankul Co Op Housing Society, Which Houses Some Of The Most Spacious Flats in Khadakpada.",
    image: "https://media.istockphoto.com/id/2148850507/photo/contemporary-urban-apartments-with-rooftop-greenery.jpg?s=612x612&w=0&k=20&c=N5JEzh21OtER3f3IHdxf-N8kWUJVll1eT4dmXdeRwPU=",
  },
  {
    id: 2,
    title: "Sunshine Residency",
    location: "3 BHK Apartment in Andheri West",
    budget: 1.05,
    pricePerSqft: "₹9,000 /sqft",
    sqft: "Super Built-up Area",
    bedrooms: "3 BHK",
    status: "Under Construction",
    locality: "Andheri",
    amenities: ["Gymnasium", "Park"],
    postedBy: "Builder",
    purchaseType: "New Booking",
    furnishing: "Unfurnished",
    rera: "RERA registered dealers",
    highlights: ["Park Facing", "Gym Access", "Close To Metro"],
    description:
      "Spacious 3 BHK Apartment in a premium location with modern amenities.",
    image: "https://media.istockphoto.com/id/2148850507/photo/contemporary-urban-apartments-with-rooftop-greenery.jpg?s=612x612&w=0&k=20&c=N5JEzh21OtER3f3IHdxf-N8kWUJVll1eT4dmXdeRwPU=",
  },
  {
    id: 3,
    title: "Ocean View Towers",
    location: "2 BHK Flat in Worli",
    budget: 2.10,
    pricePerSqft: "₹15,000 /sqft",
    sqft: "Super Built-up Area",
    bedrooms: "2 BHK",
    status: "New Launch",
    locality: "Worli",
    amenities: ["Swimming Pool", "Lift"],
    postedBy: "Owner",
    purchaseType: "Resale",
    furnishing: "Furnished",
    rera: "RERA approved properties",
    highlights: ["Sea View", "Swimming Pool", "Gym Access"],
    description:
      "Luxury 2 BHK apartment with sea-facing balcony and top-notch facilities.",
    image: "https://media.istockphoto.com/id/2148850507/photo/contemporary-urban-apartments-with-rooftop-greenery.jpg?s=612x612&w=0&k=20&c=N5JEzh21OtER3f3IHdxf-N8kWUJVll1eT4dmXdeRwPU=",
  },

    {
    id: 4,
    title: "Ocean View Towers",
    location: "2 BHK Flat in Worli",
    budget: 12.10,
    pricePerSqft: "₹15,000 /sqft",
    sqft: "Super Built-up Area",
    bedrooms: "2 BHK",
    status: "New Launch",
    locality: "Worli",
    amenities: ["Swimming Pool", "Lift"],
    postedBy: "Owner",
    purchaseType: "Resale",
    furnishing: "Furnished",
    rera: "RERA approved properties",
    highlights: ["Sea View", "Swimming Pool", "Gym Access"],
    description:
      "Luxury 2 BHK apartment with sea-facing balcony and top-notch facilities.",
    image: "https://media.istockphoto.com/id/2148850507/photo/contemporary-urban-apartments-with-rooftop-greenery.jpg?s=612x612&w=0&k=20&c=N5JEzh21OtER3f3IHdxf-N8kWUJVll1eT4dmXdeRwPU=",
  },
];

const PropertyList = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const filteredProperties = propertiesData.filter((prop) => {
    for (const key in selectedFilters) {
      const sel = selectedFilters[key];

      if (sel === undefined || (Array.isArray(sel) && sel.length === 0)) continue;

      if (key === "budget") {
        if (prop.budget > sel) return false; 
      } else {
        const propVal = prop[key];
        if (propVal === undefined) return false;

        if (Array.isArray(propVal)) {
          if (!sel.some((v) => propVal.includes(v))) return false;
        } else {
          if (!sel.includes(propVal)) return false;
        }
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-[90vw] mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <PropertyFilter onFilterChange={setSelectedFilters} />

        <main className="md:col-span-3 space-y-6">
          {filteredProperties.length === 0 ? (
            <p className="text-textDark">No properties match your filters.</p>
          ) : (
            filteredProperties.map((prop) => (
              <div key={prop.id} className="bg-cardProBg rounded-3xl shadow-sm overflow-hidden">
                <div className="md:flex">
                  <img src={prop.image} alt={prop.title} className="w-full md:w-1/3 h-55 m-3 rounded-2xl object-cover" />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-xl text-textDark font-bold uppercase">{prop.title}</h2>
                      <p className="text-sm text-textDark">{prop.location}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xl font-bold text-textDark">₹{prop.budget} Cr</span>
                        <span className="text-sm text-textDark">{prop.pricePerSqft}</span>
                      </div>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {prop.highlights?.map((h, i) => (
                          <span key={i} className="bg-gray-100 px-4 py-1 text-lg text-textDark rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-textDark mt-2">{prop.description}</p>
                    </div>
                    <div className="mt-3">
                      <button className="bg-lightBtn hover:bg-lightBtn text-white px-4 py-2 rounded">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
};

export default PropertyList;
