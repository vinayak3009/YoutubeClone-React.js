import React from "react";
import youtube from "./Api/youtube";
import {Grid} from "@material-ui/core";

import {SearchBar , VideoDetails , VideoLists} from "./components"
import "./App.css";
import youtubelogo from "./components/images/YouTube-logo.svg";
import reactImage from "./components/images/logo512.png";


class App extends React.Component{
    
    state={
        videos:[],
        selectedVideo:null
    }

   componentDidMount(){
       this.handleSubmit("music");
   }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video})
    }
    
    handleSubmit = async (searchTerm) =>{
        const response =  await youtube.get("search" , {
            params:{
                part:"snippet",
                maxResults:5,
                key:"(Your Google/YouTube API here)",
                q: searchTerm
            }
           });
        
        
        //console.log(response.data.items);
        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});
        
    }
    
    render() {
        const  { selectedVideo , videos } = this.state;
   
        return(
       <Grid container className="appGrid" justify="center" spacing={8}>
          <img className="youtubelogo" src={youtubelogo}  alt="LOGO" />
           <Grid item xs={11}>
               <Grid container spacing={8}>
               <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
               </Grid>
               <Grid item xs={8}>
                 <VideoDetails video={selectedVideo} />
               </Grid>
               <Grid item xs={4}>
                   <VideoLists videos={videos} onVideoSelect={this.onVideoSelect} />
               </Grid>

               </Grid>
           </Grid>
           <div className="footer">
                <p className="copyrightText">© Copyright 2020 VinayakPahujani</p>
                <img className="react" src={reactImage} alt="reactlogo"></img>
                <p className="copyrightText">This Website is built with React.js</p>
            </div>
       </Grid>
    )}
}

export default App;
