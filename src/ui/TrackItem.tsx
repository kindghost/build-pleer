import type { TrackListItemResource } from '../dal/api'

type TrackItemProps = {
  isSelected: boolean, 
  trackId: string|null, 
  onSelect: (id:string|null)=>void, 
  track: TrackListItemResource
}

export function TrackItem({isSelected, trackId, onSelect, track}:TrackItemProps){
  const handleClick = ()=>{ onSelect?.(trackId)}
  return (
    <li key={trackId} 
          
        style={{
          border: isSelected? '1px solid orange':'none' 
      }}>
      <div onClick={handleClick}>
        {track?.attributes?.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}