import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            num : this.props.webData.num || 0
        }
    }

    render() {
        return (
            <div>
                HOME PAGE
                <div>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="num-box">
                    <button onClick={this.addNumber.bind(this)}>ADD NUM</button>
                    NUM : {this.props.webData.num || 0}
                </div>
            </div>
        );
    }

    addNumber(){
        this.props.addNumAction(this.props.webData.num || 0)
    }
}

const mapStateToProps = (state) => {
    return {
        webData : state.webData
    }
}

const mapDispatchToProps = (dispatch, prev) => {
    
    return {
        addNumAction : (currentNum) => {
            const webData = {
                num: parseInt(currentNum) + 1
            }

            const data = {
                type: "ADD_NUM",
                data: webData
            }

            dispatch(data)
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);