import { Box, Text, VStack } from "@chakra-ui/react";

const Recommendations = () => {
  const recommendations = [
    "Consider reducing dining out expenses.",
    "Look for discounts on groceries.",
    "Track your spending in the transportation category.",
    "Set a budget for entertainment to avoid overspending.",
    // Add more recommendations as needed
  ];

  return (
    <Box p={4} bg="gray.700" borderRadius="lg">
      <Text fontSize="lg" mb={4} color="white">
        Recommendations
      </Text>
      <VStack spacing={2} align="start">
        {recommendations.map((rec, index) => (
          <Text key={index} color="gray.200">
            - {rec}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Recommendations;
