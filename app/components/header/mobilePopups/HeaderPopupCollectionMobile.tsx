import {Button} from '~/components/ui/button';
import {ArrowLeft, ChevronLeft, HandHeart} from 'lucide-react';
import {useNavigate} from '@remix-run/react';
import {usePopupStore} from '~/lib/state/popup/store';
import HeaderPopupItemMobile from './HeaderPopupItemMobile';
import {useHeaderContext} from '../context/headerContext';
import {AnimatePresence} from 'framer-motion';
import {motion} from 'framer-motion';

export default function HeaderPopupCollectionMobile() {
  const navigate = useNavigate();
  const {products} = usePopupStore();
  const {setHeaderKey} = useHeaderContext();
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center gap-4 px-1"
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0, transition: {duration: 0.6}}}
        exit={{opacity: 0, x: -100, transition: {duration: 0.6}}}
      >
        <div
          className="text-primary whitespace-nowrap text-start flex items-center justify-between w-full text-lg font-normal uppercase cursor-pointer"
          onClick={() => setHeaderKey(null)}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.slice(0, 5).map((product) => (
            <HeaderPopupItemMobile product={product} key={product.id} />
          ))}
        </div>
        {/* TODO: add route to products */}
        <Button
          onClick={() => navigate('/collections/all')}
          className="flex items-center w-full gap-2"
        >
          All Our Products! <HandHeart />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
