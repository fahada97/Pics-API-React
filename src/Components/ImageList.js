import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard"

const ImageList = (props)=>{
    const images = props.images.map((image)=>{
      //const images = props.images.map(({description, id, urls}) =>{  // this is destructuring
        return <ImageCard key ={image.id} images = {image} />
    })
    
    return <div className = "image-list">{images}</div>
}

export default ImageList;