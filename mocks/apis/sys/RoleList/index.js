const getAdminInfoList = require('./getAdminInfoList')
const getRoleInfoList = require('./getRoleInfoList')
const getAdminInfoByUserid = require('./getAdminInfoByUserid')
const getResourceByRoleId = require('./getResourceByRoleId')
const Rolesave = require('../success')
const Roledelete = require('../success')
const saveRole = require('../success')


module.exports = {
  getAdminInfoList,
  getRoleInfoList,
  getAdminInfoByUserid,
  getResourceByRoleId,
  Rolesave,
  Roledelete,
  saveRole,
}
