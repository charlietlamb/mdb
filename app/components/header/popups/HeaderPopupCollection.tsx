import {whoData} from '~/data/who/whoData';
import Who from './HeaderPopupItem';
import {Button} from '~/components/ui/button';
import {HandHeart} from 'lucide-react';
import {useNavigate} from '@remix-run/react';

export default function HeaderPopupCollection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full gap-2 py-4">
      <div className="md:grid-cols-5 grid w-full gap-4">
        {whoData.map((data) => (
          <Who data={data} key={data.title} />
        ))}
      </div>
      {/* TODO: add route to products */}
      <Button
        onClick={() => navigate('/collections/all')}
        className="flex items-center gap-2"
      >
        All Our Products! <HandHeart />
      </Button>
    </div>
  );
}
