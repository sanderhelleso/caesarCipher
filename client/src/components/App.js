import React, { Component } from 'react';
import Information from './Information';

const STATIC_TXT = {
    developedBy: 'Developed by Sander Hellesoe for Math 170 Discrete Mathematics Project 3',
    intro: 'First used by Julius Caesar, the Caesar Cipher is one of the more well-known older historical encryption methods. While you certainly wouldnt want to use it in todays modern world, a long time ago it might have done the trick. Play Around with different text below. Simply enter some text and press either "Decrypt" to decrypt a encrypted message or "Encrypt" to encrypt a message. Have Fun!'
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            originalText: '',
            shiftAmount: 11
        }

        // bind
        this.updateText = this.updateText.bind(this);
        this.ceaserCipher = this.ceaserCipher.bind(this);
    }

    updateText(e) {
        this.setState({
            originalText: e.target.value
        });
    }

    updateShift(e) {
        this.setState({
            shiftAmount: (e.target.value > -1 && e.target.value < 27) ? e.target.value : 11
        })
    }

    rot13(shifts) {
        document.querySelector('.textarea').value = this.state.originalText.replace(/[a-zA-Z]/gi, (s) => {
            return String.fromCharCode(s.charCodeAt(0) + shifts)
        });
    }

    // Decrypts and Encrypts the given string with the given key using the Caesar shift cipher.
    // The key is an integer representing the number of letters to step back by - e.g. decrypt("EB", 2) = "CZ".
    // Boolean represent "True / False". If "True", we decrypt, else encrypt
    ceaserCipher(boolean) {

        let result = '';
        for (let i = 0; i < this.state.originalText.length; i++) {
            const c = this.state.originalText.charCodeAt(i);

            let uppercase = boolean 
            ? 
            String.fromCharCode(this.mod(c - 65 - this.state.shiftAmount, 26) + 65) // decrypt
            :
            String.fromCharCode(this.mod(c - 65 + this.state.shiftAmount, 26) + 65); // encrypt

            let lowercase = boolean
            ? String.fromCharCode(this.mod(c - 97 - this.state.shiftAmount, 26) + 97) // decrypt
            :
            String.fromCharCode(this.mod(c - 97 + this.state.shiftAmount, 26) + 97); // encrypt

             // Uppercase
            if (65 <= c && c <=  90) {
                result += uppercase;
            } 

             // Lowercase
            else if (97 <= c && c <= 122) {
                result += lowercase;
            }

            // Copy
            else {
                result += this.state.originalText.charAt(i); 
            }
        }

        document.querySelector('.textarea').value = result;
    }

    // modulus operator for correct reminder value in JS
    mod(x, y) {
        return (x % y + y) % y;
    }

    render() {
        return (
            <main>
                <section id="app" className="columns is-vcentered is-centered is-desktop">
                    <div id="hero" className="column">
                        <h1 className="long-shadow">Casesar<br></br><span>Cipher</span></h1>
                        <div id="hero-bg"></div>
                    </div>
                    <div className="column">
                        <div id="main-cont">
                            <p id="intro">{STATIC_TXT.intro}</p>
                            <textarea className="textarea has-fixed-size" placeholder="Enter some text to decrypt / encrypt" rows="10" onChange={(e) => this.updateText(e)}></textarea>
                            <div id="button-cont" className="columns">
                                <div className="column">
                                    <button id="decrypt" className="button" onClick={(e) => this.ceaserCipher(true)}>Decrypt</button>
                                </div>
                                <div className="column">
                                    <button id="encrypt" className="button" onClick={(e) => this.ceaserCipher(false)}>Encrypt</button>
                                </div>
                                <div className="column">
                                    <input id="shift-amount" className="input" type="number" placeholder="Shift" min={0} max={26} value={this.state.shiftAmount} onChange={(e) => this.updateShift(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Information />
                <div id="footer">
                    <h5>{STATIC_TXT.developedBy}</h5>
                    <a href="https://github.com/sanderhelleso/caesarCipher/blob/master/client/src/components/App.js" target="_blank">Souce Code</a>
                </div>
            </main>
        )
    }
}
