import WhoAccordion from './WhoAccordion';

export default function Who() {
  return (
    <div className="padding-main flex flex-col items-center w-full gap-4 text-3xl font-bold bg-indigo-200">
      <h3>Who are you buying for?</h3>
      <WhoAccordion />
    </div>
  );
}
