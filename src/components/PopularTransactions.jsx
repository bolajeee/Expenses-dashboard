
import { Box, Text, VStack, HStack, Tag } from '@chakra-ui/react';

const PopularTransactions = () => {
  const transactions = [
    { name: 'Coffee', amount: '$5' },
    { name: 'Groceries', amount: '$50' },
    { name: 'Rent', amount: '$1200' },
    // Add more transactions as needed
  ];

  return (
    <Box p={4} bg="gray.700" borderRadius="lg">
      <Text fontSize="lg" mb={4} color="white">
        Popular Transactions
      </Text>
      <VStack spacing={2} align="start" height={300}>
        {transactions.map((transaction, index) => (
          <HStack key={index} justify="space-between" w="full">
            <Text color="gray.200">{transaction.name}</Text>
            <Tag colorScheme="teal">{transaction.amount}</Tag>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default PopularTransactions; 