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
  IconButton,
  ListItemSecondaryAction,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RuleIcon from "@mui/icons-material/Rule";

const clients = ["Client A", "Client B", "Client C"];
const databases = ["Database 1", "Database 2", "Database 3"];

let localCharacteristics = [
  "Local Characteristic 1",
  "Local Characteristic 2",
  "Local Characteristic 3",
];
let globalCharacteristics = [
  "Global Characteristic 1",
  "Global Characteristic 2",
  "Global Characteristic 3",
];
let rules = ["Rule 1", "Rule 2", "Rule 3"];

export default function Rules() {
  const [client, setClient] = useState<string | null>(null);
  const [database, setDatabase] = useState<string | null>(null);
  const [selectedGlobalCharacteristic, setSelectedGlobalCharacteristic] =
    useState<string | null>(null);
  const [showRules, setShowRules] = useState<boolean>(false);

  const handleDeleteGlobalCharacteristic = (value: string) => {
    globalCharacteristics = globalCharacteristics.filter((v) => v !== value);
    if (selectedGlobalCharacteristic === value) {
      setSelectedGlobalCharacteristic(null);
    }
  };

  const handleAddGlobalCharacteristic = () => {
    globalCharacteristics = [
      ...globalCharacteristics,
      `Global Characteristic ${globalCharacteristics.length + 1}`,
    ];
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Rules</Typography>
      <Paper elevation={3} sx={{ my: 2, p: 2 }}>
        <Typography variant="h6">
          <FilterListIcon sx={{ mr: 1 }} />
          Filters
        </Typography>
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
          onClick={() => setShowRules(true)}
        >
          Visualize Rules
        </Button>
      </Paper>
      {showRules && (
        <Paper elevation={3} sx={{ my: 2, p: 2 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <ListAltIcon sx={{ mr: 1 }} />
                Local Characteristics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {localCharacteristics.map((value, index) => (
                  <Grid item xs={4} key={index}>
                    <Typography>{value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <ListAltIcon sx={{ mr: 1 }} />
                Global Characteristics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {globalCharacteristics.map((value, index) => (
                  <Grid item xs={4} key={index}>
                    <Button
                      onClick={() => setSelectedGlobalCharacteristic(value)}
                    >
                      <Typography>{value}</Typography>
                    </Button>

                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteGlobalCharacteristic(value)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                ))}
                <Grid item xs={4}>
                  <IconButton onClick={handleAddGlobalCharacteristic}>
                    <AddIcon />
                  </IconButton>
                  <Typography>Add new global characteristic</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <RuleIcon sx={{ mr: 1 }} />
                Rules
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {selectedGlobalCharacteristic ? (
                <TextareaAutosize
                  minRows={3}
                  placeholder="Enter rules here"
                  style={{ width: "100%" }}
                />
              ) : (
                <Typography>Select a global characteristic</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Paper>
      )}
    </Box>
  );
}
