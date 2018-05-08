const getters = {
  username: state => state.user.username,
  userid: state=> state.user.userid,
  navbarPosition: state => state.user.navbarPosition,
  Collapse: state => state.user.Collapse,
  navlist:state => state.auth.permissionList
};
export default getters