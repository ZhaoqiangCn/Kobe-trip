import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  ShoppingBag,
  CheckSquare,
  Coffee,
  Plane,
  Train,
  Bus,
  AlertCircle,
  Ship,
  Sun,
  Ticket,
  Utensils,
  Camera,
  ArrowUp,
  Flag,
  Anchor,
  Mountain,
  Waves,
  Footprints,
  User,
  Briefcase,
  CreditCard,
  Smartphone,
  Shirt,
  Smile,
  ChevronRight,
  BedDouble,
  AlertTriangle,
  Wifi,
  Car,
  Globe,
} from 'lucide-react';

const ItineraryApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary'); // 'itinerary', 'shopping', 'booking'
  const [selectedDay, setSelectedDay] = useState('day1');
  const [checklistTab, setChecklistTab] = useState('hotels');

  // --- 手绘地图组件 ---
  const HandDrawnMap = ({ day }) => {
    // 地点标签组件
    const LocationLabel = ({
      x,
      y,
      icon: Icon,
      label,
      color = 'bg-white',
      textColor = 'text-stone-800',
    }) => (
      <div
        className="absolute flex flex-col items-center z-20 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y }}
      >
        <div
          className={`p-1.5 rounded-full shadow-md border border-stone-200 ${color}`}
        >
          <Icon size={16} className="text-stone-700" />
        </div>
        <span
          className={`text-[10px] font-bold mt-1 px-2 py-0.5 rounded-full shadow-sm bg-white/95 border border-stone-100 whitespace-nowrap ${textColor}`}
        >
          {label}
        </span>
      </div>
    );

    // 交通标签组件
    const TransportLabel = ({
      x,
      y,
      text,
      rotate = 0,
      color = 'text-stone-500',
    }) => (
      <div
        className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: x,
          top: y,
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        }}
      >
        <span
          className={`text-[9px] font-bold bg-white/80 px-1.5 py-0.5 rounded border border-stone-200 shadow-sm ${color}`}
        >
          {text}
        </span>
      </div>
    );

    const renderMapContent = () => {
      switch (day) {
        case 'day1':
          return (
            <>
              <div className="absolute bottom-0 right-0 w-2/3 h-full bg-blue-50/50 rounded-tl-[100px] pointer-events-none"></div>
              <svg
                className="absolute inset-0 w-full h-full"
                overflow="visible"
              >
                <path
                  d="M 280 200 C 200 200, 150 150, 60 60"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="6,4"
                  strokeLinecap="round"
                />
                <circle cx="280" cy="200" r="4" fill="#3b82f6" />
                <circle cx="60" cy="60" r="4" fill="#f97316" />
              </svg>
              <LocationLabel
                x="85%"
                y="80%"
                icon={Plane}
                label="KIX 关西机场"
                color="bg-blue-100"
                textColor="text-blue-800"
              />
              <LocationLabel
                x="18%"
                y="25%"
                icon={Coffee}
                label="神户三宫酒店"
                color="bg-orange-100"
                textColor="text-orange-800"
              />
              <LocationLabel
                x="40%"
                y="20%"
                icon={ShoppingBag}
                label="Donki 补货"
                color="bg-yellow-100"
                textColor="text-yellow-800"
              />
              <TransportLabel
                x="50%"
                y="60%"
                text="机场大巴 (65分)"
                rotate={-35}
                color="text-blue-600"
              />
            </>
          );
        case 'day2':
          return (
            <>
              <div className="absolute top-0 left-0 w-full h-2/3 bg-emerald-50/50 rounded-b-[50px] pointer-events-none"></div>
              <svg
                className="absolute inset-0 w-full h-full"
                overflow="visible"
              >
                <path
                  d="M 60 220 Q 40 120 80 60"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeDasharray="4,2"
                />
                <path
                  d="M 80 60 Q 170 20 260 60"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="4,2"
                />
                <path
                  d="M 260 60 Q 280 200 60 220"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeDasharray="6,4"
                />
              </svg>
              <LocationLabel
                x="18%"
                y="85%"
                icon={MapPin}
                label="三宫"
                color="bg-stone-200"
              />
              <LocationLabel
                x="22%"
                y="25%"
                icon={Sun}
                label="六甲山玩雪"
                color="bg-cyan-100"
                textColor="text-cyan-800"
              />
              <LocationLabel
                x="80%"
                y="25%"
                icon={Coffee}
                label="有马温泉"
                color="bg-red-100"
                textColor="text-red-800"
              />
              <TransportLabel
                x="15%"
                y="55%"
                text="巴士+缆车"
                rotate={-75}
                color="text-cyan-600"
              />
              <TransportLabel
                x="50%"
                y="15%"
                text="空中索道"
                color="text-red-600"
              />
              <TransportLabel
                x="75%"
                y="65%"
                text="高速巴士"
                rotate={70}
                color="text-orange-600"
              />
            </>
          );
        case 'day3':
          return (
            <>
              <div className="absolute inset-x-8 inset-y-4 border-2 border-dashed border-stone-200 rounded-xl pointer-events-none"></div>
              <div className="absolute top-1/3 left-0 w-full h-2 bg-stone-300 flex items-center justify-center opacity-50">
                <div className="w-full h-px bg-white border-t border-dashed border-stone-500"></div>
              </div>
              <svg
                className="absolute inset-0 w-full h-full"
                overflow="visible"
              >
                <path
                  d="M 160 40 L 160 90"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="3,3"
                />
                <path
                  d="M 160 110 L 160 170"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeDasharray="3,3"
                />
                <path
                  d="M 160 170 Q 220 170 240 110"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2"
                  strokeDasharray="2,2"
                />
              </svg>
              <LocationLabel
                x="50%"
                y="15%"
                icon={Camera}
                label="北野异人馆"
                color="bg-emerald-100"
                textColor="text-emerald-800"
              />
              <LocationLabel
                x="50%"
                y="40%"
                icon={Train}
                label="JR 三宫站"
                color="bg-stone-100"
              />
              <LocationLabel
                x="50%"
                y="70%"
                icon={ShoppingBag}
                label="旧居留地"
                color="bg-purple-100"
                textColor="text-purple-800"
              />
              <LocationLabel
                x="75%"
                y="40%"
                icon={Utensils}
                label="烧肉石田屋"
                color="bg-rose-100"
                textColor="text-rose-800"
              />
            </>
          );
        case 'day4':
          return (
            <>
              <svg
                className="absolute inset-0 w-full h-full"
                overflow="visible"
              >
                <line
                  x1="20"
                  y1="128"
                  x2="300"
                  y2="128"
                  stroke="#57534e"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                <line
                  x1="20"
                  y1="128"
                  x2="300"
                  y2="128"
                  stroke="#57534e"
                  strokeWidth="2"
                  strokeDasharray="10,10"
                />
                <path
                  d="M 60 128 L 60 80"
                  fill="none"
                  stroke="#57534e"
                  strokeWidth="2"
                  strokeDasharray="2,2"
                />
              </svg>
              <LocationLabel
                x="85%"
                y="50%"
                icon={MapPin}
                label="三宫 (出发)"
                color="bg-stone-200"
              />
              <LocationLabel
                x="50%"
                y="70%"
                icon={Anchor}
                label="舞子 (看大桥)"
                color="bg-blue-100"
                textColor="text-blue-800"
              />
              <LocationLabel
                x="18%"
                y="30%"
                icon={Flag}
                label="姬路城"
                color="bg-stone-800"
                textColor="text-white"
              />
              <TransportLabel
                x="68%"
                y="45%"
                text="JR 新快速 (40分)"
                color="text-stone-600"
              />
            </>
          );
        case 'day5':
          return (
            <>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-50/50 pointer-events-none"></div>
              <svg
                className="absolute inset-0 w-full h-full"
                overflow="visible"
              >
                <path
                  d="M 160 40 L 160 180"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                />
                <path
                  d="M 160 40 Q 280 60 280 180"
                  fill="none"
                  stroke="#9333ea"
                  strokeWidth="3"
                  strokeDasharray="6,4"
                />
              </svg>
              <LocationLabel
                x="50%"
                y="15%"
                icon={CheckSquare}
                label="三宫 (存行李)"
                color="bg-stone-200"
              />
              <LocationLabel
                x="50%"
                y="75%"
                icon={Waves}
                label="鸣门漩涡"
                color="bg-blue-100"
                textColor="text-blue-800"
              />
              <LocationLabel
                x="85%"
                y="75%"
                icon={MapPin}
                label="KIX 日航酒店"
                color="bg-purple-100"
                textColor="text-purple-800"
              />
              <TransportLabel
                x="40%"
                y="45%"
                text="明石大桥"
                rotate={-90}
                color="text-stone-400"
              />
              <TransportLabel
                x="55%"
                y="45%"
                text="高速巴士往返"
                rotate={90}
                color="text-blue-600"
              />
            </>
          );
        case 'day6':
          return (
            <div className="flex flex-col items-center justify-center h-full text-stone-400">
              <Plane size={64} className="mb-4 text-green-500 animate-pulse" />
              <p className="font-bold text-lg text-green-700">平安回家</p>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="relative w-full h-56 bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-inner mb-6 mx-auto transition-all duration-500 group">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        ></div>
        {renderMapContent()}
      </div>
    );
  };

  // --- 数据 ---
  const itineraryData = {
    day1: {
      date: '2/15 (周日)',
      title: '抵达 & 紧急补货',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        {
          time: '16:40',
          icon: Plane,
          title: '航班落地 JL0894',
          desc: '抵达关西 KIX T1。',
          highlight: false,
        },
        {
          time: '18:00',
          icon: Bus,
          title: '机场大巴',
          desc: '直达神户三宫 (箱子放车底)。',
          highlight: false,
        },
        {
          time: '19:30',
          icon: MapPin,
          title: '酒店 Check-in',
          desc: '办理入住，放行李。',
          highlight: false,
        },
        {
          time: '20:00',
          icon: Utensils,
          title: '晚餐：炸猪排 / 拉面',
          desc: '推荐: Katsukura (名代炸猪排) 或 Ramen Taro。\n吃点热乎的定食，快速回血！',
          highlight: true,
        },
        {
          time: '21:30',
          icon: ShoppingBag,
          title: 'Don Quijote (惊安殿堂)',
          desc: '步行8分钟。24小时营业。\n🎯 必买：手套、帽子、厚袜子。',
          highlight: true,
        },
      ],
    },
    day2: {
      date: '2/16 (周一)',
      title: '六甲山 & 有马金泉',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        {
          time: '08:30',
          icon: Coffee,
          title: '早餐：松屋/Sukiya',
          desc: '就在酒店楼下，几步路就到。',
          highlight: false,
        },
        {
          time: '11:00',
          icon: Sun,
          title: '六甲山雪上乐园',
          desc: 'Snow Land 玩雪盆 (2小时)。',
          highlight: true,
        },
        {
          time: '14:30',
          icon: Train,
          title: '六甲有马索道',
          desc: '空中缆车跨山，风景绝美。',
          highlight: false,
        },
        {
          time: '15:30',
          icon: Coffee,
          title: '有马温泉',
          desc: '逛老街，吃碳酸煎饼。',
          highlight: false,
        },
        {
          time: '16:00',
          icon: User,
          title: '泡汤：金之汤',
          desc: '著名的金泉。自带小毛巾。',
          highlight: true,
        },
        {
          time: '17:40',
          icon: Bus,
          title: '【预定】高速巴士回程',
          desc: '17:40或18:00的班次。直达三宫。',
          highlight: true,
        },
        {
          time: '19:00',
          icon: Utensils,
          title: '晚餐：神户牛吉祥吉',
          desc: '地点：南京町/元町附近\n特色：神户牛专门店，除了牛排还有拉面/盖饭，带孩子吃很方便。',
          highlight: true,
        },
      ],
    },
    day3: {
      date: '2/17 (周二)',
      title: '神户全天购物日',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        {
          time: '09:30',
          icon: Camera,
          title: '星巴克 北野异人馆店',
          desc: '先去喝杯咖啡拍全家福 (商店还没开)。',
          highlight: false,
        },
        {
          time: '11:00',
          icon: ShoppingBag,
          title: 'nanamica KOBE',
          desc: '旧居留地。开门第一批进！\n主攻紫标风衣。',
          highlight: true,
        },
        {
          time: '12:30',
          icon: Utensils,
          title: '午餐：西餐 / Cafe',
          desc: '旧居留地附近有很多精致的Cafe，如 Bar & Bistro 64。',
          highlight: false,
        },
        {
          time: '16:00',
          icon: ShoppingBag,
          title: 'Center Plaza',
          desc: '2F/3F 动漫玩具店 (给孩子的奖励)。',
          highlight: false,
        },
        {
          time: '19:00',
          icon: Utensils,
          title: '晚餐：烧肉石田屋 (Ishida)',
          desc: '地点：三宫店 (需预定)\n特色：炭火烧肉，自己烤的神户牛，肉质极佳。比铁板烧更实惠，氛围轻松。',
          highlight: true,
        },
      ],
    },
    day4: {
      date: '2/18 (周三)',
      title: '姬路城 & 舞子夕阳',
      stay: 'Daiwa Roynet 神户三宫PREMIER',
      events: [
        {
          time: '09:00',
          icon: Coffee,
          title: '早餐：Komeda 咖啡',
          desc: '点饮料送吐司。',
          highlight: false,
        },
        {
          time: '09:30',
          icon: Train,
          title: '前往姬路',
          desc: 'JR三宫站乘坐“新快速”列车 (约40分钟)。',
          highlight: false,
        },
        {
          time: '10:30',
          icon: MapPin,
          title: '姬路城 (白鹭城)',
          desc: '世界遗产。爬上大天守阁俯瞰全城。\n注意：台阶非常陡，需脱鞋，请穿厚袜子防滑防冷。',
          highlight: true,
        },
        {
          time: '13:00',
          icon: Utensils,
          title: '午餐：活水轩 (好古园内)',
          desc: '就在姬路城隔壁。一边欣赏日式庭院一边吃星鳗饭(Anago-meshi)或荞麦面。非常优雅。',
          highlight: false,
        },
        {
          time: '15:00',
          icon: Camera,
          title: '舞子海上散步道',
          desc: 'JR回程在“舞子站”下。\n体验“海上47米玻璃地板”，近距离看壮观的明石海峡大桥。',
          highlight: false,
        },
        {
          time: '17:30',
          icon: Train,
          title: '返回神户三宫',
          desc: '回酒店稍作休息，或在三宫中心街补买药妆。',
          highlight: false,
        },
        {
          time: '19:00',
          icon: Utensils,
          title: '晚餐：神户港 Mosaic',
          desc: '推荐：Bikkuri Donkey (汉堡排) 或 Fishermans Market (自助餐)。\n吃完看神户塔夜景，散步回酒店。',
          highlight: false,
        },
      ],
    },
    day5: {
      date: '2/19 (周四)',
      title: '鸣门漩涡 & 移动',
      stay: '关西机场日航酒店 (Hotel Nikko)',
      events: [
        {
          time: '09:00',
          icon: CheckSquare,
          title: '退房 & 寄存行李',
          desc: '【关键】3个大箱子存在三宫站/Mint Kobe的特大号储物柜。轻装去鸣门。',
          highlight: true,
        },
        {
          time: '09:30',
          icon: Bus,
          title: '【预定】高速巴士',
          desc: '三宫巴士总站(Mint Kobe 1F)乘车。\n前往“鸣门公园口” (约1h 20m)。',
          highlight: true,
        },
        {
          time: '11:00',
          icon: Ship,
          title: '鸣门游玩 (海陆双拼)',
          desc: '1. 涡之道：走大桥底部的玻璃栈道。\n2. 观潮船：坐“Wonder Naruto”出海近距离看漩涡 (查好潮汐时间)。',
          highlight: true,
        },
        {
          time: '12:45',
          icon: Utensils,
          title: '午餐：鸣门鲷鱼饭',
          desc: '推荐公园附近的“潮风”。这里的鲷鱼口感紧实，必吃！',
          highlight: false,
        },
        {
          time: '15:00',
          icon: Bus,
          title: '【预定】巴士回神户',
          desc: '在“鸣门公园”站上车。必须赶这班，避免太晚。',
          highlight: true,
        },
        {
          time: '16:30',
          icon: CheckSquare,
          title: '三宫取行李 & 补给',
          desc: '拿回行李箱。可以在车站买点便当/饭团晚上吃。',
          highlight: false,
        },
        {
          time: '18:00',
          icon: Bus,
          title: '前往关西机场',
          desc: '推荐：机场大巴 (三宫直达，不用搬行李)。\n备选：Bay Shuttle 高速船 (需换乘，风景好)。',
          highlight: false,
        },
        {
          time: '19:30',
          icon: MapPin,
          title: '入住：日航关西机场',
          desc: 'T1航站楼内。真香！\n*记得取消奥德西斯套房酒店。',
          highlight: true,
        },
      ],
    },
    day6: {
      date: '2/20 (周五)',
      title: '回国',
      stay: '温馨的家',
      events: [
        {
          time: '07:30',
          icon: Coffee,
          title: '起床退房',
          desc: '住在机场里就是爽，多睡会儿。推行李步行3分钟到出发层。',
          highlight: false,
        },
        {
          time: '08:00',
          icon: CheckSquare,
          title: '值机',
          desc: 'JL0891 (09:15起飞)。',
          highlight: false,
        },
        {
          time: '10:15',
          icon: Plane,
          title: '起飞',
          desc: '飞往上海。',
          highlight: true,
        },
      ],
    },
  };

  const bookingChecklist = [
    { item: 'Day 3 晚餐: 烧肉石田屋', time: '提前1-2个月', status: '必做' },
    { item: 'Day 5 交通: 鸣门高速巴士', time: '提前1个月', status: '必做' },
    { item: 'Day 2 交通: 有马回程巴士', time: '提前1周', status: '建议' },
    { item: '请取消: 奥德西斯套房酒店', time: '2月18日前', status: '紧急' },
    {
      item: '手机流量卡 (亿点原生)',
      time: '出发前',
      status: '未准备',
      note: '方案推荐: 7天10G (6天行程保险)。亿点卡信号稳定。',
    },
    {
      item: '浦东接送机',
      time: '出发前',
      status: '未准备',
      note: '预约出发送机 & 回程接机。',
    },
    {
      item: '机场休息室',
      time: '出发前',
      status: '未准备',
      note: '浦东T1 (V39) & 关西T1 (金刚/六甲)。确认信用卡/龙腾权益。',
    },
    {
      item: 'Visit Japan Web',
      time: '出发前3天',
      status: '未准备',
      note: '填写入境审查+海关申报，截图2个二维码保存。',
    },
  ];

  const packingList = [
    {
      category: '重要证件',
      items: [
        '护照 (6个月以上有效期)',
        '机票行程单 (打印)',
        '酒店确认单 (日语/英语)',
        '现金 (3-5万日元)',
        '信用卡 (Visa/Master)',
        'ICOCA/Suica卡 (苹果钱包)',
      ],
    },
    {
      category: '电子产品',
      items: [
        '手机 & 充电器',
        '充电宝 (随身带)',
        '转换插头 (日本两扁孔)',
        '流量卡 / eSIM',
        '孩子iPad/耳机',
      ],
    },
    {
      category: '衣物 (2月神户)',
      items: [
        '羽绒服 (防风)',
        '保暖内衣 (Uniqlo Heattech)',
        '厚袜子 (多带几双)',
        '舒适走路鞋',
        '围巾/手套/帽子',
      ],
    },
    {
      category: '亲子/生活',
      items: [
        '牙刷牙膏 (日本酒店有时不提供)',
        '个人护肤品 (小样)',
        '常备药 (感冒/肠胃/创可贴)',
        '折叠伞',
        '大号购物袋 (装战利品)',
      ],
    },
  ];

  const hotelBookings = [
    {
      name: 'Daiwa Roynet Hotel 神户三宫PREMIER',
      dates: '2/15 - 2/19 (4晚)',
      room: '中等双床房 带加床- 禁烟',
      price: '¥3,186.80',
      status: '不可取消 (携程)',
      note: '儿童友好',
      active: true,
    },
    {
      name: '日航关西机场酒店 (Hotel Nikko)',
      dates: '2/19 - 2/20 (1晚)',
      room: '经济舱三人房-禁烟',
      price: '¥870.14',
      status: '2月16日前免费取消 (Agoda)',
      note: '儿童不友好 (但位置绝佳)',
      active: true,
      highlight: true,
    },
    {
      name: '大阪关西机场奥德西斯套房酒店',
      dates: '2/19 - 2/20 (1晚)',
      room: '高级湾景双床房带加床',
      price: '¥765.22',
      status: '2月18日17点前免费取消 (飞猪)',
      note: '建议取消',
      active: false,
      warn: true,
    },
  ];

  const shoppingList = [
    {
      name: 'nanamica KOBE',
      tags: ['旧居留地', '必去'],
      note: '神户独栋店。紫标风衣/T恤最全。',
    },
    {
      name: 'THE NORTH FACE',
      tags: ['旧居留地', '限定'],
      note: '就在隔壁，有神户限定款。',
    },
    { name: 'Bshop', tags: ['海岸通', '日系'], note: '适合买舒适的亲子装。' },
    {
      name: 'Center Plaza',
      tags: ['三宫', '二次元'],
      note: '2F/3F 是孩子的乐园 (手办/卡牌)。',
    },
    {
      name: 'Don Quijote',
      tags: ['24h', '补给'],
      note: '三宫站旁。零食药妆一站式。',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans text-stone-800 max-w-md mx-auto shadow-2xl overflow-hidden relative flex flex-col">
      {/* 顶部导航区 (Sticky) */}
      <div className="bg-white sticky top-0 z-50 border-b border-stone-200 shadow-sm">
        <div className="p-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-black text-stone-900 tracking-tight">
              神户亲子手账
            </h1>
            <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-1 rounded">
              2月15-20日
            </span>
          </div>
        </div>

        {/* 日期滚动条 (仅在行程 Tab 显示) */}
        {activeTab === 'itinerary' && (
          <div className="flex overflow-x-auto hide-scrollbar px-4 pb-3 space-x-3 snap-x">
            {['day1', 'day2', 'day3', 'day4', 'day5', 'day6'].map(
              (day, idx) => {
                const isActive = selectedDay === day;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`flex-shrink-0 snap-center flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-blue-600 border-blue-600 shadow-md transform scale-105'
                        : 'bg-white border-stone-100 text-stone-400 hover:border-stone-300'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold ${
                        isActive ? 'text-blue-100' : 'text-stone-400'
                      }`}
                    >
                      D{idx + 1}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        isActive ? 'text-white' : 'text-stone-600'
                      }`}
                    >
                      {['15', '16', '17', '18', '19', '20'][idx]}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        )}
      </div>

      {/* 主内容区域 (Scrollable) */}
      <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#f5f7fa] p-4 pb-24">
        {/* === 行程 Tab === */}
        {activeTab === 'itinerary' && (
          <div className="animate-fade-in-up space-y-6">
            {/* 手绘地图 */}
            {itineraryData[selectedDay].events.length > 3 && (
              <HandDrawnMap day={selectedDay} />
            )}

            {/* 当日概览卡片 */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-black text-stone-800 mb-1">
                  {itineraryData[selectedDay].title}
                </h2>
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
                    <div
                      className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 ${
                        event.highlight ? 'bg-blue-500' : 'bg-stone-300'
                      }`}
                    ></div>

                    {/* 内容卡片 */}
                    <div
                      className={`p-4 rounded-xl border transition-all ${
                        event.highlight
                          ? 'bg-white border-blue-100 shadow-md'
                          : 'bg-stone-50/50 border-stone-100'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold font-mono text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded">
                            {event.time}
                          </span>
                          <h3
                            className={`font-bold text-sm ${
                              event.highlight
                                ? 'text-stone-900'
                                : 'text-stone-700'
                            }`}
                          >
                            {event.title}
                          </h3>
                        </div>
                        <event.icon
                          size={16}
                          className={
                            event.highlight ? 'text-blue-500' : 'text-stone-300'
                          }
                        />
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line mt-2">
                        {event.desc}
                      </p>
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
              <h2 className="text-2xl font-bold flex items-center mb-2">
                <ShoppingBag className="mr-2" /> 购物攻略
              </h2>
              <p className="text-purple-100 text-sm opacity-90">
                Day 3 专属 · 旧居留地核心圈
              </p>
            </div>

            <div className="grid gap-3">
              {shoppingList.map((shop, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-stone-800">{shop.name}</h3>
                    <div className="flex space-x-1">
                      {shop.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
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
              <button
                onClick={() => setChecklistTab('hotels')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  checklistTab === 'hotels'
                    ? 'bg-white shadow text-orange-600'
                    : 'text-stone-400'
                }`}
              >
                酒店
              </button>
              <button
                onClick={() => setChecklistTab('booking')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  checklistTab === 'booking'
                    ? 'bg-white shadow text-teal-600'
                    : 'text-stone-400'
                }`}
              >
                待办
              </button>
              <button
                onClick={() => setChecklistTab('packing')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  checklistTab === 'packing'
                    ? 'bg-white shadow text-indigo-600'
                    : 'text-stone-400'
                }`}
              >
                行李
              </button>
            </div>

            {checklistTab === 'hotels' && (
              <div className="space-y-4">
                {hotelBookings.map((h, i) => (
                  <div
                    key={i}
                    className={`bg-white p-4 rounded-xl border-2 ${
                      h.warn
                        ? 'border-red-100 bg-red-50/30'
                        : h.highlight
                        ? 'border-orange-200'
                        : 'border-stone-100'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-sm text-stone-800">
                        {h.name}
                      </h3>
                      {h.warn && (
                        <span className="bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">
                          请取消
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5 text-xs text-stone-600">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-2 opacity-50" />
                        {h.dates}
                      </div>
                      <div className="flex items-center">
                        <BedDouble size={12} className="mr-2 opacity-50" />
                        {h.room}
                      </div>
                      <div className="flex items-center">
                        <CreditCard size={12} className="mr-2 opacity-50" />
                        {h.price}
                      </div>
                      <div
                        className={`flex items-start mt-2 p-2 rounded ${
                          h.active ? 'bg-stone-50' : 'bg-red-100/50'
                        }`}
                      >
                        <AlertCircle
                          size={12}
                          className="mr-1.5 mt-0.5 opacity-50"
                        />
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
                  <div
                    key={i}
                    className="flex bg-white p-3 rounded-xl border border-stone-200 shadow-sm items-start"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0 ${
                        item.status === '未准备' ||
                        item.status === '必做' ||
                        item.status === '紧急'
                          ? 'bg-red-500 animate-pulse'
                          : 'bg-green-500'
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-bold text-sm text-stone-800">
                          {item.item}
                        </span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                            item.status === '未准备'
                              ? 'bg-stone-200 text-stone-600'
                              : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {item.status}
                        </span>
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
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm"
                  >
                    <h3 className="font-bold text-sm text-indigo-900 mb-3 border-b border-stone-100 pb-2">
                      {cat.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.items.map((it, j) => (
                        <div
                          key={j}
                          className="flex items-center text-xs text-stone-600"
                        >
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
        )}
      </div>

      {/* 底部导航栏 */}
      <div className="bg-white border-t border-stone-200 pb-6 pt-3 px-8 flex justify-between items-center fixed bottom-0 w-full max-w-md z-50">
        <button
          onClick={() => setActiveTab('itinerary')}
          className={`flex flex-col items-center transition-colors ${
            activeTab === 'itinerary' ? 'text-blue-600' : 'text-stone-300'
          }`}
        >
          <Calendar
            size={24}
            strokeWidth={activeTab === 'itinerary' ? 2.5 : 2}
          />
          <span className="text-[10px] font-bold mt-1">行程</span>
        </button>
        <button
          onClick={() => setActiveTab('shopping')}
          className={`flex flex-col items-center transition-colors ${
            activeTab === 'shopping' ? 'text-purple-600' : 'text-stone-300'
          }`}
        >
          <ShoppingBag
            size={24}
            strokeWidth={activeTab === 'shopping' ? 2.5 : 2}
          />
          <span className="text-[10px] font-bold mt-1">购物</span>
        </button>
        <button
          onClick={() => setActiveTab('booking')}
          className={`flex flex-col items-center transition-colors ${
            activeTab === 'booking' ? 'text-teal-600' : 'text-stone-300'
          }`}
        >
          <CheckSquare
            size={24}
            strokeWidth={activeTab === 'booking' ? 2.5 : 2}
          />
          <span className="text-[10px] font-bold mt-1">预定</span>
        </button>
      </div>
    </div>
  );
};

export default ItineraryApp;
