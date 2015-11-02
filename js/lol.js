var sumName = "";
var APIKEY = "";
var sID="";
var last;
function summonerLookUp() {   
    sumName = $("#summonerName").val();
    //APIKEY = $("#APIKey").val();
    APIKEY='ddee3594-7985-47f9-9518-e826d154e59d';
    
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
                kills = json.games[i].stats.championsKilled;
                death = json.games[i].stats.numDeaths;
                assists = json.games[i].stats.assists;
                console.log(assists);
                win = json.games[i].stats.win;
                console.log(win=='true');
                gold = json.games[i].stats.goldEarned;
                timeSpend = json.games[i].stats.timePlayed;
                gameType = json.games[i].stats.subType;
                damageDealt = json.games[i].stats.totalDamageDealt;

                document.getElementById("ass").innerHTML = assists;
                document.getElementById("kill").innerHTML=(typeof kills==='undefined')?'0':kills;
                document.getElementById("death").innerHTML=(typeof death==='undefined')?'0':death;
                document.getElementById("assist").innerHTML=assists;
                document.getElementById("gold").innerHTML=(typeof gold==='undefined')?'0':gold;
                document.getElementById("damage").innerHTML=(typeof damageDealt==='undefined')?'0':damageDealt;
                document.getElementById("time").innerHTML=(typeof timeSpend==='undefined')?'0':timeSpend;
                $("#matchStat").css("background-color", (win)?'#7FE817':'#FF2400');
                championLookUp(championID);
                break;

            }
            
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data 1!");
            }
        });
   
}


function championLookUp(championID) {   
       
        $.ajax({
            url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/'+championID+'?api_key='+APIKEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                name=json.name;
                url="http://ddragon.leagueoflegends.com/cdn/5.20.1/img/champion/"+name+".png";
                document.getElementById("championImg1").setAttribute('src', url);
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










