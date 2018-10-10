
module.exports = {
  "lists|5": [
    {
      'id|+1': 10086,    
      'company_name': '微拍贷',
      'mobile': /^1[345789]\d{9}$/,
      'account_name': '@cname',
      'addr_area':'@province',
      'dealer_type|1':[1, 2],
      'grant_type':'省栈同盟',
      'risk_score':"@integer(60,100)",
      'grant_account':'@integer(9000, 10000)元',
      'use_account':'@integer(1000, 9000)元',
      'add_time':'@now',
      'account_status|1':[0, 1],
      'auditor_status|1':[0, 1, 2]
    }
  ],
  total:30,
  msg: '操作成功',
  status: 1,
}
