import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Globe, CodeXml} from "lucide-react";

export default function DynamicTable({tableName, columnOrder = []}) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      const {data, error} = await supabase.from(tableName).select("*");

      if (error) {
        setError(error.message);
        setRows([]);
      } else {
        setRows(data || []);
      }

      setLoading(false);
    }

    fetchData();
  }, [tableName]);

  if (loading) return <p className="text-muted-foreground">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!rows.length) return <p>No data found.</p>;

  // Dynamically derive columns from first row
  const hiddenColumns = ["id", "module"];
  const columns = Object.keys(rows[0])
    .filter((col) => !hiddenColumns.includes(col))
    .sort((a, b) => {
      const indexA = columnOrder.indexOf(a);
      const indexB = columnOrder.indexOf(b);

      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });

  const columnStyles = {
    title: "font-semibold text-base",
    module: "text-muted-foreground text-sm",
  };

  const columnRenderers = {
    title: (row) => (
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-base">{row.title}</span>
        {row.module && (
          <span className="text-xs text-muted-foreground">{row.module}</span>
        )}
      </div>
    ),
  };

  // Simple URL detector
  const isUrl = (value) =>
    typeof value === "string" && value.startsWith("http");

  const linkLabels = {
    source_url: "Source",
    preview_url: "Preview",
  };

  const linkIcons = {
    source_url: CodeXml,
    preview_url: Globe,
  };

  const labelMap = {
    source_url: "Source",
    preview_url: "Live Demo",
  };

  const columnWidths = {
    source_url: "md:w-[140px]",
    preview_url: "md:w-[140px]",
  };

  return (
    <>
      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4 pt-2">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="rounded-2xl border bg-card p-4 shadow-sm"
          >
            {/* TITLE + MODULE */}
            <div className="mb-4">
              {columnRenderers.title ? (
                columnRenderers.title(row)
              ) : (
                <h3 className="font-semibold">{row.title}</h3>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2">
              {columns
                .filter((col) => isUrl(row[col]))
                .map((col) => {
                  const Icon = linkIcons[col];

                  return (
                    <a
                      key={col}
                      href={row[col]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full gap-2 rounded-xl"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        {linkLabels[col] || "Open"}
                      </Button>
                    </a>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block w-full overflow-x-auto">
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col}
                  className={`py-4 text-muted-foreground text-sm ${
                    columnWidths[col] || ""
                  }`}
                >
                  {labelMap[col] ||
                    col
                      .replaceAll("_", " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-muted/50 transition-colors"
              >
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    className={`py-3 ${columnWidths[col] || ""}`}
                  >
                    {isUrl(row[col]) ? (
                      <a
                        href={row[col]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2 rounded-lg whitespace-nowrap"
                        >
                          {(() => {
                            const Icon = linkIcons[col];

                            return (
                              <>
                                {Icon && <Icon className="h-4 w-4" />}
                                {linkLabels[col] || "Open"}
                              </>
                            );
                          })()}
                        </Button>
                      </a>
                    ) : columnRenderers[col] ? (
                      columnRenderers[col](row)
                    ) : (
                      <span className={columnStyles[col] || ""}>
                        {row[col]}
                      </span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
