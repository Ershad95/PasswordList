class PasswordList {

    constructor() {

    }
    GetPasswordList() {
        return "GetPasswordList";
    }
}
var NextCounter=0;
function ProccessAnswers(){
    console.log(new PasswordList().GetPasswordList())
}

function GetQuestions(){
    return ["FirstName","LastName","NicName","Age","BirthDate","Pet's Name"]
}
