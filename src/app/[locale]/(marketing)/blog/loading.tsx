import { Container } from "@/components/ui/container";

export default function BlogLoading() {
  return (
    <div className="bg-background">
      {/* Page hero skeleton */}
      <div className="h-64 bg-surface-dark animate-pulse" />

      <Container className="py-20">
        <div className="animate-pulse space-y-8">
          {/* Filter bar skeleton */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-9 w-24 bg-line rounded-full" />
            ))}
          </div>

          {/* Blog grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-52 bg-surface-muted rounded-lg" />
                <div className="h-3 w-20 bg-line rounded" />
                <div className="h-5 bg-line rounded w-5/6" />
                <div className="h-4 bg-line rounded w-3/4" />
                <div className="h-3 bg-line rounded w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
