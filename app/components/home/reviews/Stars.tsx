import {Star} from 'lucide-react';

export default function Stars({rating}: {rating: number}) {
  return (
    <div className="flex items-center">
      {Array.from({length: 5}, (_, index) => (
        <div key={index}>
          <Star className="size-4 text-yellow-600" fill="#ca8a04" />
        </div>
      ))}
    </div>
  );
}
