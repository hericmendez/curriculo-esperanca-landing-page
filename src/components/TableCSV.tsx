import React, { useEffect, useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';

type SheetRow = Record<string, string>;

const SheetTable: React.FC = () => {
  const [data, setData] = useState<SheetRow[]>([]);

  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQNSM5yQk7RmbpMH6YGajp4iYmHaRh6nV17ugFYuobtb3y1ZPLZjkouP7BGGpe37K-W33jLd3wkMQme/pub?gid=1211938411&single=true&output=csv'
    )
      .then((res) => res.text())
      .then((csv) => {
      console.log("csv ==> ", csv);
        const [headerLine, ...lines] = csv.trim().split('\n');
        const headers = headerLine.split(',');

        const parsed: SheetRow[] = lines.map((line) => {
          const values = line.split(',');
          const row: SheetRow = {};
          headers.forEach((header, i) => {
            row[header] = values[i] ?? '';
          });
          return row;
        });

        setData(parsed);
      });
  }, []);

  const columns = useMemo<ColumnDef<SheetRow>[]>(() => {
    if (data.length === 0) return [];

    return Object.keys(data[0]).map((key) => ({
      accessorKey: key,
      header: key,
    }));
  }, [data]);

  const table = useReactTable<SheetRow>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 px-4 py-2 text-left font-medium whitespace-nowrap"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => {
                const value = cell.getValue() as string;
                const isLink = value.startsWith('http://') || value.startsWith('https://');

                return (
                  <td key={cell.id} className="border border-gray-200 px-4 py-2 whitespace-nowrap">
                    {isLink ? (
                      <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetTable;
