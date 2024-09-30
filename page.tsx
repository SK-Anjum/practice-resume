
import Link from "next/link";

export default function Home() {
  return (
   <div>

    <ul className="flex gap-20 bg-blue-300">
      <li>                      </li>
      <li> <Link href="/"> Home </Link> </li>
      <li> <Link href="/about" > About </Link></li>
      <li> <Link href="/education"> Education</Link></li>
      <li> <Link href="/skills"> Skills</Link></li>
    </ul>
      <h1>  RESUME</h1> 
    
    </div>

  );
}
