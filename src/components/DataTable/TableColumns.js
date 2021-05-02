const baseFilterOptions = {
  filter: true,
  sort: false,
  filterType: "dropdown",
};
const multiFilterOptions = {
  ...baseFilterOptions,
  filterType: "multiselect",
};
const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
      sortThirdClickReset: true,
    },
  },
  {
    name: "date",
    label: "Date",
    options: {
      ...multiFilterOptions,
      sort: true,
    },
  },
  {
    name: "capacity",
    label: "Capacity",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "pincode",
    label: "Pin Code",
    options: multiFilterOptions,
  },
  {
    name: "vaccine",
    label: "Vaccine",
    options: baseFilterOptions,
  },
  {
    name: "block",
    label: "Block",
    options: {
      display: false,
      filter: true,
      filterType: "multiselect",
    },
  },
];

export default columns;
