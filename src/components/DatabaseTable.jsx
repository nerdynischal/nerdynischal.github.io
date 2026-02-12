import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons/icons";

export default function DynamicTable({ tableName }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.from(tableName).select("*");

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
  const hiddenColumns = ["id"];
  const columns = Object.keys(rows[0]).filter(
    (col) => !hiddenColumns.includes(col),
  );

  // Simple URL detector
  const isUrl = (value) =>
    typeof value === "string" && value.startsWith("http");

  const linkLabels = {
    source_url: "Source",
    preview_url: "Live Demo",
  };

  const GitHubIcon = () => (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d={siGithub.path} />
    </svg>
  );

  const linkIcons = {
    source_url: GitHubIcon,
    preview_url: ExternalLink,
  };

  return (
    <Table className="rounded-lg border overflow-hidden">
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={col}
              className="capitalize py-4 text-muted-foreground text-sm"
            >
              {col.replaceAll("_", " ")}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="hover:bg-neutral-50 transition-colors"
          >
            {columns.map((col) => (
              <TableCell key={col} className="py-3">
                {isUrl(row[col]) ? (
                  <a href={row[col]} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 rounded-lg"
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
                ) : (
                  <span className="font-semibold">{row[col]}</span>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
