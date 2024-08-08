import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">Return to Homepage</Link>
    </main>
  );
}
