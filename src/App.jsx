import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ShoppingBag, CheckSquare, Coffee, Plane, Train, Bus, AlertCircle, Ship, Sun, Ticket, Utensils, Camera, ArrowUp, Flag, Anchor, Mountain, Waves, Footprints, User, Briefcase, CreditCard, Smartphone, Shirt, Smile, ChevronRight, BedDouble, AlertTriangle, Wifi, Car, Globe, Star, Flame, Flower, Fish, Trees, Castle, Zap, Trophy, Moon, Gamepad2, FerrisWheel, BookOpen, Glasses, Coins, Store, Palmtree, Search } from 'lucide-react';

const ItineraryApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary'); 
  const [selectedDay, setSelectedDay] = useState('day1');
  const [checklistTab, setChecklistTab] = useState('hotels'); 

  // --- 手绘地图组件 ---
  const HandDrawnMap = ({ day }) => {
    // 地点标签组件
    const LocationLabel = ({ x, y, icon: Icon, label, color = "bg-white", textColor = "text-stone-800" }) => (
      <div className="absolute flex flex-col items-center z-20 transform -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
        <div className={`p-1.5 rounded-full shadow-md border border-stone-200 ${color}`}>
          <Icon size={16} className="text-stone-700" />
        </div>
        <span className={`text-[10px] font-bold mt-1 px-2 py-0.5 rounded-full shadow-sm bg-white/95 border border-stone-100 whitespace-nowrap ${textColor}`}>
          {label}
        </span>
      </div>
    );

    // 交通标签组件
    const TransportLabel = ({ x, y, text, rotate = 0, color = "text-stone-500" }) => (
      <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ left: x, top: y, transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
        <span className={`text-[9px] font-bold bg-white/80 px-1.5 py-0.5 rounded border border-stone-200 shadow-sm ${color}`}>
          {text}
        </span>
      </div>
    );

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
            case 'day3': return (
                <>
                  <div className="absolute inset-x-8 inset-y-4 border-2 border-dashed border-stone-200 rounded-xl pointer-events-none"></div>
                  <div className="absolute top-1/3 left-0 w-full h-2 bg-stone-300 flex items-center justify-center opacity-50"><div className="w-full h-px bg-white border-t border-dashed border-stone-500"></div></div>
                  <svg className="absolute inset-0 w-full h-full" overflow="visible">
                    <path d="M 160 40 L 160 90" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="3,3" />
                    <path d="M 160 110 L 160 170" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="3,3" />
                    <path d="M 160 170 Q 220 170 240 110" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="2,2" />
                  </svg>
                  <LocationLabel x="50%" y="15%" icon={Camera} label="北野异人馆" color="bg-emerald-100" textColor="text-emerald-800" />
                  <LocationLabel x="50%" y="40%" icon={Train} label="JR 三宫站" color="bg-stone-100" />
                  <LocationLabel x="50%" y="70%" icon={ShoppingBag} label="旧居留地" color="bg-purple-100" textColor="text-purple-800" />
                  <LocationLabel x="75%" y="40%" icon={Utensils} label="Grill Ippei" color="bg-rose-100" textColor="text-rose-800" />
                </>
            );
            case 'day4': return (
                <>
                  {/* 山阳新干线长途 */}
                  <svg className="absolute inset-0 w-full h-full" overflow="visible">
                    {/* 神户 -> 广岛 */}
                    <path d="M 280 180 C 200 180, 150 120, 40 100" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="0" strokeLinecap="round" />
                    {/* 广岛 -> 吴市 */}
                    <path d="M 40 100 L 40 40" fill="none" stroke="#f59e0b" strokeWidth="3" />
                    
                    <circle cx="280" cy="180" r="4" fill="#57534e" />
                  </svg>

                  <LocationLabel x="85%" y="80%" icon={MapPin} label="新神户站" color="bg-stone-200" />
                  <LocationLabel x="15%" y="45%" icon={Torii} label="宫岛/严岛神社" color="bg-red-100" textColor="text-red-800" />
                  <LocationLabel x="20%" y="15%" icon={Ship} label="吴市 (潜艇)" color="bg-blue-100" textColor="text-blue-800" />
                  
                  <TransportLabel x="55%" y="60%" text="山阳新干线 (70分)" rotate={-25} color="text-blue-600" />
                  <TransportLabel x="25%" y="30%" text="JR吴线" rotate={90} color="text-orange-500" />
                </>
            );
            case 'day5': return (
                <>
                  <svg className="absolute inset-0 w-full h-full" overflow="visible">
                    {/* 铁路线主轴 */}
                    <line x1="20" y1="100" x2="300" y2="100" stroke="#57534e" strokeWidth="4" opacity="0.3" />
                    {/* 姬路往返 */}
                    <path d="M 200 100 L 40 100" fill="none" stroke="#57534e" strokeWidth="2" strokeDasharray="4,4" />
                    <path d="M 40 100 L 200 100" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="0" />
                    
                    {/* 三宫去机场 */}
                    <path d="M 200 100 Q 240 150 280 180" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6,4" />
                  </svg>

                  <LocationLabel x="60%" y="40%" icon={MapPin} label="三宫 (存/取行李)" color="bg-stone-200" />
                  <LocationLabel x="15%" y="40%" icon={Flag} label="姬路城" color="bg-stone-800" textColor="text-white" />
                  <LocationLabel x="85%" y="80%" icon={MapPin} label="KIX 日航" color="bg-purple-100" textColor="text-purple-800" />

                  <TransportLabel x="35%" y="35%" text="新快速/新干线" color="text-stone-600" />
                  <TransportLabel x="75%" y="60%" text="机场大巴/船" rotate={35} color="text-blue-600" />
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

  function Torii({ className }) {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="16" height="16"><path d="M4 4h16"/><path d="M4 8h16"/><path d="M5 4v18"/><path d="M19 4v18"/><path d="M5 8l-2 2"/><path d="M19 8l2 2"/></svg>
  }

  // --- 数据 ---
  const itineraryData = {
    day1: {
      date: '2/15 (周日)',
      title: '抵达 & 紧急补货',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        { time: '16:40', icon: Plane, title: '航班落地 JL0894', desc: '抵达关西 KIX T1。', highlight: false },
        { time: '18:00', icon: Bus, title: '机场大巴', desc: '直达神户三宫 (箱子放车底)。', highlight: false },
        { time: '19:30', icon: MapPin, title: '酒店 Check-in', desc: '办理入住，放行李。', highlight: false },
        { time: '20:00', icon: Utensils, title: '晚餐：炸猪排 / 拉面', desc: '推荐: Katsukura (名代炸猪排) 或 Ramen Taro。\n吃点热乎的定食，快速回血！', highlight: true },
        { time: '21:30', icon: ShoppingBag, title: 'Don Quijote (惊安殿堂)', desc: '步行8分钟。24小时营业。\n🎯 必买：手套、帽子、厚袜子。', highlight: true }
      ]
    },
    day2: {
      date: '2/16 (周一)',
      title: '六甲山 & 有马金泉',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        { time: '08:30', icon: Coffee, title: '早餐：松屋/Sukiya', desc: '就在酒店楼下，几步路就到。', highlight: false },
        { time: '11:00', icon: Sun, title: '六甲山雪上乐园', desc: 'Snow Land 玩雪盆 (2小时)。\n*记得带上备用干袜子！', highlight: true },
        { time: '14:30', icon: Train, title: '六甲有马索道', desc: '空中缆车跨山，风景绝美。', highlight: false },
        { time: '15:30', icon: Coffee, title: '有马温泉', desc: '逛老街，吃碳酸煎饼。', highlight: false },
        { time: '16:00', icon: User, title: '泡汤：金之汤', desc: '著名的金泉。自带小毛巾。', highlight: true },
        { time: '17:40', icon: Bus, title: '高速巴士回程 (关键)', desc: '必须坐这班(17:40/17:50)。直达三宫约 18:20。', highlight: true },
        { time: '18:30', icon: CheckSquare, title: '回酒店休整', desc: '放东西，换衣服，休息40分钟。', highlight: false },
        { time: '19:30', icon: Utensils, title: '晚餐：烧肉石田屋 (Ishida)', desc: '★ 已预定 19:30。\n从酒店步行约10分钟。顶级神户牛烧肉！', highlight: true }
      ]
    },
    day3: {
      date: '2/17 (周二)',
      title: '购物：品牌特种兵路线',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        { time: '10:00', icon: BookOpen, title: '第一站：车站杂货区', desc: '1. Bookoff (Center Plaza 2F): 淘二手。\n2. Daiso / 3COINS: 车站地下街。', highlight: true },
        { time: '11:30', icon: Mountain, title: '第二站：Montbell (三宫店)', desc: '就在花钟路。买完直接去吃饭。', highlight: true },
        { time: '12:30', icon: Utensils, title: '午餐：吉祥吉 (神户牛)', desc: '南京町。吃神户牛拉面/盖饭。', highlight: false },
        { time: '13:30', icon: Shirt, title: '第三站：潮牌核心区 (重点)', desc: '不走回头路：\n1. Bshop (买Danton/Nanga)\n2. nanamica (买紫标)\n3. The North Face (就在隔壁)\n4. Patagonia', highlight: true },
        { time: '16:30', icon: Glasses, title: '第四站：大丸百货', desc: '1. 金子眼镜 (6F)。\n2. 统一退税。\n3. B1 买 Frantz 布丁。', highlight: true },
        { time: '19:00', icon: Utensils, title: '晚餐：Grill Ippei (洋食)', desc: '推荐：グリル一平 三宫店。\n神户老字号洋食。必点：半熟炸牛排 (Bifukatsu) 和 蛋包饭。L\'Ami 的完美替代！', highlight: true }
      ]
    },
    day4: {
      date: '2/18 (周三)',
      title: '广岛：宫岛 & 战舰',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        { time: '08:00', icon: Train, title: '新干线 (Sanyo Shinkansen)', desc: '【JR Pass】新神户 ➔ 广岛 (约70分钟)。\n*注意：需到“新神户站”坐车，离三宫一站地铁。', highlight: true },
        { time: '10:00', icon: Ship, title: '宫岛 (Miyajima)', desc: '广岛站转JR+渡轮。看海上大鸟居，喂小鹿。', highlight: true },
        { time: '12:30', icon: Utensils, title: '午餐：广岛烧 / 牡蛎', desc: '在宫岛表参道商店街吃现烤牡蛎 (Kaki)。', highlight: false },
        { time: '14:00', icon: Anchor, title: '吴市 (Kure) - 战舰', desc: '广岛站坐JR吴线 (40分钟)。\n参观“大和博物馆” (1/10大和号) 和“铁鲸馆” (走进真潜艇！)。10岁男孩必去！', highlight: true },
        { time: '17:30', icon: Train, title: '新干线返程', desc: '广岛 ➔ 新神户。晚餐在车上吃便当或回神户吃。', highlight: false },
        { time: '19:30', icon: Utensils, title: '晚餐：Mori Mori 寿司', desc: '推荐：もりもり寿し (三宫OPA 2店)。\n就在车站楼上，吃点热乎的。', highlight: true }
      ]
    },
    day5: {
      date: '2/19 (周四)',
      title: '姬路城 & 告别晚宴',
      stay: '关西机场日航酒店 (Hotel Nikko)',
      events: [
        { time: '09:00', icon: CheckSquare, title: '退房 & 存行李', desc: '【关键】3个大箱子寄存在酒店前台 (免费且安全)。\n“下午回来取 (Gogo ni torini kimasu)”。', highlight: true },
        { time: '09:30', icon: Train, title: '前往姬路', desc: '新神户站坐【新干线】直达姬路 (仅15分钟！JR Pass免费)。\n或者坐JR新快速 (40分钟)。', highlight: true },
        { time: '10:30', icon: Flag, title: '姬路城 (白鹭城)', desc: '日本第一名城。爬天守阁 (穿厚袜)。', highlight: true },
        { time: '13:00', icon: Utensils, title: '午餐：活水轩 (好古园)', desc: '就在城旁边。对着庭院吃星鳗饭。', highlight: false },
        { time: '15:00', icon: Train, title: '返回三宫', desc: '新干线/新快速回到神户。', highlight: false },
        { time: '16:00', icon: Coffee, title: '三宫下午茶', desc: '推荐去“Konigs-Krone”吃个甜点，或者补买药妆。', highlight: false },
        { time: '17:30', icon: Utensils, title: '告别晚餐：蟹道乐/寿喜烧', desc: '推荐 A：蟹道乐 (三宫店) - 全蟹宴。\n推荐 B：Tokeiya (とけいや) - 寿喜烧老店。\n在神户吃完再走，画下完美句号。', highlight: true },
        { time: '19:30', icon: CheckSquare, title: '回酒店取行李', desc: '拿回行李，步行去大巴站。', highlight: false },
        { time: '20:00', icon: Bus, title: '前往机场', desc: '坐机场大巴 (约20:00-20:20的班次)。直达 KIX T1。\n(带着箱子，大巴比坐JR方便)', highlight: true },
        { time: '21:10', icon: MapPin, title: '入住：日航酒店', desc: '就在大巴下车点楼上。洗澡睡觉。', highlight: true }
      ]
    },
    day6: {
      date: '2/20 (周五)',
      title: '回国',
      stay: '温馨的家',
      events: [
        { time: '07:30', icon: Coffee, title: '起床退房', desc: '住在机场里就是爽，多睡会儿。推行李步行3分钟到出发层。', highlight: false },
        { time: '08:00', icon: CheckSquare, title: '值机', desc: 'JL0891 (09:15起飞)。', highlight: false },
        { time: '10:15', icon: Plane, title: '起飞', desc: '飞往上海。', highlight: true }
      ]
    }
  };

  const bookingChecklist = [
    { item: '关西&广岛地区周游券', time: '提前购买', status: '必做', note: 'Kansai-Hiroshima Pass (5日券) ¥17,000。Day 1 启用，Day 4 坐新干线去广岛，Day 5 去姬路。' },
    { item: 'Day 2 晚餐: 烧肉石田屋', time: '已预定 19:30', status: '已完成' },
    { item: 'Day 2 交通: 有马回程巴士', time: '提前1周', status: '建议' },
    { item: '请取消: 奥德西斯套房酒店', time: '2月18日前', status: '紧急' },
    { item: '手机流量卡 (亿点原生)', time: '出发前', status: '未准备', note: '方案推荐: 7天10G (6天行程保险)。亿点卡信号稳定。' },
    { item: '浦东接送机', time: '出发前', status: '未准备', note: '预约出发送机 & 回程接机。' },
    { item: '机场休息室', time: '出发前', status: '未准备', note: '浦东T1 (V39) & 关西T1 (金刚/六甲)。确认信用卡/龙腾权益。' },
    { item: 'Visit Japan Web', time: '出发前3天', status: '未准备', note: '填写入境审查+海关申报，截图2个二维码保存。' },
  ];

  const packingList = [
    { category: '重要证件', items: ['护照 (6个月以上有效期)', '机票行程单 (打印)', '酒店确认单 (日语/英语)', '现金 (3-5万日元)', '信用卡 (Visa/Master)', 'ICOCA/Suica卡 (苹果钱包)'] },
    { category: '电子产品', items: ['手机 & 充电器', '充电宝 (随身带)', '转换插头 (日本两扁孔)', '流量卡 / eSIM', '孩子iPad/耳机'] },
    { category: '衣物 (2月神户)', items: ['羽绒服 (防风)', '保暖内衣 (Uniqlo Heattech)', '厚袜子 (多带几双)', '舒适走路鞋', '围巾/手套/帽子'] },
    { category: '亲子/生活', items: ['牙刷牙膏 (日本酒店有时不提供)', '个人护肤品 (小样)', '常备药 (感冒/肠胃/创可贴)', '折叠伞', '大号购物袋 (装战利品)'] }
  ];

  const hotelBookings = [
    { name: 'Daiwa Roynet Hotel 神户三宫PREMIER', dates: '2/15 - 2/19 (4晚)', room: '中等双床房 带加床- 禁烟', price: '¥3,186.80', status: '不可取消 (携程)', note: '儿童友好', active: true },
    { name: '日航关西机场酒店 (Hotel Nikko)', dates: '2/19 - 2/20 (1晚)', room: '经济舱三人房-禁烟', price: '¥870.14', status: '2月16日前免费取消 (Agoda)', note: '儿童不友好 (但位置绝佳)', active: true, highlight: true },
    { name: '大阪关西机场奥德西斯套房酒店', dates: '2/19 - 2/20 (1晚)', room: '高级湾景双床房带加床', price: '¥765.22', status: '2月18日17点前免费取消 (飞猪)', note: '建议取消', active: false, warn: true }
  ];

  const shoppingList = [
    { name: 'Bshop', tags: ['海岸通', 'Danton/Nanga'], note: '必去！神户本店货最全。' },
    { name: 'nanamica KOBE', tags: ['旧居留地', '紫标'], note: '独立路面店，款式极多。' },
    { name: 'The North Face', tags: ['海岸通', '户外'], note: '就在 Nanamica 隔壁。' },
    { name: 'Patagonia', tags: ['海岸通', '户外'], note: '也在附近，步行可达。' },
    { name: 'Montbell', tags: ['三宫', '户外'], note: '三宫店很大，适合补货。' },
    { name: '金子眼镜', tags: ['大丸6F', '眼镜'], note: '在大丸百货楼上。' },
    { name: '3COINS', tags: ['Santica', '杂货'], note: '地下街里。' },
    { name: 'Daiso', tags: ['Center Gai', '杂货'], note: '商业街里的大创。' },
    { name: 'Bookoff', tags: ['Center Plaza', '二手'], note: 'Center Plaza 2F/3F。' },
  ];

  const jrPassInfo = {
    title: 'JR 关西&广岛地区周游券 (5日)',
    price: '¥17,000 /人',
    validity: '5天无限次乘坐 (Day 1 - Day 5)',
    coverage: [
      { route: '新神户 ⇔ 广岛', type: '山阳新干线 (指定席)', time: '70分钟 (Nozomi)', note: '光这一趟往返就值回票价 (单买约¥20000)。' },
      { route: '广岛 ⇔ 宫岛口/吴市', type: 'JR 在来线', time: '含JR渡轮', note: '去宫岛的船也免费坐。' },
      { route: '新神户 ⇔ 姬路', type: '新干线', time: '15分钟', note: '去姬路也能坐新干线，超快。' },
      { route: '神户/三宫 ⇔ 机场', type: 'JR 特急/快速', time: '90分钟', note: '含 Haruka。' }
    ],
    verdict: '✅ 绝对超值：广岛往返新干线 + 宫岛渡轮 + 姬路新干线，总价值超过 ¥25,000。'
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans text-stone-800 max-w-md mx-auto shadow-2xl overflow-hidden relative flex flex-col">
      {/* 顶部导航区 (Sticky) */}
      <div className="bg-white sticky top-0 z-50 border-b border-stone-200 shadow-sm">
        <div className="p-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-black text-stone-900 tracking-tight">神户亲子手账</h1>
            <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-1 rounded">2月15-20日</span>
          </div>
        </div>

        {/* 日期滚动条 (仅在行程 Tab 显示) */}
        {activeTab === 'itinerary' && (
          <div className="flex overflow-x-auto hide-scrollbar px-4 pb-3 space-x-3 snap-x">
            {['day1', 'day2', 'day3', 'day4', 'day5', 'day6'].map((day, idx) => {
              const isActive = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-shrink-0 snap-center flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 border ${isActive ? 'bg-blue-600 border-blue-600 shadow-md transform scale-105' : 'bg-white border-stone-100 text-stone-400 hover:border-stone-300'}`}
                >
                  <span className={`text-[10px] font-bold ${isActive ? 'text-blue-100' : 'text-stone-400'}`}>D{idx + 1}</span>
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-stone-600'}`}>{['15', '16', '17', '18', '19', '20'][idx]}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 主内容区域 (Scrollable) */}
      <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#f5f7fa] p-4 pb-24">
        
        {/* === 行程 Tab === */}
        {activeTab === 'itinerary' && (
          <div className="animate-fade-in-up space-y-6">
            {/* 手绘地图 */}
            {itineraryData[selectedDay].events.length > 3 && <HandDrawnMap day={selectedDay} />}

            {/* 当日概览卡片 */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-stone-800 mb-1">{itineraryData[selectedDay].title}</h2>
                    <div className="flex items-center text-xs font-medium text-stone-500">
                        <MapPin size={12} className="mr-1" />
                        {itineraryData[selectedDay].stay}
                    </div>
                </div>
            </div>

            {/* 时间轴 */}
            <div className="relative pl-4">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-stone-200 border-l border-dashed border-stone-300"></div>
                <div className="space-y-6">
                    {itineraryData[selectedDay].events.map((event, idx) => (
                        <div key={idx} className="relative pl-6">
                            {/* 时间点 */}
                            <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 ${event.highlight ? 'bg-blue-500' : 'bg-stone-300'}`}></div>
                            
                            {/* 内容卡片 */}
                            <div className={`p-4 rounded-xl border transition-all ${event.highlight ? 'bg-white border-blue-100 shadow-md' : 'bg-stone-50/50 border-stone-100'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs font-bold font-mono text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded">{event.time}</span>
                                        <h3 className={`font-bold text-sm ${event.highlight ? 'text-stone-900' : 'text-stone-700'}`}>{event.title}</h3>
                                    </div>
                                    <event.icon size={16} className={event.highlight ? 'text-blue-500' : 'text-stone-300'} />
                                </div>
                                <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line mt-2">{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        )}

        {/* === 购物 Tab === */}
        {activeTab === 'shopping' && (
          <div className="animate-fade-in-up space-y-4">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg mb-6">
                <h2 className="text-2xl font-bold flex items-center mb-2"><ShoppingBag className="mr-2"/> 购物攻略</h2>
                <p className="text-purple-100 text-sm opacity-90">Day 3 专属 · 旧居留地核心圈</p>
            </div>
            
            <div className="grid gap-3">
                {shoppingList.map((shop, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-stone-800">{shop.name}</h3>
                            <div className="flex space-x-1">
                                {shop.tags.map(t => <span key={t} className="text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">{t}</span>)}
                            </div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded text-xs text-purple-900 font-medium">
                            💡 {shop.note}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        )}

        {/* === 预定/清单 Tab === */}
        {activeTab === 'booking' && (
          <div className="animate-fade-in-up space-y-6">
            {/* 子 Tab 切换 */}
            <div className="bg-stone-100 p-1 rounded-xl flex text-sm font-bold">
                <button onClick={() => setChecklistTab('hotels')} className={`flex-1 py-2 rounded-lg transition-all ${checklistTab === 'hotels' ? 'bg-white shadow text-orange-600' : 'text-stone-400'}`}>酒店</button>
                <button onClick={() => setChecklistTab('booking')} className={`flex-1 py-2 rounded-lg transition-all ${checklistTab === 'booking' ? 'bg-white shadow text-teal-600' : 'text-stone-400'}`}>待办</button>
                <button onClick={() => setChecklistTab('packing')} className={`flex-1 py-2 rounded-lg transition-all ${checklistTab === 'packing' ? 'bg-white shadow text-indigo-600' : 'text-stone-400'}`}>行李</button>
                <button onClick={() => setChecklistTab('jrpass')} className={`flex-1 py-2 rounded-lg transition-all ${checklistTab === 'jrpass' ? 'bg-white shadow text-blue-600' : 'text-stone-400'}`}>JR券</button>
            </div>

            {checklistTab === 'hotels' && (
                <div className="space-y-4">
                    {hotelBookings.map((h, i) => (
                        <div key={i} className={`bg-white p-4 rounded-xl border-2 ${h.warn ? 'border-red-100 bg-red-50/30' : h.highlight ? 'border-orange-200' : 'border-stone-100'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-sm text-stone-800">{h.name}</h3>
                                {h.warn && <span className="bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">请取消</span>}
                            </div>
                            <div className="space-y-1.5 text-xs text-stone-600">
                                <div className="flex items-center"><Calendar size={12} className="mr-2 opacity-50"/>{h.dates}</div>
                                <div className="flex items-center"><BedDouble size={12} className="mr-2 opacity-50"/>{h.room}</div>
                                <div className="flex items-center"><CreditCard size={12} className="mr-2 opacity-50"/>{h.price}</div>
                                <div className={`flex items-start mt-2 p-2 rounded ${h.active ? 'bg-stone-50' : 'bg-red-100/50'}`}>
                                    <AlertCircle size={12} className="mr-1.5 mt-0.5 opacity-50"/>
                                    <span>{h.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {checklistTab === 'booking' && (
                <div className="space-y-3">
                    {bookingChecklist.map((item, i) => (
                        <div key={i} className="flex bg-white p-3 rounded-xl border border-stone-200 shadow-sm items-start">
                            <div className={`w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0 ${item.status === '未准备' || item.status === '必做' || item.status === '紧急' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <span className="font-bold text-sm text-stone-800">{item.item}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${item.status === '未准备' ? 'bg-stone-200 text-stone-600' : 'bg-red-100 text-red-600'}`}>{item.status}</span>
                                </div>
                                <p className="text-xs text-stone-500 mt-1">{item.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {checklistTab === 'packing' && (
                <div className="space-y-3">
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

            {checklistTab === 'jrpass' && (
                <div className="space-y-4 animate-fade-in-up">
                    <div className="bg-blue-600 text-white p-5 rounded-2xl shadow-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold">JR 关西&广岛地区周游券</h3>
                                <p className="text-blue-100 text-xs mt-1">Kansai-Hiroshima Area Pass</p>
                            </div>
                            <div className="bg-white/20 px-2 py-1 rounded text-xs font-bold">5日券</div>
                        </div>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-2xl font-bold">¥17,000</span>
                            <span className="text-sm text-blue-200 ml-1">/人</span>
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start">
                        <CheckSquare className="text-green-600 flex-shrink-0 mr-2" size={18} />
                        <div>
                            <p className="text-green-800 font-bold text-sm">超值回本！</p>
                            <p className="text-green-700 text-xs mt-1">广岛新干线往返 + 宫岛渡轮 + 姬路新干线，总价值约 ¥25,000。劲省 ¥8,000！</p>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                        <h4 className="font-bold text-stone-800 mb-3 text-sm flex items-center"><Ticket size={16} className="mr-2"/> 适用范围参考</h4>
                        <div className="space-y-3">
                            {jrPassInfo.coverage.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs border-b border-stone-100 pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <div className="font-bold text-stone-700">{item.route}</div>
                                        <div className="text-stone-500 mt-0.5">{item.type}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-stone-400">{item.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
          </div>
        )}

      </div>

      {/* 底部导航栏 */}
      <div className="bg-white border-t border-stone-200 pb-6 pt-3 px-8 flex justify-between items-center fixed bottom-0 w-full max-w-md z-50">
        <button onClick={() => setActiveTab('itinerary')} className={`flex flex-col items-center transition-colors ${activeTab === 'itinerary' ? 'text-blue-600' : 'text-stone-300'}`}>
            <Calendar size={24} strokeWidth={activeTab === 'itinerary' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1">行程</span>
        </button>
        <button onClick={() => setActiveTab('shopping')} className={`flex flex-col items-center transition-colors ${activeTab === 'shopping' ? 'text-purple-600' : 'text-stone-300'}`}>
            <ShoppingBag size={24} strokeWidth={activeTab === 'shopping' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1">购物</span>
        </button>
        <button onClick={() => setActiveTab('booking')} className={`flex flex-col items-center transition-colors ${activeTab === 'booking' ? 'text-teal-600' : 'text-stone-300'}`}>
            <CheckSquare size={24} strokeWidth={activeTab === 'booking' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1">预定</span>
        </button>
      </div>
    </div>
  );
};

export default ItineraryApp;