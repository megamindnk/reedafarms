
var div_img = document.getElementById("strawberry_slider");
var img_src = ["images/str0.jpg","images/str1.jpg","images/str2.jpg","images/str4.jpg","images/str5.jpg","images/str6.jpg","images/str7.jpg","images/str8.jpg","images/str9.jpg","images/str10.jpg","images/str11.jpg",];
var i=0;    
div_img.src = img_src[0];
    setTimeout(
        function slider(){
                //console.log(i);
                div_img.src = img_src[i++];
                if(i == 11)
                i=0;
                setTimeout(slider,1500)
            } ,0);

var mulberrytab_div = document.querySelector(".mul");
var raspberrytab_div = document.querySelector(".rasp");
var gogoberrytab_div = document.querySelector(".gogo");
var mulinfotab = document.querySelector(".mulinfo");
var raspinfotab = document.querySelector(".raspinfo"); 
var gogoinfotab = document.querySelector(".gogoinfo");

mulberrytab_div.addEventListener('click',togglemulinfo);
raspberrytab_div.addEventListener('click',toggleraspinfo);
gogoberrytab_div.addEventListener('click',togglegogoinfo);
var togglemulstatus = 1;
var toggleraspstatus = 1;
var togglegogostatus = 1;

function togglemulinfo(){

    if(togglemulstatus == 1)
    {
        raspinfotab.classList.remove('show');
    mulinfotab.classList.add('show');
    togglemulstatus = 0;
    toggleraspstatus =1;
    gogoinfotab.classList.remove('show');
    togglegogostatus = 1;
    }
    else
    {
        mulinfotab.classList.remove('show');
        togglemulstatus=1;
    }
}
function toggleraspinfo(){

    if(toggleraspstatus == 1)
    {
        mulinfotab.classList.remove('show');    
    raspinfotab.classList.add('show');
    togglemulstatus = 1;    
    toggleraspstatus = 0;
    gogoinfotab.classList.remove('show');
    togglegogostatus = 1;
    }
    else
    {
        raspinfotab.classList.remove('show');
        toggleraspstatus = 1;
    }
}
function togglegogoinfo(){

    if(togglegogostatus == 1)
    {
        mulinfotab.classList.remove('show');    
    raspinfotab.classList.remove('show');
    togglemulstatus = 1;    
    toggleraspstatus = 1;

    gogoinfotab.classList.add('show');
    togglegogostatus = 0;
    }
    else
    {
        gogoinfotab.classList.remove('show');
        togglegogostatus = 1;
    }
}