import {cn} from '~/lib/utils';
import {useHeaderContext} from './context/headerContext';
import {headerPopupMap} from './data/headerPopupMap';
import {motion, AnimatePresence} from 'framer-motion';
import {useMediaQuery} from 'react-responsive';

export default function HeaderPopup() {
  const {headerKey} = useHeaderContext();
  const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'});
  if (isSmallScreen) return null;
  const dropdown = {
    hidden: {y: '-100%'},
    visible: {y: '0%'},
    exit: {y: '-100%'},
  };
  return (
    <AnimatePresence>
      {headerKey && (
        <motion.div
          className={cn(
            'top-full opacity-1 absolute left-0 z-0 w-full bg-white padding-main p-2 border-t border-primary shadow-md shadow-black/10',
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdown}
          transition={{duration: 0.6}}
        >
          {headerPopupMap.get(headerKey)}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
