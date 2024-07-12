import {Speech} from 'lucide-react';
import {Button} from '~/components/ui/button';
import {email} from '~/data/email/email';

export default function HeaderContact() {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <p className="text-lg font-bold">Our earns are always open!</p>
      <a href={`mailto:${email}`}>
        <Button className="flex items-center gap-2">
          Get In Touch <Speech />
        </Button>
      </a>
    </div>
  );
}
