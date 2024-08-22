import HeaderContact from '../HeaderContact';
import HeaderPopupBestSellers from '../popups/HeaderPopupBestSellers';
import HeaderPopupCollection from '../popups/HeaderPopupCollection';
import HeaderPopupOffer from '../popups/HeaderPopupOffer';
import HeaderPopupOurStory from '../popups/HeaderPopupOurStory';

export const headerPopupMap = new Map([
  ['all', <HeaderPopupCollection />],
  ['best-sellers', <HeaderPopupBestSellers />],
  ['contact', <HeaderContact />],
  ['story', <HeaderPopupOurStory />],
  ['offers', <HeaderPopupOffer />],
]);
