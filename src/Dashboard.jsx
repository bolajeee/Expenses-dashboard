
import {
  Grid,
  Box,
  useColorMode,
  Container,
  Button,
  
} from "@chakra-ui/react";
import PopularCategories from "./components/PopularCategories";
import TotalExpenses from "./components/TotalExpenses";
import FrequencyOfTransactions from "./components/FrequencyOfTransactions";
import PopularTransactions from "./components/PopularTransactions";
import ExpenseTrends from "./components/ExpenseTrends";
import PieChartComponent from "./components/PieChart";

import Recommendations from "./components/Recommendations";

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh" bg={colorMode === "dark" ? "gray.900" : "gray.50"} py={8}>
      <Container maxW="1400px">
        <Button onClick={toggleColorMode} mb={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {/* Top Row */}
          <Box>
            <PopularCategories />
          </Box>
          <Box>
            <TotalExpenses />
          </Box>
          <Box>
            <FrequencyOfTransactions />
          </Box>

          {/* Middle Row */}
          <Box>
            <PopularTransactions />
          </Box>
          <Box gridColumn={{ md: "span 2" }}>
            <ExpenseTrends />
          </Box>

          {/* Bottom Row */}
          <Box>
            <PieChartComponent />
          </Box>
          <Box>
            <Recommendations />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
