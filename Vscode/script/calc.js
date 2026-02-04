function calculate(){
            var a=document.getElementById("n1").value;
            if(a=="")
            {
                alert("no1 is blank")
            document.getElementById("n1").style.border="solid red 2pt";
            }
            else if(isNaN(a))
            {
            alert("Please enter valid number")
            document.getElementById("n1").style.border="solid red 2pt";
            }
            else
            {
                alert("first number is: "+parseFloat(a).toFixed(2))
                document.getElementById("n1").style.border="solid blue 2pt";

            }
            var b=document.getElementById("n2").value;
            if(b=="")
            {
                alert("no2 is blank")
            document.getElementById("n2").style.border="solid red 2pt";
            }
            else if(isNaN(b))
            {
            alert("Please enter valid number")
            document.getElementById("n2").style.border="solid red 2pt";
            }
            else
            {
               alert("second number is: "+parseFloat(b).toFixed(2))
                document.getElementById("n2").style.border="solid blue 2pt";

            }
            
            var result=parseFloat(a)+parseFloat(b);
            alert("sum is: "+result.toFixed(2))
        }