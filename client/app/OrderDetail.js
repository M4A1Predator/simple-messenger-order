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
            fee : 0.0,
            contacts : []
        }
    }

    componentWillMount() {
        const services = this.state.services
        if(this.props.orderData != undefined && this.props.orderData.options != undefined){
            for(let i=0;i<services.length;i++){
                services[i].isSelect = this.props.orderData.options[i]
            }
        }
        // this.setState({fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0,
        //     this.state.services)})
        this.setState({services})
        this.setState({fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0,
            services)})
    }

    displayDests(dests){
        return dests.map((dest, i) => {
            return (
                <DestinationBox 
                    index={i}
                    dest={dest}
                    key={i}
                    onChange={this.handleContactChange.bind(this)}
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
                    <img style={{width: "30px", height:"30px"}} src={s.imgSrc}/>
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
            <div className="order-detail">
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
                            {this.props.orderData && this.props.orderData.totalDistance.toFixed(1) || 0.0} KM
                        </div>
                    </div>
                    <div className="text-container">
                        <div className="head-text">
                            Fee
                        </div>
                        <div className="sum">
                            {this.state.fee.toFixed(0)} THB
                        </div>
                    </div>
                </div>
                <div className="button-box">
                    <button onClick={this.backToMap.bind(this)} className="back-btn">Back</button>
                    <button onClick={this.confirmOrder.bind(this)} className="confirm-btn">Confirm</button>
                </div>
                <OptionPopUp 
                    onConfirm={this.onConfirmExtra.bind(this)} 
                    isShow={this.state.isShowPopUp} 
                    options={this.props.orderData && this.props.orderData.options || undefined}
                />
            </div>
        );
    }

    handleContactChange(contactData, index){
        const contacts = this.state.contacts
        contacts[index] = contactData
        this.setState({contacts})
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
        this.props.orderExtra(options)
    }

    backToMap(e){
        this.props.history.goBack()
    }

    confirmOrder(e){
        // Check contact
        const contacts = this.state.contacts
        if(contacts.length === 0){
            alert("Please fill all contact name and phone number");
            return;
        }
        for(let i=0;i<this.props.orderData.dests.length;i++){
            if(contacts[i] == undefined){
                alert("Please fill all contact name and phone number");
                return;
            }

            if(contacts[i].name.trim() == '' || contacts[i].mobile.trim() == ''){
                alert("Please fill all contact name and phone number");
                return;
            }
        }

        this.props.order();
        this.props.history.goBack();
    }
}

const mapStateToProps = (state) => {
    return {
        orderData : state.orderData
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        order : () => {
            const action = {
                type: 'CLEAR'
            }

            dispatch(action)
        },
        orderExtra : (options) => {
            const action = {
                type: 'ORDER_EXTRA',
                data: options
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(OrderDetail);