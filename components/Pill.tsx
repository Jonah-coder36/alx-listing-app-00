const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm">
    {label}
  </button>
);

export default Pill;
