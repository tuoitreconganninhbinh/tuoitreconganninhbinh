const DATA = {

vi:{
name:"🇻🇳 Tiếng Việt",
items:[
{t:"Mất hộ chiếu",c:"Đến Công an gần nhất để trình báo mất hộ chiếu.\n\nLiên hệ Đại sứ quán hoặc Lãnh sự quán để được cấp giấy tờ thay thế."},
{t:"Mất điện thoại",c:"Khóa SIM.\nĐịnh vị điện thoại.\nTrình báo Công an."},
{t:"Mất ví",c:"Khóa thẻ ngân hàng.\nTrình báo Công an."},
{t:"Bị trộm",c:"Giữ nguyên hiện trường.\nGọi 113."},
{t:"Tai nạn giao thông",c:"Gọi 115 nếu có người bị thương.\nBáo Công an."},
{t:"Taxi",c:"Ghi lại biển số xe."},
{t:"Khách sạn",c:"Liên hệ lễ tân."},
{t:"Đi lạc",c:"Đến Công an gần nhất."},
{t:"Mất hành lý",c:"Liên hệ đơn vị vận chuyển."},
{t:"Khẩn cấp",c:"Gọi 113."}
]
},

en:{
name:"🇬🇧 English",
items:[
{t:"Lost Passport",c:"Go to the nearest Police Station.\nContact your Embassy."},
{t:"Lost Phone",c:"Block SIM.\nReport to Police."},
{t:"Lost Wallet",c:"Block bank cards."},
{t:"Theft",c:"Call 113."},
{t:"Traffic Accident",c:"Call 115."},
{t:"Taxi",c:"Write down taxi number."},
{t:"Hotel",c:"Contact reception."},
{t:"Lost",c:"Go to Police."},
{t:"Lost Luggage",c:"Contact transport company."},
{t:"Emergency",c:"Call 113."}
]
},

zh:{
name:"🇨🇳 中文",
items:[
{t:"护照丢失",c:"请到最近公安机关报案。"},
{t:"手机丢失",c:"挂失SIM卡。"},
{t:"钱包丢失",c:"冻结银行卡。"},
{t:"被盗",c:"报警113。"},
{t:"交通事故",c:"拨打115。"},
{t:"出租车",c:"记录车牌。"},
{t:"酒店",c:"联系前台。"},
{t:"迷路",c:"前往公安机关。"},
{t:"行李丢失",c:"联系运输单位。"},
{t:"紧急情况",c:"拨打113。"}
]
},

ko:{
name:"🇰🇷 한국어",
items:[
{t:"여권 분실",c:"가까운 경찰서를 방문하십시오."},
{t:"휴대폰 분실",c:"SIM을 정지하십시오."},
{t:"지갑 분실",c:"카드를 정지하십시오."},
{t:"도난",c:"113에 신고하십시오."},
{t:"교통사고",c:"115에 전화하십시오."},
{t:"택시",c:"차량 번호를 기록하십시오."},
{t:"호텔",c:"프런트에 문의하십시오."},
{t:"길을 잃음",c:"경찰서를 방문하십시오."},
{t:"수하물 분실",c:"운송회사에 문의하십시오."},
{t:"긴급",c:"113에 전화하십시오."}
]
}

};

const languages=document.getElementById("languages");
const menu=document.getElementById("menu");
const content=document.getElementById("content");

showLanguages();

function showLanguages(){

languages.innerHTML="<h2>Chọn ngôn ngữ / Select Language</h2>";

menu.innerHTML="";
content.innerHTML="";

for(let k in DATA){

let b=document.createElement("button");

b.innerHTML=DATA[k].name;

b.onclick=function(){
showMenu(k);
};

languages.appendChild(b);

}

}

function showMenu(lang){

languages.innerHTML='<button onclick="showLanguages()">⬅ Quay lại chọn ngôn ngữ</button><h2>'+DATA[lang].name+"</h2>";

menu.innerHTML="";
content.innerHTML="";

DATA[lang].items.forEach(function(item){

let b=document.createElement("button");

b.innerHTML=item.t;

b.onclick=function(){

showContent(lang,item);

};

menu.appendChild(b);

});

}

function showContent(lang,item){

menu.innerHTML="";

content.innerHTML=
'<button onclick="showMenu(\''+lang+'\')">⬅ Quay lại</button>'+
'<h2>'+item.t+'</h2>'+
'<p style="white-space:pre-line">'+item.c+'</p>';

}
