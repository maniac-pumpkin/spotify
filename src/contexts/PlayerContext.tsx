/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useRef,
  PropsWithChildren,
} from "react";
import { Taction } from "./types";

const values = {
  isPlaying: false,
  duration: 0,
  currentTime: 0,
  volume: 100,
};

type Tvalues = typeof values;

interface Tcontext extends Tvalues {
  playerAction: {
    play(): void;
    pause(): void;
    setAudioSrc(src: string): void;
  };
}

const Player = createContext<Tcontext | null>(null);

const reducer = (prevState: Tvalues, action: Taction): Tvalues => {
  switch (action.type) {
    case "player/play":
      return { ...prevState, isPlaying: true };
    case "player/pause":
      return { ...prevState, isPlaying: false };
    default:
      return prevState;
  }
};

export const usePlayerContext = () => {
  const context = useContext(Player);
  if (context === null || context === undefined)
    throw new Error("Context must be consumed within the context provider");
  return context;
};

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, values);
  const audioRef = useRef(new Audio()).current;

  const playerAction = useMemo(
    () => ({
      play() {
        dispatch({ type: "player/play" });
        audioRef.play();
      },
      pause() {
        dispatch({ type: "player/pause" });
        audioRef.pause();
      },
      setAudioSrc(src: string) {
        audioRef.src = src;
      },
    }),
    [audioRef],
  );

  return (
    <Player.Provider value={{ ...state, playerAction }}>
      {children}
    </Player.Provider>
  );
}
