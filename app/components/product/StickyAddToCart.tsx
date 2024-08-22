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
            'fixed bottom-0 md:gap-4 items-center gap-2 sticky-add-to-cart padding-main justify-between md:flex-row flex-col flex md:justify-center w-full py-2 bg-white border-t border-primary ',
          )}
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 0.6}}
        >
          <p className="md:justify-start flex flex-row items-center justify-center w-full gap-2">
            <span className="font-bold truncate">{product.title}</span>{' '}
            <p className="truncate">£{selectedVariant?.price.amount}0</p>
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
              className="md:w-auto w-full font-bold uppercase"
            >
              {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
            </Button>
          </AddToCartButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
