
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

var mulberrytab_div = document.querySelector(".mul");                       //getting all the division tags
var raspberrytab_div = document.querySelector(".rasp");
var gogoberrytab_div = document.querySelector(".gogo");
var mulinfotab = document.querySelector(".mulinfo");
var raspinfotab = document.querySelector(".raspinfo"); 
var gogoinfotab = document.querySelector(".gogoinfo");

mulberrytab_div.addEventListener('click',togglemulinfo);                   //adding click events to perform functions
raspberrytab_div.addEventListener('click',toggleraspinfo);
gogoberrytab_div.addEventListener('click',togglegogoinfo);
var togglemulstatus = 1;
var toggleraspstatus = 1;
var togglegogostatus = 1;

/*okay so how does this work 
    well i created 3 toggle buttons to display each tab of information each initially set to 1 that is no tab is showing 
    when we click on a tab the toggle is change to 0 i.e the tab is being shown but if other tabs are already shown it 
    will changes its toggle to 1 and remove the element(hide it). 
    if you want to know mkre about how this works please contact me.
*/



function togglemulinfo(){

    if(togglemulstatus == 1)
    {
        raspinfotab.classList.remove('show');
        toggleraspstatus =1;
        gogoinfotab.classList.remove('show');
        togglegogostatus = 1;

        mulinfotab.classList.add('show');
        togglemulstatus = 0;
    
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
    togglemulstatus = 1;    
    gogoinfotab.classList.remove('show');
    togglegogostatus = 1;
    
    raspinfotab.classList.add('show');
    toggleraspstatus = 0;

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