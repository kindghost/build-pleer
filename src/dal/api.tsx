
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

const prepareHeaders = ()=>{
  const apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey) return undefined;
  return {
    "api-key": apiKey
  }
}

export const getTrack = (selectedTrackId:string):Promise<GetTrackDetailsOutput>=>{
  return fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,{
    headers:  prepareHeaders(),
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
      headers: prepareHeaders(),
    })
    .then((res)=>res.json())
}