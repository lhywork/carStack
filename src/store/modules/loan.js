import api from "../../api";

const loan = {
  state: {
     getBorrowProList:[],
     getTargetList:[],
     getTargetByTargetnidList:[]
  },
  mutations: {
      //借款产品信息列表
      getBorrowProListdata(state,data){
          state.getBorrowProList = data;  
      },
      getTargetList(state,data){
          state.getTargetList = data;  
      },
      getTargetByTargetnid(state,data){
          state.getTargetByTargetnid = data;  
      },
  },
  actions: {
      //借款产品信息列表
      getBorrowProList({commit,state},params){
          api.getBorrowProList(params).then((res)=> {
              commit('getBorrowProListdata',res)
          });
      },
      //借款产品上/下架操作
      updateStatus({commit,state},params){
        return new Promise((resolve, reject) => {
          api.updateStatus(params).then((res)=> {
              resolve(res)
          });
        })

      },
      //新增/修改借款产品基础资料
      borrowProSave({commit,state},params){
        return new Promise((resolve, reject) => {
          api.borrowProSave(params).then((res)=> {
              resolve(res)
          });
        })
      },
      //获取标的信息列表
      getTargetList({commit,state},params){
          api.getTargetList(params).then((res)=> {
              commit('getTargetList',res)
          });
      },
      //获取单个标的信息
      getTargetByTargetnid({commit,state},params){
          return new Promise((resolve, reject) => {
          api.getTargetByTargetnid(params).then((res)=> {
              commit('getTargetByTargetnid',res)
              resolve(res)
          });
          })
      },
      //标的初审
      auditorFirst({commit,state},params){
        return new Promise((resolve, reject) => {
          api.auditorFirst(params).then((res)=> {
              resolve(res)
          });
        })
      },
      //标的复审
      auditorReview({commit,state},params){
        return new Promise((resolve, reject) => {
          api.auditorReview(params).then((res)=> {
              resolve(res)
          });
        })
      },
      //新增/修改投资产品基础资料
      investmentPro({commit,state},params){
        return new Promise((resolve, reject) => {
          api.investmentPro(params).then((res)=> {
              resolve(res)
          });
        })
      },
      //删除上传文件
      deletePicLink({commit,state},params){
        return new Promise((resolve, reject) => {
          api.deletePicLink(params).then((res)=> {
              resolve(res)
          });
        })
      },
      //获取标的流水号
      getTargetnid({commit,state},params){
        return new Promise((resolve, reject) => {
          api.getTargetnid(params).then((res)=> {
              resolve(res)
          });
        })
      },
  } 
}
export default loan;