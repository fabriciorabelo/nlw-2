import React from "react";
import {
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBgImage}
                style={styles.content}
                resizeMode="contain"
            >
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar na nossa plataforma
                    web.
                </Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;
