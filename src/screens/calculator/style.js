import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBg,
        flex: 1,
    },
    topPart: {
        height: "40%",
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    bottomPart: {
        height: "60%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 40,
    },
    display: {
        flex: 1,
        // backgroundColor: "red",
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: "flex-end"
    },
    inputText: {
        fontSize: 60,
        fontWeight: "600",
        color: colors.white
    },
    afterResultText: {
        fontSize: 30,
        fontWeight: "500",
        color: colors.white
    }
})