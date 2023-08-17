import Link from "next/link";

export const metadata = {
  title: "Emilio Salvia Mendoza",
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Emilio Salvia</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos
        aperiam illo velit nulla minus nobis, asperiores possimus explicabo
        maxime, laudantium quaerat facilis at aliquid distinctio necessitatibus
        modi ab non!
      </p>
      <Link href="/" className="btn btn-back">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutPage;
