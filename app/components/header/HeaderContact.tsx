import {useNavigate} from '@remix-run/react';
import {Speech} from 'lucide-react';
import {Button} from '~/components/ui/button';

export default function HeaderContact() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <p className="text-lg font-bold">Our earns are always open!</p>
      <Button
        onClick={() => navigate('/contact')}
        className="flex items-center gap-2"
      >
        Get In Touch <Speech />
      </Button>
    </div>
  );
}
