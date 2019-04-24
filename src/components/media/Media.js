import React from 'react'
import ReactPlayer from 'react-player'
import './Media.css'
import Gallery1 from '../../assets/images/Gallery/Gallery1.png'
import Gallery2 from '../../assets/images/Gallery/Gallery2.png'
import Gallery3 from '../../assets/images/Gallery/Gallery3.png'
import Gallery4 from '../../assets/images/Gallery/Gallery4.png'
import Gallery5 from '../../assets/images/Gallery/Gallery5.png'
import Gallery6 from '../../assets/images/Gallery/Gallery6.png'
import Gallery7 from '../../assets/images/Gallery/Gallery7.png'
import Gallery8 from '../../assets/images/Gallery/Gallery8.png'

const Media = () => {
    return (
        <div className="media">
            <div className="media__container">
                <ReactPlayer
                    url="https://youtu.be/pZvhmWtDvUw"
                    playing={false}
                    width="481px"
                    height="256px"
                    style={{display: "flex", float: "left"}}
                >
                </ReactPlayer>
                <ReactPlayer
                    url="https://youtu.be/Hzh_9iWumeE"
                    playing={false}
                    width="481px"
                    height="256px"
                    style={{display: "flex", float: "left"}}
                >
                </ReactPlayer>
                <ReactPlayer
                    url="https://youtu.be/abK6eKiX_Bc"
                    playing={false}
                    width="481px"
                    height="256px"
                    style={{display: "flex", float: "right", marginLeft:"-2.7%"}}
                >
                </ReactPlayer>
                    <div className="media__container__copy" id="gallery">
                        <span className="media__container__copy__header">DO YOU HAVE WHAT IT TAKES TO FINISH A SUPER SLICE?</span> <br/>
                        Post a selfie with a #SuperSlice and tag us to be featured on our social media pages!<br/>
                        @PizzaBarnYonkers on Instagram &amp; Twitter
                </div>
                <div className="media__container__gallery">
                    <img className="media__container__gallery__image" src={Gallery1} alt="Gallery1"></img>
                    <img className="media__container__gallery__image" src={Gallery2} alt="Gallery2"></img>
                    <img className="media__container__gallery__image" src={Gallery3} alt="Gallery3"></img>
                    <img className="media__container__gallery__image" src={Gallery4} alt="Gallery4"></img>
                    <img className="media__container__gallery__image" src={Gallery5} alt="Gallery5"></img>
                    <img className="media__container__gallery__image" src={Gallery6} alt="Gallery6"></img>
                    <img className="media__container__gallery__image" src={Gallery7} alt="Gallery7"></img>
                    <img className="media__container__gallery__image" src={Gallery8} alt="Gallery8"></img>
                </div>
            </div>
            <div className="mobile__media__container">
                <ReactPlayer
                    url="https://youtu.be/pZvhmWtDvUw"
                    playing={false}
                    width="480px"
                    height="255px"
                    style={{marginBottom: "10.3px"}}
                >
                </ReactPlayer>
                <ReactPlayer
                    url="https://youtu.be/Hzh_9iWumeE"
                    playing={false}
                    width="480px"
                    height="255px"
                    style={{marginBottom: "10.3px"}}
                >
                </ReactPlayer>
                <ReactPlayer
                    url="https://youtu.be/abK6eKiX_Bc"
                    playing={false}
                    width="480px"
                    height="255px"
                    style={{marginBottom: "10.3px"}}
                >
                </ReactPlayer>
                    <div className="media__container__copy" id="gallery">
                        <span className="media__container__copy__header">DO YOU HAVE WHAT IT TAKES TO FINISH A SUPER SLICE?</span> <br/>
                        Post a selfie with a #SuperSlice and tag us to be featured on our social media pages!<br/>
                        @PizzaBarnYonkers on Instagram &amp; Twitter
                </div>
                <div className="media__container__gallery">
                    <img className="media__container__gallery__image column1 row1" src={Gallery1} alt="Gallery1"></img>
                    <img className="media__container__gallery__image column2 row1" src={Gallery2} alt="Gallery2"></img>
                    <img className="media__container__gallery__image column1 row2" src={Gallery3} alt="Gallery3"></img>
                    <img className="media__container__gallery__image column2 row2" src={Gallery4} alt="Gallery4"></img>
                    <img className="media__container__gallery__image column1 row3" src={Gallery5} alt="Gallery5"></img>
                    <img className="media__container__gallery__image column2 row3" src={Gallery6} alt="Gallery6"></img>
                    <img className="media__container__gallery__image column1 row4" src={Gallery7} alt="Gallery7"></img>
                    <img className="media__container__gallery__image column2 row4" src={Gallery8} alt="Gallery8"></img>
                </div>
            </div>
 
        </div>
    )
}

export default Media