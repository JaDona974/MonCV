$(function(){
    
    var c1=$("#card1"),c2=$("#card2"),c3=$("#card3");    
    var activeCard = c2;
    var onAnimation = false;
    var delay = 100 //milliseconds
    var smallScreen;
    
    update();
    
    function update(){
        
//        console.log("Max width : " + window.screen.availWidth);
//        console.log("SmallScreen : " + smallScreen);

        if(window.window.innerWidth < 768)
        {
            
            smallScreen = true;
        }
        else
        {
            smallScreen = false;
        }
        if(smallScreen)
        {

        }
        
        setTimeout(update, delay);
    }
    
    /* ETUDES : ON CLICK EVENT */
    $(".cardContainer .card").on("click", function(){
//        console.log(onAnimation);
        if(!onAnimation)
        {
            var c = $(this);
//            console.log(c);

            if(!c.hasClass("cardActive"))
            {            
                onAnimation = true;
                if(!smallScreen)
                {
                    activeCard.animate({
                        width: "20%",
                        height: "200px"
                    },200);
                    c.animate({
                        width: "50%",
                        height: "300px",
                        marginRight: "10px",
                        marginLeft: "10px",    
                        backgroundColor: "#ddd"
                    },500,function(){
                        c.addClass("cardActive").removeClass("studyCard");
                        onAnimation = false
                    });
                }
                else
                {
                    activeCard.animate({
//                        width: "90%",
                        height: "70px"
                    },200);
                    c.animate({
//                        width: "90%",
                        height: "300px",
                        marginRight: "10px",
                        marginLeft: "10px",    
                        backgroundColor: "#ddd"
                    },500,function(){
                        c.addClass("cardActive").removeClass("studyCard");
                        onAnimation = false
                    });
                }

                activeCard.removeClass("cardActive").addClass("studyCard");
    //            activeCard.eq(2).hide();
                activeCard = c;
            }
            
        }
    })

    /* EXPERIENCES */
    $("#imgContainer1, #imgContainer2").hover(function(){
        console.log("enter");
        
    }, function(){
        console.log("leave");
    })
    
})

/*
    var c1=$("#card1"),c2=$("#card2"),c3=$("#card3");    
    var activeCard = c2;
      
    $(".cardContainer .card").on("click", function(){
  
        var c = $(this);
        console.log(c);
        
        if(!c.hasClass("cardActive"))
        {            
            c.addClass("cardActive").removeClass("studyCard");
            activeCard.removeClass("cardActive").addClass("studyCard");
            activeCard.eq(2).hide();
            activeCard = c;
        }
    })
*/