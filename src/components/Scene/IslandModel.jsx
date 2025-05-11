import React from "react";
import { useGLTF } from "@react-three/drei";

export default function IslandModel(props){
    const gltf = useGLTF("/models/FloatingIsland.glb");
    return <primitive object = {gltf.scene} {...props}/>;
}


useGLTF.preload('/models/FloatingIsland.glb');
