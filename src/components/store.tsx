import { create } from 'zustand';

interface AppState {
  loading: boolean;
  takePic: boolean;
  photo: string | null;
  file: Blob | null;
  result: string | null;
  setState: (state: Partial<AppState>) => void;
  tryAgain: () => void;
}

export const useStore = create<AppState>((set) => ({
  loading: false,
  takePic: false,
  photo: null,
  file: null,
  result: null,
  setState: (newState: Partial<AppState>) =>
    set((state) => {
      return { ...state, ...newState };
    }),
  tryAgain: () =>
    set((state) => {
      return {
        ...state,
        ...{ photo: null, result: null, file: null, takePic: true },
      };
    }),
}));

// const [photo, setPhoto] = useState(null);
// const [result, setResult] = useState(null);
// const [file, setFile] = useState(null);
// const [loading, setLoading] = useState(false);
// const [takePic, setTakePic] = useState(false);
