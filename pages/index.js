import Link from "next/link";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>This is Home Page.</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
