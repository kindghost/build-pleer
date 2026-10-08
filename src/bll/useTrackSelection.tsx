import { useState } from 'react'

export function useTrackSelection(){
  const [trackId, setTrackId] = useState<string|null>(null)
  const hendleTrackSelect = (trackId:string|null)=>{ setTrackId(trackId) } // вынести useState и hendleTrackSelect в хук useTrackSelection.tsx
  
  return {trackId, hendleTrackSelect}
}