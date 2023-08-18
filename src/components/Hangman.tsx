import React, { useCallback, useEffect } from 'react';
import { HiArrowPath, HiPlay } from 'react-icons/hi2';

function Hangman() {
  const [guess, setGuess] = React.useState('');
  const [secret, setSecret] = React.useState('');

  const [playing, setPlaying] = React.useState(false);
  const [attemptLeft, setAttemptsLeft] = React.useState(0);
  const [win, setWin] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [tried, setTried] = React.useState('');

  useEffect(() => {
    if (!playing || secret === '') {
      return;
    }

    if (secret === guess) {
      setWin(true);
    } else if (attemptLeft === 0 && secret !== guess) {
      setOver(true);
    }
  }, [attemptLeft, guess, playing, secret]);

  const updateGuess = useCallback(
    (l: string) => {
      setGuess((prevGuess) => {
        let temp = prevGuess;
        for (let i = 0; i < temp.length; i += 1) {
          if (secret[i] === l) {
            temp = temp.slice(0, i) + secret[i] + temp.slice(i + 1);
          }
        }
        return temp;
      });
    },
    [secret]
  );

  const onInputClick = useCallback(
    (l: string) => {
      if (playing) {
        setTried((prevTried) => prevTried + l);
        if (secret.includes(l)) {
          updateGuess(l);
        } else {
          setAttemptsLeft((prevAttemptsLeft) => prevAttemptsLeft - 1);
        }
      } else {
        setSecret((prevSecret) => prevSecret + l);
      }
    },
    [playing, secret, updateGuess]
  );

  const onRestartClick = () => {
    setPlaying(false);
    setSecret('');
    setGuess('');
    setAttemptsLeft(0);
    setTried('');
    setWin(false);
    setOver(false);
  };

  const onSetSecretClick = () => {
    setPlaying(true);
    setAttemptsLeft(() => secret.length);
    setGuess(secret.replace(/./g, '-'));
  };

  const getLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].map((l) => {
    return (
      <button
        key={l}
        type="button"
        tabIndex={-1}
        className="btn font-mono m-2 bg-blue-100 hover:bg-blue-300 dark:bg-blue-400 hover:dark:bg-blue-600 disabled:bg-gray-400 dark:disabled:bg-gray-400 p-2 rounded"
        disabled={tried.includes(l) || win}
        onClick={() => onInputClick(l)}
      >
        {l}
      </button>
    );
  });

  return (
    <div className="grid justify-items-center text-3xl lg:text-6xl pt-6 lg:pt-12">
      <div className="sm:max-w-sm md:max-w-md lg:max-w-3xl">
        <div>
          {playing === false && (
            <div className="flex gap-4 px-2 h-10 lg:h-16">
              <div className="text-center font-mono tracking-widest flex-1">
                {secret}
              </div>
              <button
                type="button"
                className="btn bg-green-600 text-white rounded disabled:bg-green-400"
                disabled={!secret}
                onClick={onSetSecretClick}
              >
                <HiPlay className="py-2 text-white" />
              </button>
            </div>
          )}
          {playing === true && (
            <div className="flex gap-4 px-2 h-10 lg:h-16">
              <div className="text-center font-mono tracking-widest flex-1">
                {guess}
              </div>
              <button
                type="button"
                className="btn bg-red-600 text-white rounded"
                onClick={onRestartClick}
              >
                <HiArrowPath className="py-2 text-white" />
              </button>
            </div>
          )}
        </div>
        <div className="pt-2">
          <ul className="grid grid-cols-6">{getLetters}</ul>
        </div>
        {win && (
          <div className="grid grid-flow-row gap-4 px-2">
            <div className="my-5 py-2 rounded-lg text-white text-center bg-green-600">
              You Won!
            </div>
          </div>
        )}
        {over && (
          <div className="grid grid-flow-row gap-4 px-2">
            <div className="my-5 py-2 rounded-lg text-white text-center bg-red-600">
              You Lost!
            </div>
          </div>
        )}
        <div className="text-gray-300 m-4">{attemptLeft}</div>
      </div>
    </div>
  );
}

export default Hangman;
