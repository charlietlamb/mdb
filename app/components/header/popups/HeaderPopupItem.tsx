import {Image} from '@shopify/hydrogen';
import {cn} from '~/lib/utils';

export default function HeaderPopupItem({
  data,
}: {
  data: {title: string; url: string; image: string; pos: string};
}) {
  const {title, url, image, pos} = data;

  return (
    <div
      className="flex flex-col items-center w-full gap-2"
      onClick={() => {
        //TODO: route to product/collection
      }}
    >
      <div className="ring-primary ring-2 ring-offset-white ring-offset-2 w-full h-24 overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={title}
          className={cn('object-cover w-full h-full', pos)}
        />
      </div>
      <h5 className="font-semibold text-center capitalize">{title}</h5>
    </div>
  );
}
