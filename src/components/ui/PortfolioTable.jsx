import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function PortfolioTable({ section }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("links")
      .select("title, source_url, preview_url")

      .then(({ data, error }) => {
        if (!error) setItems(data);
      });
  }, [section]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Preview</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.title}</TableCell>
            <TableCell>
              <a
                href={item.source_url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Source
              </a>
            </TableCell>
            <TableCell>
              <a
                href={item.preview_url}
                target="_blank"
                className="text-green-500 hover:underline"
              >
                Live
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
