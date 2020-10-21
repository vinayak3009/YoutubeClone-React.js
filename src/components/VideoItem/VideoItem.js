import React from "react";
import {Grid , Paper , Typography } from "@material-ui/core";

import "./VideoItem.css";

const VideoItem =({video , onVideoSelect }) =>{
   


   return(
        <Grid item xs={12}>
        <Paper className="videoItem" onClick={() => onVideoSelect(video)}>
        <img className="itemImage" alt="thumbnail" src={video.snippet.thumbnails.medium.url} ></img>
        <Typography className="itemText" variant="subtitle2">{video.snippet.title}</Typography>

        </Paper> 
        </Grid>
   )
    }

export default VideoItem;
