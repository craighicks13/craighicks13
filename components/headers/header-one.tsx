import Image from "next/image";
import Link from "next/link";
import MainMenu from "../menus/main-menu";

export default function HeaderOne() {
    return ( 
        <div className="grid grid-cols-2 items-center p-5 max-w-6xl mx-auto">
            <div>
                <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/images/logo.png"
                        className="rounded-full"
                        height={108}
                        width={108}
                        alt="Personal website for Craig Hicks"
                        />
                    </a>
                    </Link>
            </div>
            <div>
                <MainMenu />
            </div>
        </div>
    );
}