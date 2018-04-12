import * as utils from '../utils';

export const base = 'http://192.168.1.222:8087';
export const admin = 'http://192.168.1.190:8087';
export default {
    formatDate: (date,fmt) => {
        return utils.formatDate(date,fmt);
    },
    getBaseUrl:base,
    //获取资产端用户基础资料列表
    getBaseMaterialList : params => {
        return utils.getData(`${base}/asset/getBaseMaterialList`, params);
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
    investmentPro:params => {
        return utils.postData(`${admin}/targetInfo/save`, params);
    },
};


