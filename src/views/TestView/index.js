import { Container, Typography } from "@material-ui/core";
import CommonLayout from "../../layouts/CommonLayout";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../../graphql/Queries";
import { useState } from "react";
const TestView = () => {
  const [city, setCity] = useState("");
  const [details, setDetails] = useState({});
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: {
        name: city,
      },
    }
  );
  if (error) return <h1>Error Found</h1>;

  if (data) {
    console.log(data);
  }
  return (
    <CommonLayout>
      <Container
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <div className="home">
          <Typography color="primary" variant="h1">
            Search
          </Typography>
          <input
            type="text"
            placeholder="City name..."
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <button onClick={() => getWeather()}>Search</button>
          <div className="weather">
            {data && (
              <>
                <Typography variant="h1">{data.getCityByName.name}</Typography>
                <Typography variant="h1">
                  Temperature: {data.getCityByName.weather.temperature.actual}
                </Typography>
                <Typography variant="h1">
                  Description: {data.getCityByName.weather.summary.description}
                </Typography>
                <Typography variant="h1">
                  Wind Speed: {data.getCityByName.weather.wind.speed}
                </Typography>
              </>
            )}
          </div>
        </div>
      </Container>
    </CommonLayout>
  );
};

export default TestView;
