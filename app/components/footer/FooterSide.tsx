import {SearchForm} from '../search/SearchForm';
import Socials from './Socials';

export default function FooterSide() {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-xl font-semibold uppercase">Join our mailing list</h6>
      <SearchForm searchTerm="" />
      <Socials />
    </div>
  );
}
