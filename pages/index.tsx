import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/PropertyCard";
import Pill from "@/components/Pill";

export default function Home() {
  const filters = [
    "Top Villa", "Self Checkin", "Free WiFi", "Pet Friendly",
    "Private Pool", "City View", "Chef Service"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-72 flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="p-4 flex flex-wrap gap-3 justify-center bg-gray-50">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </>
  );
}
