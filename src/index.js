arr = [
    "ai",
    "android",
    "arvr",
    "code"
];


document.getElementById("arvrbtnstyle").addEventListener('mouseover', ()=>{
    document.getElementById("arvr").style.visibility = "visible";
    document.getElementById("arvr").style.transition = "visibility 0s linear 0.33s, opacity 0.33s linear";
});

document.getElementById("arvrbtnstyle").addEventListener('mouseleave', ()=>{
    document.getElementById("arvr").style.visibility = "hidden";
    document.getElementById("arvr").style.transition = "visibility 0s linear 0.3s, opacity 0.3s linear";
});


document.getElementById("aibtnstyle").addEventListener('mouseover', ()=>{
    document.getElementById("ai").style.visibility = "visible";
    document.getElementById("ai").style.transition = "visibility 0s linear 0.33s, opacity 0.33s linear";
    document.getElementById("ai_tag").style.visibility = "visible";
});

document.getElementById("aibtnstyle").addEventListener('mouseleave', ()=>{
    document.getElementById("ai").style.visibility = "hidden";
    document.getElementById("ai").style.transition = "visibility 0s linear 0.3s, opacity 0.3s linear";
    document.getElementById("ai_tag").style.visibility = "hidden";
});

document.getElementById("codebtnstyle").addEventListener('mouseover', ()=>{
    document.getElementById("code").style.visibility = "visible";
    document.getElementById("code").style.transition = "visibility 0s linear 0.33s, opacity 0.33s linear";
});

document.getElementById("codebtnstyle").addEventListener('mouseleave', ()=>{
    document.getElementById("code").style.visibility = "hidden";
    document.getElementById("code").style.transition = "visibility 0s linear 0.3s, opacity 0.3s linear";
});

document.getElementById("andbtnstyle").addEventListener('mouseover', ()=>{
    document.getElementById("android").style.visibility = "visible";
    document.getElementById("android").style.transition = "visibility 0s linear 0.33s, opacity 0.33s linear";
});

document.getElementById("andbtnstyle").addEventListener('mouseleave', ()=>{
    document.getElementById("android").style.visibility = "hidden";
    document.getElementById("android").style.transition = "visibility 0s linear 0.3s, opacity 0.3s linear";
});