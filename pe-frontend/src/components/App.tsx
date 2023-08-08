import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import RuleManagement from "./RuleManagement";
import FilterManagement from "./FilterManagement";
import EnrichmentManagement from "./EnrichmentManagement";
import FeedbackLogs from "./FeedbackLogs";

import GavelIcon from "@mui/icons-material/Gavel";
import FilterListIcon from "@mui/icons-material/FilterList";
import TuneIcon from "@mui/icons-material/Tune";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BlocklyEditor from "./BlocklyEditor";

const theme = createTheme();

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Product Enrichment
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem>
              <ButtonBase
                component={Link}
                to="/rule-management"
                onClick={toggleDrawer(false)}
              >
                <GavelIcon style={{ marginRight: "10px" }} />
                <ListItemText primary="Rule Management" />
              </ButtonBase>
            </ListItem>
            <ListItem>
              <ButtonBase
                component={Link}
                to="/blockly-editor"
                onClick={toggleDrawer(false)}
              >
                <GavelIcon style={{ marginRight: "10px" }} />
                <ListItemText primary="Blockly" />
              </ButtonBase>
            </ListItem>
            <ListItem>
              <ButtonBase
                component={Link}
                to="/filter-management"
                onClick={toggleDrawer(false)}
              >
                <FilterListIcon style={{ marginRight: "10px" }} />
                <ListItemText primary="Filter Management" />
              </ButtonBase>
            </ListItem>
            <ListItem>
              <ButtonBase
                component={Link}
                to="/enrichment-management"
                onClick={toggleDrawer(false)}
              >
                <TuneIcon style={{ marginRight: "10px" }} />
                <ListItemText primary="Enrichment Management" />
              </ButtonBase>
            </ListItem>
            <ListItem>
              <ButtonBase
                component={Link}
                to="/feedback-logs"
                onClick={toggleDrawer(false)}
              >
                <FeedbackIcon style={{ marginRight: "10px" }} />
                <ListItemText primary="Feedback & Logs" />
              </ButtonBase>
            </ListItem>
          </List>
        </Drawer>

        <Container style={{ padding: "20px", marginTop: "20px" }}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<RuleManagement />} />
              <Route path="/rule-management" element={<RuleManagement />} />
              <Route path="/blockly-editor" element={<BlocklyEditor />} />
              <Route path="/filter-management" element={<FilterManagement />} />
              <Route
                path="/enrichment-management"
                element={<EnrichmentManagement />}
              />
              <Route path="/feedback-logs" element={<FeedbackLogs />} />
            </Routes>
          </Paper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
