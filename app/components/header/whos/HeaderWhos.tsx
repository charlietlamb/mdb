import {whoData} from '~/data/who/whoData';
import Who from './HeaderWho';
import {Button} from '~/components/ui/button';

export default function Whos() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="md:grid-cols-5 grid">
        {whoData.map((data) => (
          <Who data={data} key={data.title} />
        ))}
      </div>
      <Button>Shop All Products</Button>
    </div>
  );
}
