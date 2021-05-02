import MUIDataTable from "mui-datatables";
import Spinner from "../Spinner";

import isSubSequence from "../../utils/isSubSequence";

const baseOptions = {
  download: false,
  print: false,
  viewColumns: false,
  selectableRows: "none",
  responsive: "standard",
  rowsPerPage: 10,
  rowsPerPageOptions: [],
  customSearch: (query, curr) => isSubSequence(query, curr[0]),
};
const BaseTable = ({ columns, data, options = {}, isLoading }) => {
  options = { ...options, ...baseOptions };
  return isLoading ? (
    <Spinner />
  ) : (
    <MUIDataTable
      title="Available Slots"
      columns={columns}
      options={options}
      data={data}
    />
  );
};

export default BaseTable;
