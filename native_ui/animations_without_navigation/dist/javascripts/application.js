var animation = new steroids.Animation( {
 transition: "curlUp",
 duration: 0.8,
 curve: "easeIn"
} );

var times = 0;

function animationSuccess() {
 times++;
 document.getElementById("status").textContent = "Animation performed " + times + " times!";
}

function performAnimation() {

 animation.perform(
   {}, 
   { onSuccess: animationSuccess }
 );

}
