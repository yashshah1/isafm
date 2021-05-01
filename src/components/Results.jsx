import { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import dayjs from "dayjs";
import flattenDeep from "lodash.flattendeep";
import { URLForSlots } from "../constants";

const now = dayjs();

const Results = ({ district, age }) => {
  const [isLoading, setIsloading] = useState(false);
  const [capacity, setCapacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const copyURL = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => setIsOpen(true),
      () => alert("error copying")
    );
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (+age < 18) {
        setCapacity(0);
        return;
      }
      setIsloading(true);
      const date = now.format("DD-MM-YYYY");
      const URL = `${URLForSlots}district_id=${district}&date=${date}`;
      fetch(URL)
        .then((res) => res.json())
        .then((res) => res.centers.map((center) => center.sessions))
        .then((sessions) => flattenDeep(sessions))
        .then((sessions) =>
          sessions.map((s) => ({
            capacity: s.available_capacity,
            min_age: s.min_age_limit,
          }))
        )
        .then((sessions) =>
          sessions.filter((s) => s.capacity > 0 && s.min_age <= +age)
        )
        .then((sessions) => sessions.reduce((ac, v) => ac + v.capacity, 0))
        .then((capacity) => {
          setCapacity(Math.floor(capacity));
          setIsloading(false);
        });
    };

    fetchResults();
  }, [district, age]);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div
          className="flex"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <h1 align="center">
            There {capacity === 1 ? "is" : "are"} {capacity}{" "}
            {capacity === 1 ? "slot" : "slots"} in the next 7 days!{" "}
            {capacity === 0 ? "😔" : "🚀"}
          </h1>
          <span style={{ userSelect: "none" }}>
            Want to check back again later?{" "}
            <u onClick={copyURL} style={{ cursor: "pointer" }}>
              Copy the URL!
            </u>
          </span>
        </div>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isOpen}
        autoHideDuration={2000}
        onClose={() => setIsOpen(false)}
        message="Copied to clipboard"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
};

export default Results;
