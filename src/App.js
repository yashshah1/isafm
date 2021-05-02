import { useState, useEffect } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Selector from "./components/Selector";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import DataTable from "./components/DataTable";

import fetchStates from "./utils/fetchStates";
import fetchDistricts from "./utils/fetchDistricts";
import { fetchSlots, getCountOfSlots } from "./utils/fetchSlots";
import * as URLUtils from "./utils/url";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    marginLeft: "1rem",
    marginRight: "1rem",
  },
}));

function App() {
  const [isInitiallyLoading, setIsInitiallyLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [capacity, setCapacity] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [age, setAge] = useState("");

  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const getStates = async () => {
      const states = await fetchStates();
      setStates(
        states.map(({ state_id, state_name }) => ({
          id: state_id,
          name: state_name,
        }))
      );
      setIsInitiallyLoading(false);
    };
    getStates();
  }, []);

  useEffect(() => {
    const { state, district, age } = URLUtils.parseQueryString(search);
    if (state) setSelectedState(state);
    if (district) setSelectedDistrict(district);
    setAge(age ? age : "");
  }, [search]);

  useEffect(() => {
    setIsInitiallyLoading(true);
    const getDistricts = async () => {
      const districts = await fetchDistricts(selectedState);
      setDistricts(
        districts.map(({ district_id, district_name }) => ({
          id: district_id,
          name: district_name,
        }))
      );
      setIsInitiallyLoading(false);
    };
    getDistricts();
  }, [selectedState]);

  useEffect(() => {
    if (!(selectedDistrict && age)) return;

    setIsDataLoading(true);
    fetchSlots(selectedDistrict, age).then((slots) => {
      setTableData(slots);
      setCapacity(getCountOfSlots(slots));
      setIsDataLoading(false);
    });
  }, [selectedDistrict, age]);

  const getChangeHandler = (key) => (e) => {
    const obj = URLUtils.parseQueryString(search);
    let value = e.target.value;
    if (key === "age") value = value.replace(/\D/g, "");
    obj[key] = value.toString();
    const url = URLUtils.generateQueryString(obj);
    history.push(`?${url}`);
  };

  return (
    <>
      <div className={classes.root}>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="flex flex-column">
              <br />
              {isInitiallyLoading ? (
                <Spinner />
              ) : (
                <div className="flex justify-center align-center flex-wrap gap-1">
                  <Selector
                    values={states}
                    selectedValue={selectedState}
                    classes={classes}
                    onSelect={getChangeHandler("state")}
                    prefix="state"
                  />
                  <Selector
                    values={districts}
                    selectedValue={selectedDistrict}
                    classes={classes}
                    onSelect={getChangeHandler("district")}
                    prefix="district"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    width="md"
                    value={age}
                    onChange={getChangeHandler("age")}
                  />
                </div>
              )}
              {selectedDistrict !== "" && age !== "" && (
                <Results capacity={capacity} isLoading={isDataLoading} />
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <DataTable slots={tableData} isLoading={isDataLoading} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(App);
