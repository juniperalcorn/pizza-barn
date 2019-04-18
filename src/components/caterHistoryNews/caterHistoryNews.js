import React, {Component} from 'react'
import './caterHistoryNews.css'

class CaterHistoryNews extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div className='cHN-contain'>

                <div className='cHN-caterBlock'>

                    <div className='cHN-caterBlock-personalize'>
                        <div className='cHN-caterBlock-personalize-img'></div>
                        <div className='cHN-caterBlock-personalize-info'></div>
                    </div>

                    <div className='cHN-caterBlock-cater'>
                        <div className='cHN-caterBlock-cater-title'></div>
                        <div className='cHN-caterBlock-cater-info'></div>
                    </div>
                </div>

                <div className='cHN-historyBlock'>
                
                </div>

                <div className='cHN-newsBlock'>
                    <div className='cHN-newsBlock-header'>PEOPLE LOVE PIZZA BARN!</div>
                    <div className='cHN-newsBlock-linkContain'>
                        <a href='#'><img src='/Users/jalcorn/ga/unit3/pizza_barn/pizza-barn/src/assets/images/Logos/foodnetwork_logo_black.png'></img></a>
                        <a href='#'><img src='#'></img></a>
                        <a href='#'><img src='#'></img></a>
                        <a href='#'><img src='#'></img></a>
                        <a href='#'><img src='#'></img></a>
                        <a href='#'><img src='#'></img></a>
                    </div>
                </div>


            </div>
        )
    }
}
export default CaterHistoryNews