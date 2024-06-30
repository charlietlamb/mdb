import {ReactNode} from 'react';
import CreateSong1 from '~/components/create/CreateSong1';
import CreateSong2 from '~/components/create/CreateSong2';
import CreateSongInit from '~/components/create/CreateSongInit';

export const createMap = new Map<number, ReactNode>([
  [0, <CreateSongInit />],
  [1, <CreateSong1 />],
  [2, <CreateSong2 />],
]);
