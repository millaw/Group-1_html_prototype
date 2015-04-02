// window.onload=function(){
//   var button = document.getElementById("button_1");
//   button.onclick=handleForm;
//   };
// function handleForm(){
//     for (var i = 0; i< document.quiz_1.result.length; i++){
//         if(document.quiz_1.result[i].checked){
//           var radioVal = document.quiz_1.result[i].value;
//         }
//     }
//     var p =  document.getElementById("answer-1");
//     if(radioVal == "c"){
//        p.innerHTML = "Correct! The City University of New York requires that students demonstrate minimum level of proficiency in reading, writing and mathematics before having the opportunity to enroll in college-level courses.";
//     } else {
//        p.innerHTML = "Sorry, try again...";
//     }
// }


$(document).ready(function(){
// quiz_1
    $('#button_1').click(function() {
    for (var i = 0; i< document.quiz_1.result.length; i++){
        if(document.quiz_1.result[i].checked){
          var radioVal = document.quiz_1.result[i].value;
        }
    }

    var p =  document.getElementById("answer-1");

    if(radioVal == "c"){
       p.innerHTML = "Correct! The City University of New York requires that students demonstrate minimum level of proficiency in reading, writing and mathematics before having the opportunity to enroll in college-level courses.";
    } else {
       p.innerHTML = "Sorry, try again...";
    }
});
// quiz_2
    $('#button_2').click(function() {
    for (var i = 0; i< document.quiz_2.result.length; i++){
        if(document.quiz_2.result[i].checked){
          var radioVal = document.quiz_2.result[i].value;
        }
    }

    var p =  document.getElementById("answer-2");

    if(radioVal == "b"){
       p.innerHTML = "Correct! Students can be granted an exemption from taking the CUNY Assessment test based on the following minimum scores:" + "<br>" + " - 75 on the NYS Regents exams or"+ "<br>" + " - 480 (in Verbal or Critical Reading score) & 500 (in math) on the SAT or"+ "<br>" + " - 20 (English) & 21 (Math) on the ACT"+ "<br>" + "Students can also be granted an exemption if they transfer in a credited English and Math course with a grade of C or better. For more information regarding this type of exemption, please visit the BMCC Admissions Office located in room S-310.";
    } else {
       p.innerHTML = "Sorry, try again...";
    }
});
// quiz_3
    $('#button_3').click(function() {
    for (var i = 0; i< document.quiz_3.result.length; i++){
        if(document.quiz_3.result[i].checked){
          var radioVal = document.quiz_3.result[i].value;
        }
    }

    var p =  document.getElementById("answer-3");

    if(radioVal == "d"){
       p.innerHTML = "Correct! The CUNY Assessment Test is comprised of Reading (The CAT in Reading is an un-timed, multiple-choice, computer-based test of reading), Writing (The CAT in Writing (CATW) is a 90 minute written essay in which students are asked to respond to a reading passage that they see for the first time when they sit for the test) and Mathematics (The CAT in Mathematics is an untimed, multiple-choice, computer-based test composed of four sections: numerical skills/pre-algebra, algebra, college algebra and trigonometry).";
    } else {
       p.innerHTML = "Sorry, try again...";
    }
});
// quiz_4
    $('#button_4').click(function() {
    for (var i = 0; i< document.quiz_4.result.length; i++){
        if(document.quiz_4.result[i].checked){
          var radioVal = document.quiz_4.result[i].value;
        }
    }

    var p =  document.getElementById("answer-4");

    if(radioVal == "c"){
       p.innerHTML = "Correct! The results of the CUNY Assessment Tests are used to determine placement into the appropriate level of classes in reading, writing/English as a Second Language (ESL), and/or mathematics.";
    } else {
       p.innerHTML = "Sorry, try again...";
    }
});
// quiz_5
    $('#button_5').click(function() {
    for (var i = 0; i< document.quiz_5.result.length; i++){
        if(document.quiz_5.result[i].checked){
          var radioVal = document.quiz_5.result[i].value;
        }
    }

    var p =  document.getElementById("answer-5");

    if(radioVal == "d"){
       p.innerHTML = "Correct! Though remedial courses do not have any credits, the tuition cost is determined by the number of hours the course meets per week. For instance, the tuition cost of a 6-hour remedial course is $1170.";
    } else {
       p.innerHTML = "Sorry, try again...";
    }
});
// quiz_6
    $('#button_6').click(function() {
    for (var i = 0; i< document.quiz_6.result.length; i++){
        if(document.quiz_6.result[i].checked){
          var radioVal = document.quiz_6.result[i].value;
        }
    }

    var p =  document.getElementById("answer-6");

    if(radioVal == "d"){
       p.innerHTML = "Students are not allowed to test without an appointment. You can schedule an appointment with the Testing Office at their office, room S103, or online at www.bmcc.cuny.edu/testing.";
    } else {
       p.innerHTML = "Sorry, try again...";
    }
});

    });