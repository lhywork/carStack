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
            res.data.forEach((item,k) =>{
              // console.log(item)
              item.children.forEach((childs,j) =>{
                // console.log(childs.isAuth)
                if(!childs.isAuth){
                  // console.log(k)
                  item.children.splice(j,1)
                }
              })            
            })
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