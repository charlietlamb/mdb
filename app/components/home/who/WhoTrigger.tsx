export default function WhoTrigger({title}: {title: string}) {
  return (
    <div className="flex flex-col items-center justify-start h-full p-2 leading-none">
      {title
        .toUpperCase()
        .split('')
        .map((char, index) => (
          <div key={index} className="italic font-thin text-center">
            {char}
          </div>
        ))}
    </div>
  );
}
