var speechrecognition=window.webkitSpeechRecognition;

var recognition=new speechrecognition();

function start()
{
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function()
{
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;

    if(content=="take my selfie")
    {
        Speak_computer()
    }
   
}
function Speak_computer()
{
var synth=window.speechSynthesis;
speech_data="taking your selfie in 5 seconds"
var utterthis=new SpeechSynthesisUtterance(speech_data);
synth.speak(utterthis);
Webcam.attach(mycam);
setTimeout(function(){
    take_snapshot();
    save();
},5000)
}

Webcam.set({
 width:360,
 height:250,
 image_format:'png',
 png_quality:90   
});

mycam=document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data){
    document.getElementById("result").innerHTML="<img id='caputured_image' src='"+data+"' >";
    });
}
function save()
{
    link=document.getElementById("link");
    img=document.getElementById('caputured_image').src;
    link.href=img;
    link.click()
}