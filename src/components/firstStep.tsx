import { useState } from "react";
import Swal from "sweetalert2";
// import { Select, MenuItem } from "@mui/material";

export default function FirstStep({ photo, setResult, file, setLoading }: Readonly<{ photo: string, setResult: Function, file: File, setLoading: Function }>) {
    const [formData, setFormData] = useState({ gender: '', costume: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    const [options, setOptions] = useState<string[]>([]);
    const male = [
        "Pirate",
        "Knight",
        "Cowboy",
        "Superhero",
        "Vampire king",
        "Gladiator",
        "Zombie",
        "Samurai",
        "Werewolf",
        "Wizard",
        "Mummy King"
    ];
    const female = [
        "Witch",
        "Fairy",
        "Princess",
        "Mermaid",
        "Catwoman",
        "Flapper",
        "Greek Goddess",
        "Vampire Queen",
        "Zombie Bride",
        "Steampunk Adventurer",
        "Mummy Queen"
    ];
    const unisex = [
        "Skeleton",
        "Clown",
        "Ghost",
        "Alien",
        "Angel",
        "Devil",
        "Astronaut",
        "Robot",
    ];

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === 'gender') {
            setIsDisabled(false)
            setCostumes(value)
        }
    };
    const setCostumes = (gender: string) => {
        if (!gender) return;
        if (gender === "male") {
            console.log([...male, ...unisex])
            return setOptions([...male, ...unisex])
        }
        if (gender === "female") {
            return setOptions([...female, ...unisex])
        }
        return setOptions([...female, ...male, ...unisex])
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const REST = new FormData()
        REST.append("file", file)
        REST.append("costume", formData.costume)
        const BACKEND_URL = "http://127.0.0.1:5000/"
        try {
            const response = await fetch(BACKEND_URL + 'upload', { method: 'POST', body: REST })
            const data = await response.json();
            console.log(data.response)
            setResult("data:image/jpeg;base64," + data.response)
        } catch (error) {
            Swal.fire("Something went wrog");
            console.log(error)
        } finally {
            setLoading(false)
        }
    };
    return (<div className="flex flex-col w-full h-full max-h-[500px] items-center justify-center" >
        <div>You're Just One Step Away!</div>
        <div className="flex max-h-[500px] h-full w-full">
            <div className="relative flex flex-col items-center justify-center relative max-w-[700px] w-full max-h-[500px] w-full h-full">
                <img className="w-full max-w-[500px] max-h-[500px] h-full object-contain" src={photo} alt="user_photo" />
                <div className="absolute flex bottom-0 gap-4">
                    <button className='bg-[#9d00ff] px-4 py-3 rounded-sm font-bold hover:text-[#3c0061] '>Retake Photo!</button>
                    <button className='bg-[#9d00ff] px-4 py-3 rounded-sm font-bold hover:text-[#3c0061]'>Select a File!</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[400px] p-2">
                <form action="CostumeData" className="bg-[#3c0061] max-w-[400px] w-full p-2 gap-4 justify-between" onSubmit={handleSubmit}>
                    <div className="flex w-full p-2 gap-4 h-[60px] items-center justify-between">
                        <label className="text-[12px]" htmlFor="gender">Select Gender</label>
                        <select className="text-[12px] w-[150px]" name="gender" id="gender" value={formData.gender} onChange={handleInputChange}>
                            <option className="text-[12px]" disabled={true} value="">Select Gender</option>
                            <option className="text-[12px]" value="male">Male</option>
                            <option className="text-[12px]" value="female">Female</option>
                            <option className="text-[12px]" value="prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="flex w-full p-2 gap-4 h-[60px] items-center justify-between">
                        <label htmlFor="Costume" className="text-[12px]">Choose a Costume</label>
                        <select className="text-[12px] w-[150px]" disabled={isDisabled} name="costume" id="costume" value={formData.costume} onChange={handleInputChange}>
                            <option className="text-[12px]" value="" disabled={true}>Select Costume</option>
                            {options.length > 0 ? options.map(item => {
                                return (<option className="text-[12px]" key={item} value={item} >{item}</option>)
                            }) : null}
                        </select>
                    </div>
                    <div className="flex items-center justify-center max-h-[48px] ">
                        <button className='bg-[#9d00ff] px-4 py-3 rounded-sm font-bold' type="submit">Transform Me Now!</button>
                    </div>
                </form>
            </div>
        </div >
    </div >)
}