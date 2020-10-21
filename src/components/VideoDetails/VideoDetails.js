import React from "react";
import {Paper ,Typography } from "@material-ui/core";

import "./VideoDetails.css";

function VideoDetails({video}){
    if(!video)
    return <h3>Loading</h3>

    console.log(video);
    
     const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
            <React.Fragment className="fragment" >
            <Paper className="mainVideoDetails" elevation={10} >
             <iframe className="iframe" frameBorder="0" title="Video Player" src={videoSrc}  ></iframe>
            </Paper>
            <Paper elevation={6} >
            <Typography className="text" variant="h4" >{video.snippet.title} - {video.snippet.channelTitle} </Typography>
            <Typography className="text" variant="subtitle1">{video.snippet.channelTitle}</Typography>
            <Typography className="text" variant="subtitle2" >{video.snippet.description}</Typography>
            </Paper>
            </React.Fragment>
        
    )
}

export default VideoDetails;