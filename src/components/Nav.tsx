import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-around items-center py-8">
      <div>
        <Link href={"#main"}>Mustapha Jlem</Link>
      </div>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href={"#main"}>Home</Link>
        </li>
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#education"}>Education</Link>
        </li>
        <li>
          <Link href={"#project"}>Projects</Link>
        </li>
        <li>
          <Link href={"#Contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
