import {CartApiQueryFragment} from 'storefrontapi.generated';

export type CartLine = CartApiQueryFragment['lines']['nodes'][0];
