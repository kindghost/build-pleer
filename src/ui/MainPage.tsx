import { TrackList } from './TrackList.tsx'
import { TrackDetail } from './TrackDetail.tsx'
import { useTrackSelection } from '../bll/useTrackSelection.tsx'




export function MainPage(){
  const {trackId, hendleTrackSelect} = useTrackSelection()

  return <div>
    
    <div style={{display:'flex', gap: '30px', height:"70vh" }}>
      <TrackList selectedTrackId={trackId} onTackSelect = {hendleTrackSelect}/>
      <TrackDetail selectedTrackId = {trackId} />
    </div>
    

  </div>
}