import React from 'react'
import Pil from '../videos/P-I-L.mp4'
import PilPicture from '../images/pilpicture.webp'
import PirPicture from '../images/pirpicture.webp'
import Pir from '../videos/P-I-R.mp4'
import Bil from '../videos/B-I-L.mp4'
import BilPicture from '../images/bilpicture.webp'
import Bir from '../videos/B-I-R.mp4'
import BirPicture from '../images/birpicture.webp'
import Parallel from '../videos/parallel.mp4'
import ParallelPicture from '../images/parallel.webp'
import ThreePoint from '../videos/threepoint.mp4'
import ThreePointPicture from '../images/threepoint.webp'


class Maneuvers extends React.Component {
    render(){
        return(
            <div>
                <video width='320' height='240' controls poster={PilPicture}>
                    <source src={Pil} type='video/mp4' /> 
                </video>
                <p>Pull in Parking on the left</p>
                <br/>

                <video width='320' height='240' controls poster={PirPicture}>
                    <source src={Pir} type='video/mp4' /> 
                </video>
                <p>Pull in Parking on the Right</p>
                <br/>

                <video width='320' height='240' controls poster={BilPicture}>
                    <source src={Bil} type='video/mp4' /> 
                </video>
                <p>Back in Parking on the Left</p>
                <br/>

                <video width='320' height='240' controls poster={BirPicture}>
                    <source src={Bir} type='video/mp4' /> 
                </video>
                <p>Back in Parking on the Right</p>
                <br/>

                <video width='320' height='240' controls poster={ParallelPicture}>
                    <source src={Parallel} type='video/mp4' /> 
                </video>
                <p>Parallel Parking</p>
                <br/>

                <video width='320' height='240' controls poster={ThreePointPicture}>
                    <source src={ThreePoint} type='video/mp4' /> 
                </video>
                <p>Three Point Turns</p>
                <br/>
            </div>
        )
    }
}

export default Maneuvers