/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
    {
    id: '0003',
    title: '乔宝贝，早上好！',
    desc: `
       🗓️{{date.DATA}}

       ❤️今天是我们恋爱的第{{love_day.DATA}}天，爱你❤️

       今日{{city.DATA}}天气☁️：{{weather.DATA}} /r
       温度🌡️: {{min_temperature.DATA}}-{{max_temperature.DATA}} /r
       ❣:{{notice.DATA}}
       
       🎂{{birthday_message.DATA}}
       💌{{earthy_love_words.DATA}}💌
       
       {{note_en.DATA}}  
       {{note_ch.DATA}}

    `
  },
]

module.exports = TEMPLATE_CONFIG
