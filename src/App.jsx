import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ShoppingBag, CheckSquare, Coffee, Plane, Train, Bus, AlertCircle, Ship, Sun, Ticket, Utensils, Camera, ArrowUp, Flag, Anchor, Mountain, Waves, Footprints, User, Briefcase, CreditCard, Smartphone, Shirt, Smile, ChevronRight, BedDouble, AlertTriangle, Wifi, Car, Globe, Star, Flame, Flower, Fish, Trees, Castle, Zap, Trophy, Moon, Gamepad2, FerrisWheel, BookOpen, Glasses, Coins, Store, Palmtree, Search, Landmark, ArrowRight, ThumbsUp, LayoutList, List, Image, Layout, ShoppingCart, LayoutTemplate, Bike, Home } from 'lucide-react';

// --- 基础组件与图标定义 ---

const Torii = ({ className, size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
    <path d="M4 4h16"/><path d="M4 8h16"/><path d="M5 4v18"/><path d="M19 4v18"/><path d="M5 8l-2 2"/><path d="M19 8l2 2"/>
  </svg>
);

const LocationLabel = ({ x, y, icon: Icon, label, color = "bg-white", textColor = "text-stone-800" }) => (
  <div className="absolute flex flex-col items-center z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
    <div className={`p-1.5 rounded-full shadow-md border border-stone-200 ${color}`}>
      {Icon && <Icon size={14} className="text-stone-700" />}
    </div>
    <span className={`text-[9px] font-bold mt-1 px-2 py-0.5 rounded-full shadow-sm bg-white/95 border border-stone-100 whitespace-nowrap ${textColor}`}>
      {label}
    </span>
  </div>
);

const TransportLabel = ({ x, y, text, rotate = 0, color = "text-stone-500" }) => (
  <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ left: x, top: y, transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
    <span className={`text-[8px] font-bold bg-white/80 px-1.5 py-0.5 rounded border border-stone-200 shadow-sm ${color}`}>
      {text}
    </span>
  </div>
);

// --- 手绘地图组件 ---
const HandDrawnMap = ({ day }) => {
  const renderMapContent = () => {
      switch(day) {
          case 'day1': return (
              <>
                <div className="absolute bottom-0 right-0 w-2/3 h-full bg-blue-50/50 rounded-tl-[100px] pointer-events-none"></div>
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                  <path d="M 280 200 C 200 200, 150 150, 60 60" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6,4" strokeLinecap="round" />
                  <circle cx="280" cy="200" r="4" fill="#3b82f6" />
                  <circle cx="60" cy="60" r="4" fill="#f97316" />
                </svg>
                <LocationLabel x="85%" y="80%" icon={Plane} label="KIX 关西机场" color="bg-blue-100" textColor="text-blue-800" />
                <LocationLabel x="18%" y="25%" icon={Coffee} label="神户三宫酒店" color="bg-orange-100" textColor="text-orange-800" />
                <LocationLabel x="40%" y="20%" icon={ShoppingBag} label="Donki 补货" color="bg-yellow-100" textColor="text-yellow-800" />
                <TransportLabel x="50%" y="60%" text="机场大巴 (65分)" rotate={-35} color="text-blue-600" />
              </>
          );
          case 'day2': return (
              <>
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                  {/* 神户 -> 广岛 */}
                  <path d="M 280 180 C 200 180, 150 120, 80 100" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="0" strokeLinecap="round" />
                  {/* 广岛 -> 宫岛 */}
                  <path d="M 80 100 L 20 60" fill="none" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="280" cy="180" r="4" fill="#57534e" />
                </svg>
                <LocationLabel x="85%" y="80%" icon={MapPin} label="新神户站" color="bg-stone-200" />
                <LocationLabel x="30%" y="45%" icon={Train} label="广岛站" color="bg-stone-100" />
                <LocationLabel x="10%" y="20%" icon={Torii} label="宫岛/严岛神社" color="bg-red-100" textColor="text-red-800" />
                <LocationLabel x="30%" y="25%" icon={Landmark} label="原爆/纸鹤塔" color="bg-teal-100" textColor="text-teal-800" />
                <TransportLabel x="55%" y="60%" text="新干线 (Pass)" rotate={-25} color="text-blue-600" />
                <TransportLabel x="15%" y="35%" text="渡轮" rotate={35} color="text-orange-500" />
              </>
          );
          case 'day3': return (
              <>
                <div className="absolute top-0 left-0 w-full h-full bg-stone-50/30 pointer-events-none"></div>
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                  {/* 上午: 酒店 -> 港口 */}
                  <path d="M 150 20 L 150 80" fill="none" stroke="#57534e" strokeWidth="2" strokeDasharray="2,2" />
                  {/* 中午: 港口 -> 购物 */}
                  <path d="M 150 80 L 150 30" fill="none" stroke="#f97316" strokeWidth="3" />
                  {/* 下午: 酒店 -> 港口区域 */}
                  <path d="M 150 30 Q 80 80 60 140" fill="none" stroke="#3b82f6" strokeWidth="3" />
                  {/* 晚上: 港口 -> 晚餐 */}
                  <path d="M 60 140 L 250 140" fill="none" stroke="#10b981" strokeWidth="2" />
                </svg>
                
                <LocationLabel x="50%" y="10%" icon={Home} label="三宫酒店" color="bg-stone-200" />
                <LocationLabel x="15%" y="35%" icon={Mountain} label="Montbell" color="bg-green-100" textColor="text-green-800" />
                <LocationLabel x="50%" y="60%" icon={ShoppingBag} label="潮牌/超市" color="bg-purple-100" textColor="text-purple-800" />
                <LocationLabel x="85%" y="65%" icon={Bike} label="川崎重工" color="bg-blue-100" textColor="text-blue-800" />
                <LocationLabel x="85%" y="85%" icon={Utensils} label="晚餐" color="bg-red-100" />

                <TransportLabel x="55%" y="30%" text="回酒店放货" rotate={-90} color="text-orange-500" />
                <TransportLabel x="30%" y="50%" text="下午去海边" rotate={45} color="text-blue-500" />
              </>
          );
          case 'day4': return (
              <>
                <div className="absolute top-0 left-0 w-full h-2/3 bg-emerald-50/50 rounded-b-[50px] pointer-events-none"></div>
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                  <path d="M 60 220 Q 40 120 80 60" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="4,2" />
                  <path d="M 80 60 Q 170 20 260 60" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="4,2" />
                  <path d="M 260 60 Q 280 200 60 220" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="6,4" />
                </svg>
                <LocationLabel x="18%" y="85%" icon={MapPin} label="三宫" color="bg-stone-200" />
                <LocationLabel x="22%" y="25%" icon={Sun} label="六甲山玩雪" color="bg-cyan-100" textColor="text-cyan-800" />
                <LocationLabel x="80%" y="25%" icon={Coffee} label="有马温泉" color="bg-red-100" textColor="text-red-800" />
                <TransportLabel x="15%" y="55%" text="巴士+缆车" rotate={-75} color="text-cyan-600" />
                <TransportLabel x="50%" y="15%" text="空中索道" color="text-red-600" />
                <TransportLabel x="75%" y="65%" text="高速巴士" rotate={70} color="text-orange-600" />
              </>
          );
          case 'day5': return (
              <>
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                  <line x1="20" y1="100" x2="300" y2="100" stroke="#57534e" strokeWidth="4" opacity="0.3" />
                  <path d="M 200 100 L 40 100" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4,4" />
                  <path d="M 40 100 L 120 100" fill="none" stroke="#10b981" strokeWidth="3" />
                  <path d="M 120 100 L 200 100" fill="none" stroke="#10b981" strokeWidth="3" />
                  <path d="M 200 100 Q 240 150 280 180" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="6,4" />
                </svg>
                <LocationLabel x="60%" y="40%" icon={MapPin} label="三宫 (存行李)" color="bg-stone-200" />
                <LocationLabel x="15%" y="40%" icon={Flag} label="姬路城" color="bg-stone-800" textColor="text-white" />
                <LocationLabel x="35%" y="40%" icon={Anchor} label="舞子大桥" color="bg-teal-100" textColor="text-teal-800" />
                <LocationLabel x="85%" y="80%" icon={MapPin} label="KIX 日航" color="bg-purple-100" textColor="text-purple-800" />
                <TransportLabel x="45%" y="30%" text="JR新快速" color="text-stone-600" />
                <TransportLabel x="75%" y="60%" text="机场大巴" rotate={35} color="text-blue-600" />
              </>
          );
          case 'day6': return (
              <div className="flex flex-col items-center justify-center h-full text-stone-400">
                  <Plane size={64} className="mb-4 text-green-500 animate-pulse" />
                  <p className="font-bold text-lg text-green-700">平安回家</p>
              </div>
          );
          default: return null;
      }
  };

  return (
    <div className="relative w-full h-56 bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-inner mb-6 mx-auto transition-all duration-500 group">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      {renderMapContent()}
    </div>
  );
};

// --- 3. 所有静态数据 ---

const itineraryData = {
  day1: {
    date: '2/15',
    weekday: '周日',
    title: '抵达神户',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-orange-500 to-red-500',
    color: 'bg-orange-50 border-orange-100',
    events: [
      { time: '16:40', icon: Plane, title: '航班落地 JL0894', desc: '关西 KIX T1 抵达', tag: '交通', tagColor: 'blue' },
      { time: '18:00', icon: Bus, title: '机场大巴 (直达)', desc: 'T1 1F 6号站台 | 约65分 | ¥2200', tag: '交通', tagColor: 'blue' },
      { time: '19:30', icon: MapPin, title: '酒店 Check-in', desc: '放行李，休整', tag: '住宿', tagColor: 'orange' },
      { time: '20:00', icon: Utensils, title: '晚餐：Katsukura', desc: '名代炸猪排 (Mint Kobe店)。\n酥脆多汁，米饭无限续。', tag: '用餐', tagColor: 'rose' },
      { time: '21:30', icon: ShoppingBag, title: 'Don Quijote', desc: '步行8分钟。24h营业。\n必买：手套、帽子、厚袜子。', tag: '购物', tagColor: 'purple' }
    ]
  },
  day2: {
    date: '2/16',
    weekday: '周一',
    title: '广岛双遗',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-blue-600 to-indigo-600',
    color: 'bg-blue-50 border-blue-100',
    events: [
      { time: '08:00', icon: Train, title: '前往新神户站', desc: '地铁西神・山手线 (1站) → 新神户', tag: '交通', tagColor: 'blue' },
      { time: '08:30', icon: Train, title: '新干线 (Nozomi)', desc: '新神户 → 广岛 (70分) [JR Pass]', tag: '交通', tagColor: 'blue' },
      { time: '10:00', icon: Ship, title: '宫岛 (严岛神社)', desc: 'JR山阳本线 -> 宫岛口 -> JR渡轮。\n★必看：海中大鸟居、喂小鹿、商店街。', tag: '必游', tagColor: 'red' },
      { time: '13:00', icon: Utensils, title: '午餐：广岛烧/牡蛎', desc: '宫岛口或广岛站吃。', tag: '用餐', tagColor: 'rose' },
      { time: '14:30', icon: Landmark, title: '原爆圆顶 & 纸鹤塔', desc: '广岛站坐路面电车(2/6号)直达。\n1. 原爆圆顶馆 (世界遗产)\n2. 纸鹤塔 (Orizuru Tower): 顶楼看全景，折纸鹤。', tag: '必游', tagColor: 'emerald' },
      { time: '17:30', icon: Train, title: '新干线返程', desc: '广岛 → 新神户 [JR Pass]。', tag: '交通', tagColor: 'blue' },
      { time: '19:30', icon: Utensils, title: '晚餐：Mori Mori 寿司', desc: '三宫OPA 2店。金泽人气回转寿司。', tag: '用餐', tagColor: 'rose' }
    ]
  },
  day3: {
    date: '2/17',
    weekday: '周二',
    title: '科技 & 购物',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-purple-500 to-pink-500',
    color: 'bg-purple-50 border-purple-100',
    events: [
      { time: '10:00', icon: Mountain, title: '第一站：Montbell', desc: '在花钟路。优先买齐明天滑雪的保暖装备！', tag: '购物', tagColor: 'orange' },
      { time: '11:00', icon: ShoppingCart, title: '超市扫货 & 杂货', desc: '1. Hankyu Oasis (买油盐酱醋)\n2. Daiso/3COINS\n⚠️ 买完重物立刻放回酒店！', tag: '生活', tagColor: 'orange' },
      { time: '12:30', icon: Utensils, title: '午餐：中华街', desc: '南京町。老祥记包子、神户牛拉面。', tag: '用餐', tagColor: 'rose' },
      { time: '14:00', icon: Shirt, title: '潮牌区 (旧居留地)', desc: 'Bshop, nanamica, TNF, Patagonia。\n买完先把战利品放回酒店！', tag: '购物', tagColor: 'purple' },
      { time: '15:30', icon: Bike, title: '川崎重工世界', desc: '神户港海洋博物馆内。看0系新干线、忍者摩托。\n(周二开馆，完美！)', tag: '必游', tagColor: 'emerald' },
      { time: '17:30', icon: Anchor, title: '神户塔 (夜景)', desc: '就在川崎旁边。登塔看夕阳/夜景。', tag: '游玩', tagColor: 'blue' },
      { time: '19:00', icon: Utensils, title: '晚餐：Grill Ippei', desc: '神户老字号洋食。必点半熟炸牛排。', tag: '用餐', tagColor: 'rose' }
    ]
  },
  day4: {
    date: '2/18',
    weekday: '周三',
    title: '六甲山 & 有马',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-cyan-500 to-blue-500',
    color: 'bg-cyan-50 border-cyan-100',
    events: [
      { time: '09:30', icon: Bus, title: '上山交通', desc: '⚠️缆车运休。坐16路巴士 -> 替代巴士 -> 山上巴士。\n(替代巴士班次衔接，约20-30分一班)', tag: '交通', tagColor: 'blue' },
      { time: '11:00', icon: Sun, title: '六甲山雪乐园', desc: 'Snow Land 玩雪盆 (2小时)\n*穿上昨天买的新装备！', tag: '游玩', tagColor: 'emerald' },
      { time: '14:30', icon: Train, title: '六甲有马索道', desc: '绝景跨山缆车 (12分)', tag: '交通', tagColor: 'blue' },
      { time: '15:30', icon: Coffee, title: '有马温泉 (逛吃)', desc: '不一定要泡澡！\n★必做：1.金之汤足汤(免费) 2.吃竹中肉店可乐饼 3.喝有马汽水。', tag: '游玩', tagColor: 'emerald' },
      { time: '17:40', icon: Bus, title: '高速巴士回程', desc: '阪急/JR巴士 → 三宫 (40分)。\n⚠️ 建议提前买好票！', tag: '交通', tagColor: 'blue' },
      { time: '19:30', icon: Utensils, title: '晚餐：烧肉石田屋', desc: '★ 已预定 19:30。\n顶级神户牛烧肉！运动完吃肉最香。', tag: '必吃', tagColor: 'red' }
    ]
  },
  day5: {
    date: '2/19',
    weekday: '周四',
    title: '姬路舞子 & 移动',
    stay: '关西机场日航酒店 (Hotel Nikko)',
    themeColor: 'from-stone-500 to-stone-700',
    color: 'bg-stone-50 border-stone-200',
    events: [
      { time: '09:00', icon: CheckSquare, title: '退房 & 存行李', desc: '【关键】3个大箱子寄存在酒店前台 (免费)。', tag: '提示', tagColor: 'orange' },
      { time: '09:30', icon: Train, title: '前往姬路', desc: 'JR新快速 (40分钟) 直达。\n*新快速比新干线更方便。', tag: '交通', tagColor: 'blue' },
      { time: '10:30', icon: Flag, title: '姬路城 (白鹭城)', desc: '日本第一名城。爬天守阁 (穿厚袜)。\n建议预留 2.5 小时。', tag: '必游', tagColor: 'red' },
      { time: '13:00', icon: Utensils, title: '午餐：姬路关东煮', desc: '推荐在“御幸通商店街”吃 (生姜酱油味)。', tag: '用餐', tagColor: 'rose' },
      { time: '14:30', icon: Train, title: '前往舞子 (回程顺路)', desc: '坐JR回程，在“舞子站”下车 (30分钟)。', tag: '交通', tagColor: 'blue' },
      { time: '15:00', icon: Anchor, title: '舞子海上散步道', desc: '走在明石海峡大桥的玻璃地板上，看海景。', tag: '游玩', tagColor: 'emerald' },
      { time: '16:30', icon: Train, title: '回到三宫', desc: 'JR (20分钟)。', tag: '交通', tagColor: 'blue' },
      { time: '17:30', icon: Utensils, title: '告别晚餐', desc: '蟹道乐(全蟹) 或 Tokeiya(寿喜烧)。', tag: '用餐', tagColor: 'rose' },
      { time: '20:00', icon: Bus, title: '前往机场', desc: '坐机场大巴 (约20:00-20:20的班次)。直达 KIX T1。', tag: '交通', tagColor: 'blue' },
      { time: '21:10', icon: MapPin, title: '入住：日航酒店', desc: 'T1航站楼内。洗澡睡觉。', tag: '住宿', tagColor: 'orange' }
    ]
  },
  day6: {
    date: '2/20',
    weekday: '周五',
    title: '平安回家',
    stay: '温馨的家',
    themeColor: 'from-emerald-500 to-teal-500',
    color: 'bg-green-50 border-green-100',
    events: [
      { time: '07:30', icon: Coffee, title: '起床退房', desc: '住在机场里就是爽，多睡会儿。', tag: '住宿', tagColor: 'orange' },
      { time: '08:00', icon: CheckSquare, title: '值机', desc: '推行李步行3分钟到柜台。JL0891 (09:15起飞)。', tag: '交通', tagColor: 'blue' },
      { time: '10:15', icon: Plane, title: '起飞', desc: '飞往上海。', tag: '交通', tagColor: 'blue' }
    ]
  }
};

const transportData = {
  day1: {
    title: "关西机场 → 神户三宫",
    summary: "带着3个大箱子，【直达】是第一优先级。",
    comparisons: [
      {
        title: "机场到市区：大巴 vs 船",
        options: [
          { name: "机场大巴 (Limousine Bus)", icon: Bus, time: "65分钟", price: "¥2,200", comfort: 5, pros: "行李放车底，一站直达。", cons: "价格比船贵。", recommend: true },
          { name: "高速船 (Bay Shuttle)", icon: Ship, time: "60分钟+", price: "¥500", comfort: 3, pros: "便宜。", cons: "换乘3次，搬行李太累。" }
        ]
      }
    ]
  },
  day2: {
    title: "广岛一日游",
    summary: "利用 JR Pass 坐新干线。",
    comparisons: [
      {
        title: "去程：新神户 → 广岛",
        options: [
          { name: "山阳新干线 (Nozomi)", icon: Train, time: "70分钟", price: "Pass 免费", comfort: 5, pros: "极速。可坐 Hello Kitty 列车。", recommend: true }
        ]
      },
      {
        title: "广岛站 → 宫岛口",
        options: [
          { name: "JR 山阳本线", icon: Train, time: "28分钟", price: "Pass 免费", comfort: 4, pros: "最快。", recommend: true },
          { name: "广岛电铁 (路面电车)", icon: Train, time: "70分钟", price: "Pass 不含", comfort: 2, pros: "看街景。", cons: "太慢了，甚至会晕车。" }
        ]
      }
    ]
  },
  day3: { title: "神户市内 City Walk", summary: "全程步行即可 (City Walk)。", comparisons: [] },
  day4: {
    title: "六甲山 & 有马温泉",
    summary: "回程务必坐大巴，不要坐电车。",
    comparisons: [
      {
        title: "上山：三宫 → 六甲缆车",
        options: [
           { name: "替代巴士 (因运休)", icon: Bus, time: "20分钟", price: "含在套票", comfort: 4, pros: "替代缆车，直接坐车上山。", recommend: true }
        ]
      },
      {
        title: "回程：有马温泉 → 三宫",
        options: [
          { name: "高速巴士", icon: Bus, time: "40分钟", price: "¥780", comfort: 5, pros: "直达，有座。", cons: "Pass 不含。", recommend: true },
          { name: "神户电铁", icon: Train, time: "60分钟", price: "¥950", comfort: 2, pros: "随到随走。", cons: "转车2次。Pass 不含。" }
        ]
      }
    ]
  },
  day5: {
    title: "神户 → 姬路 → 机场",
    summary: "去姬路坐新快速更顺。",
    comparisons: [
      {
        title: "去程：神户 → 姬路",
        options: [
          { name: "JR 新快速 (从三宫坐)", icon: Train, time: "40分钟", price: "Pass 免费", comfort: 5, pros: "三宫站直接上车，直达。", recommend: true },
          { name: "新干线 (从新神户坐)", icon: Train, time: "15分钟", price: "Pass 免费", comfort: 4, pros: "车速快。", cons: "算上转地铁的时间，总耗时其实差不多。" }
        ]
      },
      {
        title: "中间：姬路 → 舞子",
        options: [
          { name: "JR 新快速", icon: Train, time: "30分钟", price: "Pass 免费", comfort: 5, pros: "直达，新干线不停舞子。", recommend: true }
        ]
      },
      {
        title: "回程：三宫 → 机场",
        options: [
          { name: "机场大巴", icon: Bus, time: "65分钟", price: "¥2,200", comfort: 5, pros: "行李放车底，直达。", recommend: true },
          { name: "JR 关空特急", icon: Train, time: "90分钟", price: "Pass 免费", comfort: 2, pros: "省钱。", cons: "要转车，行李难拿。" }
        ]
      }
    ]
  },
  day6: { title: "回国", summary: "步行至柜台。", comparisons: [] }
};

const shoppingList = [
  { name: 'Bshop', tags: ['海岸通', 'Danton/Nanga'], note: '神户本店货最全。' },
  { name: 'nanamica KOBE', tags: ['旧居留地', '紫标'], note: '独立路面店，款式极多。' },
  { name: 'The North Face', tags: ['海岸通', '户外'], note: '就在 Nanamica 隔壁。' },
  { name: 'Patagonia', tags: ['海岸通', '户外'], note: '也在附近，步行可达。' },
  { name: 'Montbell', tags: ['三宫', '户外'], note: '三宫店很大，适合补货。' },
  { name: '金子眼镜', tags: ['大丸6F', '眼镜'], note: '在大丸百货楼上。' },
  { name: '3COINS / Daiso', tags: ['车站', '杂货'], note: '地下街或商店街。' },
  { name: 'Bookoff', tags: ['Center Plaza', '二手'], note: 'Center Plaza 2F/3F。' },
  { name: 'Hankyu Oasis', tags: ['生活超市', '油盐酱醋'], note: '神户阪急B1。买调料首选。' },
];

const hotelBookings = [
  { name: 'Daiwa Roynet Hotel 神户三宫PREMIER', dates: '2/15 - 2/19 (4晚)', status: '不可取消 (携程)', note: '儿童友好', active: true },
  { name: '日航关西机场酒店', dates: '2/19 - 2/20 (1晚)', status: '免费取消 (Agoda)', note: '推荐入住', active: true, highlight: true },
  { name: '大阪关西机场奥德西斯', dates: '2/19 - 2/20 (1晚)', status: '免费取消 (飞猪)', note: '建议取消', active: false, warn: true }
  ];

const checklistItems = [
  { item: 'JR 关西&广岛周游券', status: '必做', note: 'Klook购买兑换券。Day 1 启用。' },
  { item: 'Day 2 晚餐: 烧肉石田屋', status: '已完成', note: '已预定 19:30。' },
  { item: 'Day 5 晚餐: 蟹道乐/寿喜烧', status: '必做', note: '提前官网预定。' },
  { item: 'Day 4 交通: 有马回程巴士', status: '建议', note: '提前1周买票。' },
  { item: '请取消: 奥德西斯套房酒店', status: '紧急', note: '2月18日前取消。' },
  { item: '手机流量卡 (亿点原生)', status: '未准备', note: '7天10G。' },
  { item: '浦东接送机', status: '未准备', note: '预约。' },
  { item: 'VJW 入境码', status: '未准备', note: 'Visit Japan Web。' },
];

const packingList = [
  { category: '重要证件', items: ['护照 (6个月以上有效期)', '机票行程单 (打印)', '酒店确认单 (日语/英语)', '现金 (3-5万日元)', '信用卡 (Visa/Master)', 'ICOCA/Suica卡 (苹果钱包)'] },
  { category: '电子产品', items: ['手机 & 充电器', '充电宝 (随身带)', '转换插头 (日本两扁孔)', '流量卡 / eSIM', '孩子iPad/耳机'] },
  { category: '衣物 (2月神户)', items: ['羽绒服 (防风)', '保暖内衣 (Uniqlo Heattech)', '厚袜子 (多带几双)', '舒适走路鞋', '围巾/手套/帽子'] },
  { category: '亲子/生活', items: ['牙刷牙膏 (日本酒店有时不提供)', '个人护肤品 (小样)', '常备药 (感冒/肠胃/创可贴)', '折叠伞', '大号购物袋 (装战利品)'] },
  { category: '超市扫货', items: ['气泡纸 (包酱油/醋)', '密封袋 (防漏)', '折叠手提袋 (超市用)'] }
];

const jrPassInfo = {
  title: 'JR 关西&广岛地区周游券 (5日)',
  price: '¥17,000 /人',
  validity: '5天无限次乘坐 (Day 1 - Day 5)',
  coverage: [
    { route: '新神户 ⇔ 广岛', type: '山阳新干线 (指定席)', time: '70分钟 (Nozomi)', note: '光这一趟往返就值回票价 (单买约¥20000)。可坐Hello Kitty新干线。' },
    { route: '广岛 ⇔ 宫岛口/吴市', type: 'JR 在来线', time: '含JR渡轮', note: '去宫岛的船也免费坐。' },
    { route: '新神户 ⇔ 姬路', type: '新干线', time: '15分钟', note: 'Day 5 坐这个去姬路，比普通车快半小时。' },
    { route: '兑换地点', type: '自动售票机', time: '关西机场/三宫', note: '找带有地球仪标志的绿色售票机，扫护照+二维码兑换。' },
    { route: '如何划座', type: '自动售票机', time: '免费6次', note: '拿到Pass后，在机器上插票 → 选“指定席” → 选车次(广岛/姬路) → 出票。' }
  ],
  verdict: '✅ 必买神器：Day 2 广岛往返 + Day 5 姬路新干线，总价值超过 ¥25,000。省钱又省时！'
};

const ItineraryApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary'); 
  const [selectedDay, setSelectedDay] = useState('day1');
  const [checklistTab, setChecklistTab] = useState('jrpass');
  const [layoutMode, setLayoutMode] = useState('card'); 
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedDay, activeTab, layoutMode]);

  const toggleLayout = () => {
    const modes = ['card', 'list', 'magazine'];
    const nextIndex = (modes.indexOf(layoutMode) + 1) % modes.length;
    setLayoutMode(modes[nextIndex]);
  };

  const renderTransportView = () => {
    const data = transportData[selectedDay];
    if (!data) return null;

    return (
        <div className="space-y-6 pb-24 animate-fade-in-up">
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-blue-100 text-sm">{data.summary}</p>
            </div>

            {data.comparisons.length === 0 ? (
                <div className="text-center text-stone-400 py-10">
                    <Footprints size={48} className="mx-auto mb-2 opacity-50"/>
                    <p>今天步行即可，无复杂交通</p>
                </div>
            ) : (
                data.comparisons.map((comp, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                        <div className="bg-stone-50 px-4 py-3 border-b border-stone-100 font-bold text-stone-700 flex items-center">
                           <MapPin size={16} className="mr-2"/> {comp.title}
                        </div>
                        <div className="divide-y divide-stone-100">
                            {comp.options.map((opt, i) => (
                                <div key={i} className={`p-4 ${opt.recommend ? 'bg-blue-50/50' : ''}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center">
                                            {opt.recommend && <ThumbsUp size={16} className="text-blue-500 mr-2 fill-blue-100"/>}
                                            <h4 className={`font-bold ${opt.recommend ? 'text-blue-700' : 'text-stone-700'}`}>{opt.name}</h4>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-stone-800">{opt.price}</div>
                                            <div className="text-[10px] text-stone-400">{opt.time}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-xs text-stone-500 mb-2">
                                        <span className="mr-2">舒适度:</span>
                                        <span className="text-orange-400">{opt.comfort === 5 ? '★★★★★' : opt.comfort === 4 ? '★★★★' : opt.comfort === 3 ? '★★★' : '★★'}</span>
                                    </div>
                                    <p className="text-xs text-green-700 mb-0.5">✅ {opt.pros}</p>
                                    {opt.cons && <p className="text-xs text-red-600">❌ {opt.cons}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
  };

  const renderDayView = () => {
    const data = itineraryData[selectedDay];
    
    if (!data) return null;

    if (layoutMode === 'list') {
        const borderColor = data.color ? data.color.replace('bg-', 'border-l-').split(' ')[0] : 'border-gray-200';
        return (
             <div className="space-y-4 pb-24 animate-fade-in-up">
                 <div className={`p-4 rounded-xl border-l-4 ${borderColor} bg-white shadow-sm`}>
                    <h2 className="text-xl font-bold">{data.title}</h2>
                    <p className="text-xs text-gray-500">{data.date}</p>
                 </div>
                 <div className="space-y-2">
                     {data.events.map((ev, i) => (
                         <div key={i} className="flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                             <span className="font-mono text-xs font-bold w-12 text-gray-400">{ev.time}</span>
                             <div className="flex-1 ml-2">
                                 <div className="font-bold text-sm text-gray-800">{ev.title}</div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        )
    }

    if (layoutMode === 'magazine') {
        return (
             <div className="space-y-8 pb-24 animate-fade-in-up">
                 <div className={`aspect-video rounded-3xl shadow-xl flex items-end p-6 bg-gradient-to-br ${data.themeColor} text-white`}>
                    <div>
                        <h1 className="text-4xl font-black mb-2">{data.title}</h1>
                        <p className="opacity-80">{data.date} • {data.stay}</p>
                    </div>
                 </div>
                 <div className="space-y-8 px-2">
                     {data.events.map((ev, i) => (
                         <div key={i} className="flex flex-col gap-2">
                             <span className="text-2xl font-black text-gray-200">{ev.time}</span>
                             <h3 className="text-xl font-bold text-gray-800">{ev.title}</h3>
                             <p className="text-gray-500 leading-relaxed">{ev.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
        )
    }

    return (
      <div className="space-y-6 pb-24 animate-fade-in-up">
        <div className={`relative overflow-hidden rounded-3xl shadow-xl p-6 mb-8 bg-gradient-to-br ${data.themeColor} text-white`}>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-medium opacity-90 mb-1">{data.date} {data.weekday}</h3>
                <h1 className="text-3xl font-black tracking-tight leading-tight">{data.title}</h1>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                 <MapPin className="text-white" size={24} />
              </div>
            </div>
            <div className="inline-flex items-center text-xs font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <BedDouble size={14} className="mr-1.5" />
              {data.stay}
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <MapPin size={200} />
          </div>
        </div>

        {/* 手绘地图 */}
        <HandDrawnMap day={selectedDay} />

        <div className="space-y-0 relative px-2">
          <div className="absolute left-[23px] top-4 bottom-8 w-0.5 bg-gray-200"></div>

          {data.events.map((event, index) => {
            const tagColors = {
              blue: 'bg-blue-100 text-blue-700',
              orange: 'bg-orange-100 text-orange-700',
              rose: 'bg-rose-100 text-rose-700',
              purple: 'bg-purple-100 text-purple-700',
              emerald: 'bg-emerald-100 text-emerald-700',
              indigo: 'bg-indigo-100 text-indigo-700',
              red: 'bg-red-100 text-red-700',
              amber: 'bg-amber-100 text-amber-700',
              pink: 'bg-pink-100 text-pink-700'
            };
            const tagClass = tagColors[event.tagColor] || 'bg-gray-100 text-gray-700';

            return (
              <div key={index} className="relative flex group mb-6 last:mb-0">
                <div className={`relative z-10 w-3 h-3 mt-1.5 ml-[17.5px] rounded-full border-2 border-white shadow-sm shrink-0 ${event.highlight ? 'bg-indigo-500 scale-125' : 'bg-gray-300'}`}></div>
                <div className="flex-1 ml-6">
                  <div className="flex items-baseline mb-1">
                    <span className="text-xs font-bold text-gray-400 w-10 shrink-0">{event.time}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 ${tagClass}`}>{event.tag}</span>
                  </div>
                  <div className={`p-4 rounded-2xl border transition-all ${event.highlight ? 'bg-white border-indigo-100 shadow-lg shadow-indigo-100/50' : 'bg-white border-gray-100 shadow-sm'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-xl shrink-0 ${event.highlight ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-500'}`}>
                        <event.icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className={`font-bold text-base mb-1 ${event.highlight ? 'text-gray-900' : 'text-gray-700'}`}>{event.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderShopping = () => (
     <div className="space-y-5 pb-20 animate-fade-in-up">
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
           <div className="relative z-10">
               <h2 className="text-2xl font-bold flex items-center mb-2"><ShoppingBag className="mr-2"/> 购物攻略</h2>
               <p className="text-purple-100 text-sm opacity-90">Day 3 专属 · 旧居留地核心圈</p>
           </div>
           <ShoppingBag className="absolute -bottom-6 -right-6 text-white opacity-10" size={140} />
        </div>
        <div className="grid gap-4">
           {shoppingList.map((shop, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{shop.name}</h3>
                    <div className="flex gap-1 flex-wrap justify-end">
                        {shop.tags.map(t => (
                            <span key={t} className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-gray-600 font-medium">{t}</span>
                        ))}
                    </div>
                 </div>
                 <div className="bg-purple-50 p-3 rounded-xl text-xs text-purple-900 leading-relaxed font-medium">
                    💡 {shop.note}
                 </div>
              </div>
           ))}
        </div>
     </div>
  );

  const renderChecklist = () => (
     <div className="space-y-6 pb-20 animate-fade-in-up">
        {/* 分段控制器 */}
        <div className="bg-white p-1.5 rounded-2xl border border-stone-200 flex text-xs font-bold sticky top-0 z-10 shadow-sm">
           <button onClick={() => setChecklistTab('jrpass')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='jrpass'?'bg-blue-50 text-blue-600 shadow-sm':'text-gray-400'}`}>JR券</button>
           <button onClick={() => setChecklistTab('hotels')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='hotels'?'bg-orange-50 text-orange-600 shadow-sm':'text-gray-400'}`}>酒店</button>
           <button onClick={() => setChecklistTab('booking')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='booking'?'bg-teal-50 text-teal-600 shadow-sm':'text-gray-400'}`}>待办</button>
           <button onClick={() => setChecklistTab('packing')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='packing'?'bg-indigo-50 text-indigo-600 shadow-sm':'text-stone-400'}`}>行李</button>
        </div>

        {checklistTab === 'jrpass' && (
           <div className="space-y-4 animate-fade-in-up">
               <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
                   <div className="relative z-10">
                       <h3 className="text-lg font-bold text-stone-800 mb-1">关西&广岛地区周游券</h3>
                       <p className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-4">Kansai-Hiroshima Area Pass</p>
                       <div className="flex items-baseline gap-1 mb-4">
                           <span className="text-3xl font-black text-blue-600">¥17,000</span>
                           <span className="text-xs text-gray-400">/ 5日</span>
                       </div>
                       <div className="space-y-2">
                           {jrPassInfo.coverage.map((item, idx) => (
                               <div key={idx} className="flex justify-between text-xs py-2 border-b border-gray-100 last:border-0">
                                   <span className="font-bold text-gray-700">{item.route}</span>
                                   <span className="text-gray-500">{item.time}</span>
                               </div>
                           ))}
                       </div>
                       <div className="mt-4 bg-green-50 text-green-800 text-xs p-3 rounded-xl font-medium">
                           ✅ {jrPassInfo.verdict}
                       </div>
                   </div>
               </div>
           </div>
        )}

        {checklistTab === 'booking' && (
           <div className="space-y-3 animate-fade-in-up">
              {checklistItems.map((item, i) => (
                 <div key={i} className="flex bg-white p-4 rounded-2xl border border-gray-100 shadow-sm items-start hover:border-teal-200 transition-colors">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 mr-4 shrink-0 ${item.status==='已完成'?'bg-green-500': item.status==='未准备'?'bg-gray-300':'bg-red-500'}`}></div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-sm text-gray-800">{item.item}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${item.status==='已完成'?'bg-green-100 text-green-700': item.status==='未准备'?'bg-gray-100 text-gray-500':'bg-red-100 text-red-700'}`}>{item.status}</span>
                       </div>
                       <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                 </div>
              ))}
           </div>
        )}
        
        {checklistTab === 'hotels' && (
           <div className="space-y-4 animate-fade-in-up">
              {hotelBookings.map((h, i) => (
                 <div key={i} className={`p-5 rounded-2xl border-2 ${h.warn ? 'border-red-100 bg-red-50/50' : h.highlight ? 'border-orange-200 bg-white' : 'border-gray-100 bg-white'}`}>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-sm text-gray-800 pr-4">{h.name}</h3>
                        {h.warn && <span className="bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded-full font-bold whitespace-nowrap">请取消</span>}
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex items-center text-xs text-gray-500"><Calendar size={12} className="mr-2"/> {h.dates}</div>
                        <div className="flex items-center text-xs text-gray-500"><BedDouble size={12} className="mr-2"/> {h.room}</div>
                        <div className="flex items-center text-xs text-gray-500"><CreditCard size={12} className="mr-2"/> {h.price}</div>
                    </div>
                    <div className={`mt-3 text-xs font-medium px-3 py-2 rounded-lg inline-block ${h.warn ? 'bg-red-100 text-red-700' : 'bg-green-50 text-green-700'}`}>
                        {h.note}
                    </div>
                 </div>
              ))}
           </div>
        )}

        {checklistTab === 'packing' && (
           <div className="space-y-3 animate-fade-in-up">
              {packingList.map((cat, i) => (
                 <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                    <h3 className="font-bold text-sm text-indigo-900 mb-3 border-b border-stone-100 pb-2">{cat.category}</h3>
                    <div className="grid grid-cols-2 gap-2">
                       {cat.items.map((it, j) => (
                          <div key={j} className="flex items-center text-xs text-stone-600">
                             <div className="w-1 h-1 bg-indigo-300 rounded-full mr-2"></div>
                             {it}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        )}
     </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-stone-800 max-w-md mx-auto shadow-2xl overflow-hidden relative flex flex-col">
      {/* 顶部日期栏 (胶囊风格) */}
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-50 pt-safe-top">
        <div className="px-5 py-3 flex justify-between items-end">
            <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-0.5">TRIP TO KOBE</p>
                <h1 className="text-xl font-black text-gray-900">春节亲子游</h1>
            </div>
            <div className="flex items-center gap-2">
                 <button onClick={toggleLayout} className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors" title="切换布局">
                    {layoutMode === 'card' && <LayoutTemplate size={16} />}
                    {layoutMode === 'list' && <List size={16} />}
                    {layoutMode === 'magazine' && <Image size={16} />}
                 </button>
                 <div className="bg-gray-100 px-2 py-1 rounded-lg text-[10px] font-bold text-gray-500">2月15-20日</div>
            </div>
        </div>
        {(activeTab === 'itinerary' || activeTab === 'transport') && (
            <div className="flex overflow-x-auto hide-scrollbar px-5 pb-3 gap-3">
                {['day1', 'day2', 'day3', 'day4', 'day5', 'day6'].map((day, idx) => (
                    <button key={day} onClick={() => setSelectedDay(day)} className={`flex flex-col items-center justify-center w-12 h-14 rounded-2xl transition-all duration-300 border ${selectedDay === day ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' : 'bg-white border-gray-100 text-gray-400'}`}>
                        <span className={`text-[10px] font-bold ${selectedDay === day ? 'text-indigo-200' : ''}`}>D{idx+1}</span>
                        <span className="text-sm font-bold">{15+idx}</span>
                    </button>
                ))}
            </div>
        )}
      </div>

      {/* 主内容区 */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-5" ref={scrollContainerRef}>
         {activeTab === 'itinerary' && renderDayView()}
         {activeTab === 'transport' && renderTransportView()}
         {activeTab === 'shopping' && renderShopping()}
         {activeTab === 'checklist' && renderChecklist()}
      </div>

      {/* 底部导航 (悬浮大卡片风格) */}
      <div className="absolute bottom-0 w-full p-4 z-50 bg-gradient-to-t from-white via-white to-transparent pb-6 pt-10">
        <div className="bg-white rounded-full shadow-2xl shadow-gray-200/50 border border-gray-100 p-2 flex justify-between items-center px-6">
            <button onClick={() => setActiveTab('itinerary')} className={`p-2 rounded-full transition-all ${activeTab === 'itinerary' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <Calendar size={22} strokeWidth={2.5} />
            </button>
            <button onClick={() => setActiveTab('transport')} className={`p-2 rounded-full transition-all ${activeTab === 'transport' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <Train size={22} strokeWidth={2.5} />
            </button>
            <button onClick={() => setActiveTab('shopping')} className={`p-2 rounded-full transition-all ${activeTab === 'shopping' ? 'bg-purple-50 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <ShoppingBag size={22} strokeWidth={2.5} />
            </button>
            <button onClick={() => setActiveTab('checklist')} className={`p-2 rounded-full transition-all ${activeTab === 'checklist' ? 'bg-teal-50 text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <CheckSquare size={22} strokeWidth={2.5} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryApp;