export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading"
    >
      <div className="relative">
        <span className="absolute inset-0 size-4 rounded-full bg-accent/40 animate-ping" />
        <span className="relative block size-4 rounded-full bg-accent" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
