var hoursElement = document.getElementById("Hours");


setInterval(
    function Update(){
        var cuurentTime = new Date();
        cuurentTime = document.getElementById("Hours")
        console.log(cuurentTime.getSeconds());
        hoursElement.innerHTML = seconds;
    },
    1000
)

Update()