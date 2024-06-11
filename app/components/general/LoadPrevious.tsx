import {useEffect, useRef} from 'react';
import {Button} from '~/components/ui/button';
import {PaginationButton} from './types/PaginationButton';

export default function LoadPrevious({
  PreviousLink,
}: {
  PreviousLink: PaginationButton;
}) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If the user is at the top of the page, click the button
      if (window.scrollY === 0) {
        buttonRef.current?.click();
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PreviousLink className="w-full">
      <Button ref={buttonRef} className="w-full" variant="load_previous">
        Load Previous
      </Button>
    </PreviousLink>
  );
}
