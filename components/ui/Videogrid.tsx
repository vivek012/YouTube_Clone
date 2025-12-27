import VideoCard from "./VideoCard";

// export type videoType= typeof videos[0] 
 
export interface videoType  {
  _id: string,
  videotitle: string
  filename: string,
  filetype: string,
  filepath: string,
  filesize: string,
  videochanel: string,
  like?: number,
  views? : number,
  uploader: string,
  createdAt: string

}



const videos = [
  {
    _id: "1",
    videotitle: "Amazing Nature Documentary",
    filename: "nature-doc.mp4",
    filetype: "video/mp4",
    filepath: "/videos/nature-doc.mp4",
    filesize: "500MB",
    videochanel: "Nature Channel",
    Like: 1250,
    views: 45000,
    uploader: "nature_lover",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    videotitle: "Cooking Tutorial: Perfect Pasta",
    filename: "pasta-tutorial.mp4",
    filetype: "video/mp4",
    filepath: "/videos/pasta-tutorial.mp4",
    filesize: "300MB",
    videochanel: "Chef's Kitchen",
    Like: 890, 
    views: 23000,
    uploader: "chef_master",
    createdAt: new Date().toISOString(),
  },
];
  
export default function Videogrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video)=>(
        <VideoCard  key={video._id} video={video } />
      ))}
    </div>
  )
}
