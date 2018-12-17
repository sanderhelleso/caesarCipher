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
                    <div className="heading">
                        <h1>How Does It Work?</h1>
                        <div className="border"></div>
                    </div>
                    <div className="columns is-vcentered is-centered is-desktop">
                        <div className="column">
                            <div id="julius">
                                <img src="img/julius.jpg" alt="Julius Caesar" />
                                <span><b>Figure 1.1</b> Julius Caesar</span>
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
                    <div className="heading">
                        <h1>The Algorithm</h1>
                        <div className="border"></div>
                    </div>
                    <div className="columns is-vcentered is-centered is-desktop">
                        <div className="column">
                            <p>{STATIC_TXT.algorithm}</p>
                            <br />
                            <aside className="menu order">
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
                                <span><b>Figure 1.2</b> Example of Caesar Shift</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-cont">
                    <div className="heading">
                        <h1>Terminologies and Bibliography</h1>
                        <div className="border"></div>
                    </div>
                    <div id="term" className="columns is-vcentered is-centered is-desktop">
                        <div className="column">
                            <aside className="menu term-bibl">
                                <p className="menu-label">
                                    Terminologies:
                                </p>
                                <ul className="menu-list terms">
                                    <li><b>Caesar</b> - Julius Caesar, Old Emperer of ancient Rome</li>
                                    <li><b>Shift</b> - Shifting of letters position</li>
                                    <li><b>Algorithm</b> - A series of steps to perform a task</li>
                                    <li><b>Shiper</b> - Algorithm for performing encryption or decryption</li>
                                    <li><b>Cryptography</b> - Study of the techniques of secret writing</li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column">
                            <aside className="menu term-bibl">
                                <p className="menu-label">
                                    Bibliography:
                                </p>
                                <ul className="menu-list">
                                    <li><a href="https://www.geeksforgeeks.org/caesar-cipher/" target="_blank"><b>Geek For Geeks</b> - https://www.geeksforgeeks.org/caesar-cipher/</a></li>
                                    <li><a href="https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html" target="_blank"><b>ASCII Tabel</b> - https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html</a></li>
                                    <li><a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank"><b>Wikipedia</b> - https://en.wikipedia.org/wiki/Caesar_cipher</a></li>
                                    <li><a href="https://www.biography.com/people/julius-caesar-9192504" target="_blank"><b>Figure 1.1</b> - https://www.biography.com/people/julius-caesar-9192504</a></li>
                                    <li><a href="https://www.geeksforgeeks.org/caesar-cipher/" target="_blank"><b>Figure 1.2</b> - https://www.geeksforgeeks.org/caesar-cipher/</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
