import { HStack, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import React from "react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Mais uma vez estou aqui copiando a porra do outro jogo. Se tu quiser
            saber como joga essa merda vai lá no outro jogo e aprende porra não
            é dificil... só parar de ser burro porque é super auto explicativo.
            Chuta a porra das palavras ai e ve a merda da cor. Tu é daltonico
            agora?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text textAlign="center" w="100%">
        Word Game
      </Text>
    </HStack>
  );
};

export default Header;
