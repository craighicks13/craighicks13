import Image from "next/image";
import Link from "next/link";

export default function FeatureContainerTwo({ left, right, content, link}) {
    return(
        <>
            <div className="p-10 w-full space-y-5">
                <div className="grid items-center justify-center justify-items-center md:justify-items-start md:grid-cols-2">
                    <div className="max-w-xl rounded-lg">
                        <div className="min-w-sm max-w-lg">{left}</div>
                    </div>
                    <div className="max-w-sm md:justify-self-end pr-10 md:px-10 pt-10 md:pt-0">
                        <div className="min-w-sm max-w-lg">{right}</div>
                    </div>
                </div>
                <div className="">{content}</div>
                {link &&
                    <div className="">
                        <Link href={link}>
                            <a className="btn btn-primary">See More</a>
                        </Link>
                    </div>
                }
            </div>
        </>
    );
}