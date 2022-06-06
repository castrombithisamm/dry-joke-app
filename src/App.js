import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter , } from '@fortawesome/free-brands-svg-icons';
import {  faQuoteLeft , } from '@fortawesome/free-solid-svg-icons';




let jokeDBUrl = "https://gist.githubusercontent.com/castrombithisamm/029eceff1efd03c89b984579676f7f92/raw/a0799fea4ef928b7ac3c2bcc8c34e61128e208e3/randomjoke.json"

function App() {
  const [joke, setJoke] = useState("Femi None");
  const [author, setAuthor] = useState("Castro M")
  const[randomNumber, setRandomNumber] = useState(0)
  const[jokesArray, setJokesArray] = useState(null)
  const[accentColor, setAccentColor] = useState('#282c34')

  const fetchJokes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setJokesArray(parsedJSON.jokes)
    console.log(parsedJSON)
  }
  useEffect (() => {
    fetchJokes(jokeDBUrl)
  },[jokeDBUrl])

const getRandomJoke = () => {
  let randomInteger = Math.floor(jokesArray.length * Math.random())
  setRandomNumber(randomInteger)
  setAccentColor(COLORS_ARRAY[randomInteger])
  setJoke(jokesArray[randomInteger].joke)
  setAuthor(jokesArray[randomInteger].author)

  // setRandomNumber(randomInteger)
  // if (randomInteger === 0){
  //   setJoke(jokesArray[0].joke)
  //   setAuthor(jokesArray[0].author)
  //   }
  // if (randomInteger === 1){
  //   setJoke(jokesArray[1].joke)
  //   setAuthor(jokesArray[1].author)
  // }
  // if (randomInteger === 2){
  //   setJoke(jokesArray[2].joke)
  //   setAuthor(jokesArray[2].author)
  // }
}

// const OURjokesArray = [{joke: "Femi None", author: "Castro Mbithi"}, {joke: "Nunua gari uache kubeba watu ufala",author:"Falen A"}, 
// {joke: "I don't entertain nonsense I am not an entertainer", author:"Kilo Moja"},{"joke":"My Kamba people, it's not Kambarnetis, it's Kubernetes","author":"Castro Mbithi"}]

// const changeJokeAndAuthor0 = () => {
//   setJoke("Femi None")
//   ;
//   setAuthor("Castro Mbithi")
// }

return (
    <div className="App">
      <header className="App-header" style={
      {backgroundColor : accentColor}}>
        <div id="joke-box"  style={
      { color:accentColor}}>

          <h1 id="text">
            <span id="quote-icon"><FontAwesomeIcon icon={faQuoteLeft}/></span>{joke}"
          </h1>
          <p id="author">- {author}</p>

          <dv className="buttons">
          <a id="tweet-joke" style={
      {backgroundColor : accentColor}} href={
            `http://www.twitter.com/intent/tweet?text=${joke} -${author}`} ><FontAwesomeIcon icon={faTwitter} />  </a>
          <button id="new-joke" style={
      {backgroundColor : accentColor}} onClick={()=>getRandomJoke()}>Generate
          Random Dry Joke</button>
          </dv>
          
        </div>
      </header>
    </div>
  );
}

export default App;
