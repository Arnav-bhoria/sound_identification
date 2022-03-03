//https://teachablemachine.withgoogle.com/models/n-sfdMqRH/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/n-sfdMqRH/model.json",modelReady);

}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    
    if(error){
        console.error(error);
    }
    else{
    console.log(results)
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("result").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("confidence").style.color="rgb("+r+","+g+","+b+")";

    document.getElementById("result").innerHTML="I can hear - "+results[0].label;
    document.getElementById("confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
    
    img1=document.getElementById("aliens-01");
    img2=document.getElementById("aliens-02");
    img3=document.getElementById("aliens-03");
    img4=document.getElementById("aliens-04");
    
    if(results[0].label=="clap"){
        img1.src="aliens-01.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";

    }
    
    else if(results[0].label=="bell"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="aliens-04.png";

    }
    else {
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.gif";

    }
    }
}