const submit = document.getElementById("serv_user");

submit.addEventListener("click", validate);

function user_val(){
let inp_pass=document.getElementById("inp").value;
let con_pass=document.getElementById("conf").value;
if(inp_pass!=con_pass){
    document.getElementById("errors").innerHTML="Passwords don't match";
    return false;
}
}
function submit_form(){
let a=user_val();
let manager1=document.getElementById("manager").value;
let grp_email=document.getElementById("emails").value;
let user_name=document.getElementById("serv_user").value;
let inp_pass=document.getElementById("inp").value;
let con_pass=document.getElementById("conf").value;
let team_lead=document.getElementById("lead").value;
alert("Name  " + manager1 + "\n" + "Email  "+grp_email+"\n"+"Username "+user_name+"\n"+"Team lead  "+team_lead);
if(inp_pass!=con_pass){
    document.getElementById("error").innerHTML="Passwords don't match";
    document.getElementById("sub_button").disabled = true;
}
else{
    document.getElementById("sub_button").disabled = false;
}
alert("Name:  " + manager1 + "\n" + "Email:  "+grp_email+"\n"+"Username: "+user_name+"\n"+"Team lead:  "+team_lead);
}