import Link from "next/link";
import MenuConnectWeb3 from "../web3/MenuConnectWeb3";
import ThemeButton from './ThemeButton'

export default function MainMenu() {
    return(
        <>
            <div className="grid grid-flow-col items-center auto-cols-max gap-5 w-full justify-end text-base font-bold">
                <Link href='/doodles'>
                    <a>Doodles</a>
                </Link>
                <Link href='/crypto-craig'>
                    <a>NFT</a>
                </Link>
                <Link href='/services/email-campaigns'>
                    <a>Services</a>
                </Link>
                <MenuConnectWeb3 />
            </div>
        </>
    );
}