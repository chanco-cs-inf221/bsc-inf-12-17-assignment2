const projectName= document.getElementById("projectName");

const projectDescription= document.getElementById("projectDescription");

const completionDate= document.getElementById("completionDate");

const button=document.getElementById("button");

const IsOutup=document.getElementById("IsOutup");

button.onclick=function (){
    const projectName=projectName.value;
    const projectDescription=projectDescription.value;
    const completionDate=completionDate.value;
    

    console.log(projectName);
    console.log(projectDescription);
    console.log(completionDate);

    if(projectName&&projctDescription){

        localStorage.setItem(projectName,projectDescription);
    
        location.reload();
    }
};
for(let i=0; i<localStorage.length; i++){
    const projectName=localStorage.key(i);
    const projectDescription=localStorage.getItem(projectName);

    IsOutup.innerHTML +=`${projectName}: ${projectDescription}<br>`;
}
function save(){
    document.getElementById("eunform")
     const projectName=document.forms[0].element[0].value;
    const projectDescription=document.forms[0].element[1].value;
    const completionDate=document.forms[0].element[2].value;
     

    localStorage.setItem("projectName",projectName)
    localStorage.setItem("projectDescription",projectDescription)
    localStorage.setItem("completionDate",completionDate)
}
const organisationName= document.getElementById("organisationName");

const organisationDescription= document.getElementById("organisationDescription");

const dateWorked= document.getElementById("dateWorked");

const button=document.getElementById("button");

const IsOutup=document.getElementById("IsOutup");

button.onclick=function (){
    const organisationName=organisationName.value;
    const organisationDescription=organisationDescription.value;
    const dateWorked=dateworked.value;
    

    console.log(organisationName);
    console.log(organisationDescription);
    console.log(dateWorked);

    if(organisationName&&organisationDescription){

        localStorage.setItem(organisationName,organisationDescription);
    
        location.reload();
    }
};
for(let i=0; i<localStorage.length; i++){
    const organisationName=localStorage.key(i);
    const organisationDescription=localStorage.getItem(organisationName);

    IsOutup.innerHTML +=`${organisationName}: ${organisationDescription}<br>`;
}
function save(){
    document.getElementById("eunform")
     const organisationName=document.forms[0].element[0].value;
    const organisationDescription=document.forms[0].element[1].value;
    const dateWorked=document.forms[0].element[2].value;
     

    localStorage.setItem("organisationName",organisationName)
    localStorage.setItem("organisationDescription",organisationDescription)
    localStorage.setItem("dateWorked",dateWorked)
}