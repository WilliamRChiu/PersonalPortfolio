import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import IslandScene from "../../components/Scene/IslandScene";


export default function Home(){
    return(
        <>
            <Navbar/>
            <div style = {{height: '100vh', width: '100%', position: 'relative'}}>
                <IslandScene/>
            </div>
        </>
    )
}