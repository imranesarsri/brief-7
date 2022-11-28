
const arrdata = [];
const arrvalidation = [];

function validation(){
    
    arrvalidation.length = 0 ;
// la validation de nom

    let myRegexNom = /^[a-zA-Z-\s]+$/;

    if (LaNom.value.length <= 1) {
        document.getElementById("erorrNom").innerHTML="ce champ obligatoir";
        document.getElementById("LaNom").style=`border: red 2px solid`;
    } else if( LaNom.value.length > 15 ){
        document.getElementById("erorrNom").innerHTML="il ya plus de 15 charactere";
        document.getElementById("LaNom").style=`border: red 2px solid`;
    } else if( myRegexNom.test(LaNom.value) === false ){
        document.getElementById("erorrNom").innerHTML="seules les lettres sont autorisees";
        document.getElementById("LaNom").style=`border: red 2px solid`;
    }else {
        document.getElementById("erorrNom").innerHTML="";
        document.getElementById("LaNom").style=`border: none`;
        arrvalidation.push(true)
    }

// la validation de Marque

let myMarque = /^[a-zA-Z-\s]+$/;

if (LaMarque.value.length <=2) {
    document.getElementById("erorrMarque").innerHTML="ce champ obligatoir";
    document.getElementById("LaMarque").style=`border: red 2px solid`;
} else if( LaMarque.value.length > 15 ){
    document.getElementById("erorrMarque").innerHTML="il ya plus de 15 charactere";
    document.getElementById("LaMarque").style=`border: red 2px solid`;
} else if( myMarque.test(LaMarque.value) === false ){
    document.getElementById("erorrMarque").innerHTML="seules les lettres sont autorisees";
    document.getElementById("LaMarque").style=`border: red 2px solid`;
}else {
    document.getElementById("erorrMarque").innerHTML="";
    document.getElementById("LaMarque").style=`border: none`;
    arrvalidation.push(true)
}

// la validation de prix

let myprix = /^[0-9]+\$?\£?\.?[0-9]+\$?\£?$/;
if (Laprix.value.length ===0) {
    document.getElementById("erorrprix").innerHTML="ce champ obligatoir";
    document.getElementById("Laprix").style=`border: red 2px solid`;
} else if( Laprix.value.length > 15 ){
    document.getElementById("erorrprix").innerHTML="il ya plus de 15 charactere";
    document.getElementById("Laprix").style=`border: red 2px solid`;
} else if( myprix.test(Laprix.value) === false ){
    document.getElementById("erorrprix").innerHTML="seules les lettres sont autorisees";
    document.getElementById("Laprix").style=`border: red 2px solid`;
}else {
    document.getElementById("erorrprix").innerHTML="";
    document.getElementById("Laprix").style=`border:none`;
    arrvalidation.push(true)
}

// la validation de date de production 

if (Ladate.value.length === 0) {
    document.getElementById("erorrdate").innerHTML="ce champ obligatoir";
    document.getElementById("Ladate").style=`border: red 2px solid`;
}else {
    document.getElementById("erorrdate").innerHTML="";
    document.getElementById("Ladate").style=`border: none`;
    arrvalidation.push(true)
}

// la validation de type
let Latype = document.getElementById("Latype").value;
if(Latype =="choisir-liste"){
    document.getElementById("erorrtype").innerHTML="ce champ obligatoir";
    document.getElementById("Latype").style=`border: red 2px solid`;
}else {
    document.getElementById("erorrtype").innerHTML="";
    document.getElementById("Latype").style=`border: none`;
    arrvalidation.push(true)
}

// la validation de date de promotion

let sepromotion = document.getElementsByClassName("sepromotion");
if(sepromotion[0].checked === false && sepromotion[1].checked == false ){
    document.getElementById("erorrpromotion").innerHTML="obligatoir de choisir";
}else {
    document.getElementById("erorrpromotion").innerHTML=" " ;
    arrvalidation.push(true)
}

// push true dans un array

    if(arrvalidation.length == 6 ){
        return true 
    } else {
        return false
    }

}


// function push les information dons un array

function draw(){
    document.getElementById('tbody').innerHTML=""
for(i=0 ; i<arrdata.length ; i++) {
    document.querySelector('tbody').innerHTML += 
    `<td>${arrdata[i].nom}</td>
    <td>${arrdata[i].Marque}</td>
    <td>${arrdata[i].prix}</td>
    <td>${arrdata[i].date}</td>
    <td>${arrdata[i].Latype}</td>
    <td>${arrdata[i].promotion}</td>
    <td>
        <button onclick='modifier(${i})' id="modifi_table">modifier</button>
        <button onclick='suprimi(${i})' id="suprimi_table">suprimi</button>
    </td>`
}
}

// function vide inputs

function vide(){
    LaNom.value ="";
    LaMarque.value ="";
    Laprix.value ="";
    Ladate.value ="";
    document.getElementById('Latype').value ="choisir-liste";
    document.querySelector('form').sepromotion[0].checked = false
    document.querySelector('form').sepromotion[1].checked = false
}

// function ajouter les information dons un table

ajouter.onclick =function(e){
    e.preventDefault();

    if(validation()){
    arrdata.push( {
        nom:LaNom.value, Marque:LaMarque.value, 
        prix:Laprix.value , date:Ladate.value,
        Latype:document.getElementById('Latype').value, 
        promotion:document.querySelector('form').sepromotion.value,
    },)
    draw()
    vide()
    
    }
}

// function suprimi 

function suprimi(index){

    if(confirm("Eter-vous sur de vouloir supprimer ces informations")){
        arrdata.splice(index , 1)
        draw();
    }

}

function modifier(index){
    document.getElementById('modifier').style='display:block',
    document.getElementById('ajouter').style='display:none',
    console.log(arrdata[index].nom)
    LaNom.value  = arrdata[index].nom 
    LaMarque.value = arrdata[index].Marque 
    Laprix.value = arrdata[index].prix
    Ladate.value = arrdata[index].date 
    document.getElementById('Latype').value = arrdata[index].Latype 
    document.querySelector('form').sepromotion.value = arrdata[index].promotion 
    document.getElementById("modifier").setAttribute("onclick",`submitModifier(${index})`) 
}

// function suprimi Modifier

function submitModifier(index){
    document.getElementById('modifier').style='display:none',
    document.getElementById('ajouter').style='display:block',
    arrdata[index].nom = LaNom.value 
    arrdata[index].Marque = LaMarque.value 
    arrdata[index].prix = Laprix.value 
    arrdata[index].date = Ladate.value
    arrdata[index].Latype = document.getElementById('Latype').value 
    arrdata[index].promotion = document.querySelector('form').sepromotion.value
    draw()
    vide()
}



