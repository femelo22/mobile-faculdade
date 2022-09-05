import React, { createContext, useCallback, useState } from "react";
import { Text } from "react-native";
import { Title } from "react-native-paper";
import { View } from "react-native-web";
import BotaoSomar from "./BotaoSomar";

export default function Calculadora() {

    const [count, setCount] = useState(0);

    const somar = useCallback(() => {
        setCount(() => count++);
      }, [count]);

    const themes = {
        light: {
          foreground: "#000000",
          background: "#eeeeee"
        },
        dark: {
          foreground: "#ffffff",
          background: "#222222"
        }
      };

    const ThemeContext = React.createContext(themes, somar)

    return  <ThemeContext.Provider value={themes}>
        <Title>Calculadora que só SOMA</Title>

        <BotaoSomar operacao={count}/>

        <View>
            <Text>Resultado: {count} </Text>
        </View>
    </ThemeContext.Provider>
}