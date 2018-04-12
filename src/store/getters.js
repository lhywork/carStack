const getters = {
  username: state => state.login.username,
  userid: state=> state.login.userid,
  role: state => state.login.role,
  newrouter: state => state.login.newrouter,
  navlist:state => state.auth.permissionList
};
export default getters