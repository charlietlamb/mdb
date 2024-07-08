import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {Button} from '../ui/button';
import {Label} from '../ui/label';
import ProductAddToCartButton from '../cart/ProductAddToCartButton';
import {useNavigate} from '@remix-run/react';
import {setOpen} from '~/store/create/createSlice';

export default function CreateSongEnd() {
  const {name, email, occasion, details, song} = useAppSelector(
    (state) => state.create,
  );
  const {product} = useAppSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="md:grid-cols-2 grid grid-cols-1">
        <div className="md:flex relative z-10 flex-col items-center justify-center flex-grow hidden w-full h-full gap-4 text-center">
          <div className="flex flex-col items-center w-full gap-1">
            <h4 className="text-3xl font-bold leading-none">Great Job!</h4>
            <p className="max-w-[50%] text-center text-md text-primary-700">
              {` Thanks ${name} that's your job done! Now purchase your song and wait to see what
                our artists create!`}
            </p>
          </div>
          <Button onClick={() => console.log('Purchase')}>
            Purchase My Song!
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
          <div>
            <Label className="text-lg font-bold">Customer Name</Label>
            <p>{name}</p>
          </div>
          <div>
            <Label className="text-lg font-bold">Customer Email</Label>
            <p>{email}</p>
          </div>
          <div>
            <Label className="text-lg font-bold">Occasion</Label>
            <p>{occasion?.length ? occasion : 'Not specified'}</p>
          </div>
          <div>
            <Label className="text-lg font-bold">Person Details</Label>
            <p>{details}</p>
          </div>
          <div>
            <Label className="text-lg font-bold">Song Details</Label>
            <p>{song}</p>
          </div>
        </div>
      </div>
      {product && (
        <ProductAddToCartButton
          product={product}
          onClick={() => {
            dispatch(setOpen(false));
            navigate('/cart');
          }}
        >
          <Button className="text-xl font-bold">Purchase My Song!</Button>
        </ProductAddToCartButton>
      )}
    </div>
  );
}
