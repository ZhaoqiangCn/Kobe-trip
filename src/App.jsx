import React, { useState } from 'react';
import { 
  Calendar, MapPin, Clock, Train, Coffee, 
  Wind, CloudSnow, Utensils, Info, Camera, 
  AlertTriangle, Plane, Luggage, CheckCircle,
  ArrowRight, Bus, Ticket, CreditCard, ShieldAlert,
  ShoppingBag, FileText, Gift, Store
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('shopping'); // Default to shopping for this answer
  const [activeDay, setActiveDay] = useState(0);

  // --------------------------------------------------------------------------------
  // 详细行程数据 (Full Detail)
  // --------------------------------------------------------------------------------
  const itinerary = [
    {
      date: '15', month: '2月', weekday: '周日',
      title: '抵达神户',
      location: 'Kobe Sannomiya',
      color: 'bg-indigo-600',
      timeline: [
        { time: '13:25', task: '上海浦东出发', detail: '航班 JL0894 (T1)，开启关西之旅。', icon: 'plane', type: 'flight' },
        { time: '15:40', task: '抵达关西机场 (KIX)', detail: 'T1 入境。在 JR 绿色窗口或自动机兑换/购买 "JR 关西&广岛地区铁路周游券 (5日)"。', icon: 'ticket', type: 'alert' },
        { time: '17:00', task: '机场巴士前往神户', detail: '推荐乘坐机场巴士（比电车更方便，不需搬行李）。在 T1 1楼 6号站台乘车，约 65-75 分钟直达神户三宫。', icon: 'bus', type: 'transport' },
        { time: '18:30', task: '抵达神户三宫', detail: '巴士停靠在 Mint Kobe 1F 或三宫巴士总站。', icon: 'map', type: 'default' },
        { time: '19:00', task: '【重要】购买有马车票', detail: '入住酒店前，务必在 Mint Kobe 1F 巴士柜台，提前购买 18日 09:30 去程 和 16:30 回程的“有马急行巴士”车票（全席指定，现场买可能没票）。', icon: 'alert', type: 'alert' },
        { time: '20:00', task: '晚餐：拉面/居酒屋', detail: '推荐在三宫中心街 (Center Gai) 寻找地道美食。', icon: 'food', type: 'food' },
        { time: '21:30', task: '【深夜购物】堂吉诃德', detail: '前往“Don Quijote 三宫店” (24小时营业)。专攻：药妆、零食、日用品。此时别买衣服，因为专柜已关门。', icon: 'shopping', type: 'spot' }
      ]
    },
    {
      date: '16', month: '2月', weekday: '周一',
      title: '姬路·舞子·神户',
      location: 'Himeji, Maiko & Kobe',
      color: 'bg-rose-600',
      timeline: [
        { time: '09:15', task: '前往姬路', detail: 'JR 三宫站 ➡️ JR 姬路站 (乘坐“新快速”列车，约 40 分钟，使用 JR Pass)。', icon: 'train', type: 'transport' },
        { time: '10:15', task: '姬路城 (不登城)', detail: '重点游览外观。推荐路线：樱门桥 ➡️ 三之丸广场（最佳合影点）。随后前往西侧的“好古园”游览日式庭院。', icon: 'camera', type: 'spot' },
        { time: '11:30', task: '午餐：姬路关东煮', detail: '推荐“御幸通商店街”内的店家，品尝当地特色的生姜酱油风味关东煮。', icon: 'food', type: 'food' },
        { time: '13:00', task: '前往舞子公园', detail: 'JR 姬路站 ➡️ JR 舞子站 (Maiko)。乘坐 JR 神户线新快速或快速列车 (约 30 分钟)。', icon: 'train', type: 'transport' },
        { time: '13:40', task: '明石海峡大桥', detail: '游览“舞子海上散步道”(Maiko Marine Promenade)，在玻璃地板上俯瞰濑户内海，观赏世界最长跨海大桥的壮观结构。', icon: 'camera', type: 'spot' },
        { time: '15:00', task: '移动至神户港', detail: 'JR 舞子站 ➡️ JR 神户站 (约 15-20 分钟)。下车后走 Duo Kobe 地下街直通海边。', icon: 'train', type: 'transport' },
        { time: '15:30', task: 'Mosaic & 神户塔', detail: 'Mosaic 广场 2F 木甲板是拍神户塔(红)和海洋博物馆(白)的最佳机位。享受海港下午茶。', icon: 'coffee', type: 'spot' },
        { time: '17:30', task: '返回三宫', detail: 'JR 神户站 ➡️ JR 三宫站 (仅需 4 分钟)。', icon: 'train', type: 'transport' },
        { time: '17:45', task: '【黄金购物窗】潮牌服饰', detail: '重点攻克：nanamica (19:00关!)、Patagonia (19:00关!)。这两个品牌必须现在去，晚了就关门了！', icon: 'shopping', type: 'alert' },
        { time: '19:30', task: '【晚餐预约】炭焼肉石田屋 本店', detail: '预约号：SD8025752 | 代表人：赵强 (チョウ キョウ) | 人数：3名 | 地址：神户市中央区北长狭通1-20-9。', icon: 'file', type: 'alert' }
      ]
    },
    {
      date: '17', month: '2月', weekday: '周二',
      title: '琵琶湖山谷',
      location: 'Biwako Valley',
      color: 'bg-sky-600',
      timeline: [
        { time: '08:30', task: '前往志贺', detail: 'JR 三宫 ➡️ JR 京都 (换乘湖西线) ➡️ JR 志贺站。约 90 分钟。注意：湖西线风大易停运，出发前请查运休信息。', icon: 'train', type: 'transport' },
        { time: '10:10', task: '接驳巴士 & 缆车', detail: '志贺站 68路巴士 ➡️ 缆车站。乘坐日本最快缆车直达海拔 1100米。', icon: 'bus', type: 'transport' },
        { time: '10:30', task: 'Biwako Terrace', detail: '先去 The Main 的 Infinity Lounge。打卡“天空秋千”，背景是巨大的琵琶湖。', icon: 'camera', type: 'spot' },
        { time: '12:00', task: 'Snow Land 玩雪', detail: '购买 Snow Land 门票，租雪盆滑雪。适合亲子。午餐推荐 Lake View 餐厅。', icon: 'snow', type: 'spot' },
        { time: '14:00', task: '蓬莱山 (Mt. Horai)', detail: '乘坐观光吊椅去更高的蓬莱山，去 Cafe 360 喝咖啡，视野更开阔。', icon: 'coffee', type: 'spot' },
        { time: '16:00', task: '下山返程', detail: '原路返回神户三宫。', icon: 'train', type: 'transport' },
        { time: '17:30', task: '【黄金购物窗】百货与杂货', detail: '前往三宫车站附近。BEAMS (20:00关)、Bshop (20:00关)、3COINS (20:30/21:00关)。', icon: 'shopping', type: 'alert' },
        { time: '19:30', task: '晚餐：当地美食', detail: '昨晚已享用大餐，今晚推荐尝试神户的 B级美食（如长田炒面）或在三宫横丁寻找热闹的居酒屋。', icon: 'food', type: 'food' },
        { time: '21:00', task: '【深夜购物】超市扫货', detail: '前往“Hankyu Oasis” (Mint Kobe B1F, 开到23:00) 或“Daiei”买调味品、生鲜水果。这些重物建议最后买，直接拎回酒店。', icon: 'shopping', type: 'spot' }
      ]
    },
    {
      date: '18', month: '2月', weekday: '周三',
      title: '有马温泉',
      location: 'Arima Onsen',
      color: 'bg-amber-600',
      timeline: [
        { time: '09:30', task: '巴士出发', detail: '三宫 Mint 1F 乘坐“有马急行巴士”直达 (需凭之前买好的票)。', icon: 'bus', type: 'transport' },
        { time: '10:15', task: '温泉街漫步', detail: '路线：有马 Montbell (买限定T恤) ➡️ 宁宁桥 ➡️ 金之汤足汤 ➡️ 竹中肉店 (吃可乐饼)。', icon: 'camera', type: 'spot' },
        { time: '11:15', task: '碳酸源泉公园', detail: '走到街道尽头，品尝原味碳酸水 (生锈汽水味)，参观碳酸煎饼工坊。', icon: 'info', type: 'spot' },
        { time: '12:00', task: 'Arima Grand 入住', detail: '日归套餐 Check-in。先享用酒店精致日式午餐。', icon: 'food', type: 'alert' },
        { time: '13:30', task: '金泉·银泉', detail: '推荐先去 9F“云海”露天风吕 (俯瞰全景)，再去 B2“由布”大浴场。', icon: 'info', type: 'spot' },
        { time: '16:00', task: '退房下山', detail: '坐酒店接驳车去巴士站。乘坐 16:30 左右的巴士回三宫。', icon: 'bus', type: 'transport' },
        { time: '17:30', task: '最后查漏补缺', detail: '注意：NANGA 和 Patagonia 今天定休！请去逛逛 Bookoff (20:00关) 或 Daiso (20:00关)。', icon: 'luggage', type: 'alert' }
      ]
    },
    {
      date: '19', month: '2月', weekday: '周四',
      title: '广岛·告别',
      location: 'Hiroshima & Miyajima',
      color: 'bg-red-700',
      timeline: [
        { time: '08:00', task: '行李寄存', detail: '将大件行李寄存在 JR 三宫站储物柜 (靠近机场大巴站)。', icon: 'luggage', type: 'default' },
        { time: '08:30', task: '新干线出发', detail: '新神户站 ➡️ 广岛站 (Sakura/Nozomi, ~71分钟)。JR Pass 回本之旅。', icon: 'train', type: 'transport' },
        { time: '10:00', task: '前往宫岛', detail: '广岛站换乘 JR 山阳本线 ➡️ 宫岛口，转乘 JR 渡轮 (靠右站拍大鸟居)。', icon: 'ship', type: 'transport' },
        { time: '10:45', task: '严岛神社', detail: '正值满潮，拍摄海上大鸟居和朱红回廊。顺路游览千叠阁。', icon: 'camera', type: 'spot' },
        { time: '12:30', task: '宫岛午餐', detail: '必吃：[牡蛎屋] 烤牡蛎、[上野] 星鳗饭、红叶堂炸馒头。', icon: 'food', type: 'food' },
        { time: '14:30', task: '广岛和平公园', detail: '电车前往原爆圆顶馆 (Atomic Bomb Dome) 和资料馆。', icon: 'info', type: 'spot' },
        { time: '16:45', task: '返回神户', detail: '务必乘坐此时间段的新干线，保证 18:00 前回到三宫。', icon: 'train', type: 'alert' },
        { time: '18:15', task: '取行李 & 简餐', detail: '在三宫取回行李，简单吃点东西或打包便当。', icon: 'food', type: 'default' },
        { time: '20:00', task: '前往机场', detail: '三宫巴士总站 ➡️ 关西机场 T1。', icon: 'bus', type: 'transport' },
        { time: '21:30', task: '入住机场酒店', detail: '入住日航关西机场酒店 (Hotel Nikko Kansai Airport)。', icon: 'check', type: 'default' }
      ]
    },
    {
      date: '20', month: '2月', weekday: '周五',
      title: '归国',
      location: 'Shanghai',
      color: 'bg-slate-700',
      timeline: [
        { time: '07:15', task: '办理登机', detail: '酒店步行 5 分钟即达 T1 出发层。', icon: 'info', type: 'default' },
        { time: '09:15', task: 'JL0891 起飞', detail: 'KIX ➡️ PVG。', icon: 'plane', type: 'flight' },
        { time: '12:05', task: '抵达上海', detail: '旅程圆满结束。', icon: 'check', type: 'default' }
      ]
    }
  ];

  // --------------------------------------------------------------------------------
  // 交通攻略数据 (Guides)
  // --------------------------------------------------------------------------------
  const guides = [
    {
      id: 'jr-pass',
      title: 'JR 关西&广岛周游券',
      subtitle: 'Kansai-Hiroshima Area Pass',
      icon: 'ticket',
      color: 'bg-blue-600',
      content: [
        { label: '核心价值', text: '售价 ¥17,000。此行仅仅是神户往返广岛的新干线票价就已约 ¥20,000，直接回本。且包含去姬路、琵琶湖、关空特急 Haruka 的费用。' },
        { label: '兑换地点', text: '关西机场 JR 车站的“绿色窗口”或“绿色自动售票机” (带护照扫描功能)。' },
        { label: '如何使用', text: '走人工通道或直接塞入自动检票机（记得取回！）。' },
        { label: '指定席', text: '该 Pass 可免费划位 6 次指定席。建议在自动售票机上提前划好“新神户-广岛”往返的座位。' },
        { label: '适用范围', text: '包括新大阪至广岛的新干线 (Nozomi/Mizuho/Sakura)、关西地区 JR 在来线、JR 宫岛渡轮。' }
      ]
    },
    {
      id: 'airport-bus',
      title: '机场巴士攻略',
      subtitle: 'Kansai Airport Limousine',
      icon: 'bus',
      color: 'bg-orange-500',
      content: [
        { label: '为什么坐巴士', text: '神户三宫的 JR 站结构复杂，且从关空坐 JR 需要在大阪站或新大阪站换乘，携带大件行李不便。巴士直达，行李由司机搬运，省心省力。' },
        { label: '乘车点 (KIX)', text: '关西机场 T1 到达层出来，门口就是巴士站。前往神户（Kobe）在【6号站台】。' },
        { label: '购票', text: '站台旁的自动售票机购票，支持现金和 IC 卡。' },
        { label: '下车点 (三宫)', text: '通常停靠在“三宫站前”或“Mint Kobe”。这两个点距离您的酒店和 JR 站都很近。' },
        { label: '回程 (2月19日)', text: '回程上车点同样在三宫巴士总站（Mint Kobe 1F）。无需预约，排队上车，建议提前 15 分钟到达。' }
      ]
    }
  ];

  // --------------------------------------------------------------------------------
  // 购物攻略数据 (Shopping Database)
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
      <div className="bg-white pt-8 pb-2 px-6 sticky top-0 z-30 border-b border-stone-100/50 backdrop-blur-md bg-white/95">
        <div className="flex justify-center bg-slate-100 p-1 rounded-xl mb-4">
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'itinerary' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'
            }`}
          >
            每日行程
          </button>
          <button 
            onClick={() => setActiveTab('guides')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'guides' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'
            }`}
          >
            交通
          </button>
          <button 
            onClick={() => setActiveTab('shopping')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'shopping' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'
            }`}
          >
            购物表
          </button>
        </div>

        {activeTab === 'itinerary' && (
          <>
            <div className="flex justify-between items-end mb-4 animate-in fade-in slide-in-from-top-2">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  {itinerary[activeDay].title}
                  <span className={`h-2 w-2 rounded-full ${itinerary[activeDay].color.replace('bg-', 'bg-')}`}></span>
                </h1>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mt-1">
                  Day {activeDay + 1} · {itinerary[activeDay].weekday} · {itinerary[activeDay].location}
                </p>
              </div>
            </div>

            {/* Date Grid */}
            <div className="grid grid-cols-6 gap-2 bg-slate-50 p-1 rounded-xl">
              {itinerary.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`relative flex flex-col items-center justify-center py-2.5 rounded-lg transition-all duration-300 ${
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
            
            {/* End Marker */}
            <div className="flex justify-center pt-6 pb-10 opacity-30">
               <div className="h-1 w-16 bg-slate-300 rounded-full" />
            </div>
          </div>
        )}

        {/* Guides View */}
        {activeTab === 'guides' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className={`${guide.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      {getIcon(guide.icon)}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{guide.title}</h2>
                      <p className="text-xs opacity-80 uppercase tracking-widest">{guide.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  {guide.content.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
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

        {/* Shopping View (New Detailed List) */}
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

      </div>
    </div>
  );
};

export default App;