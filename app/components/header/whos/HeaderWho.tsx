import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {cn} from '~/lib/utils';
import {setOccasion, setOpen, setPage} from '~/store/create/createSlice';
import {useHeaderContext} from '../context/headerContext';

export default function Who({
  data,
}: {
  data: {title: string; url: string; image: string; pos: string};
}) {
  const {title, url, image, pos} = data;
  const {setHeaderKey} = useHeaderContext();
  const dispatch = useAppDispatch();
  const {page} = useAppSelector((state) => state.create);

  return (
    <div
      className="flex flex-col items-center w-full gap-2"
      onClick={() => {
        setHeaderKey(null);
        dispatch(setOpen(true));
        dispatch(setOccasion(title));
        if (page === 0) dispatch(setPage(1));
      }}
    >
      <div className="ring-accent-500 ring-2 ring-offset-primary-200 ring-offset-2 w-full h-24 overflow-hidden rounded-lg cursor-pointer">
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
