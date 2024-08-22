import HeaderPopupCollectionBestSellersMobile from '../mobilePopups/HeaderPopupBestSellersMobile';
import HeaderPopupCollectionMobile from '../mobilePopups/HeaderPopupCollectionMobile';
import HeaderPopupOffer from '../popups/HeaderPopupOffer';
import HeaderPopupOurStory from '../popups/HeaderPopupOurStory';

export const headerPopupMapMobile = new Map([
  ['all', <HeaderPopupCollectionMobile />],
  ['best-sellers', <HeaderPopupCollectionBestSellersMobile />],
  ['story', <HeaderPopupOurStory />],
  ['offers', <HeaderPopupOffer />],
]);
