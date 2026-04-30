import { Container } from "@/components/ui/container";

export default function ProjelerLoading() {
  return (
    <div className="bg-background">
      <div className="h-64 bg-surface-dark animate-pulse" />

      <Container className="py-20">
        <div className="animate-pulse space-y-8">
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-9 w-20 bg-line rounded-full" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-64 bg-surface-muted rounded-lg" />
                <div className="h-3 w-16 bg-line rounded" />
                <div className="h-5 bg-line rounded w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
