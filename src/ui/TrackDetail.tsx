import { useTrackDetail } from '../bll/useTrackDetail';

type TrackDetailProps = {
  selectedTrackId: string|null
}


export function TrackDetail({selectedTrackId}:TrackDetailProps) {

  const selectedTrack = useTrackDetail(selectedTrackId)

  return <div>
            <h2>Details</h2>
            {
              (selectedTrack===null && selectedTrackId===null)? 'Track is not selected':
                (selectedTrack?.id != selectedTrackId? 'loading...': 
                  <div>
                  <h3>{selectedTrack?.attributes.title}</h3>
                  <h4>Lyrics</h4>
                  <p>{selectedTrack?.attributes.lyrics ?? 'no lyrics'}</p>
                </div>)
                
            }
          </div>;
}
