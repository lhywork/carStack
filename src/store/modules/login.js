// import { loginByUserInfo } from '../../api/login'
import api from "../../api";

const login = {
  state: {
  	username:sessionStorage.getItem('USERNAME'),
    userid:sessionStorage.getItem('USERID'),
  	role:'',
  	newrouter:[],
  },
  mutations: {
  	SET_USERNAME:(state, username) => {
      sessionStorage.setItem('USERNAME', username);
  		state.username = username;
  	},
    SET_USERID:(state, userid) =>{
      sessionStorage.setItem('USERID', userid);
      state.userid = userid;
    },
  	SET_ROLE:(state, role) => {
  		state.role = role;
  	},
  	SET_NEWROUER:(state, newrouter) =>{
  		state.newrouter = newrouter;
  	},
  },
  actions: {
  	Logins({ commit }, params){
  		return new Promise((resolve, reject) => {         
        api.Login(params).then((res)=> {       
          if(res.returnCode == 1){
            commit('SET_USERNAME',params.username);  //将username和role进行存储
            commit('SET_USERID',res.userid); 
          }
          resolve(res);
        }).catch(error => {       
          reject(error);
        });
      });
  	},
  	Roles({ commit }, newrouter){
        return new Promise((resolve, reject) => {
      		commit('SET_NEWROUER',newrouter); //存储最新路由
      		resolve(newrouter);
        }).catch(error => {
          reject(error);
        });
  	},
  	Logout({ commit, state }) {
      return new Promise((resolve, reject) => {     
          commit('SET_USERNAME','');
          commit('SET_USERID','');
          commit('SET_ROLE','');
          commit('SET_NEWROUER',[]);
          sessionStorage.removeItem('USERNAME');
          sessionStorage.removeItem('USERID');
          resolve();
        }).catch(error => {
          reject(error);
        });
    },

  }
}
export default login;