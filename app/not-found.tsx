import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow text-teal-500">Error 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">
        This result didn&rsquo;t come back
      </h1>
      <p className="mt-4 max-w-md text-ink/60">
        The page you&rsquo;re looking for may have moved. Head back home or contact us if
        you followed a broken link.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
