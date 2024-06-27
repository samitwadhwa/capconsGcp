import { DataTable } from "@/components/dashboard/tables/data-table";
import React from "react";
import { columns } from "@/components/dashboard/tables/columns";
import { data } from "./task";

const Dashboard = async () => {
  return (
    <div>
      <DataTable columns={data} data={columns} />
    </div>
  );
};

export default Dashboard;
