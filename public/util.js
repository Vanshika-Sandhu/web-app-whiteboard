function createSticky(elem){
    //<img src ="">
    //or
    // <textarea id = "sticky-text"></textarea>
    let sticky = document.createElement("div");
    sticky.classList.add("sticky");
    //<<div class="sticky"></div>

    let stickyNav = document.createElement("div");
    stickyNav.classList.add("sticky-nav");
    //<div class="sticky-nav">

    let minimize = document.createElement("div");
    minimize.classList.add("minimize");
    //<div class="minimize"></div>

    let close = document.createElement("div");
    close.classList.add("close");
    //<div class="close"></div>

    let stickyContent = document.createElement("div");
    stickyContent.classList.add("sticky-content");
    //<div class="sticky-content"></div>

    stickyContent.append(elem);

    stickyNav.append(minimize);
    stickyNav.append(close);
    //<div class="sticky-nav">
    //<div class="minimize"></div>
    //<div class="close"></div>
    //</div>

    sticky.append(stickyNav);
/*
    <div class="sticky">
        <div class="sticky-nav">
            <div class="minimize"></div>
            <div class="close"></div>
        </div>
    </div>
*/
    sticky.append(stickyContent);
/*
    <div class="sticky">
        <div class="sticky-content">
            <textarea id="sticky-text"></textarea>
        </div>
    </div>
*/

    document.body.append(sticky);
/*
    <div class="sticky">
        <div class="sticky-nav">
             <div class="minimize"></div>
            <div class="close"></div>
        </div>
        <div class="sticky-content">
            <textarea id="sticky-text"></textarea>
        </div>
    </div>
*/



    close.addEventListener("click" , function(){
        sticky.remove();
    })

    minimize.addEventListener("click" , function(){
        stickyContent.style.display = stickyContent.style.display == "none" ? "block" : "none";
    })


    let isStickyHold = false ;
    let initialX ;
    let initialY ; 
    stickyNav.addEventListener("mousedown" , function(e){
        isStickyHold = true ;
        let x = e.clientX ;
        let y = e.clientY ;

        initialX = x ;
        initialY = y ;
    })
    stickyNav.addEventListener("mousemove" , function(e){
        if(isStickyHold){
            let x = e.clientX ;
            let y = e.clientY ;
    
            let finalX = x ;
            let finalY = y ;

            let dx = finalX - initialX ;
            let dy = finalY - initialY ;

            let  { top , left } = sticky.getBoundingClientRect();
            
            sticky.style.top = top + dy + "px" ;            sticky.style.top = top + dy + "px" ;
            sticky.style.left = left + dx + "px" ;

            initialX = finalX ;
            initialY = finalY ;
        }
    })
    stickyNav.addEventListener("mouseup" , function(e){
        isStickyHold = false ;
    })
}