import { create } from "zustand";

type TusePlayerStore = {
  audioID: number | null;
  duration: number;
  currentTime: number;
  volume: number;
  isPlaying: boolean;
  playAudio(audioId: number, audioSrc: string): void;
  pauseAudio(): void;
  resumeAudio(): void;
  setDuration(amount: number): void;
  seek(amount?: number): void;
  setVolume(amount: number): void;
  resetPlayer(): void;
};

export const audio = new Audio();

export const usePlayerStore = create<TusePlayerStore>()((set, get) => ({
  audioID: null,
  duration: 0,
  currentTime: 0,
  isPlaying: false,
  volume: 100,

  playAudio(audioId, audioSrc) {
    const { audioID, isPlaying, resumeAudio, pauseAudio } = get();

    if (audioID === audioId) {
      isPlaying ? pauseAudio() : resumeAudio();
      return;
    }
    set((state) => ({ ...state, audioID: audioId }));
    audio.src = audioSrc;
    resumeAudio();
  },
  resumeAudio() {
    set((state) => ({ ...state, isPlaying: true }));
    audio.play();
  },
  pauseAudio() {
    set((state) => ({ ...state, isPlaying: false }));
    audio.pause();
  },
  setDuration(amount) {
    set((state) => ({ ...state, duration: amount }));
  },
  seek(amount) {
    if (amount) audio.currentTime = amount;
    set((state) => ({ ...state, currentTime: audio.currentTime }));
  },
  setVolume(amount) {
    set((state) => ({ ...state, volume: amount }));
    audio.volume = +(amount / 100).toFixed(1);
  },
  resetPlayer() {
    set({
      audioID: null,
      duration: 0,
      currentTime: 0,
      isPlaying: false,
      volume: 100,
    });
  },
}));
