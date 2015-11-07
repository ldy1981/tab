// JavaScript Document
window.onload=function(){
	var aInp=document.getElementsByTagName('input');	
	var oTab=document.getElementById('tab1');
	var aDiv=oTab.getElementsByTagName('div');
	for(var i=0;i<aInp.length; i++){
		aInp[i].onclick=function(){			
			for(var i=0;i<aInp.length; i++){
				aInp[i].index=i;
				aInp[i].className='';
				aDiv[i].style.display='none';
			}
			this.className='active';
			aDiv[this.index].style.display='block';
		}
	}
};