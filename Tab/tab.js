function changeText2($container) {
    var paraHTML = "<img class='foto1' src='images/shrek.png' id='foto1'> <p id='inhoud'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
    var normHTML = "<img  class='foto2' src='images/hulk.jpg' id='foto2'><p id='tekst2'> 'HULK IS NOT AFRAID...HULK IS STRONGEST ONE THERE IS'</p>";
    
    if($container=='para'){
        document.getElementById('para').innerHTML=paraHTML;
    }
    else{
        document.getElementById('normal').innerHTML=normHTML
    }
}
