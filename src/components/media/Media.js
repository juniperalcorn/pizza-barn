import React from 'react'
import ReactPlayer from 'react-player'
import './Media.css'

const Media = () => {
    return (
        <div className="media">
            <div className="media__videoscontainer">
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
                    style={{display: "flex", float: "right"}}
                >
                </ReactPlayer>
            </div>
        </div>
    )
}

export default Media