
function color1(){
    var colo=document.getElementsByClassName("tlb");
    var c1='#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.getElementById("res").style.boxShadow = "0px 0px 12px 8px "+c1+"";
    document.getElementById("cal-title").style.textShadow="1px 2px 2px "+c1+"";
    for(var i=0;i<colo.length;i++){
        colo[i].style.backgroundColor=c1;
        colo[i].style.color="white";
    }
}
function click1(v){
    var x=document.getElementById("res").value;
    if(v=='c'){
        document.getElementById("res").value="";
    }
    else{   
        document.getElementById("res").value=x+v;
    }
}
function solve(){
        var sol=[];
        var x=document.getElementById("res").value;
        var i=0;
        while(i<x.length){
            var num="";
            while(i<x.length && (!isNaN(x.charAt(i)) || x.charAt(i)==='.')){
            num+=x.charAt(i++);
            }
            if(num===""){
                sol.push(x.charAt(i++));
            }
            else{
                sol.push((+num));
            }
        }
        i=0;
        while(i<sol.length){
            if(sol[i]=='*'){
            sol.splice(i,1);
                var x1=sol[i];
                sol.splice(i,1);
            sol[i-1]*=x1;
            }
            else if(sol[i]=='/'){
            sol.splice(i,1);
                var x1=sol[i];
                sol.splice(i,1);
            sol[i-1]/=x1;
            }
            else{
                i++;
            }
        }
        i=0;
        while(i<sol.length){
            if(sol[i]=='+'){
            sol.splice(i,1);
            if(i!=0){
                var x1=sol[i];
                sol.splice(i,1);
                sol[i-1]+=x1;
            }
            }
            else if(sol[i]=='-'){
            sol.splice(i,1);
            if(i!=0){
                var x1=sol[i];
                sol.splice(i,1);
                sol[i-1]-=x1;
            }
            else
                sol[i]*=-1;
            }
            else{
                i++;
            }
        }  
        document.getElementById("res").value=sol[0];
}
