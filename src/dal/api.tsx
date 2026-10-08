
type TrackDetailsAttributes = {
  title: string,
  lyrics: string|null
}
export type 	TrackDetailsResource = {
  id: string,
  type: string,
  attributes: TrackDetailsAttributes
}
export type GetTrackDetailsOutput = {
  data: TrackDetailsResource
}

export const getTrack = (selectedTrackId:string):Promise<GetTrackDetailsOutput>=>{
  return fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,{
    headers: {
      // "api-key": "b8e88bb3-8c9c-49e5-a741-f011ed897d6c",
    }
  })
  .then((res)=>res.json())
}

type TrackAttachment = {
  url:string
}
type 	TrackListItemAttributes = {
  title: string,
  attachments: Array<TrackAttachment>
}
export type TrackListItemResource = {
  id: string,
  attributes: TrackListItemAttributes
}

export type GetTrackListOutput = {
  data: Array<TrackListItemResource>
}


export const getTracks = ():Promise<GetTrackListOutput>=>{
  return fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks",{
      headers: {
        // "api-key": "b8e88bb3-8c9c-49e5-a741-f011ed897d6c",
      }
    })
    .then((res)=>res.json())
}