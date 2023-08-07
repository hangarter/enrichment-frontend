import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ListAltIcon from "@mui/icons-material/ListAlt";

const mockRules = [
  { id: 1, name: "Rule 1" },
  { id: 2, name: "Rule 2" },
  // ... other mock rules
];

function RuleManagement() {
  const [rules, setRules] = React.useState(mockRules);
  const [newRuleName, setNewRuleName] = React.useState("");
  const [editingRuleId, setEditingRuleId] = React.useState<number | null>(null);
  const [tempRuleName, setTempRuleName] = React.useState("");

  const handleAddRule = () => {
    setRules([...rules, { id: Date.now(), name: newRuleName }]);
    setNewRuleName("");
  };

  const handleDeleteRule = (ruleId: number) => {
    setRules(rules.filter((rule) => rule.id !== ruleId));
  };

  const handleEditRule = (ruleId: number, newName: string) => {
    setRules(
      rules.map((rule) =>
        rule.id === ruleId ? { ...rule, name: newName } : rule
      )
    );
  };

  const startEditRule = (ruleId: number, ruleName: string) => {
    setEditingRuleId(ruleId);
    setTempRuleName(ruleName);
  };

  const confirmEditRule = () => {
    if (editingRuleId) {
      handleEditRule(editingRuleId, tempRuleName);
      setEditingRuleId(null);
      setTempRuleName("");
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Left Column: List of Rules */}
      <Grid item xs={12} md={4}>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <TextField
            label="New Rule Name"
            variant="outlined"
            size="small"
            value={newRuleName}
            onChange={(e) => setNewRuleName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddRule}
            style={{ marginLeft: "10px" }}
          >
            Add Rule
          </Button>
        </div>
        <List>
          {rules.map((rule) => (
            <ListItem key={rule.id}>
              <ListAltIcon style={{ marginRight: "10px" }} />
              {editingRuleId === rule.id ? (
                <>
                  <TextField
                    value={tempRuleName}
                    onChange={(e) => setTempRuleName(e.target.value)}
                  />
                  <IconButton onClick={confirmEditRule}>
                    <CheckIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <ListItemText primary={rule.name} />
                  <IconButton onClick={() => startEditRule(rule.id, rule.name)}>
                    <EditIcon />
                  </IconButton>
                </>
              )}
              <IconButton onClick={() => handleDeleteRule(rule.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Grid>

      {/* Right Column: Blockly Workspace */}
      <Grid item xs={12} md={8}>
        <div style={{ border: "1px solid #ccc", minHeight: "400px" }}>
          Blockly Workspace
        </div>
      </Grid>
    </Grid>
  );
}

export default RuleManagement;
