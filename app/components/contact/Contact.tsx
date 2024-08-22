import {Mail} from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="font-larken h1-size font-bold">Contact Us</h1>
      <div className="flex items-center gap-2">
        <Mail />
        <p>info@mbdcosmetics.com</p>
      </div>
    </div>
  );
}
