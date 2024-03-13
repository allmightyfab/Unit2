async function running(){
    var runner1=false;
    var runner2=false;
    var loser="";

    var runner1Go=new Promise(function(resolve, reject) {
        setTimeout(function (){ resolve (runner1=true);}, 5000);
        loser="runner1";
        });
    var runner2Go=new Promise((resolve, reject) => {
        setTimeout(function(){resolve(runner2=true);}, 5000);
        loser="runner2";
    })

    var results=await Promise.all([runner1Go, runner2Go]);
    return [results[0], results[1], loser];




    }

running().then(function(result) {
    console.log("Loser:", result[2]);
});