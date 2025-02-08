import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const FrequencyOfTransactions = () => {
  const frequencyData = {
    daily: 7.1,
    weekly: 51.0,
  };

  return (
    <Box p={4} bg="gray.700" borderRadius="lg">
      <Text fontSize="lg" mb={4} color="white">Frequency of Transactions</Text>
      <VStack spacing={2}>
        <Text color="gray.200">Daily Average: {frequencyData.daily} transactions</Text>
        <Text color="gray.200">Weekly Average: {frequencyData.weekly} transactions</Text>
      </VStack>
    </Box>
  );
};

export default FrequencyOfTransactions; 