import {ReactNode} from 'react';
import CreateSong1 from '~/components/create/CreateSong1';
import CreateSong2 from '~/components/create/CreateSong2';
import CreateSong3 from '~/components/create/CreateSong3';
import CreateSongEnd from '~/components/create/CreateSongEnd';
import CreateSongInit from '~/components/create/CreateSongInit';

export const createMap = new Map<number, ReactNode>([
  [0, <CreateSongInit />],
  [1, <CreateSong1 />],
  [2, <CreateSong2 />],
  [3, <CreateSong3 />],
  [4, <CreateSongEnd />],
]);
