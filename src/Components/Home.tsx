import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the connexion page</h1>
      <Link
        to="/login"
        className="text-blue-600 hover:underline text-lg"
      >
        Follow the link
      </Link>
    </div>
  );
}
