import * as utils from '../utils';

const base = 'http://192.168.1.222:8087';
const admin = 'http://192.168.1.190:8087';

export default {
    formatDate: (date,fmt) => {
        return utils.formatDate(date,fmt);
    },
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
    }
};

