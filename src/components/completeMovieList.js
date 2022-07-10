import React from "react";
import ReviewComponents from "./reviewComponents.js"

export default class Navbar extends React.Component {
    render() {
        return( 
        <div>
            <img src="https://m.media-amazon.com/images/I/91ETpJgZnYL._AC_SL1500_.jpg"></img>
            <ReviewComponents/>
            <br></br>
            <img src="https://m.media-amazon.com/images/I/61n-olilSdL._AC_SY679_.jpg"></img>
            <ReviewComponents/>
            <br></br>
            <img src="https://m.media-amazon.com/images/I/81r6V-vuiXL._AC_SY741_.jpg"></img>
            <ReviewComponents/>

        </div>
        );
    }
}