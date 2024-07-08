import {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';
import Contact from '~/components/contact/Contact';

export const meta: MetaFunction = () => {
  return [{title: 'Your Own Melody | Contact'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  return null;
}

export default function ContactPage() {
  return <Contact />;
}
