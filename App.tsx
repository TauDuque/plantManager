import React from "react";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes/index";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontesLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontesLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
