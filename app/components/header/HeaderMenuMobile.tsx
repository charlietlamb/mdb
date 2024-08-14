import {useHeaderContext} from './context/headerContext';
import {cn} from '~/lib/utils';
import {ChevronRight} from 'lucide-react';
import HeaderNavLinkMobile from './HeaderNavLinkMobile';
import {headerPopupMapMobile} from './data/headerPopupMapMobile';
import {AnimatePresence, motion} from 'framer-motion';

export function HeaderMenuMobile() {
  const {headerKey} = useHeaderContext();
  return (
    <div className=" w-full">
      <AnimatePresence>
        {!headerKey ? (
          <motion.nav
            className={cn(
              'flex-col gap-1 flex w-full items-center text-lg justify-center',
            )}
            role="navigation"
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0, transition: {duration: 0.6}}}
            exit={{opacity: 0, x: -100, transition: {duration: 0.6}}}
          >
            <HeaderNavLinkMobile href={'all'} className={cn('w-full')}>
              Shop All
              <ChevronRight className="w-4 h-4 ml-2" />
            </HeaderNavLinkMobile>
            <HeaderNavLinkMobile href={'best-sellers'} className={cn('w-full')}>
              Best Sellers
              <ChevronRight className="w-4 h-4 ml-2" />
            </HeaderNavLinkMobile>
            <HeaderNavLinkMobile href={'story'} className={cn('w-full')}>
              Our Story
              <ChevronRight className="w-4 h-4 ml-2" />
            </HeaderNavLinkMobile>
            <HeaderNavLinkMobile
              href={'offers'}
              className={cn('w-full text-accent-600')}
            >
              Offers
              <ChevronRight className="w-4 h-4 ml-2" />
            </HeaderNavLinkMobile>
          </motion.nav>
        ) : (
          headerPopupMapMobile.get(headerKey)
        )}
      </AnimatePresence>
    </div>
  );
}
