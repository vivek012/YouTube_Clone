

import VideoPlayer from "@/components/ui/VideoPlayer";

export default async  function page({
    params,
}: {
    params: Promise<{ watchId: string }>
}) {

    const { watchId } =await params;

    const relatedVideos = [
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

    const video = relatedVideos.find(
        (video) => video._id === watchId
    );
    if (!video) {
        return <div> Video Not Found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                        <VideoPlayer video={video}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

