
const Questions = ["FirstName","LastName","NicName","Age","BirthDate","Pet's Name"];
const Answers = [];
class PasswordList {
    constructor() {}
    GetPasswordList() {}
}
var NextCounter=0;
function ProccessAnswers(){
    console.log(new PasswordList().GetPasswordList())
}
function GetQuestions(){
    return Questions;
}
function Next_op() {
    Answers.push(document.getElementById(Questions[NextCounter]+"_id").value);
    
    if (NextCounter+1 == GetQuestions().length) {
        document.getElementById("qestions").setAttribute("class", "d-none");
        document.getElementById("loading").setAttribute("class", "row center");
        console.log("End of Qeustion");
    }
    ++NextCounter;
}