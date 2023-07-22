import * as React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Autocomplete,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const clients = ["Client A", "Client B", "Client C"];
const databases = ["Database 1", "Database 2", "Database 3"];

let localValues = ["Local Value 1", "Local Value 2", "Local Value 3"];
let globalValues = ["Global Value 1", "Global Value 2", "Global Value 3"];
const rules = ["Rule 1", "Rule 2", "Rule 3"];

export default function Rules() {
  const [client, setClient] = useState<string | null>(null);
  const [database, setDatabase] = useState<string | null>(null);
  const [selectedGlobalValue, setSelectedGlobalValue] = useState<string | null>(
    null
  );

  const handleDeleteGlobalValue = (value: string) => {
    globalValues = globalValues.filter((v) => v !== value);
    if (selectedGlobalValue === value) {
      setSelectedGlobalValue(null);
    }
  };

  const handleAddGlobalValue = () => {
    globalValues = [...globalValues, `Global Value ${globalValues.length + 1}`];
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Rules</Typography>
      <Paper elevation={3} sx={{ my: 2, p: 2 }}>
        <Typography variant="h6">Filters</Typography>
        <Box sx={{ my: 2 }}>
          <Autocomplete
            options={clients}
            value={client}
            onChange={(event, newValue) => {
              setClient(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Client" variant="outlined" />
            )}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Autocomplete
            options={databases}
            value={database}
            onChange={(event, newValue) => {
              setDatabase(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Database" variant="outlined" />
            )}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          disabled={!client || !database}
        >
          Visualize Rules
        </Button>
      </Paper>
      {client && database ? (
        <Paper elevation={3} sx={{ my: 2, p: 2 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Local Values</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {localValues.map((value, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={value} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Global Values</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {globalValues.map((value, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => setSelectedGlobalValue(value)}
                  >
                    <ListItemText primary={value} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteGlobalValue(value)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
                <ListItem button onClick={handleAddGlobalValue}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add new global value" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Rules</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {selectedGlobalValue ? (
                <List>
                  {rules.map((rule, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={rule} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>Select a global value</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Paper>
      ) : (
        <Typography>
          Select client and database to visualize their rules.
        </Typography>
      )}
    </Box>
  );
}
