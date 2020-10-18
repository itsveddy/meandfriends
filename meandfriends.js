// MeAndFriends JavaScript Source Code
// Coded by Lorenzo Vedana
// E p s t e i n   d i d n ' t   k i l l   h i m s e l f

var name = "Lorenzo";
var surname = "Vedana";
var height = 182;
var count = 00;

function friend1() {
  var name1 = "Alberto";
  var surname1 = "Esposito";
  var height1 = 170;
  var diffheight1 = height-height1;
  $("#output").append(`<p>Ciao siamo ${name} ${surname} e ${name1} ${surname1}</p>`);
  $("#output").append(`<p>La differenza tra le nostre altezze è ${diffheight1} centimetri</p>`);
}

function friend2() {
    var name2 = "Riccardo";
    var surname2 = "Lambertini";
    var height2 = 180;
    var diffheight2 = height-height2;
    $("#output").append(`<p>Ciao siamo ${name} ${surname} e ${name2} ${surname2}</p>`);
    $("#output").append(`<p>La differenza tra le nostre altezze è ${diffheight2} centimetri</p>`);
  }

function countclk() {
  count = count+1;
  $("#output1").html(`<p>${count}</p>`);
}

// gg you reached the end :)