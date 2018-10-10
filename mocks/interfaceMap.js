
const path = '/mock'

// region
const base = require('./apis/base') // 基础的接口
const MaterialList = require('./apis/sys/MaterialList') // 资产端管理
const LoanList = require('./apis/sys/LoanList') // 产品管理
const RoleList = require('./apis/sys/RoleList') // 权限管理
// endregion

module.exports = {
  // region 收起所有

  // region 公用
  [`${path}/adminRole/login`]: base.login, // 登录
  [`${path}/adminRole/getAdminRoleByUserid`]: base.menu, //权限列表
  // [`${path}/usercenter/user/userInfo`]: base.staff, // 用户信息
  // [`${path}/usercenter/logout`]: base.logout, // 退出
  // // endregion

  // // region 资产端管理
  [`${path}/asset/getBaseMaterialList`]: MaterialList.fetchModuleList, // 基础资料列表
  [`${path}/asset/getBaseMaterial`]: MaterialList.fetchModuleDetail, // 查看基础资料
  [`${path}/baseMaterial/save`]: MaterialList.fetchModuleAdd, // 新增编辑资料
  [`${path}/asset/getGrantMaterialList`]: MaterialList.getGrantMaterialList, // 新增用户

  [`${path}/borrowPro/getBorrowProList`]: LoanList.fetchModuleList, // 借款产品管理
  [`${path}/borrowPro/updateStatus`]: LoanList.updateStatus, 
  // // endregion

  // // region 权限管理
  [`${path}/adminRole/getAdminInfoList`]: RoleList.getAdminInfoList, 
  [`${path}/adminRole/getRoleInfoList`]: RoleList.getRoleInfoList, 
  [`${path}/adminRole/save`]: RoleList.Rolesave,
  [`${path}/adminRole/delete`]: RoleList.Roledelete, // 删除角色
  [`${path}/adminRole/getAdminInfoByUserid`]: RoleList.getAdminInfoByUserid,
  [`${path}/adminRole/getResourceByRoleId`]: RoleList.getResourceByRoleId,
  [`${path}/adminRole/saveRole`]: RoleList.saveRole,
  // // endregion

  // endregion
}
