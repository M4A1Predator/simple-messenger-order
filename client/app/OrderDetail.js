import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationBox from './components/DestinationBox'
import OptionPopUp from './components/OptionPopUp'
import './orderdetail.styl'

class OrderDetail extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            isShowPopUp : false,
            services : [
                {
                    isSelect : false,
                    price : 50,
                    imgSrc : '/public/mats/img/money.svg'
                },
                {
                    isSelect : false,
                    price : 100,
                    imgSrc: '/public/mats/img/refresh-button.svg'
                },
                {
                    isSelect : false,
                    price : 200,
                    imgSrc: '/public/mats/img/closed-cardboard-box.svg'
                },
            ],
            fee : 0.0
        }
    }

    
    componentWillMount() {
        this.setState({fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0,
            this.state.services)})
    }
    

    displayDests(dests){
        return dests.map((dest, i) => {
            return (
                <DestinationBox 
                    dest={dest}
                    key={i}
                />
            )
        })
    }

    displayServiceImg(services){
        return services.map( (s, i) => {
            if(s.isSelect === false){
                return ''
            }

            return (
                <div className="option-icon" key={i}>
                    <img src={s.imgSrc}/>
                </div>
            )
        })
    }

    getFee(totalDistance, services){
        let fee = 0.0
        const df = totalDistance * 50

        services.forEach((s) => {
            if(s.isSelect === true){
                fee += s.price
            }
        })

        fee += df
        return fee
    }

    render() {
        return (
            <div className="container order-detail">
                <div className="destination-container">
                    {this.props.orderData && this.displayDests(this.props.orderData.dests)}
                </div>
                <div className="option-box">
                    <div className="head">
                        <div className="head-text">
                            Extra services
                        </div>
                        <div className="icon">
                            <a onClick={this.showOptionPopUp.bind(this)}>
                                <img width="20px" height="20px" src="/public/mats/img/plus-sign-in-a-black-circle.svg"/>
                            </a>
                        </div>
                    </div>
                    <div className="selected-option-box">
                        {this.displayServiceImg(this.state.services)}
                    </div>
                </div>
                <div className="detail-box">
                    <div className="text-container">
                        <div className="head-text">
                            Total Distance
                        </div>
                        <div className="sum">
                            {this.props.orderData && this.props.orderData.totalDistance || 0.0} KM
                        </div>
                    </div>
                    <div className="text-container">
                        <div className="head-text">
                            Fee
                        </div>
                        <div className="sum">
                            {this.state.fee} THB
                        </div>
                    </div>
                </div>
                <div className="button-box">
                    <button onClick={this.backToMap.bind(this)} className="back-btn">Back</button>
                    <button className="confirm-btn">Confirm</button>
                </div>
                <OptionPopUp onConfirm={this.onConfirmExtra.bind(this)} isShow={this.state.isShowPopUp} />
            </div>
        );
    }

    showOptionPopUp(e){
        this.setState({
            isShowPopUp: true
        })
    }

    onConfirmExtra(options){
        const services = this.state.services
        for(let i=0;i<services.length;i++){
            services[i].isSelect = options[i]
        }
        this.setState({
            services, 
            isShowPopUp: false,
            fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0, services)
        })
    }

    backToMap(e){
        this.props.history.goBack()
    }
}

const mapStateToProps = (state) => {
    return {
        orderData : state.orderData
    }
}

export default connect(mapStateToProps)(OrderDetail);