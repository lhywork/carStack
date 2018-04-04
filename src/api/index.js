import * as utils from '../utils';

const base = 'http://192.168.1.222:8087';
// const base = '//192.168.1.100:8090'; //测试连接
// const files = [`${base}/file/chapter/ppt`, `${base}//file/chapter/video`, `${base}//file/chapter/excel`];
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
    }
};

