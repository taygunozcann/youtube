import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

    const renderVideos= videos.map(video =>{
        return(<VideoItem key= {video.id.videoId} onVideoSelect= {onVideoSelect} video= {video}/> )
    })

    return(
            <div className= "ui relaxed divided list">
                {renderVideos}
            </div>
    )   
}

export default VideoList 