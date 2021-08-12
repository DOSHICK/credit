$(document).ready(function(){
    var questionsList = ['.offer', '.from', '.job', '.money', '.credit', '.feedback', '.present' ];
    var selections = []; 
    var questionCounter = 0;
    var allQuestiions   = questionsList.length;
    
    //  Скрытие всех страниц, кроме первой
    function displayNone(){
        let i = 1;
        let aq = questionsList.length;
        while(i <= aq){
            $(questionsList[aq]).hide();
            aq--;
        }
    }
    displayNone();
    
    //  Счётчик всех вопросов
    $('.allQuestions').html(allQuestiions-1);
    
    //  Логика работы кнопки с классом next
    $( ".next" ).click(function nextQuestion() {
        let i = questionCounter;
        $(questionsList[i]).hide();
        $(questionsList[i+1]).show();
        questionCounter = questionCounter + 1;
        // alert (questionCounter);    // Проверка работы счётчика
        $('.currentQuestion').html(questionCounter);
    })
    
    //  Логика работы кнопки с классом prev
    $( ".prev" ).click(function prevQuestion() {
        let i = questionCounter;
        $(questionsList[i]).hide();
        $(questionsList[i-1]).show();
        questionCounter = questionCounter - 1;
        // alert (questionCounter);  // Проверка работы счётчика
        $('.currentQuestion').html(questionCounter);
    })
    
    
    //  Сбор данных для запонения квиза
    document.querySelector('.container').addEventListener('click', function(e){ // Вешаем обработчик клика на кнопку
        let id = e.target.id; // Получили ID, т.к. в e.target содержится элемент, по которому кликнули
        let choose = $("#" + id).text();
        selections.push(choose);
        //  Проверка наполняемости массива
        // for (let i = 0; i < selections.length; i++) {
        //     alert( selections[i] );
        // }
    });

    
    function selectFind(){
        let id = document.querySelector('#styledSelect').id;
        let choose  = $('#' + id).text();
        selections.push(choose);
    }

    
    function nameFind(){
        let val = document.getElementById('name').value
        selections.push(val);
    }

    function phoneFind(){
        let val = document.getElementById('phone').value
        selections.push(val);
    }
    
    
    $( ".end" ).click(function() {
        nameFind();
        selectFind();
        phoneFind();
        for (let i = 0; i < selections.length; i++) {
            alert( selections[i] );
        }
    })
    
    
    
    
})
