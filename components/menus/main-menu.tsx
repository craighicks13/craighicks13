import Link from "next/link";

export default function MainMenu() {
    return(
        <>
            <div className="grid grid-flow-col auto-cols-max gap-5 w-full justify-end text-base font-bold">
                <Link href='/doodles'>
                    <a>Doodles</a>
                </Link>
                <Link href='/crypto-craig'>
                    <a>NFT</a>
                </Link>
                <Link href='/services/email-campaigns'>
                    <a>Services</a>
                </Link>
            </div>
        </>
    );
}