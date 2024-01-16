import Header from "./containers/Header";
import Main from "./containers/Main";
import Footer from "./containers/Footer";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { CitiesContextProvider } from "./context/CitiesContext";
import image from "./weather-images.jpg";

function App() {
  return (
    <CitiesContextProvider>
      <div
        id="App"
        style={{
          background: `url(${process.env.PUBLIC_URL}/pexels-pixabay-209831.jpg) center/cover no-repeat, #cfe8fc`,
        }}
      >
        <CssBaseline />
        <Container
          // maxWidth="md"
          fixed
          spacing={0}
          direction="column"
          sx={{
            // background: `url(${image}) center/cover no-repeat, #cfe8fc`,
            // background: `url(${process.env.PUBLIC_URL}/pexels-pixabay-209831.jpg) center/cover no-repeat, #cfe8fc`,

            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 1,
            m: "auto",
            borderRadius: 1,
          }}
        >
          <Box
            textAlign={"center"}
            sx={{
              // bgcolor: "#cfe8fc",
              // background: "transparent",
              // height: "60vh", //Bu arkadaş ilk görünen boyutu temsil ediypr. Telefonlarda aşağı kaydırılınca işi bozuyor
              width: "100%", // Genişliği 100% olarak ayarlayın
            }}
          >
            <Stack spacing={2}>
              <Header />
              <Main />
              <Footer />
            </Stack>
          </Box>
        </Container>
      </div>
    </CitiesContextProvider>
  );
}

export default App;
