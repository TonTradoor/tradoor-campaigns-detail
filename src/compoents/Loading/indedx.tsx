"use clinet";

import { Spinner, Center, CenterProps } from "@chakra-ui/react";

const Loading = (prop: CenterProps) => {
  return (
    <Center h="300px" w="100%" {...prop}>
      <Spinner color="#FF5B00" opacity={0.5} speed="0.8s" w="48px" h="48px" />
    </Center>
  );
};

export default Loading;
