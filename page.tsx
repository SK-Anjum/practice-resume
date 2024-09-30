import Link from "next/link";
export default function skills(){
    return (
       <div>
       <ul className="flex gap-20 bg-blue-300">
        <li>                      </li>
        <li> <Link href="/"> Home </Link> </li>
        <li> <Link href="/about" > about </Link></li>
        <li> <Link href="/education"> Education</Link></li>
        <li> <Link href="/skills"> Skills</Link></li>
</ul>
<p> 
    <ol>
        <li> Time management</li>
        <li> Hard working</li>
        <li> cooperative</li>
        <li> Team Lead</li>
    </ol>
</p>
</div>
    );
}