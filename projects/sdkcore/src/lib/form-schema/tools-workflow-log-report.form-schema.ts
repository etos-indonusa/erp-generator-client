export const ToolsWorkflowLogReportFormSchema = {
  "approvedAt": {
    "default": "",
    "required": false
  },
  "approvedBy": {
    "default": "",
    "required": false
  },
  "catatan": {
    "default": "",
    "required": false
  },
  "forModule": {
    "default": "",
    "required": true
  },
  "fromModuleId": {
    "default": "",
    "required": true
  },
  "idUsers": {
    "required": true
  },
  "idWorkflow": {
    "required": false
  },
  "idWorkflowLog": {
    "required": true
  },
  "idWorkflowStep": {
    "required": true
  },
  "namaUser": {
    "default": "",
    "required": false
  },
  "statusAfter": {
    "default": "",
    "required": false
  },
  "statusBefore": {
    "default": "",
    "required": false
  },
  "workflow": {
    "default": "",
    "required": true
  }
};
