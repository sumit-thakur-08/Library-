export default function AlphabetFilter() {
  return (
    <div className="w-8 text-xs text-gray-400 flex flex-col items-center gap-1">
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
        <span key={l}>{l}</span>
      ))}
    </div>
  );
}
