import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle} from "./styles";

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
        <Title>Link b</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>
      </ContainerContent>
    </LinearGradient>
  );
}
