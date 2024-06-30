import GradientBackground from '~/components/general/GradientBackground';
import InfoContent from './InfoContent';
import InfoVideo from './InfoVideo';

export default function Info() {
  return (
    <div className="padding-main relative flex flex-col items-center gap-8">
      <div className="bg-primary-100 ring-4 ring-offset-4 ring-offset-primary-200 ring-primary-100 relative py-8 rounded-lg">
        <GradientBackground />
        <InfoContent />
      </div>
      <InfoVideo />
    </div>
  );
}
