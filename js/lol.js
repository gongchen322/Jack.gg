var sumName = "";
var APIKEY = "";
var sID="";
var last;
function summonerLookUp() {   
    sumName = $("#summonerName").val();
    APIKEY = $("#APIKey").val();

    
    if (sumName !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + sumName + '?api_key=' + APIKEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var sumNamenospace = sumName.replace(" ", "");

                sumNamenospace = sumNamenospace.toLowerCase().trim();

                summonerLevel = json[sumNamenospace].summonerLevel;
                summonerID = json[sumNamenospace].id;
                
                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;

                // NEW FUNCTION!
                //letsGetMasteries(summonerID);
                gameLookUp(summonerID); 

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data 1!");
            }
        });
        
    } else {}
    
}

function letsGetMasteries(summonerID) {
    $.ajax({
        url: "https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + summonerID + "/masteries?api_key=" + APIKEY,
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (resp) {
            numberOfPages = resp[summonerID].pages.length;
            numberOfPage1 = resp[summonerID].pages[0].name;
            
            document.getElementById("masteryPageCount").innerHTML = numberOfPages;
            document.getElementById("masteryPages1st").innerHTML = numberOfPage1;
        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data 2!");
        }
    });
}

function gameLookUp(summonerID) {   
       
        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/'+summonerID+'/recent?api_key='+APIKEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                
            for(i=0;i<10;i++){
                championID = json.games[i].championId;
                kills = json.games[i].championsKilled;
                death = json.games[i].numDeaths;
                assists = json.games[i].assists;
                win = json.games[i].win;
                gold = json.games[i].goldEarned;
                timeSpend = json.games[i].timePlayed;
                gameType = json.games[i].subType;
                damageDealt = json.games[i].totalDamageDealt;

                document.getElementById("cID").innerHTML = championID;
            }
            
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data 1!");
            }
        });
   
}


function turnBlue(num){
    var currentLi=$("#l"+num);

    currentLi.addClass('active');
    if(last){
        last.removeClass('active');
        last=currentLi;
    }
    else
      last=currentLi;

}










