import { TrackItem } from './TrackItem';
import { useTracks } from '../bll/useTracks';

type TrackListProps = {
  onTackSelect: (id:string|null)=>void, 
  selectedTrackId: string|null
}

export function TrackList({onTackSelect, selectedTrackId}:TrackListProps) {

  const {tracks} = useTracks()
  if(tracks === null)
    return (
    <div>
      {/* <h1>MusicFun Pleer, it-incubator</h1> */}
      <span>loading...</span>
    </div>
  )
  if(tracks.length==0)
    return (
    <div>
      {/* <h1>MusiFun Pleer, it-incubator</h1> */}
      <span>No tracks</span>
    </div>
  )
  const handleResetClick = ()=>{ 
    onTackSelect?.(null);
  }
  const handeClick = (trackId:string|null)=>{
    onTackSelect?.(trackId)                      
  }
  return <div style={{height:"100%", overflowY:"auto"}}>
          <button onClick={handleResetClick}>reset</button>          
          <hr />
          <ul>
            {
              tracks.map((track)=>{
                return <TrackItem isSelected={(track.id===selectedTrackId)} trackId={track.id} onSelect={handeClick} track={track} key={track.id}/>
              })
            }
          </ul>          
        </div>;
}

