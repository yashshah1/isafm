import { useEffect, useState } from "react";
import dayjs from "dayjs";
import flattenDeep from "lodash.flattendeep";
import { URLForSlots } from "../constants";
const now = dayjs();

const copyURL = () => {
  navigator.clipboard.writeText(window.location.href).then(
    () => {},
    () => alert("error copying")
  );
};

const Results = ({ district, age }) => {
  const [isLoading, setIsloading] = useState(false);
  const [capacity, setCapacity] = useState(0);

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
          setCapacity(capacity);
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
            There are {capacity} slots in the next 7 days!{" "}
            {capacity === 0 ? "😔" : "🚀"}
          </h1>
          <span>
            Want to check back again later?{" "}
            <u onClick={copyURL}>Copy the URL!</u>
          </span>
        </div>
      )}
    </>
  );
};

export default Results;
