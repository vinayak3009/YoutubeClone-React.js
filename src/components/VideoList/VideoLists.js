import React from "react";
import {Grid } from "@material-ui/core";
import VideoItem from "../VideoItem/VideoItem";

import "./VideoLists.css";


const VideoLists = ({videos , onVideoSelect}) =>{
    
    const listOfVideos = videos.map((video , id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    
    return(
        <Grid className="videoList" container spacing={2}>
          {listOfVideos}
        </Grid>
        
    )

}

export default VideoLists;

