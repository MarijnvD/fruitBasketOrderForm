import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";



function App() {


        const [count, setCount] = React.useState(
            {aardbeien: 0,
                bananen: 0,
                appels:0,
                kiwis:0
            }
        );

        const addProduct = (e) => {
            setCount({
                ...count,
                [e.target.name]: count[e.target.name] + 1,
            })
        }

        function substractProduct(e) {
            if (count[e.target.name] > 0) {
                setCount({
                    ...count,
                    [e.target.name]: count[e.target.name] - 1,
                });
            }
        }

        function resetCounters(e) {
            setCount({
                aardbeien: 0,
                bananen: 0,
                appels:0,
                kiwis:0
            })
        }

    const [voornaam, setVoornaam] = useState('')
    const [achternaam, setAchternaam] = useState('')
    const [leeftijd, setLeeftijd] = useState('')
    const [postcode, setPostcode] = useState('')
    const [bezorgFrequentie, setBezorgFrequentie] = useState('')
    const [bezorgMoment, setBezorgMoment] = useState('overdag')
    const [opmerking, setOpmerking] = useState('')
    const [akkoord, setAkkoord] = useState(false)

    function handleSubmit(e) {
        console.log(count.aardbeien, count.bananen, count.appels, count.kiwis, {voornaam}, {achternaam}, {leeftijd}, {postcode}, {bezorgFrequentie}, {bezorgMoment}, {opmerking});
        e.preventDefault();
    }


    return (

        <>
            <h1>Fruitmand bezorgservice</h1>

            <section className = "product-list">
                <Counter
                    emoji="🍓"
                    fruitTitle="Aardbeien"
                    fruitName = "aardbeien"
                    addProduct={addProduct}
                    substractProduct={substractProduct}
                    count={count.aardbeien}
                />
            </section>

            <section className = "product-list">
                <Counter
                    emoji="🍌"
                    fruitTitle="Bananen"
                    fruitName = "bananen"
                    addProduct={addProduct}
                    substractProduct={substractProduct}
                    count={count.bananen}
                />
            </section>

            <section className = "product-list">
                <Counter
                    emoji="🍏"
                    fruitTitle="Appels"
                    fruitName = "appels"
                    addProduct={addProduct}
                    substractProduct={substractProduct}
                    count={count.appels}
                />
            </section>
            <section className = "product-list">
                <Counter
                    emoji="🥝"
                    fruitTitle="Kiwi's"
                    fruitName = "kiwis"
                    addProduct={addProduct}
                    substractProduct={substractProduct}
                    count={count.kiwis}
                />
            </section>
            <button
                className="reset"
                onClick={resetCounters}
            >
                Reset
            </button>

            <form>

                <label htmlFor="voornaam">Voornaam</label>
                <input type="text"
                       id="voornaam"
                       value={voornaam}
                       onChange={(e) => setVoornaam(e.target.value)}/>
                <label htmlFor="achternaam">Achternaam</label>
                <input type="text"
                       id="achternaam"
                       value={achternaam}
                       onChange={(e) => setAchternaam(e.target.value)}/>
                <label htmlFor="leeftijd">Leeftijd</label>
                <input type="number"
                       id="leeftijd"
                       placeholder="0"
                       value={leeftijd}
                       onChange={(e) => setLeeftijd(e.target.value)}/>
                <label htmlFor="postcode">Postcode</label>
                <input type="text"
                       id="postcode"
                       value={postcode}
                       onChange={(e) => setPostcode(e.target.value)}/>
                <label htmlFor="bezorgfrequentie">Bezorgfrequentie</label>
                <select name="bezorgfrequentie"
                        id="bezorgfrequentie"
                        value={bezorgFrequentie}
                        onChange={(e) => setBezorgFrequentie(e.target.value)}>
                    <option value="wekelijks">Iedere week</option>
                    <option value="tweewekelijks">Iedere twee weken</option>
                    <option value="maandelijks">Iedere maand</option>
                </select>
                <span>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="overdag"
                        value="overdag"
                        checked={bezorgMoment === "overdag"}
                        onChange={(e) => setBezorgMoment(e.target.value)}
                    />
                    <label htmlFor="overdag">Overdag</label>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="avond"
                        value="avond"
                        checked={bezorgMoment === "avond"}
                        onChange={(e) => setBezorgMoment(e.target.value)}
                    />
                    <label htmlFor="avond">'s Avonds</label>
                </span>
                <label htmlFor="comment">Opmerkingen</label>
                <textarea id="comment"
                          name="comment"
                          value={opmerking}
                          onChange={(e) => setOpmerking(e.target.value)}
                >
                    Plaats hier eventuele opmerkingen
                </textarea>
                <span>
                    <input type="checkbox"
                           id="akkoord"
                           checked={akkoord}
                           onChange={() => setAkkoord(!akkoord)}
                    />
                    <label htmlFor="akkoord">Ik ga akkoord met de voorwaarden</label>
                </span>

            </form>
            <button id="submit"
                    value="submit"
                    disabled={!akkoord}
                    type="submit"
                    onClick={handleSubmit}>
                Verzend
            </button>
        </>
    );
}



export default App;
