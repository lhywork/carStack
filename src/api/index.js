import * as utils from '../utils';

const base = 'http://192.168.1.222:8087';
const admin = 'http://192.168.1.190:8087';

export default {
    formatDate: (date,fmt) => {
        return utils.formatDate(date,fmt);
    },
    getPermissionList:params=>{
        return utils.getData(`../static/json/navlist.json`,params);
    },
    //获取资产端用户基础资料列表
    getBaseMaterialList : params => {
        return utils.getData(`${base}/asset/getBaseMaterialList`, params);
    },
    //获取资产端用户基础资料
    getBaseMaterial : params => {
        return utils.getData(`${base}/asset/getBaseMaterial`, params);
    },
    //新增/修改资产端用户基础资料
    BaseMaterialSave : params => {
        return utils.postData(`${base}/baseMaterial/save`, params);
    },
    //获取资产端用户授权额度列表
    getGrantMaterialList: params => {
        return utils.getData(`${base}/asset/getGrantMaterialList`, params);
    },
    //用户（管理员）登录
    Login:params => {
        return utils.postData(`${admin}/adminRole/login`, params);
    },
    //获取用户（管理员）列表
    getAdminInfoList: params => {
        return utils.postData(`${admin}/adminRole/getAdminInfoList`, params);
    },
    //获取用户（管理员）角色列表
    getRoleInfoList: params => {
        return utils.postData(`${admin}/adminRole/getRoleInfoList`, params);
    },
    //新增/修改用户（管理员）账号信息
    adminRolesave:params => {
        return utils.postData(`${admin}/adminRole/save`, params);
    },
    //获取用户（管理员）账号信息
    getAdminInfoByUserid:params => {
        return utils.postData(`${admin}/adminRole/getAdminInfoByUserid`, params);
    },
    //删除用户（管理员）账号
    adminRoledelete:params => {
        return utils.postData(`${admin}/adminRole/delete`, params);
    },
};

