import { useReactTable, getCoreRowModel, flexRender, } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { spreadsheetData } from "../Data";
import {
    Briefcase, Calendar, CheckCircle2, User, Globe, Users, Plus,
} from "lucide-react";
import { useMemo } from "react";

type Row = typeof spreadsheetData[0];

const Grid = () => {
    const data = spreadsheetData;

    const columns = useMemo<ColumnDef<Row>[]>(
        () => [
            {
                id: "rowNumber",
                header: "#",
                cell: ({ row }) => <span>{row.index + 1}</span>,
            },
            {
                accessorKey: "jobRequest",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        Job Request
                    </div>
                ),
            },
            {
                accessorKey: "submitted",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        Submitted
                    </div>
                ),
            },
            {
                accessorKey: "status",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-gray-500" />
                        Status
                    </div>
                ),
                cell: (info) => {
                    const value = info.getValue() as string;

                    const statusStyles: Record<string, string> = {
                        "In-process": "bg-yellow-100 text-yellow-800",
                        "Need to start": "bg-blue-100 text-blue-800",
                        "Complete": "bg-green-100 text-green-800",
                        "Blocked": "bg-red-100 text-red-800",
                    };

                    const classes = statusStyles[value];

                    return (
                        <span
                            className={`text-xs px-2 py-[2px] rounded-2xl font-medium inline-block ${classes}`}
                        >
                            {value}
                        </span>
                    );
                },
            },
            {
                accessorKey: "submitter",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold">
                        <User className="w-4 h-4 text-gray-500" />
                        Submitter
                    </div>
                ),
            },
            {
                accessorKey: "url",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold">
                        <Globe className="w-4 h-4 text-gray-500" />
                        URL
                    </div>
                ),
                cell: (info) => {
                    const url = info.getValue() as string;
                    return url ? (
                        <a
                            href={`https://${url}`}
                            target="_blank"
                            className="text-blue-500 underline"
                        >
                            {url}
                        </a>
                    ) : null;
                }

            },
            {
                accessorKey: "assigned",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold py-1">
                        <Users className="w-4 h-4 text-green-700" />
                        Assigned
                    </div>
                ),
            },
            {
                accessorKey: "priority",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold py-1 rounded">Priority</div>
                ),
                cell: (info) => {
                    const value = info.getValue() as string;

                    const textColorMap: Record<string, string> = {
                        High: "text-red-700",
                        Medium: "text-yellow-600",
                        Low: "text-blue-600",
                    };

                    const className = textColorMap[value];

                    return <span className={`text-sm font-medium ${className}`}>{value}</span>;
                },
            },
            {
                accessorKey: "dueDate",
                header: () => (
                    <div className="flex items-center gap-1 text-gray-600 font-semibold py-1 rounded">Due Date</div>
                ),
            },
            {
                accessorKey: "estValue",
                header: () => (
                    <div className="text-orange-800 font-semibold text-sm">Est. Value</div>
                ),
            },
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-auto border-l border-t border-gray-300">
            <table className="table-fixed min-w-full text-sm border-collapse">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className={`border-r border-b border-gray-300 px-2 py-1 font-medium text-left ${header.id === "assigned"
                                        ? "bg-green-100 text-green-800"
                                        : header.id === "priority"
                                            ? "bg-purple-100 text-purple-800"
                                            : header.id === "estValue"
                                                ? "bg-orange-100 text-orange-800"
                                                : header.id === "dueDate"
                                                    ? "bg-purple-100 text-purple-800"
                                                    : "bg-gray-200 text-gray-800"
                                        }`}
                                    style={{
                                        minWidth: header.id === "rowNumber" ? "40px" : "120px",
                                        width: header.id === "rowNumber" ? "40px" : undefined,
                                    }}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                            <th className="w-10 border-r border-b border-gray-300 bg-gray-100 text-center">
                                <Plus className="w-4 h-4 text-gray-500 cursor-pointer mx-auto" />
                            </th>
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="border-r border-b border-gray-300 px-2 py-1 whitespace-nowrap"
                                    style={{
                                        minWidth: cell.column.id === "rowNumber" ? "40px" : undefined,
                                        width: cell.column.id === "rowNumber" ? "40px" : undefined,
                                    }}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                            <td className="border-r border-b border-gray-300" />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grid;
