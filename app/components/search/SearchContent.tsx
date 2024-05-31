import {Input} from '~/components/ui/input';
import {PredictiveSearchForm} from './PredictiveSearchForm';
import {PredictiveSearchResults} from './PredictiveSearchResults';
import {Button} from '~/components/ui/button';
import {SearchIcon} from 'lucide-react';

export default function SearchContent() {
  return (
    <div className="flex flex-col w-full max-h-full gap-4">
      <PredictiveSearchForm>
        {({fetchResults, inputRef}) => (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">Search</h3>
              <p className="text-primary-500">
                Search All Products On Our Site
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              <Button
                onClick={() => {
                  window.location.href = inputRef?.current?.value
                    ? `/search?q=${inputRef.current.value}`
                    : `/search`;
                }}
                className="focus-visible:ring-0 ring-0"
              >
                <SearchIcon />
              </Button>
            </div>
          </div>
        )}
      </PredictiveSearchForm>
      <PredictiveSearchResults />
    </div>
  );
}
