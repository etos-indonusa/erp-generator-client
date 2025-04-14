export const ToolsWorkflowStepReportFormSchema = {
  "allowRoles": {
    "default": "",
    "required": false
  },
  "allowUserIds": {
    "default": "",
    "required": false
  },
  "createdAt": {
    "default": "",
    "required": false
  },
  "customCheckSql": {
    "default": "",
    "required": false
  },
  "idWorkflow": {
    "required": true
  },
  "idWorkflowStep": {
    "required": true
  },
  "messageBefore": {
    "default": "",
    "required": false
  },
  "ruleJson": {
    "default": "",
    "required": false
  },
  "statusFrom": {
    "default": "",
    "required": true
  },
  "statusRejectTo": {
    "default": "",
    "required": false
  },
  "statusTo": {
    "default": "",
    "required": true
  },
  "triggerJson": {
    "default": "",
    "required": false
  },
  "updatedAt": {
    "default": "",
    "required": false
  },
  "urutan": {
    "default": 0,
    "required": true
  },
  "workflow": {
    "default": "",
    "required": true
  }
};
