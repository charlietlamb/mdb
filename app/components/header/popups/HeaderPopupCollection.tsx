import {Button} from '~/components/ui/button';
import {HandHeart} from 'lucide-react';
import {useNavigate} from '@remix-run/react';
import {usePopupStore} from '~/lib/state/popup/store';
import HeaderPopupItem from './HeaderPopupItem';

export default function HeaderPopupCollection() {
  const navigate = useNavigate();
  const {products} = usePopupStore();
  return (
    <div className="flex flex-col items-center w-full gap-2 py-4">
      <div className="flex w-full gap-4">
        {products.slice(0, 5).map((product) => (
          <HeaderPopupItem product={product} key={product.id} />
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
