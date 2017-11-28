 function test(){
     var url=new Array();
     url[0]="1.html";
	 url[1]="2.html";
	 url[2]="3.html";
	 url[3]="4.html";
	 url[4]="5.html";
	 url[5]="6.html";
	 url[6]="7.html";
	 url[7]="8.html";
	 url[8]="9.html";
	 url[9]="10.html";
	 url[10]="11.html";
	 url[11]="12.html";
	 url[12]="13.html";
	 url[13]="14.html";
	 url[14]="15.html";
	 url[15]="16.html";
	 url[16]="17.html";
	 url[17]="18.html";
	 url[18]="19.html";
	 url[19]="20.html";

	
	 
   
     var ints=parseInt(Math.random()*(url.length));
    //本窗口打开     
	document.form1.action=url[ints];

    }// JavaScript Document