import {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

export const meta: MetaFunction = () => {
  return [{title: 'Your Own Melody | Occasions'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  return null;
}

export default function Homepage() {
  return <></>;
}
