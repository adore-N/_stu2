// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(8,12)",
      des: "@csentence(15)",
      des1:"@csentence(80)",
      time: "@integer(1553425967486,1553475967486)",
      icon: mr.image('350x350', mr.color(), mr.cword(1)),
      icon2: mr.image('50x50', mr.color(), mr.cword(1)),
      banner:[{src:mr.image('50x50', mr.color(), mr.cword(1))},{src:mr.image('50x50', mr.color(), mr.cword(1))},{src:mr.image('50x50', mr.color(), mr.cword(1))},],
      detail:{
        auth:"@cname()",
        content:"@cparagraph(20,40)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(320),//解决 auth_icon 不随机
    'follow': mapData(210),
    'column': mapData(110),
    'stock|10':[
        {
          stock_no: "@integer(1565533039824,1565833039824)", // 订单号
          staff_id: "@integer(1565533,15658334)", // 司机id
          name: "@ctitle(2,3)" || '--', // 名称
          unit: "@ctitle(3,5)" || '--', // 单位
          order_weight:'@natural(60, 100)' || '--', // 总重
          gross_weight: '@natural(60, 100)' || '--', // 皮重
          tare: '@natural(60, 100)' || '--', // 皮重
          jiaotou_weight: '@natural(60, 100)' || '--', // 交投总重
          net_weight: '@natural(60, 100)' || '--', // 已入库量/净重
          stock_time: '@date("yyyy-MM-dd")' || '--', // 入库时间
          create_time: '@date("yyyy-MM-dd")' || '--', // 创建时间
          stock_type: "@integer(1,3)", // 类型
          status: "@integer(1,4)" // 状态 
        }
    ],
    
    // 订单入库 -> 司机姓名下拉框
    'driver':{
      state: 1,
      msg: '获取全部司机成功',
      'data|5': [
        {driver_no: "@integer(10000,15)",driver_name: "@ctitle(2,3)"}
      ]
    },


    //小程序 pick选择物品品类
    'choicegoods': {
      state: 1,
      msg: '获取全部司机成功',
      'data|5': [
        {driver_no: "@integer(10000,15)",driver_name: "@ctitle(2,3)"}
      ]
    },

    //入库列表 待入库
    'stockin': {
      code: 200,
      msg: "入库列表展示成功",
      data: {
          "data|10": [
              {
                "id": 4,
                "stock_no": "RK020200106193506",
                "order_weight": 2,
                "gross_weight": "",
                "tare": "",
                "jiaotou_weight": 0,
                "net_weight": 2,
                "operator": "初一",
                "unit": "公斤",
                "site_id": 11,
                "status": 2,
                "stock_type":  "@integer(1,3)", // 类型,
                "name": "test",
                "staff_id": 24027,
                "create_time": "2020-01-06 13:08:21",
                "user_id": 24096,
                "stock_time": "2020-01-06 13:08:21",
                "abnormal_time": "",
                "cancel_time": "",
                "transfer_station_weight": 0,
                "order_no": "020190904129097",
                "company": "店铺one",
                "phone": "13816475150",
                "category_id": 3,
                "goods_id": 218,
                "category": "纸类",
                "good_name": "纸板",
                "address": "上海市浦东新区康桥镇adgh爱的规划的",
                "should_pay": "1.00",
                "real_pay": "2.00",
                "reference_price": "0.00",
                "real_price": "2.00",
                "pay_way": 1,
                "note": "",
                "update_time": "2020-01-06 13:08:21",
                "goods": "",
                "out_total": "",
                "partnerid": 0,
                "userpartner_state": 0,
                "site_name": "重庆七星岗站点1234"
              }
          ],
          "last_page": 1,
          "total": 2
      }
    },
    //待入库 详情
    'detail': {
      code: 200,
      msg: "入库列表展示成功",
      detail: {
         weight: '222',
         length: 33,
         driver_name: '初一',
         stock_no: 1111111111111,
         gross_weight: 20,
         tare: 10,
         net_weight: 10
      }
    },
     //物品品类 物品
    'choicegoods': {
      "code": 200,
      "msg": "选择物品数据查询成功",
      "data": [
          {
              "category_name": "纸箱",
              "goods": [
                  {
                      "goods_coding": "HS017001",
                      "id": 36,
                      "goods_name": "大纸箱",
                      "category_id": 17,
                      "category_name": "纸箱",
                      "unit": "千克",
                      "price": "1.00"
                  }
              ]
          },
          {
              "category_name": "电器",
              "goods": [
                  {
                      "goods_coding": "HS009001",
                      "id": 16,
                      "goods_name": "冰箱",
                      "category_id": 9,
                      "category_name": "电器",
                      "unit": "台",
                      "price": "100.00"
                  },
                  {
                      "goods_coding": "HS009002",
                      "id": 18,
                      "goods_name": "电器1",
                      "category_id": 9,
                      "category_name": "电器",
                      "unit": "个",
                      "price": "222.00"
                  }
              ]
          },
          {
              "category_name": "TEST",
              "goods": [
                  {
                      "goods_coding": "HS008003",
                      "id": 29,
                      "goods_name": "22222",
                      "category_id": 8,
                      "category_name": "TEST",
                      "unit": "KG",
                      "price": "111.00"
                  }
              ]
          }
      ]
    },
    'banner|3': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1565533039824,1565833039824)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ],
    'eight|16': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        icon: mr.image('50x50', mr.color(), mr.cword(4,10)),//banner不变
        icon2: mr.image('200x100', mr.color(), mr.cword(4,10)),//banner不变
        icon3: mr.image('200x250', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1565533039824,1565833039824)",
        // detail:{
        //   icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
        //   auth:"@cname()",//百家姓
        //   content:"@cparagraph(10,40)"//正文
        // }
      }
    ],
    'test|1': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        icon: mr.image('50x50', mr.color(), mr.cword(4,10)),//banner不变
        img:[mr.image('50x50', mr.color(), mr.cword(4,10)),mr.image('50x50', mr.color(), mr.cword(4,10)),mr.image('50x50', mr.color(), mr.cword(4,10))]
      }
    ],
  })
};