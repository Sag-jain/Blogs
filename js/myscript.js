$(window).load(function() {
  $("span").removeClass("preload");
});
$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

window.onscroll = function() {scrollFunction();navfunction();paraanimate();};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function navfunction()
{
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
    document.getElementById("mynav").style.display="block";
    }
    else {
        document.getElementById("mynav").style.display = "none";
    }
}

