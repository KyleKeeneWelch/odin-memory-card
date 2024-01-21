import './css/App.css'
import Score from './components/Score';
import PokemonGrid from './components/PokemonGrid';
import { useEffect, useState } from 'react';
import fetchData from './utilities/fetchData';
import HashLoader from 'react-spinners/HashLoader';
import GameOver from './components/GameOver';
import Footer from './components/Footer';
import GameInfo from './components/GameInfo';

function App() {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const updatedPokeArray = await fetchData('https://pokeapi.co/api/v2/pokemon/', '100','12');
      setPokeData(updatedPokeArray);
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    getData();
  }, []);

  return (
    <div className='main-container'>
      {isLoading && <HashLoader color="#fc6767" />}
      {!isLoading && <Score score={score} isGameOver={isGameOver} />}
      {!isLoading && (
        <>
          <div className='app-container'>
            {isGameOver ? (
              <GameOver score={score} setScore={setScore} setIsGameOver={setIsGameOver} setPokeData={setPokeData} />
            ) : (
              <PokemonGrid  
                pokeData={pokeData}
                setPokeData={setPokeData}
                updateScore={() => setScore(score + 1)}
                setIsGameOver={setIsGameOver} 
              />              
            )}
          </div>

          {!isLoading && !isGameOver && <GameInfo />}
          {!isLoading && isGameOver && <Footer />}
        </>
      )}
    </div>
  )
}

export default App
