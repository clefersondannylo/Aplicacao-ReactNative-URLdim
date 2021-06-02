import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";
import ModalLink from '../../components/ModalLink'
import { Feather } from "@expo/vector-icons";
export default function Home() {
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  
  function handleShortLink() {
   // alert("URL encurtada: " + input);
    setModalVisible(true);
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#0085ff", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage barStyle="ligh-content" backgroundColor="#0085ff" />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/Logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>
          <ContainerContent>
            <Title>URLdim</Title>
            <SubTitle>Cole o link que deseja encurtar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keybordType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>
            <ButtonLink onPress={handleShortLink} >
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal
        visible={false} transparent animationType='slide'>
          <ModalLink/>
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
