import { useEffect, useState } from 'react';
import { getTracks, type TrackListItemResource } from '../dal/api';

export function useTracks(){
  const [tracks, setTracks] = useState<null|TrackListItemResource[]>(null)
  
  const getTracksHandler = ()=>{
    console.log('effect');
    getTracks()
    .then((json)=>{setTracks(json.data)})
  }

  useEffect(getTracksHandler, []) // параметры useEffect(): callback, [dependencies]
  
  
  return {tracks}
}