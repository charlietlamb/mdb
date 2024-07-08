import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {whoContentMap} from '~/data/who/whoContentMap';
import {whoData} from '~/data/who/whoData';

export default function WhoTabs() {
  return (
    <Tabs className="w-full" defaultValue={whoData[0].title}>
      <TabsList className="bg-accent-700 flex justify-start w-full gap-2 p-2">
        <div className="flex justify-start gap-2 overflow-y-auto">
          {whoData.map((data) => (
            <TabsTrigger
              key={data.title}
              value={data.title}
              className="hover:bg-white bg-accent-400 hover:text-black text-lg text-white rounded-lg"
            >
              {data.title}
            </TabsTrigger>
          ))}
        </div>
      </TabsList>
      {whoData.map((data) => (
        <TabsContent key={data.title} value={data.title} className="p-2">
          {whoContentMap.get(data.title)}
        </TabsContent>
      ))}
    </Tabs>
  );
}
