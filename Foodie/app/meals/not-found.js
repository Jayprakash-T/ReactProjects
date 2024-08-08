import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>Unfortunatly, we could not find the requested meal data</p>
      <Link href="/meals">Return to Meals page</Link>
    </main>
  );
}
