var acc = document.getElementsByClassName("accordion");
var i;


// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }
var accordionItem;
$(document).on( "click",".accordion", function() {
  accordionItem = this; 
  $(accordionItem).toggleClass( "active" )
    var panel = accordionItem.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
});
var questionModel = {
  id:1,
  text: "Vetendas pensiya ucun yaxinlasib. ilk vereceyeniz sual ne olacaq?",
  subQuestion:["Siz pensiya almisiniz?","Stajiniz varmi?","Siz dovlet qulluqcususunuz ve ya vredni islerde calisan emekdasmisiniz?","Qebula yaxinlasin"],
  variants:[
    {
      id:1,
      text: "1"
    },
    {
      id:2,
      text: "1, 2"
    },
    {
      id:3,
      text: "3"
    },
    {
      id:4,
      text: "4"
    }
  ]
}

var questionPosition = 1;
getNextQuestion();
function getNextQuestion(){
  var questionBox = $(`<div class="question" data-question-id="${questionModel.id}"> Sual ${questionPosition}: ${questionModel.text}</div>`);
  var questionBoxOl = $(`<ol></ol>`)
  questionModel.subQuestion.forEach(element => {
    questionBoxOl.append(`<li>${element}</li>`)
  });
  questionBox.append(questionBoxOl)
  var questionBoxAnswer = $(`<div class="answer"></div>`)
  for (let index = 0; index < questionModel.variants.length; index++) {
    if(index === 0){
      questionBoxAnswer.append(`<button class="answ" data-variant-id="${questionModel.variants[index].id}">A)</button><span>${questionModel.variants[index].text}</span>`)
    }
    else if(index === 1){
      questionBoxAnswer.append(`<button class="answ" data-variant-id="${questionModel.variants[index].id}">B)</button><span>${questionModel.variants[index].text}</span>`)
    }
    else if(index === 2){
      questionBoxAnswer.append(`<button class="answ" data-variant-id="${questionModel.variants[index].id}">C)</button><span>${questionModel.variants[index].text}</span>`)
    }
    else if(index === 3){
      questionBoxAnswer.append(`<button class="answ" data-variant-id="${questionModel.variants[index].id}">D)</button><span>${questionModel.variants[index].text}</span>`)
    }
  }
  questionBox.append(questionBoxAnswer)
  $(".question-box").html( questionBox)
  questionPosition++;
//   $.ajax({
//     url: "get-next-question",
//     data: {
//       questionPosition: questionPosition
//     },
//     datatype: 'json',
//     success: function (data) {
     
//     },
//     error: function () {
//         alert("error");
//     }
// });
}
var model = {
  questionId: 0,
  variantId: 0,
  categoryId: 0,
  subCategoryId:0
};


$(document).on( "click",".answ", function() {
  var question = $( ".question" );

  model.questionId = question.data("question-id");
  model.variantId = $( this ).data("variant-id") ;
  console.log( model );

  question.css( "display", "none" );
  $( ".aparat" ).css( "display", "block" );
});

$(document  ).on( "click",".sub-category", function() {
  model.subCategoryId = $( this ).data("sub-category-id")
  model.categoryId = $( this ).parent().prev().data("category-id") ;
  
  $(accordionItem).toggleClass( "active" )
    var panel = accordionItem.nextElementSibling;
      panel.style.maxHeight = null;
  $( ".question" ).css( "display", "block" );
  $( ".aparat" ).css( "display", "none" );
  console.log( model );
  getNextQuestion()
      model.questionId = 0;
      model.variantId = 0;
      model.categoryId = 0;
      model.subCategoryId = 0;
//   $.ajax({
//     url: "answer",
//     data: model,
//     datatype: 'json',
//     success: function (data) {
      
//       $( ".question" ).css( "display", "block" );
//   $( ".aparat" ).css( "display", "none" );
//       getNextQuestion()
//       model.questionId = 0;
//       model.variantId = 0;
//       model.categoryId = 0;
//       model.subCategoryId = 0;

//     },
//     error: function () {
//         alert("error");
//     }
// });
});