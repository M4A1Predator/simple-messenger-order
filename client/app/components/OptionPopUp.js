import React, { Component } from 'react';
import './popup.styl'

class OptionPopUp extends Component {

    constructor(props){
        super(props)

        this.state = {
            isShow: false,
            options: [false, false, false]
        }

        this.closeByClick = this.closeByClick.bind(this)
    }

    
    componentWillMount() {
        if(this.props.options != undefined){
            this.setState({options: this.props.options})
        }
    }
    
    componentDidMount(){
        window.addEventListener("mousedown", this.closeByClick);
    }
    componentWillUnmount(){
        window.removeEventListener("mousedown", this.closeByClick);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isShow: nextProps.isShow
        })
    }

    render() {
        const sty = {
            display: "none"
        }
        if(this.state.isShow === true){
            sty.display = "block"
        }

        const styOptions = [
            {opacity: 1},
            {opacity: 1},
            {opacity: 1},
        ]

        for(let i=0;i<this.state.options.length;i++){
            if(this.state.options[i] === true){
                styOptions[i].opacity = 1
            }else{
                styOptions[i].opacity = 0.5
            }
        }

        return (
            <div className="option-pop" style={sty}>
                <div className="popup-content">
                    <div className="head">
                        Extra Services
                    </div>
                    <div className="choice-box">
                        <div className="choice">
                            <img src="/public/mats/img/money.svg"/>
                            <div className="choice-text">
                                COD +50 THB
                            </div>
                            <a role="button" style={styOptions[0]} onClick={this.selectOption.bind(this, 0)}>
                                <img style={{width: "28px", heighe: "28px"}} src="/public/mats/img/round-done-button.svg"/>
                            </a>
                        </div>
                        <div className="choice">
                            <img src="/public/mats/img/refresh-button.svg"/>
                            <div className="choice-text">
                                Return trip +100 THB
                            </div>
                            <a role="button" style={styOptions[1]} onClick={this.selectOption.bind(this, 1)}>
                                <img style={{width: "28px", heighe: "28px"}} src="/public/mats/img/round-done-button.svg"/>
                            </a>
                        </div>
                        <div className="choice">
                            <img src="/public/mats/img/closed-cardboard-box.svg"/>
                            <div className="choice-text">
                                Big parcel +200 THB
                            </div>
                            <a role="button" style={styOptions[2]} onClick={this.selectOption.bind(this, 2)}>
                                <img style={{width: "28px", heighe: "28px"}} src="/public/mats/img/round-done-button.svg"/>
                            </a>
                        </div>
                    </div>
                    <div className="buttom-box">
                        <button onClick={this.confirmOptions.bind(this)}>Confirm</button>
                    </div>
                </div>
            </div>
        );
    }

    selectOption(number, e){

        const options = this.state.options
        options[number] = !options[number]

        this.setState({
            options
        })
    }

    confirmOptions(e){
        this.props.onConfirm(this.state.options)
        this.setState({
            isShow: false
        })
    }

    close(e){
        this.setState({
            isShow: false
        })
    }

    closeByClick(e){
        if(e.target.className === 'option-pop'){
            this.setState({isShow: false})
        }
    }
}

export default OptionPopUp;