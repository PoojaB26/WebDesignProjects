/**
 * Created by pblead26 on 30-Dec-16.
 */
function convert(degree){
    var x;
    if (degree=="C"){
        x = document.getElementById("c").value * 9/5 +32;
        document.getElementById("f").value = Math.round(x);

    }
    else if(degree=="F")
    {
        x =( document.getElementById("f").value -32) *5/9;
        document.getElementById("c").value = Math.round(x);
    }
}
