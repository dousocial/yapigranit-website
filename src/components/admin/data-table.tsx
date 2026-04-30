import * as React from "react";
import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  empty?: string;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  empty = "Henüz kayıt yok.",
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="bg-surface p-10 text-center text-ink-muted text-[0.92rem]">
        {empty}
      </div>
    );
  }

  return (
    <div className="bg-surface overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-line">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "text-left text-[0.72rem] uppercase tracking-[0.15em] text-ink-soft px-4 py-3 font-medium",
                  col.className,
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-line hover:bg-surface-muted/50 transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-4 py-3 text-[0.88rem] text-ink",
                    col.className,
                  )}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
