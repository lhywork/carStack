import api from "../../api";

const loan = {
  state: {
     list:[]
  },
  mutations: {
      listdata(state,data){
          console.log(data)
          state.list = data;  
      }
  },
  actions: {
      getlist({commit,state},params){
        return new Promise((resolve, reject) => {
          console.log("我就是不会报错")
          api.getBorrowProList(params).then((res)=> {
              commit('listdata',res.lists)
              resolve(res)
          });
        })
      }
  } 
}
export default loan;