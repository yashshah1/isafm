import columns from "./TableColumns";
import BaseTable from "./BaseTable";

const DataTable = ({ slots, isLoading }) => {
  return <BaseTable columns={columns} data={slots} isLoading={isLoading} />;
};

export default DataTable;
