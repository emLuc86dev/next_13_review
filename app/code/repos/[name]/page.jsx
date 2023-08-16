import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import LoadingPage from "@/app/loading";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params }) => {
  const { name } = params;
  return (
    <div className="card">
      <h2>{name}</h2>
      <Link href="/code/repos" className="btn btn-bak">
        Back to Repositories
      </Link>

      <Suspense fallback={<h3>Loading repo...</h3>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<h3>Loading dirs...</h3>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
