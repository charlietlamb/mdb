import {LoaderCircle} from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex justify-center w-full py-8">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
