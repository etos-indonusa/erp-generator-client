export const AclUsersFormSchema = {
  "createdAt": {
    "default": "",
    "required": false
  },
  "email": {
    "default": "",
    "required": true
  },
  "idUserGroup": {
    "required": false
  },
  "idUsers": {
    "required": true
  },
  "lastLogin": {
    "default": "",
    "required": false
  },
  "nama": {
    "default": "",
    "required": false
  },
  "password": {
    "default": "",
    "required": true
  },
  "status": {
    "default": "",
    "required": false
  },
  "wajibResetPassword": {
    "default": false,
    "required": false
  }
};
