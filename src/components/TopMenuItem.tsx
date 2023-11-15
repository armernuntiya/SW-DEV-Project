import Link from "next/link";

export default function TopMenuItem({ title, pageRef, style }: { title:string; pageRef:string; style?:string}){
    return(
        <Link href={pageRef} className={style}>
            {title}
        </Link>
    );
}