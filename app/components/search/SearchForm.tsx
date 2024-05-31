import {Form} from '@remix-run/react';
import {useEffect, useRef} from 'react';
import {Input} from '~/components/ui/input';
import {Button} from '~/components/ui/button';
import {Search} from 'lucide-react';

export function SearchForm({searchTerm}: {searchTerm: string}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // focus the input when cmd+k is pressed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        inputRef.current?.blur();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <Form method="get" className="flex gap-2">
      <Input
        defaultValue={searchTerm}
        name="q"
        placeholder="Search…"
        ref={inputRef}
        type="search"
      />

      <Button type="submit">
        <Search />
      </Button>
    </Form>
  );
}
