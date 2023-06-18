import { useRouter } from "next/router";

function AboutPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>This is About Page.</h1>
    </div>
  );
}

export default AboutPage;
