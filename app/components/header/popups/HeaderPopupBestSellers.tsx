import {Button} from '~/components/ui/button';
import {HandHeart} from 'lucide-react';
import {useNavigate} from '@remix-run/react';
import {usePopupStore} from '~/lib/state/popup/store';
import HeaderPopupItem from './HeaderPopupItem';
import {useHeaderContext} from '../context/headerContext';
import {AnimatePresence, motion} from 'framer-motion';
export default function HeaderPopupBestSellers() {
  const navigate = useNavigate();
  const {bestSellers: products} = usePopupStore();
  const {setHeaderKey} = useHeaderContext();
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center w-full gap-2 py-4"
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0, transition: {duration: 0.6}}}
        exit={{opacity: 0, x: -100, transition: {duration: 0.6}}}
      >
        <div className="flex w-full gap-4">
          {products.slice(0, 5).map((product) => (
            <HeaderPopupItem product={product} key={product.id} />
          ))}
        </div>
        {/* TODO: add route to products */}
        <Button
          onClick={() => {
            setHeaderKey(null);
            navigate('/collections/featuredcollection');
          }}
          className="flex items-center gap-2"
        >
          All Our Products! <HandHeart />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
