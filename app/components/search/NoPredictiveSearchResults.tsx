export function NoPredictiveSearchResults({
  searchTerm,
}: {
  searchTerm: React.MutableRefObject<string>;
}) {
  if (!searchTerm.current) {
    return null;
  }
  return (
    <div className="flex flex-col">
      <p className="text-xl font-semibold">No Results Found</p>
      <p className="text-primary-700">
        No results found for <q>{searchTerm.current}</q>
      </p>
    </div>
  );
}
