import * as utils from '../utils';

export const base = 'http://192.168.1.222:8087';
export const admin = 'http://192.168.1.190:8087';
export default {
    getBaseUrl:base,
    formatDate: (date,fmt) => {
        return utils.formatDate(date,fmt);
    },
    getPermissionList:params=>{
        return utils.getData(`../static/json/navlist.json`,params);
    },
    //上传单个图片
    uploadPic:params=>{
        return utils.postFile(`${base}/file/uploadPic`,params);
    },
    //上传单个文件
    uploadFile:params=>{
        return utils.postFile(`${base}/file/uploadFile`,params);
    },
    //删除上传文件
    deletePicLink:params=>{
        return utils.getData(`${base}/file/deletePicLink`,params);
    },      
    getAccountNo:params=>{
        return utils.getData(`${base}/baseMaterial/getAccountNo`,params);
    },
    //获取资产端用户基础资料列表
    getBaseMaterialList: params => {
        return utils.getData(`${base}/asset/getBaseMaterialList`, params);
    },
    //获取资产端用户基础资料
    getBaseMaterial: params => {
        return utils.postData(`${base}/asset/getBaseMaterial`, params);
    },
    //新增/修改资产端用户基础资料
    BaseMaterialSave: params => {
        return utils.postData(`${base}/baseMaterial/save`, params);
    },
    //获取资产端用户授权额度列表
    getGrantMaterialList: params => {
        return utils.getData(`${base}/asset/getGrantMaterialList`, params);
    },
    //查看资产端用户授权评分
    getSubjectAndOptions: params => {
        return utils.getData(`${base}/asset/getSubjectAndOptions`, params);
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
    //根据角色ID获取权限列表
    getResourceByRoleId:params => {
        return utils.postData(`${admin}/adminRole/getResourceByRoleId`, params);
    },
    //获取用户（管理员）账号信息
    getAdminInfoByUserid:params => {
        return utils.postData(`${admin}/adminRole/getAdminInfoByUserid`, params);
    },
    //获取用户（管理员）权限信息
    getAdminRoleByUserid:params => {
        return utils.postData(`${admin}/adminRole/getAdminRoleByUserid`, params);
    },
    //删除用户（管理员）账号
    adminRoledelete:params => {
        return utils.postData(`${admin}/adminRole/delete`, params);
    },
    //新增/修改角色信息
    saveRole:params=>{
        return utils.postData(`${admin}/adminRole/saveRole`, params);
    }, 
    //新增标的
    investmentPro:params => {
        return utils.postData(`${admin}/targetInfo/save`, params);
    },
    //借款产品信息列表
    getBorrowProList:params =>{
        return utils.postData(`${admin}/borrowPro/getBorrowProList`, params);
    },
    //上架或下架借款产品
    updateStatus:params =>{
        return utils.postData(`${admin}/borrowPro/updateStatus`, params);
    },
    //新增/修改借款产品基础资料
    borrowProSave:params =>{
        return utils.postJSON(`${admin}/borrowPro/save2`, params);
    },
    //借款产品信息列表
    getBorrowProById:params =>{
        return utils.postData(`${admin}/borrowPro/getBorrowProById`, params);
    },
    //获取标的信息列表
    getTargetList:params =>{
        return utils.postData(`${admin}/targetInfo/getTargetList`, params);
    },
    //获取单个标的信息 
    getTargetByTargetnid:params =>{
        return utils.postData(`${admin}/targetInfo/getTargetByTargetnid`, params);
    },
    //获取标的流水号 
    getTargetnid:params =>{
        return utils.postData(`${admin}/targetInfo/getTargetnid`, params);
    }, 
    auditorFirst:params => {
        return utils.postData(`${admin}/targetInfo/auditorFirst`, params);
    }
    
};


