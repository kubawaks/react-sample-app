import React, {Component} from 'react';
import {getFormattedAmount, getMinimalNumberOfNotes} from "./Actions";

class ATMContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givenAmount: '',
            bankNotes: null,
            showResult: false
        }
    };

    renderBankNotes = (notes) => {
       return this.state.showResult ?
           <div>
               <div>{`Given amount: ${getFormattedAmount(this.state.givenAmount)}`}</div>
               <div>{`Banknotes: ${notes.toString()}`}</div>
          </div>
        :
           null
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({bankNotes: getMinimalNumberOfNotes(this.state.givenAmount)},
            () => this.setState({showResult: true})
        );
    };

    handleOnChange = (event) => {
        this.setState({givenAmount: event.target.value});
    };

    render() {

        return (
            <div>
                <div className="app-header">
                    <div className="app-title">ATM withdrawal</div>
                    <div className="input-amount">
                        <form onSubmit={this.handleSubmit} onChange={this.handleOnChange}>
                            <label>
                                Enter withdrawal amount
                                <input type="number" ref={(input) => this.input = input} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>

                <div className='display-area'>
                    <pre>
                        {this.renderBankNotes(this.state.bankNotes)}
                    </pre>
                </div>
            </div>
        );
    }
}

export default ATMContainer