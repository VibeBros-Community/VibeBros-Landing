export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Animated logo or spinner */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <div className="absolute inset-0 h-16 w-16 animate-pulse rounded-full bg-primary/20 blur-xl" />
      </div>
    </div>
  );
}
