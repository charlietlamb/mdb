export function NoPredictiveSearchResults({
  searchTerm,
}: {
  searchTerm: React.MutableRefObject<string>;
}) {
  if (!searchTerm.current) {
    return null;
  }
  return (
    <p>
      No results found for <q>{searchTerm.current}</q>
    </p>
  );
}
