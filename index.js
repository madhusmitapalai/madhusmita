
jQuery(document).ready(function ($) {
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });
});
/////get the button
mybutton = document.getElementById('myBtn')
///when the user scroll down 20px  from the top of the document,show the button

////window
window.onscroll = function () { scrollfunction() }
//function
function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    }
    else {
        mybutton.style.display = "none";
    }
}
function Topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}