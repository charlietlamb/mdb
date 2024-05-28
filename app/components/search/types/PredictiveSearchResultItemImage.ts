import {
  PredictiveArticleFragment,
  PredictiveCollectionFragment,
  PredictiveProductFragment,
} from 'storefrontapi.generated';

export type PredictiveSearchResultItemImage =
  | PredictiveCollectionFragment['image']
  | PredictiveArticleFragment['image']
  | PredictiveProductFragment['variants']['nodes'][0]['image'];
