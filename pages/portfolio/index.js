import Link from "next/link";
import { useRouter } from "next/router";

function PortfolioPage() {
    const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>This is Portfolio Page.</h1>
      <ul>
        <li>
          <Link href="/portfolio/project1">Project1</Link>
        </li>
        <li>
          <Link href="/portfolio/project2">Project2</Link>
        </li>
      </ul>
    </div>
  );
}

export default PortfolioPage;
