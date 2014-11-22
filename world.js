window.onload = function(){
    lookup();
    //var button=document.getElementById("lookup"); 
    // button.onclick=lookup;
}

var lookup = function()
{//world.php?all=true&format=xml
           
           $("lookup").observe("click", function(){
                var search=$("term").getValue();
                new Ajax.Request("world.php",
                        {
                          method: "get",
                          parameters: { lookup:search },
                          onSuccess: function(ajax){
                              document.getElementById("result").innerHTML=ajax.responseText;
                           
                          },
                        }
                     );
            });
}
