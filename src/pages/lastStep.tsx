import { useState } from 'react';
import Swal from 'sweetalert2';
import { useStore } from '../components/store';
import { useNavigate } from 'react-router-dom';
export default function LastStep() {
  const [formData, setFormData] = useState({ gender: '', costume: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [options, setOptions] = useState<string[]>([]);
  const setState = useStore((state) => state.setState);
  const setResult = useStore((state) => state.setResult);
  const file = useStore((state) => state.file);
  const photo = useStore((state) => state.photo);
  let navigate = useNavigate();

  const male = [
    'Pirate',
    'Knight',
    'Cowboy',
    'Superhero',
    'Vampire king',
    'Gladiator',
    'Zombie',
    'Samurai',
    'Werewolf',
    'Wizard',
    'Mummy King',
  ];
  const female = [
    'Witch',
    'Fairy',
    'Princess',
    'Mermaid',
    'Catwoman',
    'Flapper',
    'Greek Goddess',
    'Vampire Queen',
    'Zombie Bride',
    'Steampunk Adventurer',
    'Mummy Queen',
  ];
  const unisex = [
    'Skeleton',
    'Clown',
    'Ghost',
    'Alien',
    'Angel',
    'Devil',
    'Astronaut',
    'Robot',
  ];

  const routeChange = (path: string) => {
    navigate(path);
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'costume') {
      setDisabledSubmit(false);
    }
    if (name === 'gender') {
      setIsDisabled(false);
      setCostumes(value);
    }
  };
  const setCostumes = (gender: string) => {
    if (!gender) return;
    if (gender === 'male') {
      return setOptions([...male, ...unisex]);
    }
    if (gender === 'female') {
      return setOptions([...female, ...unisex]);
    }
    return setOptions([...female, ...male, ...unisex]);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setState({ loading: true });
    const REST = new FormData();
    REST.append('file', file!);
    REST.append('costume', formData.costume);
    const BACKEND_URL = 'https://costume-yourself-api.onrender.com/';
    try {
      const response = await fetch(BACKEND_URL + 'upload', {
        method: 'POST',
        body: REST,
      });
      const data = await response.json();
      setResult('data:image/jpeg;base64,' + data.response);
      routeChange('/result');
    } catch (error) {
      Swal.fire('Something went wrog');
    } finally {
      setState({ loading: false });
    }
  };
  function getFile(e: any) {
    let reader = new FileReader();
    reader.onload = () => {
      let url = reader.result;
      setState({ photo: url as string });
    };
    reader.readAsDataURL(e.target.files[0]);
    setState({ file: e.target.files[0] });
  }
  return (
    <div className="flex flex-col w-full h-full max-h-[500px] items-center justify-center">
      <div className="flex flex-col sm:flex-row h-full w-full max-h-[500px]">
        <div className="relative flex flex-col items-center justify-center max-w-[700px] w-full h-full">
          <div className="">You're just one step away</div>
          {photo ? (
            <div className="p-[12px] w-auto">
              <img
                className="w-full max-w-[500px] max-h-[500px] h-full object-contain"
                src={photo}
                alt="user_photo"
              />
            </div>
          ) : null}
          <div className="md:absolute flex gap-4 bottom-[-50px] ">
            <button
              className="bg-[#9d00ff] px-4 py-3 rounded-[16px] font-bold hover:text-[#60f761]"
              onClick={() => {
                routeChange('/');
              }}
            >
              Retake photo
            </button>
            <div className="bg-[#9d00ff] px-4 py-3 rounded-[16px] font-bold hover:text-[#60f761]">
              <label htmlFor="fileInput">Select a new file</label>
              <input
                id="fileInput"
                className="hidden"
                onChange={(e) => {
                  getFile(e);
                }}
                type="file"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-[400px] sm:pt-[80px] pt-[20px] p-2">
          <form
            action="CostumeData"
            className="bg-[#3c0061] max-w-[400px] w-full p-4 gap-4 justify-between h-auto rounded-[8px] "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full p-2 gap-2 items-left pb-[40px]">
              <label className="text-[16px]" htmlFor="gender">
                Choose your gender
              </label>
              <select
                className="text-[14px] w-full bg-white text-[#222222]"
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option
                  className="text-[16px] text-[#222222]"
                  disabled={true}
                  selected={true}
                  value=""
                >
                  Select
                </option>
                <option className="text-[12px] text-[#222222]" value="male">
                  Male
                </option>
                <option className="text-[12px] text-[#222222]" value="female">
                  Female
                </option>
                <option
                  className="text-[12px] text-[#222222]"
                  value="prefer not to say"
                >
                  Prefer not to say
                </option>
              </select>
            </div>
            <div className="flex flex-col w-full p-2 gap-2 items-left pb-[40px]">
              <label htmlFor="Costume" className="text-[16px]">
                Choose your costume
              </label>
              <select
                className="text-[14px] w-full bg-white text-[#222222]"
                disabled={isDisabled}
                name="costume"
                id="costume"
                value={formData.costume}
                onChange={handleInputChange}
              >
                <option
                  className="text-[12px]  text-[#222222]"
                  value=""
                  disabled={true}
                  selected={true}
                >
                  Select
                </option>
                {options.length > 0
                  ? options.map((item) => {
                      return (
                        <option
                          className="text-[12px] text-[#222222]"
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <div className="flex items-center justify-center max-h-[48px] p-[8px] ">
              <button
                className={`bg-[#60f761] text-[#131213] text-[14px] px-4 py-3 rounded-[16px] font-bold ${
                  disabledSubmit ? 'text-[#600000]! bg-[#607700]' : ''
                }`}
                type="submit"
                disabled={disabledSubmit}
              >
                Transform me now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
