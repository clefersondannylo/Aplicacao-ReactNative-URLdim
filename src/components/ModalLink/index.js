import React from "react";
import { ModalContainer, Container, Header, LinkArea,Title,LongUrl,ShortLinkUrl,ShortLinkArea } from "./styles";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ModalLink() {
  return (
    <ModalContainer>
      <Container>
        <Header>
          <TouchableOpacity>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        
        <LinkArea>
            <Title>SFSFDAFDAFafda</Title>
            <LongUrl numberOfLines={1}>https://google.com</LongUrl>

            <ShortLinkArea>
                <ShortLinkUrl 
                numberOfLines={1}>https:bit.ly/dsf4</ShortLinkUrl>
                <TouchableOpacity>
                    <Feather
                    name="copy"
                    size="25"
                    color="#fff"
                    />
                </TouchableOpacity>
            </ShortLinkArea>
        </LinkArea>

      </Container>
    </ModalContainer>
  );
}
