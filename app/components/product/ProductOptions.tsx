import {Link} from '@remix-run/react';
import {VariantOption} from '@shopify/hydrogen';
import {Button} from '~/components/ui/button';
import {cn} from '~/lib/utils';

export function ProductOptions({option}: {option: VariantOption}) {
  return (
    <div className="product-options" key={option.name}>
      <h5 className=" text-lg font-medium">{option.name}</h5>
      <div className="flex items-center gap-2">
        {option.values.map(({value, isAvailable, isActive, to}) => {
          return (
            <Link
              className=""
              key={option.name + value}
              prefetch="intent"
              preventScrollReset
              replace
              to={to}
            >
              <Button
                className={cn(
                  'bg-primary-200 hover:bg-primary-100 text-primary-900',
                  isActive &&
                    'bg-primary-700 hover:bg-primary-600 text-primary-200',
                )}
                disabled={!isAvailable}
              >
                {value}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
