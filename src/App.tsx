// import { useEffect, useState } from 'react'
// import './App.css'


// function App() {
//   const [selectedTrackId, setSelectedTrackId] = useState<any>(null)
//   const [selectedTrack, setSelectedTrack] = useState<any>(null)
//   const [tracks, setTracks] = useState(null)
//   useEffect(()=>{
//     if(!selectedTrackId) return;

//     fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,{
//       headers: {
//         "api-key": "b8e88bb3-8c9c-49e5-a741-f011ed897d6c",
//       }
//     })
//     .then((res)=>res.json())
//     .then((json)=>{setSelectedTrack(json.data);})
//   },[selectedTrackId])

//   useEffect(()=>{
//     console.log('effect');
//     fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks",{
//       headers: {
//         "api-key": "b8e88bb3-8c9c-49e5-a741-f011ed897d6c",
//       }
//     })
//     .then((res)=>res.json())
//     .then((json)=>{setTracks(json.data)})

//   }, []) // параметры useEffect(): callback, [dependencies]

//   console.log('--- start App ---')

//   if(tracks === null)
//     return (
//     <div>
//       <h1>MusiFun Pleer, it-incubator</h1>
//       <span>loading...</span>
//     </div>
//   )
//   if(tracks.length==0)
//     return (
//     <div>
//       <h1>MusiFun Pleer, it-incubator</h1>
//       <span>No tracks</span>
//     </div>
//   )

//   // const selectedTrack = tracks.find(t=>t.id==selectedTrackId)
  
//   return (
//     <>
//       <div>
//         <h1>MusiFun Pleer, it-incubator</h1>
//         <button onClick={()=>{
//           setSelectedTrackId(null);
//           setSelectedTrack(null)}}> reset selection </button>
//         <div style={{display:'flex', gap: '30px'}}>
//           <ul>
//             {
//               tracks.map((track)=>{
//                 return (
//                   <li key={track.id} style={{border: (track.id===selectedTrackId)? '1px solid orange':'none' }}>
//                     <div onClick={()=>{setSelectedTrackId(track.id )}}>
//                       {track?.attributes?.title}
//                     </div>
//                     <audio src={track.attributes?.attachments[0]?.url} controls></audio>
//                   </li>
//                 )
//               })
//             }
//           </ul>
//           <div>
//             <h2>Details</h2>
//             {
//               selectedTrack===null && selectedTrackId===null? 'Track is not selected':
//                 (selectedTrack?.id != selectedTrackId? 'loading...': 
//                   <div>
//                   <h3>{selectedTrack?.attributes.title}</h3>
//                   <h4>Lyrics</h4>
//                   <p>{selectedTrack?.attributes.lyrics ?? 'no lyrics'}</p>
//                 </div>)
                
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
