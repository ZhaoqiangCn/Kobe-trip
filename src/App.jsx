import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ShoppingBag, CheckSquare, Coffee, Plane, Train, Bus, AlertCircle, Ship, Sun, Ticket, Utensils, Camera, ArrowUp, Flag, Anchor, Mountain, Waves, Footprints, User, Briefcase, CreditCard, Smartphone, Shirt, Smile, ChevronRight, BedDouble, AlertTriangle, Wifi, Car, Globe, Star, Flame, Flower, Fish, Trees, Castle, Zap, Trophy, Moon, Gamepad2, FerrisWheel, BookOpen, Glasses, Coins, Store, Palmtree, Search, Landmark, ArrowRight, ThumbsUp } from 'lucide-react';

// --- 1. 静态数据定义 (移至组件外，防止重复定义错误) ---

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
  verdict: '✅ 必买神器：Day 4 广岛往返 + Day 5 姬路新干线，总价值超过 ¥25,000。省钱又省时！'
};

const itineraryData = {
  day1: {
    date: '2/15',
    weekday: '周日',
    title: '抵达 & 紧急补货',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-orange-500 to-red-500',
    events: [
      { time: '16:40', icon: Plane, title: '航班落地 JL0894', desc: '抵达关西 KIX T1。', tag: '交通', tagColor: 'blue' },
      { time: '18:00', icon: Bus, title: '机场大巴 (直达)', desc: 'T1 1F 6号站台 | 约65分 | ¥2200。', tag: '交通', tagColor: 'blue' },
      { time: '19:30', icon: MapPin, title: '酒店 Check-in', desc: '办理入住，放行李。', tag: '住宿', tagColor: 'orange' },
      { time: '20:00', icon: Utensils, title: '晚餐：Katsukura', desc: '名代炸猪排 (Mint Kobe店)。酥脆多汁，米饭无限续。', tag: '用餐', tagColor: 'rose' },
      { time: '21:30', icon: ShoppingBag, title: 'Don Quijote', desc: '步行8分钟。24h营业。必买：手套、帽子、厚袜子。', tag: '购物', tagColor: 'purple' }
    ]
  },
  day2: {
    date: '2/16',
    weekday: '周一',
    title: '六甲山 & 有马金泉',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-cyan-500 to-blue-500',
    events: [
      { time: '08:30', icon: Coffee, title: '早餐：松屋/Sukiya', desc: '就在酒店楼下，几步路就到。', tag: '用餐', tagColor: 'rose' },
      { time: '09:30', icon: Bus, title: '上山交通', desc: '16路巴士 → 六甲缆车 → 山上巴士。', tag: '交通', tagColor: 'blue' },
      { time: '11:00', icon: Sun, title: '六甲山雪上乐园', desc: 'Snow Land 玩雪盆 (2小时)。*记得带上备用干袜子！', tag: '游玩', tagColor: 'emerald' },
      { time: '14:30', icon: Train, title: '六甲有马索道', desc: '绝景跨山缆车 (12分)。', tag: '交通', tagColor: 'blue' },
      { time: '15:30', icon: Coffee, title: '有马温泉', desc: '逛老街，吃碳酸煎饼。', tag: '游玩', tagColor: 'emerald' },
      { time: '16:00', icon: User, title: '泡汤：金之汤', desc: '著名的金泉。自带小毛巾。', tag: '体验', tagColor: 'indigo' },
      { time: '17:40', icon: Bus, title: '高速巴士回程 (关键)', desc: '必须坐这班(17:40/17:50)。直达三宫约 18:20。', tag: '交通', tagColor: 'blue' },
      { time: '19:30', icon: Utensils, title: '晚餐：烧肉石田屋', desc: '★ 已预定 19:30。顶级神户牛烧肉！', tag: '必吃', tagColor: 'red' }
    ]
  },
  day3: {
    date: '2/17',
    weekday: '周二',
    title: 'City Walk & 购物',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-purple-500 to-pink-500',
    events: [
      { time: '09:00', icon: Camera, title: '生田神社', desc: '酒店后方。恋爱/安产守护神。', tag: '游玩', tagColor: 'emerald' },
      { time: '10:00', icon: Coffee, title: '北野异人馆', desc: '步行上坡。打卡百年星巴克。', tag: '打卡', tagColor: 'pink' },
      { time: '11:00', icon: ShoppingBag, title: '车站杂货区', desc: 'Bookoff (二手), Daiso, 3COINS, Montbell。', tag: '购物', tagColor: 'purple' },
      { time: '12:30', icon: Utensils, title: '午餐：中华街', desc: '南京町。老祥记包子、神户牛拉面。', tag: '用餐', tagColor: 'rose' },
      { time: '14:00', icon: Shirt, title: '潮牌核心区 (旧居留地)', desc: 'Bshop, nanamica, TNF, Patagonia。', tag: '购物', tagColor: 'purple' },
      { time: '16:30', icon: Anchor, title: '神户塔 & Meriken Park', desc: '看夕阳，拍 BE KOBE 地标。', tag: '游玩', tagColor: 'emerald' },
      { time: '19:00', icon: Utensils, title: '晚餐：Grill Ippei', desc: '神户老字号洋食。必点半熟炸牛排。', tag: '用餐', tagColor: 'rose' }
    ]
  },
  day4: {
    date: '2/18',
    weekday: '周三',
    title: '广岛 & 神户夜景',
    stay: 'Daiwa Roynet 神户三宫PREMIER',
    themeColor: 'from-blue-600 to-indigo-600',
    events: [
      { time: '08:00', icon: Train, title: '前往新神户站', desc: '地铁西神・山手线 (1站) → 新神户。', tag: '交通', tagColor: 'blue' },
      { time: '08:30', icon: Train, title: '新干线 (Nozomi)', desc: '新神户 → 广岛 (70分) [JR Pass]。', tag: '交通', tagColor: 'blue' },
      { time: '10:00', icon: Ship, title: '宫岛 (严岛神社)', desc: 'JR山阳本线 -> 宫岛口 -> JR渡轮。\n★必看：海中大鸟居(退潮可走近)、严岛神社回廊。', tag: '必游', tagColor: 'red' },
      { time: '13:00', icon: Utensils, title: '午餐：广岛烧/牡蛎', desc: '宫岛口或广岛站吃。', tag: '用餐', tagColor: 'rose' },
      { time: '14:30', icon: Anchor, title: '下午：二选一', desc: 'A. 吴市：大和博物馆 & 铁鲸馆。\nB. 原爆圆顶：广岛站坐路面电车。', tag: '游玩', tagColor: 'emerald' },
      { time: '17:30', icon: Train, title: '新干线返程', desc: '广岛 → 新神户 [JR Pass]。', tag: '交通', tagColor: 'blue' },
      { time: '19:30', icon: Utensils, title: '晚餐：Mori Mori 寿司', desc: '三宫OPA 2店。金泽人气回转寿司。', tag: '用餐', tagColor: 'rose' }
    ]
  },
  day5: {
    date: '2/19',
    weekday: '周四',
    title: '姬路城 & 移动',
    stay: '关西机场日航酒店 (Hotel Nikko)',
    themeColor: 'from-stone-500 to-stone-700',
    events: [
      { time: '09:00', icon: CheckSquare, title: '退房 & 存行李', desc: '【关键】3个大箱子寄存在酒店前台 (免费)。', tag: '提示', tagColor: 'orange' },
      { time: '09:30', icon: Train, title: '前往姬路', desc: '新神户坐【新干线】直达姬路 (15分钟)。', tag: '交通', tagColor: 'blue' },
      { time: '10:30', icon: Flag, title: '姬路城 (白鹭城)', desc: '日本第一名城。爬天守阁 (穿厚袜)。', tag: '必游', tagColor: 'red' },
      { time: '13:00', icon: Utensils, title: '午餐：活水轩', desc: '在好古园庭院里吃星鳗饭。', tag: '用餐', tagColor: 'rose' },
      { time: '15:00', icon: Train, title: '返回三宫', desc: '新干线/新快速回到神户。', tag: '交通', tagColor: 'blue' },
      { time: '16:00', icon: Coffee, title: '三宫下午茶', desc: '补买药妆，休息。', tag: '休闲', tagColor: 'amber' },
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
    title: "六甲山 & 有马温泉",
    summary: "回程务必坐大巴，不要坐电车。",
    comparisons: [
      {
        title: "回程：有马温泉 → 三宫",
        options: [
          { name: "高速巴士", icon: Bus, time: "40分钟", price: "¥780", comfort: 5, pros: "直达，有座。", cons: "Pass 不含。", recommend: true },
          { name: "神户电铁", icon: Train, time: "60分钟", price: "¥950", comfort: 2, pros: "随到随走。", cons: "转车2次。Pass 不含。" }
        ]
      }
    ]
  },
  day3: { title: "神户市内 City Walk", summary: "全程步行即可 (City Walk)。", comparisons: [] },
  day4: {
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
      },
      {
        title: "广岛站 → 吴市",
        options: [
          { name: "JR 吴线 (快速安艺路)", icon: Train, time: "35分钟", price: "Pass 免费", comfort: 4, pros: "沿海行驶，风景好。", recommend: true }
        ]
      }
    ]
  },
  day5: {
    title: "神户 → 姬路 → 机场",
    summary: "去姬路坐新干线（Pass可用），回机场坐大巴（付费换舒适）。",
    comparisons: [
      {
        title: "去程：神户 → 姬路",
        options: [
          { name: "新干线 (从新神户坐)", icon: Train, time: "15分钟", price: "Pass 免费", comfort: 5, pros: "体验极速，不用抢座。", recommend: true },
          { name: "JR 新快速 (从三宫坐)", icon: Train, time: "40分钟", price: "Pass 免费", comfort: 4, pros: "三宫站直接上车，不用转地铁。", cons: "早高峰可能人多。" }
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
  { name: 'Bshop', tags: ['海岸通', 'Danton'], note: '神户本店货最全。' },
  { name: 'nanamica KOBE', tags: ['旧居留地', '紫标'], note: '独立路面店，款式极多。' },
  { name: 'The North Face', tags: ['海岸通', '户外'], note: '就在 Nanamica 隔壁。' },
  { name: 'Patagonia', tags: ['海岸通', '户外'], note: '也在附近，步行可达。' },
  { name: 'Montbell', tags: ['三宫', '户外'], note: '三宫店很大，适合补货。' },
  { name: '金子眼镜', tags: ['大丸6F', '眼镜'], note: '在大丸百货楼上。' },
  { name: '3COINS / Daiso', tags: ['车站', '杂货'], note: '地下街或商店街。' },
  { name: 'Bookoff', tags: ['Center Plaza', '二手'], note: 'Center Plaza 2F/3F。' },
];

const hotelBookings = [
  { name: 'Daiwa Roynet 神户三宫PREMIER', dates: '2/15 - 2/19 (4晚)', status: '不可取消 (携程)', note: '儿童友好', active: true },
  { name: '日航关西机场酒店', dates: '2/19 - 2/20 (1晚)', status: '免费取消 (Agoda)', note: '推荐入住', active: true, highlight: true },
  { name: '大阪关西机场奥德西斯', dates: '2/19 - 2/20 (1晚)', status: '免费取消 (飞猪)', note: '建议取消', active: false, warn: true }
];

const checklistItems = [
  { item: 'JR 关西&广岛周游券', status: '必做', note: 'Klook购买兑换券。Day 1 启用。' },
  { item: 'Day 2 晚餐: 烧肉石田屋', status: '已完成', note: '已预定 19:30。' },
  { item: 'Day 5 晚餐: 蟹道乐/寿喜烧', status: '必做', note: '提前官网预定。' },
  { item: 'Day 2 交通: 有马回程巴士', status: '建议', note: '提前1周买票。' },
  { item: '请取消: 奥德西斯套房酒店', status: '紧急', note: '2月18日前取消。' },
  { item: '手机流量卡 (亿点原生)', status: '未准备', note: '7天10G。' },
  { item: '浦东接送机', status: '未准备', note: '预约。' },
  { item: 'VJW 入境码', status: '未准备', note: 'Visit Japan Web。' },
];

const packingList = [
  { category: '重要证件', items: ['护照 (6个月以上有效期)', '机票行程单 (打印)', '酒店确认单 (日语/英语)', '现金 (3-5万日元)', '信用卡 (Visa/Master)', 'ICOCA/Suica卡 (苹果钱包)'] },
  { category: '电子产品', items: ['手机 & 充电器', '充电宝 (随身带)', '转换插头 (日本两扁孔)', '流量卡 / eSIM', '孩子iPad/耳机'] },
  { category: '衣物 (2月神户)', items: ['羽绒服 (防风)', '保暖内衣 (Uniqlo Heattech)', '厚袜子 (多带几双)', '舒适走路鞋', '围巾/手套/帽子'] },
  { category: '亲子/生活', items: ['牙刷牙膏 (日本酒店有时不提供)', '个人护肤品 (小样)', '常备药 (感冒/肠胃/创可贴)', '折叠伞', '大号购物袋 (装战利品)'] }
];

// --- 2. 主组件 ---

const ItineraryApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary'); 
  const [selectedDay, setSelectedDay] = useState('day1');
  const [checklistTab, setChecklistTab] = useState('jrpass'); 
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
  }, [selectedDay, activeTab]);

  const renderDayView = () => {
    const data = itineraryData[selectedDay];
    return (
      <div className="pb-24 animate-fade-in-up">
        {/* 顶部大卡片 */}
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
          {/* 装饰背景 */}
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <MapPin size={200} />
          </div>
        </div>

        {/* 时间轴列表 */}
        <div className="space-y-0 relative px-2">
          {/* 左侧贯穿线 */}
          <div className="absolute left-[23px] top-4 bottom-8 w-0.5 bg-gray-200"></div>

          {data.events.map((event, index) => {
            // 标签颜色映射
            const tagColors = {
              blue: 'bg-blue-100 text-blue-700',
              orange: 'bg-orange-100 text-orange-700',
              rose: 'bg-rose-100 text-rose-700',
              purple: 'bg-purple-100 text-purple-700',
              emerald: 'bg-emerald-100 text-emerald-700',
              indigo: 'bg-indigo-100 text-indigo-700',
              red: 'bg-red-100 text-red-700',
              amber: 'bg-amber-100 text-amber-700',
            };
            const tagClass = tagColors[event.tagColor] || 'bg-gray-100 text-gray-700';

            return (
              <div key={index} className="relative flex group mb-6 last:mb-0">
                {/* 时间点 */}
                <div className={`relative z-10 w-3 h-3 mt-1.5 ml-[17.5px] rounded-full border-2 border-white shadow-sm shrink-0 ${event.highlight ? 'bg-indigo-500 scale-125' : 'bg-gray-300'}`}></div>
                
                {/* 卡片内容 */}
                <div className="flex-1 ml-6">
                  <div className="flex items-baseline mb-1">
                    <span className="text-xs font-bold text-gray-400 w-10 shrink-0">{event.time}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 ${tagClass}`}>
                      {event.tag}
                    </span>
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

  const renderTransportView = () => {
    const data = transportData[selectedDay];
    return (
        <div className="space-y-6 pb-24 animate-fade-in-up">
            {data && (
              <>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-3xl shadow-lg">
                    <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                    <p className="text-blue-100 text-sm opacity-90">{data.summary}</p>
                </div>

                {data.comparisons.length === 0 ? (
                    <div className="text-center text-gray-400 py-12 flex flex-col items-center">
                        <div className="bg-gray-100 p-4 rounded-full mb-3">
                          <Footprints size={32} className="text-gray-400"/>
                        </div>
                        <p className="text-sm">今天步行即可，无复杂交通</p>
                    </div>
                ) : (
                    data.comparisons.map((comp, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            <div className="bg-gray-50/50 px-5 py-3 border-b border-gray-100 font-bold text-gray-700 text-sm flex items-center">
                               <MapPin size={14} className="mr-2 text-indigo-500"/> {comp.title}
                            </div>
                            <div className="divide-y divide-gray-50">
                                {comp.options.map((opt, i) => (
                                    <div key={i} className={`p-5 ${opt.recommend ? 'bg-indigo-50/30' : ''}`}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                {opt.recommend && <div className="bg-indigo-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">推荐</div>}
                                                <h4 className={`font-bold text-sm ${opt.recommend ? 'text-indigo-900' : 'text-gray-700'}`}>{opt.name}</h4>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-gray-900">{opt.price}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                                            <span className="flex items-center"><Clock size={12} className="mr-1"/> {opt.time}</span>
                                            <span className="flex items-center"><Star size={12} className="mr-1 text-orange-400"/> {opt.comfort}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs text-green-700 flex items-start"><span className="mr-1.5">👍</span> {opt.pros}</p>
                                            {opt.cons && <p className="text-xs text-red-600 flex items-start"><span className="mr-1.5">⚠️</span> {opt.cons}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
              </>
            )}
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
        <div className="bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm flex text-xs font-bold sticky top-0 z-10">
           <button onClick={() => setChecklistTab('jrpass')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='jrpass'?'bg-blue-50 text-blue-600 shadow-sm':'text-gray-400'}`}>JR券</button>
           <button onClick={() => setChecklistTab('booking')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='booking'?'bg-teal-50 text-teal-600 shadow-sm':'text-gray-400'}`}>待办</button>
           <button onClick={() => setChecklistTab('hotel')} className={`flex-1 py-2.5 rounded-xl transition-all ${checklistTab==='hotel'?'bg-orange-50 text-orange-600 shadow-sm':'text-gray-400'}`}>酒店</button>
        </div>

        {checklistTab === 'jrpass' && (
           <div className="space-y-4">
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
           <div className="space-y-3">
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
        
        {checklistTab === 'hotel' && (
           <div className="space-y-4">
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
            <div className="bg-gray-100 px-2 py-1 rounded-lg text-[10px] font-bold text-gray-500">2月15-20日</div>
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