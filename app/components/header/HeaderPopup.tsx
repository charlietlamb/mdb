import {cn} from '~/lib/utils';
import {useHeaderContext} from './context/headerContext';
import {headerPopupMap} from './data/headerPopupMap';
import {motion, AnimatePresence} from 'framer-motion';

export default function HeaderPopup() {
  const {headerKey} = useHeaderContext();

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
            'top-full border-primary-800 opacity-1 absolute left-0 z-0 w-full bg-white border-b rounded-b-lg shadow-md',
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdown}
          transition={{duration: 0.6}}
        >
          {headerPopupMap.get('test')}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
