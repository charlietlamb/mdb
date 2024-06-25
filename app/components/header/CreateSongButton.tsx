import {useState} from 'react';
import {Button} from '~/components/ui/button';
import {Dialog, DialogContent, DialogTrigger} from '~/components/ui/dialog';
import CreateSong from '../create/CreateSong';

export default function CreateSongButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{children}</div>
      </DialogTrigger>
      <DialogContent>
        <CreateSong />
      </DialogContent>
    </Dialog>
  );
}
