//1.全部分类选项卡特效
window.onload=function(){
	var list=$(".list");
	var item=$(".item");
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
			item[this.index].style.display="block";
		}
		list[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}

	// 微信
	var weixin=$(".weixin");
	var weixin1=$(".weixin1");
	weixin[0].onmouseover=function(){
		weixin1[0].style.display="block";
	}
	weixin[0].onmouseout=function(){
		weixin1[0].style.display="none";
	}
	// 手机银泰
	var shoujiyintai=$(".shoujiyintai");
	var shoujiyintai1=$(".shoujiyintai1");
	shoujiyintai[0].onmouseover=function(){
		shoujiyintai1[0].style.display="block";
	}
	shoujiyintai[0].onmouseout=function(){
		shoujiyintai1[0].style.display="none";
	}
	// 我的银泰
	var shouye4=$(".shouye4");
	var myyintai=$(".myyintai");
	shouye4[0].onmouseover=function(){
		myyintai[0].style.display="block";
	}
	shouye4[0].onmouseout=function(){
		myyintai[0].style.display="none";
	}
	// 购物车
	var gouwudai=$(".gouwudai");
	var gouwu=$(".gouwu");
	gouwudai[0].onmouseover=function(){
		gouwu[0].style.display="block";
	}
	gouwudai[0].onmouseout=function(){
		gouwu[0].style.display="none";
	}

//2.轮播图特效
	var win=$(".banner_middle")[0];
	var as=$("a",win);
	var lis=$("li",$(".point")[0]);
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var num=0;
	as[0].style.zIndex=10;
	var t=setInterval(moveR,2000);
	win.onmouseover=function(){
		clearInterval(t);
		btnl.style.display="block";
		btnr.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(moveR,2000);
		btnl.style.display="none";
		btnr.style.display="none";
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(num==this.index){
				return;
			}
			for(var j=0;j<as.length;j++){
				animate(as[j],{opacity:0});
				lis[j].className="";		
			}
			lis[this.index].className="hot";
			animate(as[this.index],{opacity:1});
			num=this.index;
		}
	}
	var flag=true;
	btnr.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
	}
	btnl.onclick=function(){
		if(flag){
			flag=false;	
			moveL();
		}
	}	
	function moveR(){
		num++;
		if(num==as.length){
			num=0;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0});
			lis[i].className="";			
		}
		lis[num].className="hot";
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
	function moveL(){
		num--;
		if(num<0){
			num=lis.length-1;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0});
			lis[i].className="";		
		}
		lis[num].className="hot";
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
//3.超值特卖选项卡
	var chaolefttop1=$(".chaolefttop1");
	var item1=$(".item1");
	for(var i=0;i<chaolefttop1.length;i++){
		if(i==0){
			continue;
		}
	}
	for(var i=0;i<chaolefttop1.length;i++){
		chaolefttop1[i].index=i;
		chaolefttop1[i].onmouseover=function(){
			for(var j=0;j<chaolefttop1.length;j++){
				item1[j].style.display="none";
			}
			item1[this.index].style.display="block";
		}		
	}
//4.专柜同款选项卡
	var remenzi=$(".remenzi");
	var remenitem=$(".remenitem");
	for(var k=0;k<remenzi.length;k++){
		if(k==0){
			continue;
		}
	}
	for(var i=0;i<remenzi.length;i++){
		remenzi[i].index=i;
		remenzi[i].onmouseover=function(){
			for(var j=0;j<remenzi.length;j++){
				remenitem[j].style.display="none";
			}
			remenitem[this.index].style.display="block";
		}		
	}
	
	var banner_right=$(".banner_right");
	for(var i=0;i<banner_right.length;i++){
		banner_right[i].j=i;
		banner_right[i].onmouseover=function(){
		animate(banner_right[this.j],{"marginRight":"7px"},50,Tween.Linear);
		}
		banner_right[i].onmouseout=function(){
		animate(banner_right[this.j],{"marginRight":"0"},50);
		}
	}

//5.名品轮播
	var mingpin=$(".mingpin-middle")[0];
	var mingpinas=$("a",mingpin);
	var lis1=$("li",$(".point1")[0]);
	var mingpinbtnl=$(".mingpin-btnl",mingpin)[0];
	var mingpinbtnr=$(".mingpin-btnr",mingpin)[0];
	var mingpinwidths=parseInt(getStyle(mingpinas[0],"width"));
	var mingpinnum=0;
	var mingpinnext=0;
	for(i=0;i<mingpinas.length;i++){
		if(i==0){
			continue;
		}
		mingpinas[i].style.left=mingpinwidths+"px";
	}
	for(var i=0;i<lis1.length;i++){
		lis1[i].dd=i;
		lis1[i].onclick=function(){
			if(mingpinnum==this.dd){return;}
			mingpinas[this.dd].style.left=mingpinwidths+"px";
			lis1[mingpinnum].className="";
			lis1[this.dd].className="hot1";
			animate(mingpinas[mingpinnum],{left:-mingpinwidths});
			animate(mingpinas[this.dd],{left:0});
			mingpinnext=this.dd;
			mingpinnum=this.dd;
		}
	}
	var FLAG=true;
	mingpinbtnr.onclick=function(){
		if(FLAG){
			FLAG=false;
			MOVEL();
		}
	}
	mingpinbtnl.onclick=function(){
		if(FLAG){
			FLAG=false;
			MOVER();
		}
	}
	function MOVEL(){
		mingpinnext++;
		if(mingpinnext==mingpinas.length){
			mingpinnext=0;
		}
		mingpinas[mingpinnext].style.left=mingpinwidths+"px";
		lis1[mingpinnum].className="";
		lis1[mingpinnext].className="hot1";
		animate(mingpinas[mingpinnum],{left:-mingpinwidths},function(){FLAG=true});
		animate(mingpinas[mingpinnext],{left:0},function(){FLAG=true});
		mingpinnum=mingpinnext;
	}
	function MOVER(){
		mingpinnext--;
		if(mingpinnext<0){
			mingpinnext=mingpinas.length-1;
		}
		mingpinas[mingpinnext].style.left=-mingpinwidths+"px";
		lis1[mingpinnum].className="";
		lis1[mingpinnext].className="hot1";
		animate(mingpinas[mingpinnum],{left:mingpinwidths},function(){FLAG=true});
		animate(mingpinas[mingpinnext],{left:0},function(){FLAG=true});
		mingpinnum=mingpinnext;
	}
//6.名品左轮播
	var mingpin1=$(".mingpin-left-bot")[0];
	var mingleft=$(".mingleft",mingpin1);
	var mingbtnl=$(".ming-btnl",mingpin1)[0];
	var mingbtnr=$(".ming-btnr",mingpin1)[0];
	var mingwidths=parseInt(getStyle(mingleft[0],"width"));
	var mingnum=0;
	var mingnext=0;
	for(i=0;i<mingleft.length;i++){
		if(i==0){
			continue;
		}
		mingleft[i].style.left=mingwidths+"px";
	}
	var FLAG1=true;
	mingbtnr.onclick=function(){
		if(FLAG1){
			FLAG1=false;
			MOVEL1();
		}
	}
	mingbtnl.onclick=function(){
		if(FLAG1){
			FLAG1=false;
			MOVER1();
		}
	}
	function MOVEL1(){
		mingnext++;
		if(mingnext==mingleft.length){
			mingnext=0;
		}
		mingleft[mingnext].style.left=mingwidths+"px";
		animate(mingleft[mingnum],{left:-mingwidths},function(){FLAG1=true});
		animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
		mingnum=mingnext;
	}
	function MOVER1(){
		mingnext--;
		if(mingnext<0){
			mingnext=mingleft.length-1;
		}
		mingleft[mingnext].style.left=-mingwidths+"px";
		animate(mingleft[mingnum],{left:mingwidths},function(){FLAG1=true});
		animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
		mingnum=mingnext;
	}
//7.女装左轮播
	var nvzhuang=$(".nvzhuang-left-bot")[0];
	var nvzhuangleft=$(".nvzhuangleft",nvzhuang);
	var nvzhuangbtnl=$(".nvzhuang-btnl",nvzhuang)[0];
	var nvzhuangbtnr=$(".nvzhuang-btnr",nvzhuang)[0];
	var nvzhuangwidths=parseInt(getStyle(nvzhuangleft[0],"width"));
	var nvzhuangnum=0;
	var nvzhuangnext=0;
	for(i=0;i<nvzhuangleft.length;i++){
		if(i==0){
			continue;
		}
		nvzhuangleft[i].style.left=nvzhuangwidths+"px";
	}
	var FLAG2=true;
	nvzhuangbtnr.onclick=function(){
		if(FLAG2){
			FLAG2=false;
			MOVEL2();
		}
	}
	nvzhuangbtnl.onclick=function(){
		if(FLAG2){
			FLAG2=false;
			MOVER2();
		}
	}
	function MOVEL2(){
		nvzhuangnext++;
		if(nvzhuangnext==nvzhuangleft.length){
			nvzhuangnext=0;
		}
		nvzhuangleft[nvzhuangnext].style.left=nvzhuangwidths+"px";
		animate(nvzhuangleft[nvzhuangnum],{left:-nvzhuangwidths},function(){FLAG2=true});
		animate(nvzhuangleft[nvzhuangnext],{left:0},function(){FLAG2=true});
		nvzhuangnum=nvzhuangnext;
	}
	function MOVER2(){
		nvzhuangnext--;
		if(nvzhuangnext<0){
			nvzhuangnext=nvzhuangleft.length-1;
		}
		nvzhuangleft[nvzhuangnext].style.left=-nvzhuangwidths+"px";
		animate(nvzhuangleft[nvzhuangnum],{left:nvzhuangwidths},function(){FLAG2=true});
		animate(nvzhuangleft[nvzhuangnext],{left:0},function(){FLAG2=true});
		nvzhuangnum=nvzhuangnext;
	}
//8.男装左轮播
	var nanzhuang=$(".nanzhuang-left-bot")[0];
	var nanzhuangleft=$(".nanzhuangleft",nanzhuang);
	var nanzhuangbtnl=$(".nanzhuang-btnl",nanzhuang)[0];
	var nanzhuangbtnr=$(".nanzhuang-btnr",nanzhuang)[0];
	var nanzhuangwidths=parseInt(getStyle(nanzhuangleft[0],"width"));
	var nanzhuangnum=0;
	var nanzhuangnext=0;
	for(i=0;i<nanzhuangleft.length;i++){
		if(i==0){
			continue;
		}
		nanzhuangleft[i].style.left=nanzhuangwidths+"px";
	}
	var FLAG3=true;
	nanzhuangbtnr.onclick=function(){
		if(FLAG3){
			FLAG3=false;
			MOVEL3();
		}
	}
	nanzhuangbtnl.onclick=function(){
		if(FLAG3){
			FLAG3=false;
			MOVER3();
		}
	}
	function MOVEL3(){
		nanzhuangnext++;
		if(nanzhuangnext==nanzhuangleft.length){
			nanzhuangnext=0;
		}
		nanzhuangleft[nanzhuangnext].style.left=nanzhuangwidths+"px";
		animate(nanzhuangleft[nanzhuangnum],{left:-nanzhuangwidths},function(){FLAG3=true});
		animate(nanzhuangleft[nanzhuangnext],{left:0},function(){FLAG3=true});
		nanzhuangnum=nanzhuangnext;
	}
	function MOVER3(){
		nanzhuangnext--;
		if(nanzhuangnext<0){
			nanzhuangnext=nanzhuangleft.length-1;
		}
		nanzhuangleft[nanzhuangnext].style.left=-nanzhuangwidths+"px";
		animate(nanzhuangleft[nanzhuangnum],{left:nanzhuangwidths},function(){FLAG3=true});
		animate(nanzhuangleft[nanzhuangnext],{left:0},function(){FLAG3=true});
		nanzhuangnum=nanzhuangnext;
	}
//9.鞋左轮播
	var xie=$(".xie-left-bot")[0];
	var xieleft=$(".xieleft",xie);
	var xiebtnl=$(".xie-btnl",xie)[0];
	var xiebtnr=$(".xie-btnr",xie)[0];
	var xiewidths=parseInt(getStyle(xieleft[0],"width"));
	var xienum=0;
	var xienext=0;
	for(i=0;i<xieleft.length;i++){
		if(i==0){
			continue;
		}
		xieleft[i].style.left=xiewidths+"px";
	}
	var FLAG4=true;
	xiebtnr.onclick=function(){
		if(FLAG4){
			FLAG4=false;
			MOVEL4();
		}
	}
	xiebtnl.onclick=function(){
		if(FLAG4){
			FLAG4=false;
			MOVER4();
		}
	}
	function MOVEL4(){
		xienext++;
		if(xienext==xieleft.length){
			xienext=0;
		}
		xieleft[xienext].style.left=xiewidths+"px";
		animate(xieleft[xienum],{left:-xiewidths},function(){FLAG4=true});
		animate(xieleft[xienext],{left:0},function(){FLAG4=true});
		xienum=xienext;
	}
	function MOVER4(){
		xienext--;
		if(xienext<0){
			xienext=xieleft.length-1;
		}
		xieleft[xienext].style.left=-xiewidths+"px";
		animate(xieleft[xienum],{left:xiewidths},function(){FLAG4=true});
		animate(xieleft[xienext],{left:0},function(){FLAG4=true});
		xienum=xienext;
	}
//鞋中间轮播
	var xiezhong=$(".xie-middle")[0];
	var xiezhongas=$("a",xiezhong);
	var xielis1=$("li",$(".pointxie")[0]);
	var xiezhongbtnl=$(".xie-btnl1",xiezhong)[0];
	var xiezhongbtnr=$(".xie-btnr1",xiezhong)[0];
	var xiezhongwidths=parseInt(getStyle(xiezhongas[0],"width"));
	var xiezhongnum=0;
	var xiezhongnext=0;
	for(i=0;i<xiezhongas.length;i++){
		if(i==0){
			continue;
		}
		xiezhongas[i].style.left=xiezhongwidths+"px";
	}
	for(var i=0;i<xielis1.length;i++){
		xielis1[i].dd=i;
		xielis1[i].onclick=function(){
			if(xiezhongnum==this.dd){return;}
			xiezhongas[this.dd].style.left=xiezhongwidths+"px";
			xielis1[xiezhongnum].className="";
			xielis1[this.dd].className="hotxie";
			animate(xiezhongas[xiezhongnum],{left:-xiezhongwidths});
			animate(xiezhongas[this.dd],{left:0});
			xiezhongnext=this.dd;
			xiezhongnum=this.dd;
		}
	}
	var FLAG5=true;
	xiezhongbtnr.onclick=function(){
		if(FLAG5){
			FLAG5=false;
			MOVEL5();
		}
	}
	xiezhongbtnl.onclick=function(){
		if(FLAG5){
			FLAG5=false;
			MOVER5();
		}
	}
	function MOVEL5(){
		xiezhongnext++;
		if(xiezhongnext==xiezhongas.length){
			xiezhongnext=0;
		}
		xiezhongas[xiezhongnext].style.left=xiezhongwidths+"px";
		xielis1[xiezhongnum].className="";
		xielis1[xiezhongnext].className="hotxie";
		animate(xiezhongas[xiezhongnum],{left:-xiezhongwidths},function(){FLAG5=true});
		animate(xiezhongas[xiezhongnext],{left:0},function(){FLAG5=true});
		xiezhongnum=xiezhongnext;
	}
	function MOVER5(){
		xiezhongnext--;
		if(xiezhongnext<0){
			xiezhongnext=xiezhongas.length-1;
		}
		xiezhongas[xiezhongnext].style.left=-xiezhongwidths+"px";
		xielis1[xiezhongnum].className="";
		xielis1[xiezhongnext].className="hotxie";
		animate(xiezhongas[xiezhongnum],{left:xiezhongwidths},function(){FLAG5=true});
		animate(xiezhongas[xiezhongnext],{left:0},function(){FLAG5=true});
		xiezhongnum=xiezhongnext;
	}
//10.包左轮播
	var bao=$(".bao-left-bot")[0];
	var baoleft=$(".baoleft",bao);
	var baobtnl=$(".bao-btnl",bao)[0];
	var baobtnr=$(".bao-btnr",bao)[0];
	var baowidths=parseInt(getStyle(baoleft[0],"width"));
	var baonum=0;
	var baonext=0;
	for(i=0;i<baoleft.length;i++){
		if(i==0){
			continue;
		}
		baoleft[i].style.left=baowidths+"px";
	}
	var FLAG6=true;
	baobtnr.onclick=function(){
		if(FLAG6){
			FLAG6=false;
			MOVEL6();
		}
	}
	baobtnl.onclick=function(){
		if(FLAG6){
			FLAG6=false;
			MOVER6();
		}
	}
	function MOVEL6(){
		baonext++;
		if(baonext==baoleft.length){
			baonext=0;
		}
		baoleft[baonext].style.left=baowidths+"px";
		animate(baoleft[baonum],{left:-baowidths},function(){FLAG6=true});
		animate(baoleft[baonext],{left:0},function(){FLAG6=true});
		baonum=baonext;
	}
	function MOVER6(){
		baonext--;
		if(baonext<0){
			baonext=baoleft.length-1;
		}
		baoleft[baonext].style.left=-baowidths+"px";
		animate(baoleft[baonum],{left:baowidths},function(){FLAG6=true});
		animate(baoleft[baonext],{left:0},function(){FLAG6=true});
		baonum=baonext;
	}
//包中间轮播
	var baozhong=$(".bao-middle")[0];
	var baozhongas=$("a",baozhong);
	var baolis1=$("li",$(".pointbao")[0]);
	var baozhongbtnl=$(".bao-btnl1",baozhong)[0];
	var baozhongbtnr=$(".bao-btnr1",baozhong)[0];
	var baozhongwidths=parseInt(getStyle(baozhongas[0],"width"));
	var baozhongnum=0;
	var baozhongnext=0;
	for(i=0;i<baozhongas.length;i++){
		if(i==0){
			continue;
		}
		baozhongas[i].style.left=baozhongwidths+"px";
	}
	for(var i=0;i<baolis1.length;i++){
		baolis1[i].dd=i;
		baolis1[i].onclick=function(){//当前num，下一张this.dd
			if(baozhongnum==this.dd){return;}
			baozhongas[this.dd].style.left=baozhongwidths+"px";
			baolis1[baozhongnum].className="";//将清空此时的颜色类名
			baolis1[this.dd].className="hotbao";//下一个上色
			animate(baozhongas[baozhongnum],{left:-baozhongwidths});
			animate(baozhongas[this.dd],{left:0});
			baozhongnext=this.dd;
			baozhongnum=this.dd;
		}
	}
	var FLAG7=true;
	baozhongbtnr.onclick=function(){
		if(FLAG7){
			FLAG7=false;
			MOVEL7();
		}
	}
	baozhongbtnl.onclick=function(){
		if(FLAG7){
			FLAG7=false;
			MOVER7();
		}
	}
	function MOVEL7(){
		baozhongnext++;
		if(baozhongnext==baozhongas.length){
			baozhongnext=0;
		}
		baozhongas[baozhongnext].style.left=baozhongwidths+"px";
		baolis1[baozhongnum].className="";
		baolis1[baozhongnext].className="hotbao";
		animate(baozhongas[baozhongnum],{left:-baozhongwidths},function(){FLAG7=true});
		animate(baozhongas[baozhongnext],{left:0},function(){FLAG7=true});
		baozhongnum=baozhongnext;
	}
	function MOVER7(){
		baozhongnext--;
		if(baozhongnext<0){
			baozhongnext=baozhongas.length-1;
		}
		baozhongas[baozhongnext].style.left=-baozhongwidths+"px";
		baolis1[baozhongnum].className="";
		baolis1[baozhongnext].className="hotbao";
		animate(baozhongas[baozhongnum],{left:baozhongwidths},function(){FLAG7=true});
		animate(baozhongas[baozhongnext],{left:0},function(){FLAG7=true});
		baozhongnum=baozhongnext;
	}
//11.美容左轮播
	var meirong=$(".meirong-left-bot")[0];
	var meirongleft=$(".meirongleft",meirong);
	var meirongbtnl=$(".meirong-btnl",meirong)[0];
	var meirongbtnr=$(".meirong-btnr",meirong)[0];
	var meirongwidths=parseInt(getStyle(meirongleft[0],"width"));
	var meirongnum=0;
	var meirongnext=0;
	for(i=0;i<meirongleft.length;i++){
		if(i==0){
			continue;
		}
		meirongleft[i].style.left=meirongwidths+"px";
	}
	var FLAG8=true;
	meirongbtnr.onclick=function(){
		if(FLAG8){
			FLAG8=false;
			MOVEL8();
		}
	}
	meirongbtnl.onclick=function(){
		if(FLAG8){
			FLAG8=false;
			MOVER8();
		}
	}
	function MOVEL8(){
		meirongnext++;
		if(meirongnext==meirongleft.length){
			meirongnext=0;
		}
		meirongleft[meirongnext].style.left=meirongwidths+"px";
		animate(meirongleft[meirongnum],{left:-meirongwidths},function(){FLAG8=true});
		animate(meirongleft[meirongnext],{left:0},function(){FLAG8=true});
		meirongnum=meirongnext;
	}
	function MOVER8(){
		meirongnext--;
		if(meirongnext<0){
			meirongnext=meirongleft.length-1;
		}
		meirongleft[meirongnext].style.left=-meirongwidths+"px";
		animate(meirongleft[meirongnum],{left:meirongwidths},function(){FLAG8=true});
		animate(meirongleft[meirongnext],{left:0},function(){FLAG8=true});
		meirongnum=meirongnext;
	}
//美容中间轮播
	var meirongzhong=$(".meirong-middle")[0];
	var meirongzhongas=$("a",meirongzhong);
	var meironglis1=$("li",$(".pointmeirong")[0]);
	var meirongzhongbtnl=$(".meirong-btnl1",meirongzhong)[0];
	var meirongzhongbtnr=$(".meirong-btnr1",meirongzhong)[0];
	var meirongzhongwidths=parseInt(getStyle(meirongzhongas[0],"width"));
	var meirongzhongnum=0;
	var meirongzhongnext=0;
	for(i=0;i<meirongzhongas.length;i++){
		if(i==0){
			continue;
		}
		meirongzhongas[i].style.left=meirongzhongwidths+"px";
	}
	for(var i=0;i<meironglis1.length;i++){
		meironglis1[i].dd=i;
		meironglis1[i].onclick=function(){
			if(meirongzhongnum==this.dd){return;}
			meirongzhongas[this.dd].style.left=meirongzhongwidths+"px";
			meironglis1[meirongzhongnum].className="";
			meironglis1[this.dd].className="hotmeirong";
			animate(meirongzhongas[meirongzhongnum],{left:-meirongzhongwidths});
			animate(meirongzhongas[this.dd],{left:0});
			meirongzhongnext=this.dd;
			meirongzhongnum=this.dd;
		}
	}
	var FLAG9=true;
	meirongzhongbtnr.onclick=function(){
		if(FLAG9){
			FLAG9=false;
			MOVEL9();
		}
	}
	meirongzhongbtnl.onclick=function(){
		if(FLAG9){
			FLAG9=false;
			MOVER9();
		}
	}
	function MOVEL9(){
		meirongzhongnext++;
		if(meirongzhongnext==meirongzhongas.length){
			meirongzhongnext=0;
		}
		meirongzhongas[meirongzhongnext].style.left=meirongzhongwidths+"px";
		meironglis1[meirongzhongnum].className="";
		meironglis1[meirongzhongnext].className="hotmeirong";
		animate(meirongzhongas[meirongzhongnum],{left:-meirongzhongwidths},function(){FLAG9=true});
		animate(meirongzhongas[meirongzhongnext],{left:0},function(){FLAG9=true});
		meirongzhongnum=meirongzhongnext;
	}
	function MOVER9(){
		meirongzhongnext--;
		if(meirongzhongnext<0){
			meirongzhongnext=meirongzhongas.length-1;
		}
		meirongzhongas[meirongzhongnext].style.left=-meirongzhongwidths+"px";
		meironglis1[meirongzhongnum].className="";
		meironglis1[meirongzhongnext].className="hotmeirong";
		animate(meirongzhongas[meirongzhongnum],{left:meirongzhongwidths},function(){FLAG9=true});
		animate(meirongzhongas[meirongzhongnext],{left:0},function(){FLAG9=true});
		meirongzhongnum=meirongzhongnext;
	}
//11.运动左轮播
	var yundong=$(".yundong-left-bot")[0];
	var yundongleft=$(".yundongleft",yundong);
	var yundongbtnl=$(".yundong-btnl",yundong)[0];
	var yundongbtnr=$(".yundong-btnr",yundong)[0];
	var yundongwidths=parseInt(getStyle(yundongleft[0],"width"));
	var yundongnum=0;
	var yundongnext=0;
	for(i=0;i<yundongleft.length;i++){
		if(i==0){
			continue;
		}
		yundongleft[i].style.left=yundongwidths+"px";
	}
	var FLAG10=true;
	yundongbtnr.onclick=function(){
		if(FLAG10){
			FLAG10=false;
			MOVEL10();
		}
	}
	yundongbtnl.onclick=function(){
		if(FLAG10){
			FLAG10=false;
			MOVER10();
		}
	}
	function MOVEL10(){
		yundongnext++;
		if(yundongnext==yundongleft.length){
			yundongnext=0;
		}
		yundongleft[yundongnext].style.left=yundongwidths+"px";
		animate(yundongleft[yundongnum],{left:-yundongwidths},function(){FLAG10=true});
		animate(yundongleft[yundongnext],{left:0},function(){FLAG10=true});
		yundongnum=yundongnext;
	}
	function MOVER10(){
		yundongnext--;
		if(yundongnext<0){
			yundongnext=yundongleft.length-1;
		}
		yundongleft[yundongnext].style.left=-yundongwidths+"px";
		animate(yundongleft[yundongnum],{left:yundongwidths},function(){FLAG10=true});
		animate(yundongleft[yundongnext],{left:0},function(){FLAG10=true});
		yundongnum=yundongnext;
	}
//运动中间轮播
	var yundongzhong=$(".yundong-middle")[0];
	var yundongzhongas=$("a",yundongzhong);
	var yundonglis1=$("li",$(".pointyundong")[0]);
	var yundongzhongbtnl=$(".yundong-btnl1",yundongzhong)[0];
	var yundongzhongbtnr=$(".yundong-btnr1",yundongzhong)[0];
	var yundongzhongwidths=parseInt(getStyle(yundongzhongas[0],"width"));
	var yundongzhongnum=0;
	var yundongzhongnext=0;
	for(i=0;i<yundongzhongas.length;i++){
		if(i==0){
			continue;
		}
		yundongzhongas[i].style.left=yundongzhongwidths+"px";
	}
	for(var i=0;i<yundonglis1.length;i++){
		yundonglis1[i].dd=i;
		yundonglis1[i].onclick=function(){//当前num，下一张this.dd
			if(yundongzhongnum==this.dd){return;}
			yundongzhongas[this.dd].style.left=yundongzhongwidths+"px";
			yundonglis1[yundongzhongnum].className="";//将清空此时的颜色类名
			yundonglis1[this.dd].className="hotyundong";//下一个上色
			animate(yundongzhongas[yundongzhongnum],{left:-yundongzhongwidths});
			animate(yundongzhongas[this.dd],{left:0});
			yundongzhongnext=this.dd;
			yundongzhongnum=this.dd;
		}
	}
	var FLAG11=true;
	yundongzhongbtnr.onclick=function(){
		if(FLAG11){
			FLAG11=false;
			MOVEL11();
		}
	}
	yundongzhongbtnl.onclick=function(){
		if(FLAG11){
			FLAG11=false;
			MOVER11();
		}
	}
	function MOVEL11(){
		yundongzhongnext++;
		if(yundongzhongnext==yundongzhongas.length){
			yundongzhongnext=0;
		}
		yundongzhongas[yundongzhongnext].style.left=yundongzhongwidths+"px";
		yundonglis1[yundongzhongnum].className="";
		yundonglis1[yundongzhongnext].className="hotyundong";
		animate(yundongzhongas[yundongzhongnum],{left:-yundongzhongwidths},function(){FLAG11=true});
		animate(yundongzhongas[yundongzhongnext],{left:0},function(){FLAG11=true});
		yundongzhongnum=yundongzhongnext;
	}
	function MOVER11(){
		yundongzhongnext--;
		if(yundongzhongnext<0){
			yundongzhongnext=yundongzhongas.length-1;
		}
		yundongzhongas[yundongzhongnext].style.left=-yundongzhongwidths+"px";
		yundonglis1[yundongzhongnum].className="";
		yundonglis1[yundongzhongnext].className="hotyundong";
		animate(yundongzhongas[yundongzhongnum],{left:yundongzhongwidths},function(){FLAG11=true});
		animate(yundongzhongas[yundongzhongnext],{left:0},function(){FLAG11=true});
		yundongzhongnum=yundongzhongnext;
	}

//12.内衣左轮播
	var neiyi=$(".neiyi-left-bot")[0];
	var neiyileft=$(".neiyileft",neiyi);
	var neiyibtnl=$(".neiyi-btnl",neiyi)[0];
	var neiyibtnr=$(".neiyi-btnr",neiyi)[0];
	var neiyiwidths=parseInt(getStyle(neiyileft[0],"width"));
	var neiyinum=0;
	var neiyinext=0;
	for(i=0;i<neiyileft.length;i++){
		if(i==0){
			continue;
		}
		neiyileft[i].style.left=neiyiwidths+"px";
	}
	var FLAG12=true;
	neiyibtnr.onclick=function(){
		if(FLAG12){
			FLAG12=false;
			MOVEL12();
		}
	}
	neiyibtnl.onclick=function(){
		if(FLAG12){
			FLAG12=false;
			MOVER12();
		}
	}
	function MOVEL12(){
		neiyinext++;
		if(neiyinext==neiyileft.length){
			neiyinext=0;
		}
		neiyileft[neiyinext].style.left=neiyiwidths+"px";
		animate(neiyileft[neiyinum],{left:-neiyiwidths},function(){FLAG12=true});
		animate(neiyileft[neiyinext],{left:0},function(){FLAG12=true});
		neiyinum=neiyinext;
	}
	function MOVER12(){
		neiyinext--;
		if(neiyinext<0){
			neiyinext=neiyileft.length-1;
		}
		neiyileft[neiyinext].style.left=-neiyiwidths+"px";
		animate(neiyileft[neiyinum],{left:neiyiwidths},function(){FLAG12=true});
		animate(neiyileft[neiyinext],{left:0},function(){FLAG12=true});
		neiyinum=neiyinext;
	}
//内衣中间轮播
	var neiyizhong=$(".neiyi-middle")[0];
	var neiyizhongas=$("a",neiyizhong);
	var neiyilis1=$("li",$(".pointneiyi")[0]);
	var neiyizhongbtnl=$(".neiyi-btnl1",neiyizhong)[0];
	var neiyizhongbtnr=$(".neiyi-btnr1",neiyizhong)[0];
	var neiyizhongwidths=parseInt(getStyle(neiyizhongas[0],"width"));
	var neiyizhongnum=0;
	var neiyizhongnext=0;
	for(i=0;i<neiyizhongas.length;i++){
		if(i==0){
			continue;
		}
		neiyizhongas[i].style.left=neiyizhongwidths+"px";
	}
	for(var i=0;i<neiyilis1.length;i++){
		neiyilis1[i].dd=i;
		neiyilis1[i].onclick=function(){
			if(neiyizhongnum==this.dd){return;}
			neiyizhongas[this.dd].style.left=neiyizhongwidths+"px";
			neiyilis1[neiyizhongnum].className="";
			neiyilis1[this.dd].className="hotneiyi";
			animate(neiyizhongas[neiyizhongnum],{left:-neiyizhongwidths});
			animate(neiyizhongas[this.dd],{left:0});
			neiyizhongnext=this.dd;
			neiyizhongnum=this.dd;
		}
	}
	var FLAG13=true;
	neiyizhongbtnr.onclick=function(){
		if(FLAG13){
			FLAG13=false;
			MOVEL13();
		}
	}
	neiyizhongbtnl.onclick=function(){
		if(FLAG13){
			FLAG13=false;
			MOVER13();
		}
	}
	function MOVEL13(){
		neiyizhongnext++;
		if(neiyizhongnext==neiyizhongas.length){
			neiyizhongnext=0;
		}
		neiyizhongas[neiyizhongnext].style.left=neiyizhongwidths+"px";
		neiyilis1[neiyizhongnum].className="";
		neiyilis1[neiyizhongnext].className="hotneiyi";
		animate(neiyizhongas[neiyizhongnum],{left:-neiyizhongwidths},function(){FLAG13=true});
		animate(neiyizhongas[neiyizhongnext],{left:0},function(){FLAG13=true});
		neiyizhongnum=neiyizhongnext;
	}
	function MOVER13(){
		neiyizhongnext--;
		if(neiyizhongnext<0){
			neiyizhongnext=neiyizhongas.length-1;
		}
		neiyizhongas[neiyizhongnext].style.left=-neiyizhongwidths+"px";
		neiyilis1[neiyizhongnum].className="";
		neiyilis1[neiyizhongnext].className="hotneiyi";
		animate(neiyizhongas[neiyizhongnum],{left:neiyizhongwidths},function(){FLAG13=true});
		animate(neiyizhongas[neiyizhongnext],{left:0},function(){FLAG13=true});
		neiyizhongnum=neiyizhongnext;
	}
//13.婴童左轮播
	var ying=$(".ying-left-bot")[0];
	var yingleft=$(".yingleft",ying);
	var yingbtnl=$(".ying-btnl",ying)[0];
	var yingbtnr=$(".ying-btnr",ying)[0];
	var yingwidths=parseInt(getStyle(yingleft[0],"width"));
	var yingnum=0;
	var yingnext=0;
	for(i=0;i<yingleft.length;i++){
		if(i==0){
			continue;
		}
		yingleft[i].style.left=yingwidths+"px";
	}
	var FLAG14=true;
	yingbtnr.onclick=function(){
		if(FLAG14){
			FLAG14=false;
			MOVEL14();
		}
	}
	yingbtnl.onclick=function(){
		if(FLAG14){
			FLAG14=false;
			MOVER14();
		}
	}
	function MOVEL14(){
		yingnext++;
		if(yingnext==yingleft.length){
			yingnext=0;
		}
		yingleft[yingnext].style.left=yingwidths+"px";
		animate(yingleft[yingnum],{left:-yingwidths},function(){FLAG14=true});
		animate(yingleft[yingnext],{left:0},function(){FLAG14=true});
		yingnum=yingnext;
	}
	function MOVER14(){
		yingnext--;
		if(yingnext<0){
			yingnext=yingleft.length-1;
		}
		yingleft[yingnext].style.left=-yingwidths+"px";
		animate(yingleft[yingnum],{left:yingwidths},function(){FLAG14=true});
		animate(yingleft[yingnext],{left:0},function(){FLAG14=true});
		yingnum=yingnext;
	}
//14.按需加载和楼层跳转
	var floor=$(".floor");
	var ARR=[];
	for(var I=0;I<floor.length;I++){
		ARR.push(floor[I].offsetTop);
	}
	var HEIGHTS=document.documentElement.clientHeight;


	var fflag=true;
	var LIS=$("li",$(".jump")[0]);
	for(var I=0;I<LIS.length;I++){
		LIS[I].ff=I;
		LIS[I].onclick=function(){
		fflag=false;
		for(var j=0;j<LIS.length;j++){
			LIS[j].style.background="#ccc";
		}
		LIS[this.ff].style.background="red";
		animate(document.body,{scrollTop:ARR[this.ff]},function(){fflag=true;});
		animate(document.documentElement,{scrollTop:ARR[this.ff]},function(){fflag=true;});

		}
	}


	var sflag=true;
	window.onscroll=function(){
	var OBJ=document.body.scrollTop?document.body:document.documentElement;
	var scrolltop=OBJ.scrollTop;
	for(var i=0;i<floor.length;i++){
		if(scrolltop+HEIGHTS>=ARR[i]+100){
			var imgs=$("img",floor[i]);
			for(var j=0;j<imgs.length;j++){
				imgs[j].src=imgs[j].getAttribute("imgpath");
			}
		}
	}


//顶部搜索框
	var jump=$(".jump")[0];
	if(scrolltop>=ARR[0]){
		if(sflag){
		sflag=false;
		animate(jump,{right:22});
		}
	}else{
		if(!sflag){
		sflag=true;
		animate(jump,{right:-72});
		}
	}



	//按钮
	if(!fflag){
		return;
	}
	for (var i = 0; i < floor.length; i++) {
		if (scrolltop+HEIGHTS>=ARR[i]+200) {
			for(var j=0;j<LIS.length;j++){
			LIS[j].style.background="#ccc";
			}
			LIS[i].style.background="red";
		}
	 }
   }
//15.线
var xian=$(".xian");
	for(var i=0;i<xian.length;i++){
		wx(xian[i]);
	}
	function wx(obj){
	var widths=obj.offsetWidth;
	var heights=obj.offsetHeight;

	var lefts=$((".left"),obj)[0];
	var rights=$(".right",obj)[0];
	var tops=$(".top",obj)[0];
	var bottoms=$(".bottom",obj)[0];

	obj.onmouseover=function(){
		animate(lefts,{height:heights});
		animate(rights,{height:heights});
		animate(tops,{width:widths});
		animate(bottoms,{width:widths});
	  }
	obj.onmouseout=function(){
		animate(lefts,{height:0});
		animate(rights,{height:0});
		animate(tops,{width:0});
		animate(bottoms,{width:0});
	  }
    }




















}















