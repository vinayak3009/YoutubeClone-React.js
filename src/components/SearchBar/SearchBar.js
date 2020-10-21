import React from "react";
import {Paper , TextField}  from "@material-ui/core";

import "./SearchBar.css"



class SearchBar extends React.Component{
    state={
        searchTerm : " "
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchTerm : event.target.value})
        }
    
    handleSubmit =(event) =>{
        
        const {searchTerm} =this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();        
    }

    render(){
        return(
             <Paper className="searchBar" elevation={6} >
                 <form className="searchForm" onSubmit={this.handleSubmit}>
                     <TextField className="searchText" fullWidth label="Search here...." onChange={this.handleChange}></TextField>
                 </form>
             </Paper>
        )
    } 
}

export default SearchBar;