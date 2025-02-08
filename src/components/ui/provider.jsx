"use client";

import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Provider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
