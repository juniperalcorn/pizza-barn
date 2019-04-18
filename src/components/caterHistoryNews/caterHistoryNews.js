import React, {Component} from 'react'

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
                    <a href='#'><img src='#'></img></a>
                    <a href='#'><img src='#'></img></a>
                    <a href='#'><img src='#'></img></a>
                    <a href='#'><img src='#'></img></a>
                    <a href='#'><img src='#'></img></a>
                    <a href='#'><img src='#'></img></a>
                </div>


            </div>
        )
    }
}
export default CaterHistoryNews