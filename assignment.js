//KILOMETERTOMETER
function kilometerToMeter(num){
    var result=num * 1000;
    return result;
}
console.log(kilometerToMeter(50));
//budgetcalculator
function budgetCalculator(first,second,three){
    var result=first*5 + second*10 + three*15;
    return result;
    
}
console.log(budgetCalculator(50,100,500));
//hoteCost
function hotelCost(num){
 var result=num*100  ;
 return result;
}
console.log(hotelCost(10));
//megaFriend
function megaFriend(arra)
  {
  var max=arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (max < maxi) {
            ans=arra[i];
          max=maxi;
        }
    }
    return ans;
}
var word=["zihad","shafayat","redowan","shanto kaku","rasel","mottakim"];
console.log(megaFriend(word))

 