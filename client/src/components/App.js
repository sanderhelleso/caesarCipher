import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            originalText: '',
            modifiedText: '',
            shiftAmount: 13
        }

        // bind
        this.updateText = this.updateText.bind(this);
        this.encrypt = this.encrypt.bind(this);
    }

    updateText(e) {
        this.setState({
            originalText: e.target.value
        });
    }

    updateShift(e) {
        this.setState({
            shiftAmount: (e.target.value > -1 && e.target.value < 27) ? e.target.value : 13
        })
    }

    decrypt() {
        console.log(123);
    }

    encrypt() {

        for (let i = 0; i < this.state.originalText.length; i++) {
            const plainCharacter = this.state.originalText.charCodeAt(i);
            if (plainCharacter >= 97 && plainCharacter <= 122) {
                this.setState({
                    modifiedText: this.state.modifiedText += String.fromCharCode((plainCharacter - 97 + this.state.shiftAmount) % 26 + 97)

                });
            } 
            
            else if (plainCharacter >= 65 && plainCharacter <= 90) {
                this.setState({
                    modifiedText: this.state.modifiedText += String.fromCharCode((plainCharacter - 65 + this.state.shiftAmount) % 26 + 65)

                });
            } 
            
            else {
                this.setState({
                    modifiedText: this.state.modifiedText += String.fromCharCode(plainCharacter)

                });
            }
        }

        // update text and reset modified
        document.querySelector('.textarea').value = this.state.modifiedText;
        this.setState({
            modifiedText: ''
        })
    }


    render() {
        return (
            <main>
                <h5>Developed by Sander Hellesoe for Math 170 Discrete Mathematics Project 3</h5>
                <div className="columns">
                    <div id="hero" className="column">
                        <h1 className="long-shadow">Casesar<br></br><span>Cipher</span></h1>
                        <div id="hero-bg"></div>
                    </div>
                    <div className="column">
                        <div id="main-cont">
                            <p id="intro">The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who apparently used it to communicate with his generals.</p>
                            <textarea className="textarea has-fixed-size" placeholder="Enter some text to decrypt / encrypt" rows="10" onChange={(e) => this.updateText(e)}></textarea>
                            <div id="button-cont" className="columns">
                                <div className="column">
                                    <button id="decrypt" className="button" onClick={this.decrypt}>Decrypt</button>
                                </div>
                                <div className="column">
                                    <button id="encrypt" className="button" onClick={this.encrypt}>Encrypt</button>
                                </div>
                                <div className="column">
                                    <input id="shift-amount" className="input" type="number" placeholder="Shift Amount" min={0} max={26} value={this.state.shiftAmount} onChange={(e) => this.updateShift(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
