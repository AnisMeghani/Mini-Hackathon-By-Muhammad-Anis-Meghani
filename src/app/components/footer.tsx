import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="text-right mr-6 text-sm align-text-bottom font-bold">
        <p>
          Produced by{" "}
          <Link
            href="https://www.linkedin.com/feed/"
            className="text-blue-500 underline"
          >
            Muhammad Anis Meghani
          </Link>
        </p>
      </footer>
    </div>
  );
}