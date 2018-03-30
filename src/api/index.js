import * as utils from '../utils';

const base = 'http://192.168.1.222:8087';
// const base = '//192.168.1.100:8090'; //测试连接
// const files = [`${base}/file/chapter/ppt`, `${base}//file/chapter/video`, `${base}//file/chapter/excel`];
export default {
    //获取资产端用户基础资料列表
    getBaseMaterialList : params => {
        return utils.getData(`${base}/asset/getBaseMaterialList`, params);
    }
};



//课程列表
// export const getCourseList = params => { return axios.get(`${base}/course/list/${params}`); };

// //删除课程
// export const deleteCourse = params => { return axios.delete(`${base}/course/delete/${params}`); };

// //新增课程
// export const addCourse = params => { return axios.post(`${base}/course/add`, params); };

// //修改课程
// export const updateCourse = (id,params) => { return axios.patch(`${base}/course/update/${id}`, params); };

// //课程名称重复验证
// export const checkCourse = params => { return axios.get(`${base}/course/courseCheck/${params}`); };

// //课程类型列表
// export const getCourseType = params => { return axios.get(`${base}/course/courseTypes`); };

// //课程信息
// export const getCourseInfo = params => { return axios.get(`${base}/course/getCourse/${params}`); };

// //课程类别列表
// export const getCourseTypeList = params => { return axios.get(`${base}/coursetype/list/${params}`); };

// //新增课程列表
// export const addCourseType = params => { return axios.post(`${base}/coursetype/add`, params); };

// //删除课程列表
// export const delCourseType = params => { return axios.delete(`${base}/coursetype/delete/${params}`); };

// //修改课程列表
// export const updateCourseType = (id,params) => { return axios.patch(`${base}/coursetype/update/${id}`, params); };

// //生成章节Id
// export const getChapterId = params => { return axios.get(`${base}/course/getChapterId`); };

// //章节列表
// export const getListChapter = params => { return axios.get(`${base}/course/listchapter/${params}`); };

// //删除章节
// export const delChapter = params => { return axios.delete(`${base}/course/deleteChapter/${params}`); };

// //图片上传
// export const imagesUpload = params => { return axios.post(`${base}/file/course/image`, params); };

// //文件资源上传
// export const filesUpload = (index,params) => { return axios.post(files[index], params); };

// //课程推荐列表
// export const getRmendList = params => { return axios.get(`${base}/recommend/list/${params}`); };

// //取消课程推荐
// export const rmendCancel = params => { return axios.patch(`${base}/recommend/update/cancel`, params); };

// //课程推荐排序
// export const rmendOrder = params => { return axios.patch(`${base}/recommend/update/order`, params); };

// //学员角色列表
// export const getRoleappList = params => { return axios.get(`${base}/roleapp/list/${params}`); };

// //删除学员角色
// export const deleteRoleapp = params => { return axios.delete(`${base}/roleapp/delete/${params}`); };

// //新增学员角色
// export const addRoleapp = params => { return axios.post(`${base}/roleapp/add`, params); };

// //修改学员角色
// export const editRoleapp = (id,params) => { return axios.patch(`${base}/roleapp/update/${id}`, params); };

// //学员重复验证
// export const checkRoleapp = params => { return axios.get(`${base}/roleapp/appCheck/${params}`); };

// //部门职级获取
// export const getDeptAndPosition = params => { return axios.get(`${base}/roleapp/getDeptAndPosition`); };

// //后台角色列表
// export const getRoleList = params => { return axios.get(`${base}/role/list/${params}`); };

// //删除后台角色
// export const deleteRole = params => { return axios.delete(`${base}/roleapp/delete/${params}`); };

// //后台角色重复验证
// export const checkRole = params => { return axios.get(`${base}/role/appCheck/${params}`); };

// //新增后台角色
// export const addRole = params => { return axios.post(`${base}/role/add`, params); };

// //修改后台角色
// export const editRole = (id,params) => { return axios.patch(`${base}/role/update/${id}`, params); };



// export default {
// 	getUserList: function (params){
// 		return axios.get(`${base}/course/list/` + params);
// 	}
// }
