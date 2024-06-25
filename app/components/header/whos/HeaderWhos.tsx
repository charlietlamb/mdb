import {whoData} from '~/data/who/whoData';
import Who from './HeaderWho';

export default function Whos() {
  return (
    <div className="md:grid-cols-5 grid">
      {whoData.map((data) => (
        <Who data={data} key={data.title} />
      ))}
    </div>
  );
}
