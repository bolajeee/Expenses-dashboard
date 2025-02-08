
import { Box, useColorMode } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExpenseTrends = () => {
  const { colorMode } = useColorMode();
  const data = [
    { name: 'Jan', expenses: 400, income: 500 },
    { name: 'Feb', expenses: 300, income: 400 },
    { name: 'Mar', expenses: 200, income: 300 },
    { name: 'Apr', expenses: 278, income: 390 },
    { name: 'May', expenses: 189, income: 480 },
  ];

  return (
    <Box
      p={6}
      bg="whiteAlpha.50"
      borderRadius="xl"
      backdropFilter="blur(10px)"
      boxShadow="xl"
      h="full"
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis 
            dataKey="name"
            stroke={colorMode === "dark" ? "white" : "gray.800"}
          />
          <YAxis
            stroke={colorMode === "dark" ? "white" : "gray.800"}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colorMode === "dark" ? "#1A202C" : "white",
              borderColor: colorMode === "dark" ? "#2D3748" : "#E2E8F0",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#FF0080"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#50C878"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ExpenseTrends; 