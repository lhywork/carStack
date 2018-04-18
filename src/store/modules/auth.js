import navJson from '../../../static/json/navlist.json';
import api from "../../api";

const auth = {
  state: {
    permissionList:[]
  },
  mutations: {
    setPermissionList: (state, data) => {
      state.permissionList = data
    }
  },
  actions: {
    getPermission({ commit }){
        return new Promise((resolve, reject) => {
        const params = {
          userid:sessionStorage.getItem('USERID')
        }         
        api.getAdminRoleByUserid(params).then((res)=> {
          // console.log(res)
            let permissionList;
            if(res.lists[0].r_resource !== undefined){
              permissionList = JSON.parse(res.lists[0].r_resource);              
            }else{
              permissionList = navJson.data;
            }
            commit('setPermissionList',permissionList);                   
            resolve(permissionList);
          });          
        }).catch(error => {
          reject(error);
        });
    }
  }
}
export default auth;