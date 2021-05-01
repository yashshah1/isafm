import { useState, useEffect } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import Selector from "./components/Selector";
import Results from "./components/Results";
import Footer from "./components/Footer";

import fetchStates from "./utils/fetchStates";
import fetchDistricts from "./utils/fetchDistricts";
import * as URLUtils from "./utils/url";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
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
    setIsLoading(true);
    const getDistricts = async () => {
      const districts = await fetchDistricts(selectedState);
      setDistricts(
        districts.map(({ district_id, district_name }) => ({
          id: district_id,
          name: district_name,
        }))
      );
      setIsLoading(false);
    };
    getDistricts();
  }, [selectedState]);

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
      <Container maxWidth="sm">
        <h1 align="center">Is a slot available for me?</h1>
        <h3 align="center">For people who are too lazy to login</h3>
        <br />
        {isLoading ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="flex justify-center">
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
            </div>
            <br />
            {selectedDistrict !== "" && (
              <div className="flex" style={{ flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  width="sm"
                  value={age}
                  onChange={getChangeHandler("age")}
                />
              </div>
            )}
          </>
        )}

        <br />
        <br />
        {selectedDistrict !== "" && age !== "" && (
          <Results district={selectedDistrict} age={age} />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default withRouter(App);
