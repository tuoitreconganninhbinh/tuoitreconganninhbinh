const DATA={

vi:{
name:"🇻🇳 Tiếng Việt",
items:[
{t:"Mất hộ chiếu",c:"Đến Công an gần nhất để trình báo và liên hệ Đại sứ quán."},
{t:"Mất điện thoại",c:"Khóa SIM, định vị điện thoại và trình báo Công an."},
{t:"Mất ví",c:"Khóa thẻ ngân hàng và trình báo Công an."},
{t:"Bị trộm",c:"Giữ nguyên hiện trường và gọi 113."},
{t:"Tai nạn giao thông",c:"Gọi 115 nếu có người bị thương và báo Công an."},
{t:"Taxi",c:"Ghi lại biển số xe và trình báo."},
{t:"Khách sạn",c:"Liên hệ lễ tân hoặc Công an địa phương."},
{t:"Đi lạc",c:"Đến Công an gần nhất để được hỗ trợ."},
{t:"Mất hành lý",c:"Liên hệ nơi vận chuyển và trình báo."},
{t:"Khẩn cấp",c:"Gọi 113."}
]
},

en:{
name:"🇬🇧 English",
items:[
{t:"Lost Passport",c:"Go to the nearest Police Station and contact your Embassy."},
{t:"Lost Phone",c:"Block your SIM and report to Police."},
{t:"Lost Wallet",c:"Block your bank cards and report to Police."},
{t:"Theft",c:"Keep the scene and call 113."},
{t:"Traffic Accident",c:"Call 115 if injured and report to Police."},
{t:"Taxi Problem",c:"Write down the taxi number."},
{t:"Hotel Problem",c:"Contact hotel reception."},
{t:"Lost",c:"Go to the nearest Police Station."},
{t:"Lost Luggage",c:"Contact the transport company."},
{t:"Emergency",c:"Call 113."}
]
},

zh:{
name:"🇨🇳 中文",
items:[
{t:"护照丢失",c:"请到最近的公安机关报案，并联系使馆。"},
{t:"手机丢失",c:"立即挂失SIM卡并报警。"},
{t:"钱包丢失",c:"冻结银行卡并报警。"},
{t:"被盗",c:"保护现场并报警。"},
{t:"交通事故",c:"有人受伤请拨打115。"},
{t:"出租车问题",c:"记录车牌号码。"},
{t:"酒店问题",c:"联系酒店前台。"},
{t:"迷路",c:"前往最近公安机关。"},
{t:"行李丢失",c:"联系运输单位。"},
{t:"紧急情况",c:"拨打113。"}
]
},

ko:{
name:"🇰🇷 한국어",
items:[
{t:"여권 분실",c:"가까운 경찰서를 방문하고 대사관에 연락하십시오."},
{t:"휴대폰 분실",c:"SIM을 정지하고 신고하십시오."},
{t:"지갑 분실",c:"카드를 정지하십시오."},
{t:"도난",c:"113에 신고하십시오."},
{t:"교통사고",c:"부상자는 115에 전화하십시오."},
{t:"택시 문제",c:"차량 번호를 기록하십시오."},
{t:"호텔 문제",c:"프런트에 문의하십시오."},
{t:"길을 잃음",c:"가까운 경찰서를 방문하십시오."},
{t:"수하물 분실",c:"운송회사에 문의하십시오."},
{t:"긴급",c:"113에 전화하십시오."}
]
}

};

const languages=document.getElementById("languages");
const menu=document.getElementById("menu");
const content=document.getElementById("content");

for(let k in DATA){

let b=document.createElement("button");

b.innerHTML=DATA[k].name;

b.onclick=()=>showMenu(k);

languages.appendChild(b);

}

function showMenu(lang){

menu.innerHTML="";

content.innerHTML="";

DATA[lang].items.forEach(i=>{

let b=document.createElement("button");

b.innerHTML=i.t;

b.onclick=()=>{

content.innerHTML="<h2>"+i.t+"</h2><p>"+i.c+"</p>";

};

menu.appendChild(b);

});

}
