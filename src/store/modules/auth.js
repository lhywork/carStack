// import { loginByUserInfo } from '../../api/login'
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
        api.getPermissionList().then((res)=> {
            commit('setPermissionList',res.data); 
            resolve(res);
          });          
        }).catch(error => {
          reject(error);
        });
    }
  }
}
export default auth;