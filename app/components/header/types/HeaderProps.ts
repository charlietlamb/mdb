import {LayoutProps} from '~/components/Layout';

export type HeaderProps = Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>;
