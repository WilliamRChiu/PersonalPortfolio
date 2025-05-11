import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import IslandModel from "./IslandModel";


export default function IslandScene() {
    return(
        <Canvas>
            <ambientLight intensity={0.5}/>
            <directionalLight position = {[5,10,5]}/>
            <IslandModel position={[0,0,-20]}/>
            <OrbitControls/>
        </Canvas>
    )
}