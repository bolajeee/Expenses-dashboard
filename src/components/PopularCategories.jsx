
import { Box, Text, VStack, HStack, Tag } from "@chakra-ui/react";

const PopularCategories = () => {
  const categories = [
    { name: "Food", cost: "$300" },
    { name: "Transport", cost: "$150" },
    // Add more categories as needed
  ];

  return (
    <Box p={4} bg="gray.700" borderRadius="lg">
      <Text fontSize="lg" mb={4} color="white">
        Popular Categories
      </Text>
      <VStack spacing={2} align="start">
        {categories.map((category, index) => (
          <HStack key={index} justify="space-between" w="full" h="100%">
            <Text color="gray.200">{category.name}</Text>
            <Tag colorScheme="teal">{category.cost}</Tag>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default PopularCategories;
