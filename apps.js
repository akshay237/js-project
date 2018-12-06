var scores,roundScore,activePlayer,gamePlaying;
init();
 //dice = Math.floor(Math.random()*6)+1;
//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent= dice;
//var x=document.querySelector('#current-' + activePlayer).textContent;
//console.log(x);
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    //1. Random number
    var dice = Math.floor(Math.random()*6)+1;
     //2.display the result
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block'; 
    diceDom.src = 'Alea_'+ dice +'.png' ; 
    //3.update round score if dice value is not 1
    if(dice !==1)
    {
        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent= roundScore;
    }
    else{
       nextPlayer();
      }
    } 
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
          //1.Add current score to the global score
    scores[activePlayer]+=roundScore;
    //2.update the UI
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];

    //3.check if the player win
    if(scores[activePlayer]>=100)
    {
        document.querySelector('#name-'+ activePlayer).textContent='WINNER !';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
    nextPlayer();
     }
    } 
});
function nextPlayer(){
    activePlayer=(activePlayer==0)?1:0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
};
document.querySelector('.btn-new').addEventListener('click',init);
function init()
{
   scores=[0,0];
   roundScore=0;
   activePlayer=0;
   gamePlaying=true;
   document.querySelector('.dice').style.display='none';
   document.getElementById('score-0').textContent='0';
   document.getElementById('score-1').textContent='0';
   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';
   document.getElementById('name-0').textContent='Player 1';
   document.getElementById('name-1').textContent='Player 2';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');
};



























