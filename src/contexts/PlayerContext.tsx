/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useReducer,
  useEffect,
  useRef,
  PropsWithChildren,
} from "react";
import { Taction } from "./types";

const values = {
  audioId: 0,
  duration: 0,
  currentTime: 0,
  isPlaying: false,
  volume: 100,
};

type Tvalues = typeof values;

interface Tcontext extends Tvalues {
  playerAction: {
    playAudio(audioId: number, audioSrc: string): void;
    resumeAudio(): void;
    pauseAudio(): void;
    setVolume(amount: number): void;
    seeker(amount?: number): void;
  };
}

const Player = createContext<Tcontext | null>(null);

const reducer = (prevState: Tvalues, action: Taction): Tvalues => {
  switch (action.type) {
    case "player/play":
      return { ...prevState, isPlaying: true };
    case "player/pause":
      return { ...prevState, isPlaying: false };
    case "player/setAudioId":
      return { ...prevState, audioId: action.payload };
    case "player/setVolume":
      return { ...prevState, volume: action.payload };
    case "player/setDuration":
      return { ...prevState, duration: action.payload };
    case "player/setCurrentTime":
      return { ...prevState, currentTime: action.payload };
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
  const audioRef = useRef(new Audio());

  const seeker = useCallback(
    (amount?: number) => {
      if (amount) audioRef.current.currentTime = amount;
      dispatch({
        type: "player/setCurrentTime",
        payload: audioRef.current.currentTime,
      });
    },
    [audioRef],
  );

  useEffect(() => {
    const setDuration = (amount: number) => {
      dispatch({ type: "player/setDuration", payload: amount });
    };
    const currentAudio = audioRef.current;
    currentAudio.addEventListener("timeupdate", () => seeker());
    currentAudio.addEventListener("loadedmetadata", () =>
      setDuration(currentAudio.duration),
    );

    return () => currentAudio.removeEventListener("timeupdate", () => seeker());
  }, [audioRef, seeker]);

  const playerAction = useMemo(
    () => ({
      playAudio(audioId: number, audioSrc: string) {
        if (audioId === state.audioId) {
          state.isPlaying ? this.pauseAudio() : this.resumeAudio();
          return;
        }
        dispatch({ type: "player/setAudioId", payload: audioId });
        audioRef.current.src = audioSrc;
        this.resumeAudio();
      },
      resumeAudio() {
        dispatch({ type: "player/play" });
        audioRef.current.play();
      },
      pauseAudio() {
        dispatch({ type: "player/pause" });
        audioRef.current.pause();
      },
      setVolume(amount: number) {
        dispatch({ type: "player/setVolume", payload: amount });
        audioRef.current.volume = +(amount / 100).toFixed(1);
      },
      seeker,
    }),
    [seeker, state.audioId, state.isPlaying],
  );

  return (
    <Player.Provider value={{ ...state, playerAction }}>
      {children}
    </Player.Provider>
  );
}
