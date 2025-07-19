import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ property }: { property: PropertyProps }) => (
  <div className="border rounded-lg shadow hover:shadow-lg transition w-full">
    <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{property.name}</h2>
      <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
      <div className="flex justify-between mt-2">
        <p className="text-blue-600 font-bold">${property.price}</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
      </div>
    </div>
  </div>
);

export default PropertyCard;
