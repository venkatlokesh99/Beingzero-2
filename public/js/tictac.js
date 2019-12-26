var p1=true;
var count=0;
var isPlay=true;
var board=[];
function checkWinner(){
if(board[1]===board[2]&&board[2]===board[3])
return board[1];
if(board[4]===board[5]&&board[5]===board[6])
return board[4];
if(board[7]===board[8]&&board[8]===board[9])
return board[7];
if(board[1]===board[4]&&board[4]===board[7])
return board[1];
if(board[2]===board[5]&&board[5]===board[8])
return board[2];
if(board[3]===board[6]&&board[6]===board[9])
return board[3];
if(board[1]===board[5]&&board[5]===board[9])
return board[1];
if(board[3]===board[5]&&board[5]===board[7])
return board[3];
}

$(document).ready(function(){
    $(".btn").hide();
})
if(isPlay)
$("td").click(function(){
    count++;
    if(!isPlay)
   return;
var c=$(this).attr("id");
if(board[c]===undefined){
if(p1===true){
    $(this).text('X');
    p1=false;
    board[c]='X'
}
else{
    $(this).text('O');
    p1=true;
    board[c]='O'
}
}
if(checkWinner()!=undefined){
$(".res").text(checkWinner()+" is winner");
$(".btn").show();
isPlay=false;
return;
}
if(count===9)
{
    $(".res").text("TIE");
    $(".btn").show();
    return;
}
// console.log(board);
})