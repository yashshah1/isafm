import dayjs from "dayjs";
import flattenDeep from "lodash.flattendeep";
import { URLForSlots } from "../constants";

const now = dayjs();

export const fetchSlots = (district, age) => {
  if (+age < 18) return Promise.resolve([]);
  const date = now.format("DD-MM-YYYY");
  const URL = `${URLForSlots}district_id=${district}&date=${date}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((res) => res.centers)
    .then((centers) => {
      return centers.map((center) => {
        return center.sessions.map((session) => ({
          block: center.block_name,
          fee: center.fee_type,
          name: center.name,
          pincode: center.pincode,
          capacity: session.available_capacity,
          min_age: session.min_age_limit,
          vaccine: session.vaccine,
          date: session.date,
        }));
      });
    })
    .then((sessions) => flattenDeep(sessions))
    .then((sessions) =>
      sessions.filter((s) => s.capacity > 0 && s.min_age <= +age)
    );
};

export const getCountOfSlots = (slots) => {
  return slots.reduce((ac, v) => ac + v.capacity, 0);
};
