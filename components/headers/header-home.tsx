import Image from "next/image";
import MainMenu from "../menus/main-menu";

export default function HeaderHome() {
    return ( 
    <>
        <div className="max-w-6xl mx-auto pt-10 pr-10 xl:pr-0">
            <MainMenu />
        </div>
        <div className="h-screen p-5">
            <div className="grid grid-flow-row auto-rows-max justify-center  justify-items-center text-textmain h-full content-center">
                
                    <Image priority
                        src="/images/logo.png"
                        className="rounded-full"
                        height={164}
                        width={164}
                        alt="Personal website for Craig Hicks"
                        />
                
                <div className="text-7xl tracking-wide font-bold space-x-2 px-1 pt-10">Welcome</div>
                <div className="text-base pt-5">This is my personal site.</div>
                <div className="text-xs pt-1">Hi.</div>
            </div>
        </div>
    </>
    );
}