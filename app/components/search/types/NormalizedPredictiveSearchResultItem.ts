import {PredictiveSearchResultItemImage} from './PredictiveSearchResultItemImage';
import {PredictiveSearchResultItemPrice} from './PredictiveSearchResultItemPrice';

export type NormalizedPredictiveSearchResultItem = {
  __typename: string | undefined;
  handle: string;
  id: string;
  image?: PredictiveSearchResultItemImage;
  price?: PredictiveSearchResultItemPrice;
  styledTitle?: string;
  title: string;
  url: string;
};
