export default function Banner({text}: {text: string | null}) {
  if (!text) return null;
  return (
    <div className="bg-accent-500 text-primary-50 flex justify-center w-full p-2 font-bold uppercase">
      {text}
    </div>
  );
}
