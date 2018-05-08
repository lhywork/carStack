// import { loginByUserInfo } from '../../api/login'
import api from "../../api";

const user = {
  state: {
  	username:sessionStorage.getItem('USERNAME'),
    userid:sessionStorage.getItem('USERID'),
  	navbarPosition:sessionStorage.getItem('THEME') || 'left',
    Collapse:sessionStorage.getItem('Collapse') || false,
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
    SET_LAYOUT(state, theme){
      if(theme){
        sessionStorage.setItem('THEME', theme);
        state.navbarPosition = theme
      }
    },
    SET_Collapse(state, Collapse){
      if(Collapse){
        sessionStorage.setItem('Collapse', Collapse);
        state.Collapse = Collapse
      }
    }
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
  	Logout({ commit, state }) {
      return new Promise((resolve, reject) => {     
          commit('SET_USERNAME','');
          commit('SET_USERID','');
          sessionStorage.removeItem('USERNAME');
          sessionStorage.removeItem('USERID');
          resolve();
        }).catch(error => {
          reject(error);
        });
    },

  }
}
export default user;