import React, { Component } from 'react';

const STATIC_TXT = {
    howDoesItWork: 'For each letter of the alphabet, you would take its position in the alphabet, say 3 for the letter "C", and shift it by the key number. If we had a key of +3, that "C" would be shifted down to an "F" - and that same process would be applied to every letter in the plaintext.In this way, a message that initially was quite readable, ends up in a form that cannot be understood at a simple glance.',
    list: 'As unreadable as the resulting ciphertext may appear, the Caesar Cipher is one of the weakest forms of encryption one can employ for the following reasons that the key space is very small. Using a brute force attack method, one could easily try all (26) possible combinations to decrypt the message without initially knowing the key. ',
    algorithm: 'To cipher a given text we need an integer value, known as shift which indicates the number of position each letter of the text has been moved down. The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. Encryption of a letter by a shift n can be described mathematically as.'
}

export default class Information extends Component {
    render() {
        return (
            <section id="information">
                <div className="info-cont">
                    <h1>How Does It Work?</h1>
                    <div className="columns">
                        <div className="column">
                            <div id="julius">
                                <img src="img/julius.jpg" alt="Julius Caesar" />
                                <span><b>Figure 1.1</b> Julius Ceasar</span>
                            </div>
                        </div>
                        <div className="column">
                            <p>{STATIC_TXT.howDoesItWork}</p>
                            <br />
                            <p>{STATIC_TXT.list}</p>
                        </div>
                    </div>
                </div>
                <div className="info-cont">
                    <h1>The Algorithm</h1>
                    <div className="columns">
                        <div className="column">
                            <p>{STATIC_TXT.algorithm}</p>
                            <br />
                            <aside className="menu">
                                <p className="menu-label">
                                    Input:
                                </p>
                                <ul className="menu-list">
                                    <li>A String of lower case letters, called Text.</li>
                                    <li>An Integer between 0-25 denoting the required shift.</li>
                                </ul>
                                <p className="menu-label">
                                    Procedure:
                                </p>
                                <ul className="menu-list">
                                    <li>Traverse the given text one character at a time.</li>
                                    <li>For each character, transform the given character as per the rule, depending on whether we’re encrypting or decrypting the text.</li>
                                    <li>Return the new string generated.</li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column">
                            <div id="shift">
                                <img src="img/shift.png" alt="Example of Ceasar Shift" />
                                <span><b>Figure 1.2</b> Example of Ceaser Shift</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
