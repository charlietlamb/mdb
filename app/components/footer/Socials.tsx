import {Instagram} from 'lucide-react';
import SocialLink from './SocialLink';

export default function Socials() {
  return (
    <div className="flex gap-2">
      <SocialLink url="">
        <Instagram />
      </SocialLink>
    </div>
  );
}
