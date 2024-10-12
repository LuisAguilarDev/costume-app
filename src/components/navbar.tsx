import logo from './../assets/Logo Def.jpg'
export default function Navbar() {
    return (
        <div className="flex w-full justify-center items-center h-[80px]">
            <div className="flex gap-8 items-center justify-between w-[1080px] ">
                <div className="flex items-center gap-8 pl-4">
                    <img className='logo h-[60px] rounded-[16px]' src={logo} alt="" />
                    <div>DisguiseMe</div>
                </div>
                <button><a href="">View on GitHub</a></button>
            </div >
        </div>
    );
}