 
var div_img = document.getElementById("strawberry_slider");
var img_src = ["../images/strawberries/str0.jpg","../images/strawberries/str1.jpg","../images/strawberries/str2.jpg","../images/strawberries/str4.jpg","../images/strawberries/str5.jpg","../images/strawberries/str6.jpg","../images/strawberries/str7.jpg","../images/strawberries/str8.jpg","../images/strawberries/str9.jpg","../images/strawberries/str10.jpg","../images/strawberries/str11.jpg",];
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
var mulinfotab = document.querySelector(".mulinfo");
var raspinfotab = document.querySelector(".raspinfo"); 
mulberrytab_div.addEventListener('click',togglemulinfo);
raspberrytab_div.addEventListener('click',toggleraspinfo);

var togglestatus = 1;
var toggleraspstatus = 1;

function togglemulinfo(){

    if(togglestatus == 1)
    {
        raspinfotab.classList.remove('show');
    mulinfotab.classList.add('show');
    togglestatus = 0;
    toggleraspstatus =1;
    }
    else
    {
        mulinfotab.classList.remove('show');
        togglestatus=1;
    }
}
function toggleraspinfo(){

    if(toggleraspstatus == 1)
    {
        mulinfotab.classList.remove('show');    
    raspinfotab.classList.add('show');
    togglestatus = 1;    
    toggleraspstatus = 0;
    }
    else
    {
        raspinfotab.classList.remove('show');
        toggleraspstatus = 1;
    }
}
