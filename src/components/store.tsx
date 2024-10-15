import { create } from 'zustand';

interface AppState {
  loading: boolean;
  takePic: boolean;
  photo: string | null;
  file: Blob | null;
  result: string[];
  currentImageindex: number;
  setState: (state: Partial<AppState>) => void;
  setResult: (img: string) => void;
  setCurrentImageIndex: (number: number) => void;
}

export const useStore = create<AppState>((set) => ({
  loading: false,
  takePic: false,
  photo: null,
  file: null,
  currentImageindex: 0,
  result: [],
  setState: (newState: Partial<AppState>) =>
    set((state) => {
      return { ...state, ...newState };
    }),
  setResult: (img: string) =>
    set((state: AppState) => {
      state.result.push(img);
      return { ...state };
    }),
  setCurrentImageIndex: (index: number) =>
    set((state: AppState) => {
      return { ...state, currentImageindex: index };
    }),
}));

// const [photo, setPhoto] = useState(null);
// const [result, setResult] = useState(null);
// const [file, setFile] = useState(null);
// const [loading, setLoading] = useState(false);
// const [takePic, setTakePic] = useState(false);
