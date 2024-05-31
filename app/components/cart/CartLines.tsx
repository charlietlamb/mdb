import {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartMainProps} from './types/CartMainProps';
import {CartLineItem} from './CartLineItem';

export function CartLines({
  lines,
  layout,
}: {
  layout: CartMainProps['layout'];
  lines: CartApiQueryFragment['lines'] | undefined;
}) {
  if (!lines) return null;

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
    </div>
  );
}
