
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box, Text, Flex } from "@chakra-ui/react";
import ColorLegend from "./ColorLegend";

const data = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Entertainment", value: 300 },
  { name: "Utilities", value: 200 },
];

const COLORS = ["#FF0080", "#50C878", "#FFA500", "#00BFFF"];

const PieChartComponent = () => {
  return (
    <Flex>
      <Box
        p={6}
        bg="whiteAlpha.50"
        borderRadius="xl"
        backdropFilter="blur(10px)"
        boxShadow="xl"
        height="400px"
        width="400px"
      >
        <Text fontSize="lg" mb={4} fontWeight="medium">
          Expense Distribution
        </Text>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                p={6}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Box>
      <ColorLegend />
    </Flex>
  );
};

export default PieChartComponent;
