import { useEffect, useState } from 'react';
import { getTrack, type TrackDetailsResource } from '../dal/api';

export function useTrackDetail(selectedTrackId: string|null){
  const [selectedTrack, setSelectedTrack] = useState<null|TrackDetailsResource>(null)
  useEffect(()=>{ // вынести useState и useEffect в хук useTrackDetail.tsx
    if(!selectedTrackId) {
      setSelectedTrack(null);
      return;
    }

    getTrack(selectedTrackId)
    .then((json)=>{setSelectedTrack(json.data);})
  },[selectedTrackId])

  return selectedTrack
}