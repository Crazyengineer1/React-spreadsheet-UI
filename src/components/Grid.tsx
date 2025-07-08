import { useReactTable, getCoreRowModel, flexRender, } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { spreadsheetData } from "../Data";
import {
    Briefcase, Calendar, CheckCircle2, User, Globe, Users, Plus, SortDesc, Link
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
        <>
            <div className="overflow-auto border-l border-t border-gray-300">
                <table className="table-fixed min-w-full text-sm border-collapse">
                    <thead>
                        <tr className="text-sm">

                            <th className="border-r border-b border-gray-300 bg-white p-0" />

                            <th colSpan={4} className="border-r border-b border-gray-300 bg-gray-100">
                                <div className="flex items-center gap-2 w-full h-full px-3 py-1">
                                    <Link className="w-4 h-4 text-blue-500" />
                                    <input
                                        type="text"
                                        defaultValue="Q3 Financial Overview"
                                        className="bg-transparent focus:outline-none text-sm font-medium w-60"
                                    />
                                </div>
                            </th>
                            <th className="border-r border-b border-gray-300 bg-white p-0" />

                            <th className="border-r border-b border-gray-300 bg-green-100 hover:cursor-pointer" onClick={() => {
                                console.log("ABC");
                            }}>
                                <div className="flex items-center justify-between w-full h-full px-3 py-1 text-sm text-green-900 font-semibold">
                                    <div className="flex items-center gap-1">
                                        <SortDesc className="w-4 h-4" />
                                        ABC
                                    </div>
                                    <span className="text-gray-500">•••</span>
                                </div>
                            </th>

                            <th colSpan={2} className="border-r border-b border-gray-300 bg-purple-100 hover:cursor-pointer" onClick={() => {
                                console.log("Answer a question");
                            }}>
                                <div className="flex items-center justify-between w-full h-full px-3 py-1 text-sm text-purple-900 font-semibold">
                                    <div className="flex items-center gap-1">
                                        <SortDesc className="w-4 h-4" />
                                        Answer a question
                                    </div>
                                    <span className="text-gray-500">•••</span>
                                </div>
                            </th>

                            <th className="border-r border-b border-gray-300 bg-orange-100 hover:cursor-pointer" onClick={() => {
                                console.log("Extract");
                            }}>
                                <div className="flex items-center justify-between w-full h-full px-3 py-1 text-sm text-orange-900 font-semibold">
                                    <div className="flex items-center gap-1">
                                        <SortDesc className="w-4 h-4" />
                                        Extract
                                    </div>
                                    <span className="text-gray-500">•••</span>
                                </div>
                            </th>

                            <th className="border-r border-b border-gray-300 bg-gray-100 text-center w-10 hover:cursor-pointer hover:bg-gray-200" onClick={() => {
                                console.log("Plus");
                            }}>
                                <button className="w-6 h-6 rounded-full hover:cursor-pointer flex items-center justify-center">
                                    <Plus className="w-4 h-4 text-gray-700" />
                                </button>
                            </th>
                        </tr>
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
                                <th className="w-10 border-r border-b border-gray-300 bg-white" />
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td
                                        key={cell.id}
                                        className="border-r border-b border-gray-300 px-2 py-1 whitespace-nowrap transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 hover:border-green-200 hover:border-2"
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
            <div className="flex gap-4 px-4 py-2 border-t border-gray-300 text-sm bg-white w-full sticky bottom-0">
                {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => console.log(`${tab}`)}
                        className={`px-2 py-[2px] ${index === 0
                            ? "text-green-900 font-semibold border-b-4 border-green-700 bg-green-100"
                            : "text-gray-600 hover:text-black hover:cursor-pointer"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
                <button
                    onClick={() => console.log("Add tab")}
                    className="text-xl font-light text-gray-500 hover:text-black hover:cursor-pointer"
                >
                    +
                </button>
            </div>

        </>
    );
};

export default Grid;
