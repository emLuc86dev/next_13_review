import Link from "next/link";

const TeamPage = () => {
  return (
    <div>
      <h1>Team Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere
        esse, inventore earum velit ipsa ad totam quidem optio deserunt?
      </p>
      <Link href="/" className="btn btn-back">
        Back Home
      </Link>
    </div>
  );
};

export default TeamPage;
