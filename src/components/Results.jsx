import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Spinner from "./Spinner";

const Results = ({ capacity, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const copyURL = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => setIsOpen(true),
      () => alert("error copying")
    );
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className="flex flex-column align-center"
          style={{ marginBottom: "1rem", textAlign: "center" }}
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
