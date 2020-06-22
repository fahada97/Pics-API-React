import React from "react";
import Unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";

class App extends React.Component{
    state = {images: []}

    onSearchSubmit = async (term)=>{
        const response = await Unsplash.get("/search/photos",{
            params: {query: term},
            
        });

        this.setState({images: response.data.results});
        
    }

    render(){
        return (
            <div className = "ui container" style ={{margin: "10px"}}> 
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                Found: {this.state.images.length}
            </div>
        );
    }
}

export default App;