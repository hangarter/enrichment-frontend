import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const mockData = [
  {
    client: "Client A",
    csvName: "database_1",
    fileName: "file1.csv",
    processingStartDate: "2023-07-22 10:00:00",
    processingEndDate: "2023-07-22 11:30:00",
    progress: 50,
  },
  {
    client: "Client B",
    csvName: "database_2",
    fileName: "file2.csv",
    processingStartDate: "2023-07-22 12:00:00",
    processingEndDate: "",
    progress: 25,
  },
  {
    client: "Client A",
    csvName: "database_1",
    name: "file3.csv",
    processingStartDate: "2023-07-22 13:40:00",
    processingEndDate: "",
    progress: 75,
  },
  // Add more mock data here...
];

export default function Dashboard() {
  const [filter, setFilter] = React.useState({ client: "", csvName: "" });

  const filteredData = mockData.filter((file) => {
    const clientMatch = file.client
      .toLowerCase()
      .includes(filter.client.toLowerCase());
    const csvNameMatch = file.csvName
      .toLowerCase()
      .includes(filter.csvName.toLowerCase());
    return clientMatch && csvNameMatch;
  });

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Paper elevation={3} sx={{ my: 2, p: 2 }}>
        <Typography variant="h6">Filters:</Typography>
        <form>
          <TextField
            label="Filter by client..."
            value={filter.client}
            onChange={(e) => setFilter({ ...filter, client: e.target.value })}
            variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
          />
          <TextField
            label="Filter by filename..."
            value={filter.csvName}
            onChange={(e) => setFilter({ ...filter, csvName: e.target.value })}
            variant="outlined"
            size="small"
          />
        </form>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Client</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Database</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">File Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">
                  Processing Start Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Processing End Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Progress</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.client}</TableCell>
                <TableCell>{file.csvName}</TableCell>
                <TableCell>{file.fileName}</TableCell>
                <TableCell>{file.processingStartDate}</TableCell>
                <TableCell>{file.processingEndDate}</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={file.progress}
                    sx={{
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: "#f0f0f0",
                    }}
                    color="secondary" // Change the color to match your theme
                  />
                  <Box sx={{ ml: 1 }}>{file.progress}%</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
