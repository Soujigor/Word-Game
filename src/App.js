import "./App.css";
import Display from "./Display";
import UserInput from "./UserInput";
import Header from "./Header";
import WrongLetters from "./WrongLetters";
import WordDefinition from "./WordDefinition";

import { WordState } from "./Context";
import { WORDS, API_KEY } from "./Constant";

import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { state, dispatch } = WordState();
  const [wordDef, setWordDef] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const randomWord = WORDS[Math.floor(Math.random() * (2315 + 1))];

  useEffect(() => {
    dispatch({ type: "LOADING", value: randomWord.split("") });
  }, []);

  useEffect(() => {
    async function fetchDef(word) {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setWordDef(data);
    }
    fetchDef(state.rightAns.join(""));
  }, [state]);

  console.log(state.rightAns);

  useEffect(() => {
    if (!state.isPlaying) {
      onOpen();
    }
  }, [state]);

  const nextWordHandler = () => {
    dispatch({ type: "NEXT" });
    onClose();
  };

  return (
    <Box
      minH="calc(100vh - 100px)"
      bgGradient="linear(to-r, #5ac994, #c0f7b7, #124143)"
    >
      <Grid
        templateColumns="1fr 3fr 1fr"
        templateRows="75px 550px 100px"
        gap={4}
      >
        <GridItem colStart={1} colEnd={4}>
          <Header />
        </GridItem>
        <GridItem bg="red.100" colStart={1} colEnd={2}>
          <Box>SideBar 1</Box>
        </GridItem>
        <GridItem
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          colStart={2}
          colEnd={3}
        >
          <Display />
          <UserInput />
        </GridItem>
        <GridItem bg="red.100">
          <WrongLetters />
        </GridItem>
      </Grid>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent bg="#141b29" color="#c0f7b7">
          <ModalHeader>Definitions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WordDefinition word={wordDef} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={nextWordHandler}>
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
