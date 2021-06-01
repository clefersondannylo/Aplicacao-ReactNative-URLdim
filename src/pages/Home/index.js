import React from "react";
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
  ButtonLinkText
} from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <LinearGradient
      colors={["#0085ff", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBarPage barStyle="ligh-content" backgroundColor="#0085ff" />
      <Menu />

      <ContainerLogo>
        <Logo source={require("../../assets/Logo.png")} resizeMode="contain" />
      </ContainerLogo>
      <ContainerContent>
        <Title>URLdim</Title>
        <SubTitle>Cole o link que deseja encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#fff" />
          </BoxIcon>
          <Input placeholder="Cole seu link aqui..." placeholderTextColor="#fff"/>
        </ContainerInput>
        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  );
}
