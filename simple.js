/*
---------
SimpleJS
By: DTS123098
---------
*/

$(function(){
  var bgColorRed = $("#bgRed").css("background-color", "red");
  var bgColorCrimson = $("#bgCrim").css("background-color", "crimson");
  var bgColorBlue = $("#bgBlue").css("background-color", "blue");
  var bgColorDodgerBlue = $("#bgDodBlue").css("background-color", "dodgerblue");
  var bgColorPink = $("#bgPink").css("background-color", "pink");
  var bgColorDeepPink = $("#bgDeepPink").css("background-color", "deeppink");
  var bgColorHotPink = $("#bgHotPink").css("background-color", "hotpink");
  var bgColorMagenta = $("#bgMagenta").css("background-color", "magenta");
  var bgColorPurple = $("#bgPurple").css("background-color", "purple");
  var bgColorIndigo = $("#bgIndigo").css("background-color", "indigo");
  var bgColorOrange = $("#bgOrange").css("background-color", "orange");
  var bgColorRedOrange = $("#bgRedOrange").css("background-color", "orangered");
  var bgColorDarkOrange = $("bgDarkOrange").css("background-color", "darkorange");
  
  function randomMaleNameGen(){
    var fnames = ["Wade","Dominic","Dominick","Derek","Alex","Marcus","Markus","Arnold","Aaron","Abraham","Adam","Albert","Earl","Greg","Gregory","Alan","Allan","Allen","Andy","Oliver","Nolan","Joel","Noah","Nigel","Bryce","Dave","Darren","Daryl","David","Dean","Donald","Marshall","Doug","Douglas","Drew","Luke","Lucas","Paul","Dante","Donte","Elias","Franklin","Frank","Jack","Zach","Zack","Zachary","Zackary","Patrick","Pat","Owen","Peter","Pete","Will","Stuart","Steven","Steve","Vince","Vincent","Trevor","Trey","Trent","Trenton","Todd","Thomas","John","Joe","Shawn","Sean","James","Jaymes","Kyle","Tom","Wyatt","Aldo","Fred","Alfred","Blaine","Benny","Bennie","Brad","Bradley","Bradly","Bryan","Brian","Brent","Brenton","Caleb","Kaleb","Kris","Cris","Chris","Carl","Karl","Claude","Clay","Clayton","Clement","Cliff","Clifford","Dale","Dallas","Dalton","Curt","Curtis","Danny","Dan","Daniel","Danial","Daron","Darron","Denny","Dennis","Derrick","Derick","Dominique","Dom","Dustin","Dusty","Gerald","Gilbert","Brett","Nate","Nathan","Bob"];
    var lnames = ["Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Brooke","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Donnell","O'Neil","O'Neal","Dowling","Maxon","Clifton","Cena","Ackerman"];
    var fnamesa = Math.floor(Math.random() * fnames.length);
    var lnamesa = Math.floor(Math.random() * lnames.length);
    var fnamesb = fnames[fnamesa];
    var lnamesb = lnames[lnamesa];
    $("#generate").text(fnamesb + lnamesb);
  }
});
