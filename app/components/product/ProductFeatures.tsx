import {Globe, HeartHandshake, Leaf, PackageOpen} from 'lucide-react';

export default function ProductFeatures() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex items-center gap-2">
        <Leaf className="min-w-5 min-h-5" strokeWidth={1.5} />
        <p>100% Organic Natural Ingredients</p>
      </div>
      <div className="flex items-center gap-2">
        <HeartHandshake className="min-w-5 min-h-5" strokeWidth={1.5} />
        <p>Designed for the most sensitive skin</p>
      </div>
      <div className="flex items-center gap-2">
        <PackageOpen className="min-w-5 min-h-5" strokeWidth={1.5} />
        <p>Made in the UK</p>
      </div>
      <div className="flex items-center gap-2">
        <Globe className="min-w-5 min-h-5" strokeWidth={1.5} />
        <p>Ingredients handpicked across the globe</p>
      </div>
    </div>
  );
}
