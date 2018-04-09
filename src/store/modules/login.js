// import { loginByUserInfo } from '../../api/login'
import api from "../../api";

const login = {
  state: {
  	username:sessionStorage.getItem('USERNAME'),
  	role:sessionStorage.getItem('ROLE'),
  	introduce:'',
  	newrouter:[],
  },
  mutations: {
  	SET_USERNAME:(state, username) => {
  		state.username = username;
  	},
  	SET_ROLE:(state, role) => {
  		state.role = role;
  	},
  	SET_INTRODUCE:(state, introduce) =>{
  		state.introduce = introduce;
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
              sessionStorage.setItem('USERNAME', params.username); //存入 session 
            }
            resolve(res);
          });  		   
        }).catch(error => {
          reject(error);
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
          commit('SET_ROLE','');
          commit('SET_NEWROUER',[]);
          sessionStorage.removeItem('USERNAME');
          sessionStorage.removeItem('ROLE');
          resolve();
        }).catch(error => {
          reject(error);
        });
    },

  }
}
export default login;