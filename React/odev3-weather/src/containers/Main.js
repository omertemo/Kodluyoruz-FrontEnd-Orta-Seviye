import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import { useSelectCity } from "../context/CitiesContext";

const Item = styled("div")(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "4px",
}));

export default function Main() {
  const { weather, city } = useSelectCity();
  // console.log(weather);
  console.log(city);
  return (
    <Box>
      <Grid container justifyContent="center" direction="row" sx={{ mb: 3 }}>
        <Grid item md={2} justifyContent="center">
          <Typography component="div" sx={{ py: 2 }}>
            <Box sx={{ fontSize: 20 }}>Anlık Durum</Box>
            <div>
              {" "}
              <g-img>
                <img
                  className="YQ4gaf zr758c"
                  src={weather[0].day.condition.icon}
                  alt=""
                />
              </g-img>
            </div>
            <Box sx={{ fontSize: 40, m: -1 }}>
              {Math.round(weather[0].day.avgtemp_c)}°
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid container xs={12} lg={12} spacing={2}>
          {weather.map((item, index) => {
            const date = new Date(item.date);
            const dayNumber = date.getDay();
            const daysOfWeek = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
            const day = daysOfWeek[dayNumber];
            return (
              <Grid key={index} xs={12} md={12 / 7} lg={12 / 7}>
                <Item
                  sx={{
                    border: "none",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Box
                    id="category-a"
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    {day}
                  </Box>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ p: 2 }}
                  >
                    <div>
                      {" "}
                      <g-img>
                        <img
                          className="YQ4gaf zr758c"
                          src={item.day.condition.icon}
                          alt=""
                        />
                      </g-img>
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "27px",
                        paddingTop: "1rem",
                      }}
                    >
                      <span>
                        <strong>{Math.round(item.day.mintemp_c)}°</strong>{" "}
                        {Math.round(item.day.maxtemp_c)}°
                      </span>
                    </div>
                  </Box>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
