/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用push-deer推送
  // USE_PASSAGE: 'push-deer',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx829e3afc6859a81c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3c22ce10e9491649d6787aac1db62d7a',

  PROVINCE: '安徽',
  CITY: '阜阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '乔宝贝',

      // 使用微信测试号推送消息，参数配置
      id: 'oUOIJ6vJrI6ukspNM084ZQ5H-_QM',
      useTemplateId: 'hxiht0MTG-FCiCvtPt0MxWu1m2A42bzgn-q_mEyT1vo',
      
      // 使用push-deer推送消息，参数配置
      // id: 'PDU23816Tgku1Bzl2gmebxtOftUIGL5Kr9RI0HV6y',
      // useTemplateId: '0003',
      
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '01-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1998', date: '02-05',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '06-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-24' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-06-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

