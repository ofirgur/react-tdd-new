import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    constructor() {
        super();

        this.state = { balance: undefined };
    };

    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) })
    }

    deposit = () => this.props.deposit(this.state.balance);

    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return(
            <div>
                <h3 className="balance">Wallet balance: {this.props.balance}</h3>
                <br/>
                <input className="input-wallet" type="text" onChange={this.updateBalance} />
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        balance: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deposit: payload => {
            dispatch(deposit(payload));
        },
        withdraw: payload => {
            dispatch(withdraw(payload));
        }
    };
};

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators(
//         { 
//             deposit, 
//             withdraw 
//         }, 
//         dispatch
//     );
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
export default connect(state => { return { balance: state } }, { deposit, withdraw })(Wallet);