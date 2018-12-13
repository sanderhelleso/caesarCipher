import React, { Component } from 'react';

export default class App extends Component {
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
                            <textarea className="textarea has-fixed-size" placeholder="Enter some text to decrypt / encrypt" rows="10"></textarea>
                            <div id="button-cont" className="columns">
                                <div className="column">
                                    <button id="decrypt" class="button">Decrypt</button>
                                </div>
                                <div className="column">
                                    <button id="encrypt" class="button">Encrypt</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
