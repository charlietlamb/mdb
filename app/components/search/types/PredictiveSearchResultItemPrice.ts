import {PredictiveProductFragment} from 'storefrontapi.generated';

export type PredictiveSearchResultItemPrice =
  PredictiveProductFragment['variants']['nodes'][0]['price'];
