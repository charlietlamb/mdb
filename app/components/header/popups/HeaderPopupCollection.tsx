import {Button} from '~/components/ui/button';
import {HandHeart} from 'lucide-react';
import {Link, useNavigate} from '@remix-run/react';
import {usePopupStore} from '~/lib/state/popup/store';
import HeaderPopupItem from './HeaderPopupItem';
import {useHeaderContext} from '../context/headerContext';
import {AnimatePresence, motion} from 'framer-motion';
import {Separator} from '~/components/ui/separator';
export default function HeaderPopupCollection() {
  const navigate = useNavigate();
  const {products, collections} = usePopupStore();
  const {setHeaderKey} = useHeaderContext();
  console.log(collections);
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center w-full gap-2 py-4"
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0, transition: {duration: 0.6}}}
        exit={{opacity: 0, x: -100, transition: {duration: 0.6}}}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-primary h3-size font-larken font-bold uppercase">
              Our Collections
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {collections.map((collection) => (
                <Link
                  to={`/collections/${collection.handle}`}
                  key={collection.id}
                >
                  {collection.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary h3-size font-larken font-bold uppercase">
              Featured Products
            </h4>
            <div className="flex w-full gap-4">
              {products.slice(0, 2).map((product) => (
                <HeaderPopupItem product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
        {/* TODO: add route to products */}
        <Button
          onClick={() => {
            setHeaderKey(null);
            navigate('/collections/all');
          }}
          className="flex items-center gap-2"
        >
          All Our Products! <HandHeart />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
