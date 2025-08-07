import { useState } from "react";

const Booking = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        lookingFor: '',
        propertyType: '',
        bhk: '',
        city: '',
        locality: '',
        houseNumber: '',
        propertyTitle: '',
        carpetArea: '',
        furnishing: '',
        floor: '',
        condition: '',
        price: '',
        photo: '',
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const next = () => setStep((prev) => Math.min(prev + 1, 4));
    const back = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="w-full min-h-[100vh] bg-booking-bg mx-auto px-50 py-20 text-white bg-gray-700">
            {/* Tabs Header */}
            <div className="flex justify-between border-b border-gray-600 pb-2 mb-10">
                {['Basic Details', 'Location Details', 'Property Profile', 'Photos And Videos'].map((label, index) => (
                    <div key={index} className={`text-2xl font-semibold px-10 py-3 rounded-full ${step === index + 1 ? 'text-lightBtn' : 'text-white'} ${step === index + 1 ? 'bg-white' : 'bg-none'}`}>
                        {label}
                    </div>
                ))}
            </div>

            {/* Step Forms */}
            {step === 1 && (
                <div className="space-y-6">
                    <div>
                        <p className="text-4xl font-medium">I Am Looking For</p>
                        <div className="flex gap-2 flex-wrap mt-6">
                            {['Sell', 'Rent/Lease', 'PG', 'Buy'].map((option) => (
                                <button
                                    key={option}
                                    className={`px-8 py-2 text-2xl rounded-full border ${formData.lookingFor === option ? 'bg-lightBtn text-white' : 'text-black bg-white'}`}
                                    onClick={() => handleChange('lookingFor', option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        <p className="text-4xl font-medium">What Kind Of Property You Have Or Looking For?</p>
                        <div className="flex gap-8 mt-6">
                            {['Residential', 'Commercial', 'Shop'].map((option) => (
                                <label key={option} className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" name="propertyType" className="text-2xl" value={option} checked={formData.propertyType === option} onChange={() => handleChange('propertyType', option)} />
                                    <span className="text-2xl">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {['Flat/Apartment', 'House/Villa', 'Builder Floor'].map((option) => (
                            <button
                                key={option}
                                className={`px-8 py-2 text-2xl rounded-full border ${formData.propertyType === option ? 'bg-lightBtn text-white' : 'text-black bg-white'}`}
                                onClick={() => handleChange('propertyType', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {['1BHK', '2BHK', 'Other'].map((option) => (
                            <button
                                key={option}
                                className={`px-8 py-2 text-2xl rounded-full border ${formData.bhk === option ? 'bg-lightBtn text-white' : 'text-black bg-white'}`}
                                onClick={() => handleChange('bhk', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6">
                    <p className="text-4xl font-medium mb-12">Where Property Located Or Looking For?</p>
                    <div className="w-[30vw]">
                        <div className="flex flex-col gap-8">
                            <input
                                type="text"
                                placeholder="Please enter city"
                                className="w-full px-8 py-3 text-2xl rounded-full bg-white text-black"
                                value={formData.city}
                                onChange={(e) => handleChange('city', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Please enter Locality/Appartment"
                                className="w-full px-8 py-3 text-2xl rounded-full bg-white text-black"
                                value={formData.locality}
                                onChange={(e) => handleChange('locality', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="House No."
                                className="w-full px-8 py-3 text-2xl rounded-full bg-white text-black"
                                value={formData.houseNumber}
                                onChange={(e) => handleChange('houseNumber', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <p className="text-4xl font-medium mb-12">Tell Us About Property Located Or Looking For?</p>
                    <div className="w-[30vw]">
                        <div>
                            <span className="text-3xl">Your Property is ?</span>
                            <input
                                type="text"
                                placeholder="Your Property Is?"
                                className="w-full px-4 py-2 rounded bg-white text-black mb-6 mt-4 text-xl"
                                value={formData.propertyTitle}
                                onChange={(e) => handleChange('propertyTitle', e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-3xl">Your Property is ?</span>
                            <input
                                type="text"
                                placeholder="Carpet Area"
                                className="flex-1 px-4 py-2 rounded bg-white text-black mb-6 mt-4 text-xl"
                                value={formData.carpetArea}
                                onChange={(e) => handleChange('carpetArea', e.target.value)}
                            />
                        </div>
                    </div>

                    <p className="text-3xl font-medium mb-6">Furnishing?</p>
                    <div className="flex gap-6 flex-wrap">
                        {['Furnishing', 'Semi-Furnishing', 'Un-Furnishing'].map((option) => (
                            <button
                                key={option}
                                className={`px-6 py-2 rounded-full text-xl border ${formData.furnishing === option ? 'bg-lightBtn text-white' : 'text-black bg-white'}`}
                                onClick={() => handleChange('furnishing', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        {['Total Floor', 'Property On Floor'].map((option) => (
                            <button
                                key={option}
                                className={`px-6 py-2 rounded-full text-xl border mt-2 ${formData.floor === option ? 'bg-lightBtn text-white' : 'text-black bg-white'}`}
                                onClick={() => handleChange('furnishing', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        {['Ready To Move', 'Under Contraction'].map((option) => (
                            <button
                                key={option}
                                className={`px-4 py-2 rounded-full text-xl border mt-2 ${formData.condition === option ? 'bg-lightBtn text-white' : 'text-black bg-white'}`}
                                onClick={() => handleChange('condition', option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 w-80 mt-16">
                        <p className="text-3xl font-medium mb-6">Furnishing?</p>
                        <input
                            type="text"
                            placeholder="Price"
                            className="flex-1 px-4 py-2 rounded bg-white text-black text-xl"
                            value={formData.price}
                            onChange={(e) => handleChange('price', e.target.value)}
                        />
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="space-y-4">
                    <p className="text-4xl font-medium mb-8">Photo Or Video Of Property?</p>
                    <input
                        type="text"
                        placeholder="Your Property Photo?"
                        className="w-80 px-4 py-2 text-xl rounded bg-white text-black"
                        value={formData.photo}
                        onChange={(e) => handleChange('photo', e.target.value)}
                    />
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between w-full mt-14">
                {step > 1 && (
                    <button
                        className="px-6 py-2 rounded-full text-2xl bg-lightBtn hover:bg-blue-500 text-white font-medium"
                        onClick={back}>
                        Back
                    </button>
                )}
                <button
                    className="ml-auto px-6 py-2 rounded-full text-2xl bg-lightBtn hover:bg-blue-500 text-white font-medium"
                    onClick={next}
                >
                    {step === 4 ? 'Submit' : 'Continue'}
                </button>
            </div>
        </div>
    );
};

export default Booking;
