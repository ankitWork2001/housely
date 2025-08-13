import { useState } from "react";
import { MoveLeft } from "lucide-react";

const DetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}

      <div className="max-w-7xl mx-auto bg-white min-h-screen p-6">
        {/* Back Button */}
        <div className="mb-5 ">
          <a
            href="#"
            className="text-[#00000080] text-sm flex items-center gap-2"
          >
            <MoveLeft /> Back
          </a>
        </div>

        {/* Property Header */}
        <div className="flex items-start mb-8 ml-[4rem ]">
          {/* Price */}
          <div className="text-left pr-6">
            <div className="text-3xl font-bold text-slate-800">₹1.25 Cr</div>
            <div className="text-gray-600 text-sm">@ 7102 Per Sq Ft</div>
          </div>

          {/* Vertical divider */}
          <div className="border-l border-gray-300 h-full mx-4"></div>

          {/* Title & details */}
          <div>
            <h1 className="text-4xl font-bold mb-2">4BHK 2Baths</h1>
            <p className="text-gray-600 mb-2">Flat/Apartment For Sale</p>
            <p className="text-gray-600 text-sm">
              In Sai Sankul Co Op Housing Society, Khadakpada, Kalyan West
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200 ml-[4rem] cursor-pointer">
          {["overview", "dealer-details", "recommendations", "reviews"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-medium capitalize cursor-pointer ${
                  activeTab === tab
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            )
          )}
        </div>

        {/* Property Images & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 bg-[#474747] rounded-[30px] overflow-hidden">
          {/* Left Column */}
          <div className="p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=530&h=399&fit=crop"
              alt="Living Area"
              className="w-full max-w-[430px] h-[399px] object-cover rounded-[30px]"
            />

            <div className="text-white mt-6">
              <h3 className="text-lg font-semibold mb-4">Area</h3>
              <p className="text-sm opacity-90">
                Super Built Up Area 1760 (163.51 Sq.M.)
                <br />
                Carpet Area: 1130 Sq.Ft. (104.98 Sq.M.)
              </p>

              <h3 className="text-lg font-semibold mt-4">Price</h3>
              <p className="text-sm opacity-90">
                ₹ 1.25 Crore <br />@ 7,102 Per Sq.Ft.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=530&h=399&fit=crop"
              alt="Configuration"
              className="w-full max-w-[430px] h-[399px] object-cover rounded-[30px]"
            />

            <div className="text-white mt-6">
              <h3 className="text-lg font-semibold mb-4">Configuration</h3>
              <p className="text-sm opacity-90">
                4 Bedrooms, 2 Bathrooms, 2 Balconies With Others
              </p>

              <h3 className="text-lg font-semibold mt-4">Address</h3>
              <p className="text-sm opacity-90">
                Sai Sankul Co Op Housing Society
                <br />
                Khadakpada, Kalyan West
              </p>

              <h3 className="text-lg font-semibold mt-4">Overlooking</h3>
              <p className="text-sm opacity-90">
                Pool, Park/Garden, Club, Main Road, Others
              </p>
            </div>
          </div>
        </div>

        {/* Dealer Section */}
        <div className="bg-[#474747] rounded-lg p-10 text-white mb-10">
          <div className="ml-[8rem]">
            <h2 className="text-2xl font-bold mb-2">Dealer Details</h2>
            <p className="text-gray-300 mb-8">Send Enquiry To Dealer</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-[30px] bg-white text-gray-800 placeholder-gray-500 w-[24rem] ml-[8rem]"
              required
            />
            <input
              type="tel"
              placeholder="Number"
              className="p-3 rounded-[30px] bg-white text-gray-800 placeholder-gray-500 w-[24rem] "
              required
            />
            <input
              type="email"
              placeholder="Email-Id"
              className="p-3 rounded-[30px] bg-white text-gray-800 placeholder-gray-500 w-[24rem] ml-[8rem]"
              required
            />
            <input
              type="email"
              placeholder="About investment  or  self use"
              className="p-3 rounded-[30px] bg-white text-gray-800 placeholder-gray-500 w-[24rem] "
              required
            />
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#81B5CA] hover:bg-[#6a9db0] text-white px-10 py-3 rounded-[30px] font-medium transition-colors mt-2.5 w-[14rem] ml-[-4rem] cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Recommendations */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-8">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col items-center">
                {/* Card Image with button inside */}
                <div className="bg-[#000000B8] rounded-[30px] w-[361px] h-[321px] overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      item === 1
                        ? "1512917774080-9991f1c4c750"
                        : item === 2
                        ? "1613977257363-707ba9348227"
                        : "1600596542815-ffad4c1539a9"
                    }?w=381&h=341&fit=crop`}
                    alt={`Property ${item}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Button inside bottom */}
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#81B5CA] hover:bg-[#6a9db0] text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 w-[12rem] cursor-pointer mb-[-.6rem]">
                    Explore Now
                  </button>
                </div>

                {/* Price text */}
                <div className="text-center mt-4 font-bold">₹1.25 Cr 4BHK</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-10 ml-[4rem]">
          <h2 className="text-2xl font-bold mb-8">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((review) => (
              <div
                key={review}
                className="bg-[#3C3C3C] text-white rounded-[30px] w-[300px] h-[277px] flex flex-col justify-between p-6 "
              >
                {/* Name */}
                <div className="text-lg font-semibold mb-2 text-center">
                  Tanvi
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#FFFFFFCC] leading-relaxed overflow-hidden">
                  The Shopping Centers, Medical Facilities, And Banks Are All
                  Within A Short Distance Radius. The Area Is Also Home To
                  Several Reputable Educational Institutions,...
                  <span className="font-bold">Show More</span>
                </p>

                {/* Rating */}
                <div className="mt-4 font-semibold">5.0</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
