import React, {Component} from 'react'
import './caterHistoryNews.css'
import personalized from '../../assets/desktop_personalizedpizza.png'
import bigLine from '../../assets/desktop_timeline.png'
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
                        <div className='cHN-caterBlock-cater-info'>
                            <div className='cHN-caterBlock-cater-info-item'>Meatball Parmesan</div>
                            <div className='cHN-caterBlock-cater-info-item'>Eggplant Parm Party</div> 
                            <div className='cHN-caterBlock-cater-info-item'>Rolled Eggplant Parm</div>
                            <div className='cHN-caterBlock-cater-info-item'>Sausage, Peppers &amp; Onions</div>
                            <div className='cHN-caterBlock-cater-info-item'>Chicken Cutlet Parmesan</div>
                            <div className='cHN-caterBlock-cater-info-item'>Chicken Marsala (w mushrooms)</div>
                            <div className='cHN-caterBlock-cater-info-item'>Chicken Francese (lemon butter)</div>
                            <div className='cHN-caterBlock-cater-info-item'>Fresh Garden Salad</div>
                            <div className='cHN-caterBlock-cater-info-item'>Our Famous Penne Alla Vodka</div>
                            <div className='cHN-caterBlock-cater-info-item'>Homestyle Baked Ziti</div>
                            <div className='cHN-caterBlock-cater-info-item'>Italian 6’ wedge with the works</div>
                            <div className='cHN-caterBlock-cater-info-item'>American 6’ wedge with the works</div>
                        </div>
                        <div className='cHN-caterBlock-cater-prices'>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $85.00 / Half $65.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $85.00 / Half $65.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $85.00 / Half $65.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $85.00 / Half $65.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $85.00 / Half $65.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $90.00 / Half $70.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $90.00 / Half $70.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $55.00 / Half $45.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $75.00 / Half $55.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>Full $75.00 / Half $55.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>$120.00</div>
                            <div className='cHN-caterBlock-cater-prices-item'>$110.00</div>
                        </div>
                    </div>
                </div>

                <div className='cHN-historyBlock'>
                    <div className='cHN-historyBlock-header'>YONKER’S BEST PIZZA SINCE 1975</div>

                    <div className='cHN-historyBlock-lineContain'>
                        <div className='cHN-historyBlock-lineContain-years'>
                            <div id='cHN-historyBlock-lineContain-years-1'>1975</div>
                            <div id='cHN-historyBlock-lineContain-years-2'>2016</div>
                            <div id='cHN-historyBlock-lineContain-years-3'>Now</div>
                        </div>
                        <div className='cHN-historyBlock-lineContain-line'><img id='bigLine' src={bigLine}/></div>
                        <div className='cHN-historyBlock-lineContain-info'>
                            <div className='cHN-historyBlock-lineContain-info-1'><p>Pizza Barn opened its doors on the corner of McLean and Van Cortlandt Park Avenue in the beautiful city of Yonkers, NY. It was one of the few pizzerias, if not the very first, to offer delivery service in the city!</p></div>
                            <div className='cHN-historyBlock-lineContain-info-2'>Pizza Barn unveiled its Super Slice, a 2 foot slice that instantly became an internet sensation, attracting fans from around the globe to attempt to eat the "ginormous" slice. What many people hadn't expected was to find an amazing "slice" of pizza that was more than just a "gimmick".</div>
                            <div className='cHN-historyBlock-lineContain-info-3'>The Super Slice is truly a delicious piece of New York style pizza, with the perfect proportion of crust, sauce, cheese and love. Be sure to stop in, tell us where you're from, and tag us in your pics. We LOVE posting them on our Wall of Fame.</div>
                        </div>
                    
                    </div>
                
                </div>

                <div className='cHN-newsBlock'>
                    <div className='cHN-newsBlock-header'>PEOPLE LOVE PIZZA BARN!</div>
                    <div className='cHN-newsBlock-linkContain'>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='foodNet' src={foodNet}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='buzzfeed' src={buzzfeed}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='http://time.com/4687790/weirdest-pizzas/'><img id='timeMag' src={timeMag}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='https://www.thrillist.com/news/nation/pizza-barn-yonkers-super-slice'><img id='thrillist' src={thrillist}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='https://www.foodbeast.com/news/super-slice-pizza-barn/'><img id='foodbeast' src={foodbeast}></img></a></div>
                        <div className='cHN-newsBlock-linkContain-link'><a href='#'><img id='travel' src={travel}></img></a></div>
                    </div>
                </div>


            </div>
        )
    }
}
export default CaterHistoryNews