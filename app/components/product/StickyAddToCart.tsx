import {ProductFragment} from 'storefrontapi.generated';
import {AddToCartButton} from './AddToCartButton';
import {useOpenStore} from '~/lib/state/open/store';
import {Button} from '../ui/button';
import {cn} from '~/lib/utils';
import {AnimatePresence} from 'framer-motion';
import {motion} from 'framer-motion';

export default function StickyAddToCart({
  product,
  selectedVariant,
  show,
}: {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedVariant'];
  show: boolean;
}) {
  const {setCart} = useOpenStore();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={cn(
            'fixed bottom-0 gap-4 padding-main justify-between flex items-center md:justify-center w-full py-2 bg-white border-t border-primary ',
          )}
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 0.6}}
        >
          <p className="md:flex-row md:gap-2 flex flex-col">
            <span className="font-bold truncate">{product.title}</span>{' '}
            <p className="truncate">{selectedVariant?.title}</p>
          </p>

          <AddToCartButton
            disabled={!selectedVariant || !selectedVariant.availableForSale}
            onClick={() => {
              setCart(true);
            }}
            lines={
              selectedVariant
                ? [
                    {
                      merchandiseId: selectedVariant.id,
                      quantity: 1,
                    },
                  ]
                : []
            }
          >
            <Button
              variant="add_to_cart"
              disabled={!selectedVariant?.availableForSale}
              className="font-bold uppercase"
            >
              {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
            </Button>
          </AddToCartButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
