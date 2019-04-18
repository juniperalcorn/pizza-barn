import React, {Component} from 'react'
import './caterHistoryNews.css'
import personalized from '../../assets/desktop_personalizedpizza.png'
// import timeline from '../../assets/desktop_timelinephoto.png'
import foodNet from '../../assets/images/Logos/foodnetwork_logo_black.png'
import buzzfeed from '../../assets/images/Logos/buzzfeed-logo.png'
import timeMag from '../../assets/images/Logos/TIMELOGO.png'
import thrillist from '../../assets/images/Logos/THRILLIST.png'
import foodbeast from '../../assets/images/Logos/foodbeast.png'
import travel from '../../assets/images/Logos/Travel_Channel_logo-black.png'

//food network>buzzfeed>time>thrillist>foodbeast>travel
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
                        <div className='cHN-caterBlock-personalize-img'><img src={personalized}/></div>
                        <div className='cHN-caterBlock-personalize-info'>
                            <div className='cHN-caterBlock-personalize-info-header'>PERSONALIZED SUPER SLICES</div>
                            <div className='cHN-caterBlock-personalize-info-description'>Say it with Pepperoni! Have your special slogan, proposal, announcement or well wishes added to your #SuperSlices.</div>
                            <div className='cHN-caterBlock-personalize-info-price'>Starting at $25.00</div>
                        </div>
                    </div>

                    <div className='cHN-caterBlock-cater'>
                        <div className='cHN-caterBlock-cater-title'> CATERING</div>
                        <div className='cHN-caterBlock-cater-info'>Meatball Parmesan
Eggplant Parm Party 
Rolled Eggplant Parm
Sausage, Peppers & Onions
Chicken Cutlet Parmesan 
Chicken Marsala (w mushrooms)  
Chicken Francese (lemon butter)  
Fresh Garden Salad
Our Famous Penne Alla Vodka
Homestyle Baked Ziti 
Italian 6’ wedge with the works
American 6’ wedge with the works</div>
                        <div className='cHN-caterBlock-cater-prices'></div>
                    </div>
                </div>

                <div className='cHN-historyBlock'>
                    <div className='cHN-historyBlock-header'>YONKER’S BEST PIZZA SINCE 1975</div>
                
                </div>

                <div className='cHN-newsBlock'>
                    <div className='cHN-newsBlock-header'>PEOPLE LOVE PIZZA BARN!</div>
                    <div className='cHN-newsBlock-linkContain'>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='foodNet' src={foodNet}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='buzzfeed' src={buzzfeed}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='timeMag' src={timeMag}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='thrillist' src={thrillist}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='foodbeast' src={foodbeast}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='travel' src={travel}></img></a></div>
                    </div>
                </div>


            </div>
        )
    }
}
export default CaterHistoryNews