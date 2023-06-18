import Link from "next/link";
import { useRouter } from "next/router";

function PortfolioPage() {
  const projects = [
    { id: "placeqr", name: "Place.QR : QR코드 방명록 애플리케이션" },
    { id: "wooyeons", name: "우연한 발견: 위치기반 지도 익명 SNS" },
    { id: "carmeet", name: "카밋(carmmet): 랜덤 화상 통화 서비스" },
  ];

  const router = useRouter();
  console.log(router);

  function loadProjectHandler() {
    router.push("portfolio/placeqr");
  }

  return (
    <div>
      <h1>The Portfolio Page.</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={{
                pathname: "portfolio/[id]",
                query: { id: project.id},
            }}>{project.name}</Link>
          </li>
        ))}
      </ul>

      <button onClick={loadProjectHandler}>프로젝트 보기</button>
    </div>
  );
}

export default PortfolioPage;
