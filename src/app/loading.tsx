import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container className="py-24">
        <div className="space-y-8 animate-pulse">
          {/* Hero skeleton */}
          <div className="h-4 w-24 bg-line-strong rounded mx-auto" />
          <div className="h-12 w-2/3 bg-line rounded mx-auto" />
          <div className="h-6 w-1/2 bg-line rounded mx-auto" />

          {/* Content grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-48 bg-surface-muted rounded-lg" />
                <div className="h-4 bg-line rounded w-3/4" />
                <div className="h-3 bg-line rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
