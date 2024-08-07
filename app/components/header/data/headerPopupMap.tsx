import HeaderContact from '../HeaderContact';
import HeaderPopupCollection from '../popups/HeaderPopupCollection';

export const headerPopupMap = new Map([
  ['all', <HeaderPopupCollection />],
  ['contact', <HeaderContact />],
]);
