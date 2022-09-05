import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";

export default function BotaoSomar( props ) {

    // const theme = useContext(ThemeContext)

    console.log(props.operacao)

    return <>
        <TouchableOpacity>
            <Text>SOMAR</Text>
        </TouchableOpacity>
    </>
}