"use client";

import React from "react";
import { Metadata } from "next";
import { useMemo, useState } from 'react';
import {
  MRT_TableContainer,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_TableState,
} from 'material-react-table';
import { data as initData } from './makeData';

type DataType = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
};

const Test: React.FC = () => {
  const columns = useMemo<MRT_ColumnDef<DataType>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
    ],
    [],
  );

  const [data, setData] = useState<DataType[]>(() => initData);

  const table = useMaterialReactTable<DataType>({
    autoResetPageIndex: false,
    columns,
    data,
    enableRowOrdering: true,
    enableSorting: false,
    muiRowDragHandleProps: ({ table }) => ({
      onDragEnd: () => {
        const tableState: MRT_TableState<DataType> = table.getState();
        const { draggingRow, hoveredRow } = tableState;
        if (hoveredRow && draggingRow) {
          const hoveredRowIndex = hoveredRow.index;
          const draggingRowIndex = draggingRow.index;
          if (hoveredRowIndex !== undefined && draggingRowIndex !== undefined) {
            data.splice(
              hoveredRowIndex,
              0,
              data.splice(draggingRowIndex, 1)[0],
            );
            setData([...data]);
          }
        }
      },
    }),
  });

  const handleGetRowOrder = () => {
    const rowOrder = data.map((row, index) => ({ id: row.id, order: index + 1 }));
    console.log(rowOrder);
  };

  return (
    <div className="pb-20 pt-40">
      <MRT_TableContainer table={table} />
      <button onClick={handleGetRowOrder}>Get Row Order</button>
    </div>
  );
};

export default Test;
