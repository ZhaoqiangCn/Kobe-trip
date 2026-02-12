import React, { useState } from 'react';
import { 
  Calendar, MapPin, Clock, Train, Coffee, 
  Wind, CloudSnow, Utensils, Info, Camera, 
  AlertTriangle, Plane, Luggage, CheckCircle,
  ArrowRight, Bus, Ticket, CreditCard, ShieldAlert,
  ShoppingBag, FileText, Gift, Store, Activity, 
  Flame, Droplet, Fish, Car, X, Map, User,
  ClipboardList, Smartphone, Briefcase
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('packing'); // Default to packing to show new feature
  const [activeDay, setActiveDay] = useState(0); 

  // --------------------------------------------------------------------------------
  // 0. 行前清单数据 (New)
  // --------------------------------------------------------------------------------
  const [packingItems, setPackingItems] = useState([
    {
      category: '证件与票券 (绝对不能忘)',
      icon: 'file',
      color: 'bg-red-500',
      items: [
        { id: 'p1', name: '护照 (有效期6个月以上)', checked: false },
        { id: 'p2', name: 'JR Pass 兑换券 (打印件或电子版)', checked: false, important: true },
        { id: 'p3', name: '日元现金 (建议 ¥50,000+，备零钱)', checked: false },
        { id: 'p4', name: '信用卡 (Visa/Master) x2', checked: false },
        { id: 'p5', name: '机票行程单 (入境备查)', checked: false },
        { id: 'p6', name: '石田屋/有马酒店 预约确认信', checked: false, important: true }
      ]
    },
    {
      category: '衣物 (2月关西 3-10°C)',
      icon: 'briefcase',
      color: 'bg-blue-500',
      items: [
        { id: 'c1', name: '防风羽绒服 (琵琶湖/六甲山极冷)', checked: false, important: true },
        { id: 'c2', name: '保暖内衣 (Heattech) x3套', checked: false },
        { id: 'c3', name: '好走路的鞋 (日行2万步)', checked: false },
        { id: 'c4', name: '厚袜子 (姬路城脱鞋后地板极凉)', checked: false, important: true },
        { id: 'c5', name: '围巾/帽子/手套 (防风必备)', checked: false },
        { id: 'c6', name: '睡衣 (部分酒店提供，可不带)', checked: false }
      ]
    },
    {
      category: '电子与网络',
      icon: 'phone',
      color: 'bg-purple-500',
      items: [
        { id: 'e1', name: '日本流量卡 / 漫游包', checked: false, important: true },
        { id: 'e2', name: '充电宝 (导航耗电快，必须带)', checked: false },
        { id: 'e3', name: '两孔插头 (日本电压100V，两扁孔)', checked: false },
        { id: 'e4', name: '各类充电线', checked: false },
        { id: 'e5', name: '西瓜卡 (Suica/ICOCA) 苹果手机可开', checked: false }
      ]
    },
    {
      category: '生活杂物 (提升幸福感)',
      icon: 'bag',
      color: 'bg-green-500',
      items: [
        { id: 'm1', name: '零钱袋 (日本硬币非常多)', checked: false, important: true },
        { id: 'm2', name: '塑料袋 (随身垃圾袋，街上没桶)', checked: false },
        { id: 'm3', name: '牙刷牙膏 (响应环保，部分酒店不给)', checked: false },
        { id: 'm4', name: '保湿面霜/身体乳 (日本很干)', checked: false },
        { id: 'm5', name: '休足时间/膏药 (每晚贴腿)', checked: false },
        { id: 'm6', name: '签字笔 (填入境卡)', checked: false }
      ]
    }
  ]);

  const toggleItem = (categoryId, itemId) => {
    const newItems = [...packingItems];
    const category = newItems.find(c => c.category === categoryId);
    if(category) {
        // Find category index first since we mapped based on state structure
        // Actually easier to just map and update
    }
    
    setPackingItems(packingItems.map(cat => {
      if (cat.category !== categoryId) return cat;
      return {
        ...cat,
        items: cat.items.map(item => {
          if (item.id !== itemId) return item;
          return { ...item, checked: !item.checked };
        })
      };
    }));
  };

  // --------------------------------------------------------------------------------
  // 1. 详细行程数据
  // --------------------------------------------------------------------------------
  const itinerary = [
    {
      date: '15', month: '2月', weekday: '周日',
      title: '抵达神户',
      location: 'Kobe Sannomiya',
      color: 'bg-indigo-600',
      timeline: [
        { time: '13:25', task: '上海浦东出发', detail: '航班 JL0894 (T1)。', icon: 'plane', type: 'flight' },
        { time: '15:40', task: '抵达关西机场', detail: 'T1 入境。看一眼 JR 柜台，如果排长队直接放弃，去坐大巴！(您今天不用 JR)。', icon: 'info', type: 'default' },
        { time: '17:00', task: '机场巴士', detail: 'T1 1楼 6号站台。直达神户三宫 (约70分钟)。不建议坐 JR (需换乘且人多)。', icon: 'bus', type: 'transport' },
        { time: '18:30', task: 'Mint Kobe', detail: '在三宫下车。1. 先买18号有马巴士票。2. 去 JR 三宫站兑换 JR Pass (无需排队)。', icon: 'ticket', type: 'alert' },
        { time: '20:00', task: '晚餐', detail: '三宫 Center 街寻找神户拉面（一连）。', icon: 'food', type: 'food' },
        { time: '21:30', task: '堂吉诃德', detail: '24小时营业。买水、零食、休足时间(贴腿用)。', icon: 'shopping', type: 'spot' }
      ]
    },
    {
      date: '16', month: '2月', weekday: '周一',
      title: '姬路·购物·神户港',
      location: 'Himeji & Kobe',
      color: 'bg-rose-600',
      timeline: [
        { time: '09:15', task: 'JR 新快速', detail: '三宫 ➡️ 姬路 (40分)。', icon: 'train', type: 'transport' },
        { time: '10:15', task: '姬路城 (登楼)', detail: '【体力局】挑战大天守阁登顶！楼梯极陡，全程约需 1.5-2 小时。放弃好古园以保证时间。', icon: 'map', type: 'alert' },
        { time: '12:15', task: '姬路关东煮', detail: '快速午餐。推荐“御幸通商店街”内，生姜酱油风味。', icon: 'food', type: 'food' },
        { time: '13:00', task: '返回三宫', detail: 'JR 姬路 ➡️ JR 三宫 (40分)。放弃舞子，直奔购物。', icon: 'train', type: 'transport' },
        { time: '13:40', task: '旧居留地购物', detail: '先攻克关门早的店：nanamica & Patagonia (19:00关)。就在三宫南侧。', icon: 'shopping', type: 'alert' },
        { time: '15:40', task: '大丸 & 南京町', detail: '步行至大丸百货方向，顺路逛南京町(中华街)。', icon: 'map', type: 'spot' },
        { time: '16:45', task: '前往神户港', detail: '步行穿过美利坚公园去 Mosaic (风景好)，或坐 JR (元町->神户)。', icon: 'wind', type: 'transport' },
        { time: '17:30', task: 'Mosaic 夜景', detail: '拍摄神户塔亮灯，享受海港日落。', icon: 'camera', type: 'spot' },
        { time: '19:00', task: '返回三宫', detail: 'JR 神户 ➡️ JR 三宫 (4分)。准备享用大餐。', icon: 'train', type: 'transport' },
        { time: '19:30', task: '石田屋烤肉', detail: '预约号: SD8025752。绝对不能迟到。', icon: 'food', type: 'alert' }
      ]
    },
    {
      date: '17', month: '2月', weekday: '周二',
      title: '琵琶湖 · 梅田购物',
      location: 'Shiga & Osaka',
      color: 'bg-sky-600',
      timeline: [
        { time: '08:30', task: '琵琶湖', detail: 'JR 三宫 ➡️ 京都 (换乘湖西线) ➡️ 志贺站。约 90 分钟。', icon: 'train', type: 'transport' },
        { time: '10:10', task: '接驳巴士 & 缆车', detail: '志贺站 68路巴士 ➡️ 缆车站。乘坐日本最快缆车直达海拔 1100米。', icon: 'bus', type: 'transport' },
        { time: '10:40', task: 'Biwako Terrace', detail: '先去 The Main 的 Grand Terrace。这里是拍摄“天空之镜”般琵琶湖全景的最佳机位。', icon: 'camera', type: 'spot' },
        { time: '12:00', task: 'Snow Land & 午餐', detail: '在 Snow Land 租雪盆滑雪。午餐推荐去“Lake View Dining”吃近江牛料理。', icon: 'snow', type: 'spot' },
        { time: '14:00', task: 'Cafe 360', detail: '从缆车山顶站（打见山）出来，步行前往 Horai Pair Lift 搭乘口，乘坐吊椅前往最高的蓬莱山顶。', icon: 'coffee', type: 'spot' },
        { time: '15:00', task: '下山前往大阪', detail: '缆车下山，转接驳车至志贺站。搭乘 JR 湖西线至京都，同站换乘 JR 京都线至大阪站（全程约1.5小时）。', icon: 'train', type: 'transport' },
        { time: '16:30', task: '阪急百货 (梅田)', detail: '直奔梅田阪急购买化妆品。由于退税柜台（免税Counter）通常人比较多，建议早点去排队。商场 20:00 关门。', icon: 'shopping', type: 'alert' },
        { time: '18:30', task: '梅田晚餐', detail: '推荐在阪急百货楼上的美食街（12-13F），或旁边的 Lucua / Grand Front 找一家特色餐厅就餐。', icon: 'food', type: 'food' },
        { time: '20:30', task: '返回神户', detail: '吃饱喝足后，在 JR 大阪站搭乘「新快速」列车前往 JR 三宫站（仅需 21 分钟，非常快）。', icon: 'train', type: 'transport' },
        { time: '21:00', task: '便利店/超市补货', detail: '回到神户，顺路在三宫站附近的 Hankyu Oasis 或便利店买点第二天的水和零食。', icon: 'shopping', type: 'spot' }
      ]
    },
    {
      date: '18', month: '2月', weekday: '周三',
      title: '有马温泉',
      location: 'Arima',
      color: 'bg-amber-600',
      timeline: [
        { time: '09:30', task: '巴士出发', detail: 'Mint Kobe 1F 坐有马急行巴士。凭15日买好的票上车。', icon: 'bus', type: 'transport' },
        { time: '10:15', task: '温泉街漫步', detail: 'Montbell (限定T恤) ➡️ 碳酸公园 (喝汽水) ➡️ 金之汤足汤 ➡️ 小吃 (可乐饼/煎饼)。', icon: 'map', type: 'spot' },
        { time: '12:00', task: 'Arima Grand', detail: '日归套餐 Check-in。先享用精致中餐套餐，回房换浴衣。', icon: 'utensils', type: 'alert' },
        { time: '13:30', task: '金泉银泉循环', detail: '推荐顺序：先去 9F“云海”露天风吕 (看山景) -> 后去 B2“由布”大浴场 (设施大)。', icon: 'droplet', type: 'spot' },
        { time: '16:00', task: '提早退房', detail: '请案内所帮忙打 078-904-0181 叫接驳车送至巴士站。', icon: 'bus', type: 'transport' },
        { time: '17:00', task: '返回三宫', detail: '回到市区。', icon: 'map', type: 'default' },
        { time: '17:30', task: '查漏补缺', detail: '在三宫补齐未买的物品。', icon: 'shopping', type: 'default' },
        { time: '19:30', task: '晚餐', detail: '神戸牛焼肉 にくなべ屋 神戸びいどろ 本店 / 八座和 本店', icon: 'food', type: 'food' }
      ]
    },
    {
      date: '19', month: '2月', weekday: '周四',
      title: '广岛·告别',
      location: 'Hiroshima',
      color: 'bg-red-700',
      timeline: [
        { time: '08:00', task: '寄存酒店', detail: '退房，行李直接寄存在酒店前台。轻装出发。', icon: 'luggage', type: 'default' },
        { time: '08:30', task: '新干线', detail: '新神户 ➡️ 广岛。', icon: 'train', type: 'transport' },
        { time: '10:00', task: '宫岛', detail: 'JR 渡轮看大鸟居(满潮)。', icon: 'wind', type: 'spot' },
        { time: '12:30', task: '宫岛午餐', detail: '烤牡蛎 + 星鳗饭。', icon: 'food', type: 'food' },
        { time: '14:30', task: '原爆圆顶', detail: '和平公园资料馆。', icon: 'info', type: 'spot' },
        { time: '16:45', task: '必坐返程', detail: '死命令：必须赶上这班车回神户！', icon: 'train', type: 'alert' },
        { time: '18:00', task: '抵达新神户', detail: '新干线到达新神户站。', icon: 'train', type: 'transport' },
        { time: '18:15', task: '打车回酒店', detail: '直接在新神户站打车回三宫酒店取行李（约10-15分钟）。', icon: 'car', type: 'alert' },
        { time: '19:15', task: '移动至巴士站', detail: '取完行李，前往三宫巴士总站。', icon: 'luggage', type: 'default' },
        { time: '20:00', task: '机场大巴', detail: '前往关西机场 T1。', icon: 'bus', type: 'transport' },
        { time: '21:30', task: '入住', detail: '日航关西机场酒店。', icon: 'check', type: 'default' }
      ]
    },
    {
      date: '20', month: '2月', weekday: '周五',
      title: '归国',
      location: 'Shanghai',
      color: 'bg-slate-700',
      timeline: [
        { time: '09:15', task: 'JL0891', detail: 'KIX ➡️ PVG。', icon: 'plane', type: 'flight' },
        { time: '12:05', task: '抵达', detail: '上海温馨的家。', icon: 'check', type: 'default' }
      ]
    }
  ];

  // --------------------------------------------------------------------------------
  // 2. 交通攻略数据 (Guides)
  // --------------------------------------------------------------------------------
  const guides = [
    {
      id: 'ski-logistics',
      title: '⛷️ 滑雪交通与购票攻略',
      subtitle: 'Biwako Valley Plan',
      icon: 'cloud-snow',
      color: 'bg-sky-500',
      content: [
        { label: 'PLAN A: 琵琶湖山谷 (Biwako Valley)', text: '首选方案，景色绝美。' },
        { label: '1. 交通', text: 'JR三宫 -> 京都 (换乘湖西线) -> 志贺站 (JR Pass 可用)。出站后在左手边坐【68路巴士】到缆车站 (¥390，只收现金/IC卡)。' },
        { label: '2. 缆车票 (Ropeway)', text: '抵达山脚后，在人工窗口或机器购买。成人往返约 ¥3,500。' },
        { label: '3. 玩雪/滑雪票', text: '坐缆车到山顶后购买。如果要滑雪买 Lift Ticket (一日券)，只玩雪买 Snow Land Ticket (~¥1,000)。' },
        { label: '4. 装备租赁', text: '山顶有租赁站 (Rental Shop)。不用预约，尺寸齐全。' }
      ]
    },
    {
      id: 'arima-bus',
      title: '♨️ 有马急行巴士攻略',
      subtitle: 'Arima Express Bus',
      icon: 'bus',
      color: 'bg-amber-600',
      content: [
        { label: '售票/乘车地点', text: 'Mint Kobe (ミント神戸) 1F 三宫巴士总站。位于 JR 三宫站东口马路对面，墨绿色大楼的一楼内部。' },
        { label: '购票时机', text: '【非常重要】请在 Day 1 (2月15日) 抵达三宫后立刻购买。该车全席指定，当天买很容易没票！' },
        { label: '如何购买', text: '站内有自动售票机 (可选中文) 或人工窗口。购买 2月18日 往返票 (约 ¥770/单程)。' },
        { label: '乘车站台', text: '通常在 4号站台 (请以票面为准)。' },
        { label: '车程', text: '约 30-40 分钟直达有马温泉太阁桥附近。' }
      ]
    },
    {
      id: 'airport-bus',
      title: '✈️ 机场巴士攻略',
      subtitle: 'Kansai Airport Limousine',
      icon: 'plane',
      color: 'bg-blue-600',
      content: [
        { label: '为什么坐巴士', text: '比 JR 方便太多！直达不换乘，不用拖着行李在大阪站迷宫里跑。' },
        { label: '关空乘车点', text: 'T1 到达层出来，【6号站台】。' },
        { label: '三宫下车/回程点', text: 'Mint Kobe 1F (同上有马巴士站)。距离您的酒店和购物区都很近。' },
        { label: '回程 (Day 5)', text: '回程不需要预约，排队上车。建议 20:00 那班车提前 15-20 分钟去排队。' }
      ]
    },
    {
      id: 'jr-pass',
      title: '🚄 JR 关西&广岛周游券',
      subtitle: 'Kansai-Hiroshima Pass',
      icon: 'ticket',
      color: 'bg-rose-600',
      content: [
        { label: '核心价值', text: '¥17,000。包含：新大阪↔广岛新干线、关西JR全线、宫岛渡轮。去一次广岛就回本。' },
        { label: '兑换地点', text: '关西机场 JR 站绿色机器；【推荐】JR 三宫站中央口 (人少不排队)。' },
        { label: '三宫兑换点', text: 'JR 三宫站“中央检票口”附近的绿色自动售票机 (带护照扫描图标)。营业至 23:00。' },
        { label: '指定席', text: '可免费划 6 次座。建议提前划好“新神户-广岛”往返的指定席，保证有座。' }
      ]
    }
  ];

  // --------------------------------------------------------------------------------
  // 3. 购物攻略数据 (Shopping)
  // --------------------------------------------------------------------------------
  const shoppingCategories = [
    {
      title: '⚠️ 19:00 关门 (必跑)',
      subtitle: '神户的户外/潮牌关门极早！',
      color: 'bg-red-600',
      items: [
        { name: 'nanamica KOBE', desc: '【紫标大本营】位于旧居留地。', time: '11:00 - 19:00' },
        { name: 'Patagonia Kobe', desc: '【注意】2/18(周三)定休！', time: '11:00 - 19:00' },
        { name: 'NANGA SHOP KOBE', desc: '【注意】每周三定休！羽绒服神店。', time: '11:00 - 19:00' }
      ]
    },
    {
      title: '20:00 关门 (晚餐前)',
      subtitle: '标准商场时间',
      color: 'bg-blue-600',
      items: [
        { name: 'Bshop 神户本店', desc: 'DANTON 这里最全，就在 nanamica 附近。', time: '11:00 - 20:00' },
        { name: 'BEAMS 神户', desc: '位于 Clefy 三宫 B1F-1F。', time: '11:00 - 20:00' },
        { name: 'The North Face', desc: '三宫店或 Mint Kobe 店。', time: '11:00 - 20:00' },
        { name: 'Montbell 三宫店', desc: '比有马店大，款式全。', time: '10:00 - 20:00' },
        { name: 'Daiso 三宫Center街', desc: '大创，位于 Grace Kobe 6F。', time: '10:00 - 20:00' },
        { name: 'Bookoff Center街', desc: '二手书/游戏/手办。', time: '10:00 - 20:00' }
      ]
    },
    {
      title: '21:00+ 关门 (晚餐后)',
      subtitle: '可以慢慢逛',
      color: 'bg-green-600',
      items: [
        { name: '3COINS+plus', desc: '推荐三宫 OPA 2 店 或 Center街店。', time: '10:00 - 21:00' },
        { name: 'Hankyu Oasis', desc: '【超市】Mint Kobe B1F / Ekizo。买水果/调料。', time: '10:00 - 23:00' },
        { name: 'Don Quijote', desc: '【唐吉诃德】24小时营业。最后再来这里。', time: '24 小时' }
      ]
    }
  ];

  // --------------------------------------------------------------------------------
  // 4. 压力测试数据 (Stress Test)
  // --------------------------------------------------------------------------------
  const stressAnalysis = [
    {
      day: 'Day 2 (周一)',
      level: 'High',
      title: '登城腿软预警',
      desc: '姬路城天守阁楼梯非常陡峭（接近60度），爬完 6 层对膝盖消耗很大。',
      solution: '建议：务必穿运动鞋。爬完后下午逛街如果累，可以多利用咖啡店休息，不用硬逛。',
      icon: 'map'
    },
    {
      day: 'Day 2 (周一)',
      level: 'Medium',
      title: '南京町零食陷阱',
      desc: '去南京町（中华街）如果吃太多小吃，晚上 19:30 的石田屋神户牛就吃不下了！',
      solution: '建议：中华街只逛不吃，或者只买一个“老祥记猪肉包”尝鲜。留着肚子给烤肉！',
      icon: 'x'
    },
    {
      day: 'Day 3 (周二)',
      level: 'High',
      title: '琵琶湖强风警告',
      desc: '琵琶湖山谷缆车极易因强风停运。到了志贺站才发现就晚了。',
      solution: '早起 8:00 查看官网。若停运，B计划：直接去【六甲山滑雪场】(Rokko Snow Park)。从三宫坐 JR 到六甲道站转巴士+缆车即可，人工雪场不受大风影响。',
      icon: 'wind'
    },
    {
      day: 'Day 4 (周三)',
      level: 'Low',
      title: '周三定休陷阱',
      desc: '您想去的 NANGA 和 Patagonia 恰好周三定休。',
      solution: '方案：已在行程中标注。这两家店必须在 Day 2 (周一) 搞定，千万别留到今天。',
      icon: 'store'
    },
    {
      day: 'Day 5 (周四)',
      level: 'High',
      title: '晚高峰打车风险',
      desc: '18:00 新神户站出租车可能排长队，且三宫附近晚高峰拥堵。',
      solution: '方案：若出租车排队太长，果断坐地铁 (仅1站) 到三宫，再步行回酒店。16:45 的新干线绝对不能误！',
      icon: 'car'
    }
  ];

  // --------------------------------------------------------------------------------
  // 5. 美食图鉴数据 (Food Guide)
  // --------------------------------------------------------------------------------
  const foodGuides = [
    {
      region: '神户 (Kobe)',
      desc: '洋风与和风的完美结合',
      items: [
        { name: '神户牛 (Kobe Beef)', detail: '铁板烧入口即化。已预约石田屋。', icon: 'flame' },
        { name: '明石烧 (Akashiyaki)', detail: '软嫩的蛋糊章鱼烧，蘸高汤吃。', icon: 'droplet' },
        { name: '炒面饭 (Sobameshi)', detail: '神户长田B级美食，炒面碎米饭。', icon: 'food' },
        { name: '观音屋起司蛋糕', detail: '热着吃的芝士蛋糕，咸甜口。', icon: 'coffee' }
      ]
    },
    {
      region: '姬路 (Himeji)',
      desc: '独特生姜风味',
      items: [
        { name: '姬路关东煮', detail: '特色是蘸【生姜酱油】吃，非常暖胃。', icon: 'droplet' },
        { name: '杏仁吐司', detail: '当地特色的早餐文化。', icon: 'coffee' }
      ]
    },
    {
      region: '滋贺 (Shiga)',
      desc: '湖畔鲜味',
      items: [
        { name: '近江牛 (Omi Beef)', detail: '三大和牛之一，比神户牛性价比高。', icon: 'flame' },
        { name: '年轮蛋糕', detail: 'Club Harie，口感极其湿润。', icon: 'gift' }
      ]
    },
    {
      region: '广岛/宫岛',
      desc: '濑户内海的馈赠',
      items: [
        { name: '广岛烧', detail: '层层堆叠的面饼和卷心菜，酱汁浓郁。', icon: 'food' },
        { name: '烤牡蛎', detail: '宫岛必吃，个大肥美。', icon: 'fish' },
        { name: '星鳗饭 (Anago)', detail: '比鳗鱼更清淡软嫩。', icon: 'fish' },
        { name: '炸红叶馒头', detail: '外酥里嫩的甜点。', icon: 'gift' }
      ]
    }
  ];

  // --------------------------------------------------------------------------------
  // 辅助函数
  // --------------------------------------------------------------------------------
  const getIcon = (iconName) => {
    const size = 18;
    switch(iconName) {
      case 'camera': return <Camera size={size} />;
      case 'food': return <Utensils size={size} />;
      case 'snow': return <CloudSnow size={size} />;
      case 'alert': return <AlertTriangle size={size} />;
      case 'luggage': return <Luggage size={size} />;
      case 'plane': return <Plane size={size} />;
      case 'train': return <Train size={size} />;
      case 'check': return <CheckCircle size={size} />;
      case 'bus': return <Bus size={size} />;
      case 'ticket': return <Ticket size={size} />;
      case 'map': return <MapPin size={size} />;
      case 'info': return <Info size={size} />;
      case 'ship': return <Wind size={size} />; 
      case 'shopping': return <ShoppingBag size={size} />;
      case 'file': return <FileText size={size} />;
      case 'coffee': return <Coffee size={size} />;
      case 'flame': return <Flame size={size} />;
      case 'droplet': return <Droplet size={size} />;
      case 'fish': return <Fish size={size} />;
      case 'gift': return <Gift size={size} />;
      case 'wind': return <Wind size={size} />;
      case 'store': return <Store size={size} />;
      case 'car': return <Car size={size} />;
      case 'utensils': return <Utensils size={size} />;
      case 'utensils-crossed': return <X size={size} />;
      case 'footprints': return <User size={size} />;
      case 'mountain-snow': return <CloudSnow size={size} />;
      case 'bath': return <Droplet size={size} />;
      case 'x': return <X size={size} />;
      case 'phone': return <Smartphone size={size} />;
      case 'bag': return <ShoppingBag size={size} />;
      case 'briefcase': return <Briefcase size={size} />;
      default: return <Clock size={size} />;
    }
  };

  const getCardStyle = (type) => {
    switch(type) {
      case 'alert': return 'bg-orange-50 border-orange-200 text-orange-900';
      case 'transport': return 'bg-slate-50 border-slate-200 text-slate-700';
      case 'spot': return 'bg-white border-slate-200 text-slate-800 shadow-sm';
      case 'food': return 'bg-stone-50 border-stone-200 text-stone-800';
      case 'flight': return 'bg-blue-50 border-blue-200 text-blue-900';
      default: return 'bg-white border-slate-100 text-slate-600';
    }
  };

  // --------------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------------
  return (
    <div className="max-w-md mx-auto bg-stone-50 min-h-screen flex flex-col font-sans">
      
      {/* 1. Header: View Toggle */}
      <div className="bg-white pt-6 pb-2 px-4 sticky top-0 z-30 border-b border-stone-100/50 backdrop-blur-md bg-white/95">
        <div className="flex justify-between bg-slate-100 p-1 rounded-xl mb-4 overflow-x-auto gap-1">
          {['itinerary', 'guides', 'shopping', 'food', 'stress', 'packing'].map((tab) => (
             <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-white shadow-sm text-slate-900 ring-1 ring-black/5' : 'text-slate-400'
              }`}
            >
              {tab === 'itinerary' ? '行程' : 
               tab === 'guides' ? '交通' : 
               tab === 'shopping' ? '购物' : 
               tab === 'food' ? '美食' : 
               tab === 'stress' ? '诊断' : '清单'}
            </button>
          ))}
        </div>

        {activeTab === 'itinerary' && (
          <>
            <div className="flex justify-between items-end mb-4 animate-in fade-in slide-in-from-top-2">
              <div>
                <h1 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  {itinerary[activeDay].title}
                  <span className={`h-2 w-2 rounded-full ${itinerary[activeDay].color.replace('bg-', 'bg-')}`}></span>
                </h1>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mt-1">
                  Day {activeDay + 1} · {itinerary[activeDay].weekday}
                </p>
              </div>
            </div>
            {/* Date Grid */}
            <div className="grid grid-cols-6 gap-2 bg-slate-50 p-1 rounded-xl">
              {itinerary.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`relative flex flex-col items-center justify-center py-2 rounded-lg transition-all duration-300 ${
                    activeDay === idx 
                    ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                    : 'text-slate-400 hover:bg-slate-200/50'
                  }`}
                >
                  <span className="text-[10px] font-bold mb-0.5">{day.date}</span>
                  {activeDay === idx && (
                    <span className={`absolute -bottom-1 w-1 h-1 rounded-full ${day.color}`} />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        
        {/* Itinerary View */}
        {activeTab === 'itinerary' && (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            {itinerary[activeDay].timeline.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col rounded-2xl border p-4 transition-all ${getCardStyle(item.type)}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-black tracking-tight font-mono">{item.time}</span>
                  <div className={`p-1.5 rounded-full ${
                    item.type === 'alert' ? 'bg-orange-200 text-orange-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-bold text-base flex-1 flex items-center gap-2">
                    {item.task}
                    {item.type === 'alert' && (
                      <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">MUST</span>
                    )}
                  </h3>
                </div>
                <div className="pl-[3.25rem]">
                   <p className="text-sm opacity-90 leading-relaxed font-medium text-slate-700">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}

        {/* Guides View */}
        {activeTab === 'guides' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-lg mb-6">
               <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                 <Bus size={20} className="text-white"/>
                 交通攻略卡
               </h2>
               <p className="text-sm opacity-90">请在 Day 1 抵达时搞定所有车票！</p>
            </div>
            
            {guides.map((guide) => (
               <div key={guide.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className={`${guide.color} p-4 text-white`}>
                     <h3 className="font-bold text-lg">{guide.title}</h3>
                     <p className="text-xs opacity-80">{guide.subtitle}</p>
                  </div>
                  <div className="p-5 space-y-4">
                     {guide.content.map((section, idx) => (
                        <div key={idx}>
                           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                              {section.label}
                           </h4>
                           <p className="text-sm text-slate-700 font-medium leading-relaxed">
                              {section.text}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
             <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}

        {/* Shopping View */}
        {activeTab === 'shopping' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
             <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Store size={20} className="text-yellow-400"/>
                  营业时间红线
                </h2>
                <p className="text-sm opacity-80 leading-relaxed">
                  神户的户外店关门极早！<br/>
                  <span className="text-yellow-300 font-bold">19:00</span>：nanamica, Patagonia, NANGA 关门。<br/>
                  <span className="text-yellow-300 font-bold">20:00</span>：BEAMS, Bshop, Montbell 关门。<br/>
                  <span className="text-yellow-300 font-bold">23:00</span>：超市和 Donki 开到深夜。
                </p>
             </div>

            {shoppingCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className={`${cat.color} p-4 text-white flex justify-between items-center`}>
                   <div>
                      <h3 className="font-bold text-lg">{cat.title}</h3>
                      <p className="text-xs opacity-80">{cat.subtitle}</p>
                   </div>
                   <div className="bg-white/20 p-2 rounded-full">
                      <Clock size={16} />
                   </div>
                </div>
                <div className="divide-y divide-slate-100">
                  {cat.items.map((item, i) => (
                    <div key={i} className="p-4 hover:bg-slate-50 transition-colors">
                      <div className="flex justify-between items-center mb-1">
                         <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                         <span className="text-[12px] font-black text-slate-600 font-mono bg-slate-100 px-2 py-1 rounded">{item.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        {item.desc.includes('【注意】') ? <AlertTriangle size={10} className="text-red-500"/> : null}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
             <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}
        
        {/* Food View */}
        {activeTab === 'food' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-amber-500 text-white p-6 rounded-3xl shadow-lg mb-6">
               <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                 <Utensils size={20} className="text-white"/>
                 关西美食图鉴
               </h2>
               <p className="text-sm opacity-90">不要只盯着神户牛，路边摊的B级美食才是灵魂！</p>
            </div>
            
            {foodGuides.map((region, idx) => (
               <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-amber-50 p-4 border-b border-amber-100">
                     <h3 className="font-bold text-amber-900">{region.region}</h3>
                     <p className="text-xs text-amber-700/70">{region.desc}</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                     {region.items.map((item, i) => (
                        <div key={i} className="p-4 flex gap-4 items-start">
                           <div className="bg-slate-50 p-2 rounded-lg text-amber-500">
                              {getIcon(item.icon)}
                           </div>
                           <div>
                              <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                              <p className="text-xs text-slate-500 mt-1">{item.detail}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
             <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}

        {/* Stress Test View */}
        {activeTab === 'stress' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg mb-6">
               <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                 <Activity size={20} className="text-red-400"/>
                 行程压力诊断
               </h2>
               <p className="text-sm opacity-80">我们模拟了行程，发现了以下 4 个高风险点。请务必查看 B 计划。</p>
            </div>

            {stressAnalysis.map((item, idx) => (
               <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">
                  {/* Risk Level Badge */}
                  <div className={`absolute top-4 right-4 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider ${
                     item.level === 'High' ? 'bg-red-100 text-red-600' : 
                     item.level === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                     {item.level} Risk
                  </div>

                  <div className="p-6">
                     <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-xl ${item.level === 'High' ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-500'}`}>
                           {getIcon(item.icon)}
                        </div>
                        <div>
                           <div className="text-xs font-bold text-slate-400 uppercase">{item.day}</div>
                           <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                        </div>
                     </div>
                     <p className="text-sm text-slate-600 mb-4 font-medium">⚠️ {item.desc}</p>
                     <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-700 leading-relaxed">
                           <span className="font-bold text-slate-900">专家建议：</span>{item.solution}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
             <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}

        {/* Packing List View (New) */}
        {activeTab === 'packing' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-lg mb-6">
               <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                 <ClipboardList size={20} className="text-white"/>
                 行前准备清单
               </h2>
               <p className="text-sm opacity-90">2月关西风大，特别是去琵琶湖和姬路城，保暖防风是关键！</p>
            </div>

            {packingItems.map((category) => (
              <div key={category.category} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className={`${category.color} p-4 text-white flex items-center gap-3`}>
                   <div className="bg-white/20 p-2 rounded-lg">
                      {getIcon(category.icon)}
                   </div>
                   <h3 className="font-bold text-lg">{category.category}</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {category.items.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => toggleItem(category.category, item.id)}
                      className="p-4 flex items-center gap-4 hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        item.checked 
                        ? 'bg-emerald-500 border-emerald-500 text-white' 
                        : 'border-slate-300 text-transparent'
                      }`}>
                        <CheckCircle size={14} fill="currentColor" className={item.checked ? "opacity-100" : "opacity-0"} />
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-medium transition-all ${
                          item.checked ? 'text-slate-400 line-through' : 'text-slate-700'
                        }`}>
                          {item.name}
                        </span>
                        {item.important && !item.checked && (
                          <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-bold uppercase">必带</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
             <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;