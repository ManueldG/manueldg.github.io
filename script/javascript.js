
// Custom effects with .animate()
$( "#testo" ).animate(
    {
        left: "+=50",
        opacity: 0.25
    },
 
    // Duration
    300,
 
    // Callback to invoke when the animation is finished
    function() {
        console.log( "done!" );
    }
).animate({
    
    opacity: 1
},

// Duration
300,

// Callback to invoke when the animation is finished
function() {
    console.log( "done!" );
}
);

