import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;