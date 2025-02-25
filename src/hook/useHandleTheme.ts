import React, { useEffect } from "react";
import { View, Text, useColorScheme } from "react-native";

const useHandleTheme = () => {
  const theme = useColorScheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return { theme };
};

export default useHandleTheme;
