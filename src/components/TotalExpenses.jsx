import { Box, Text, HStack, Stat, StatLabel, StatNumber, StatArrow } from "@chakra-ui/react";

const TotalExpenses = () => {
  return (
    <Box
      p={6}
      bg="whiteAlpha.50"
      borderRadius="xl"
      backdropFilter="blur(10px)"
      boxShadow="xl"
    >
      <Text fontSize="lg" mb={6} fontWeight="medium">
        Total Expenses
      </Text>
      <HStack spacing={8} justify="space-between">
        <Stat>
          <StatLabel color="gray.400">Today</StatLabel>
          <StatNumber fontSize="2xl">
            <HStack spacing={2} align="center">
              <Text>$125</Text>
              <StatArrow type="increase" color="red.400" />
            </HStack>
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel color="gray.400">This Week</StatLabel>
          <StatNumber fontSize="2xl">
            <HStack spacing={2} align="center">
              <Text>$940</Text>
              <StatArrow type="decrease" color="green.400" />
            </HStack>
          </StatNumber>
        </Stat>
      </HStack>
    </Box>
  );
};

export default TotalExpenses;
