import React, { useState } from "react";
import { WordState } from "./Context";
import "./WordDefinition.css";
import { Text, Grid, GridItem, HStack } from "@chakra-ui/react";

const WordDefinition = (props) => {
  const { state, dispatch } = WordState();
  return (
    <Grid templateColumns="1fr 3fr 1fr" gap={1} color="#c0f7b7">
      <GridItem>
        <Text>Correct Answer</Text>
      </GridItem>
      <GridItem colStart={2} colEnd={-1}>
        <Text textAlign="center">{state.rightAns.join("")}</Text>
      </GridItem>
      {props.word.map((wordDef) => (
        <>
          <GridItem colStart={1} colEnd={-1}>
            <Text textAlign="center">{wordDef.fl.toUpperCase()}</Text>
          </GridItem>
          <GridItem>
            <Text>Synonyms</Text>
          </GridItem>
          <GridItem colStart={2} colEnd={-1}>
            <HStack>
              {wordDef.meta.syns[0].map((syn, index) =>
                index != wordDef.meta.syns[0].length - 1 ? (
                  <Text>{`${syn},`}</Text>
                ) : (
                  <Text>{syn}</Text>
                )
              )}
            </HStack>
          </GridItem>
          <GridItem>
            <Text>Short Definition</Text>
          </GridItem>
          <GridItem colStart={2} colEnd={-1}>
            {wordDef.shortdef.map((shortdef) => (
              <Text>{shortdef}</Text>
            ))}
          </GridItem>
        </>
      ))}
    </Grid>
  );
};

export default WordDefinition;
