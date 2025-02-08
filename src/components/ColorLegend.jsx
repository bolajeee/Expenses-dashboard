
import { Box, Text, HStack } from "@chakra-ui/react";

const data = [
  { name: "Food", color: "#FF0080" },
  { name: "Transport", color: "#50C878" },
  { name: "Entertainment", color: "#FFA500" },
  { name: "Utilities", color: "#00BFFF" },
];

const ColorLegend = () => {
  return (
    <Box>
      <Text fontSize="lg" mb={4} ml={6} fontWeight="medium">
        Expense Categories
      </Text>
      {data.map((item, index) => (
        <HStack key={index} spacing={2} mb={2} ml={6}>
          <Box w={4} h={4} bg={item.color} borderRadius="md" />
          <Text>{item.name}</Text>
        </HStack>
      ))}
    </Box>
  );
};

export default ColorLegend;
