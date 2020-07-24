var colors= ['#7FFFD4','#DEB887','#DB7093','#20B2AA','#8FBC8F'];
var index= 0;

function change()
{
    if(index< colors.length)
    {
        document.body.style.backgroundColor= colors[index++];
    }
}
setInterval(change, 3000);
