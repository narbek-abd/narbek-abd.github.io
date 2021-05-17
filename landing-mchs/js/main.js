"use strict"
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
var lastScrollTop = 0;
$(window).scroll(function() {

    var top = $(document).scrollTop();


    if (top < 300) {
        $(".header_sticky").removeClass('fixed');
    }else if (top > lastScrollTop){
        $(".header_sticky").removeClass('fixed');
    } else {
        $(".header_sticky").addClass('fixed');
    }
    lastScrollTop = top;
});
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// MOBILE-MENU
const menuToggle    = document.querySelector('.menu-toggle'),
menu          = document.querySelector('.top-menu-wrap_mob'),
menuLinks      = menu.querySelectorAll('a');

for(let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', function(){
        menuToggle.classList.remove('open');
        menu.style.maxHeight = '';
    })
}

menuToggle.addEventListener('click', function(){

    if(!menu.offsetHeight){
        menuToggle.classList.add('open');
        menu.style.maxHeight = menu.scrollHeight + 'px';
    } else{
        menuToggle.classList.remove('open');
        menu.style.maxHeight = '';
    }
});
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// SMOOTHY SCROLLING
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    let sc = $(this).attr("href"),
    dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    $('html, body').animate({scrollTop: dn}, 1000, 'swing');
});
});
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

const closeButtons      = document.querySelectorAll(".modal__close"),
openButtons       = document.querySelectorAll(".feedback-btn");

const overlay           = document.createElement('div');
overlay.className = 'modal__overlay modal__close';

const thanks            = document.createElement('div');
thanks.className  = 'thanks';
thanks.innerHTML  = '<p><span>Спасибо</span>Мы перезвоним Вам в ближайшее время!</p>';

// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
for(let i = 0; i < openButtons.length; i++) {
  let openButton = openButtons[i];


  openButton.addEventListener("click", function() {
      openModalById('#feedback');
  });
}


// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
for(let i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', function() {
      closeModal('#feedback');
  })
}

// ВАЛИДАЦИЯ ФОРМ
validation();
function validation(){
    let formGroups = document.querySelectorAll('.form-group_req');

    for(let i = 0; i < formGroups.length; i++){
        let formGroup   = formGroups[i];
        let input       = formGroup.querySelector('input');


        input.addEventListener('focus', function(){

            formGroup.classList.remove('form-group_req');

        })

        input.addEventListener('blur', function(){
            if(!input.value){
                formGroup.classList.add('form-group_req');
            } if(input.value){
                formGroup.classList.remove('form-group_req');
            }
        })  
    }
}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

// ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА ПО ID
function openModalById(modalId) {
    let modal = document.querySelector(modalId);

    modal.appendChild(overlay);

    overlay.addEventListener('click', function(){
      closeModal(modalId);
  })

// =========================================================
if(modal.querySelector('.modal-close')){
    modal.querySelector('.modal-close').addEventListener('click', function(){
      closeModal(modalId);
  });
}
// =========================================================

modal.classList.remove('closed');
modal.classList.add('open');

header.classList.add('padding-right');
document.body.classList.add('scroll-hidden');
}

// ФУНКЦИЯ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА ПО ID
function closeModal(modalId) {
    let modal = document.querySelector(modalId);
    let form = modal.querySelector('form');
    modal.classList.remove('open');
    modal.classList.add('closed');
    header.classList.remove('padding-right');
    document.body.classList.remove('scroll-hidden');

    form.reset();
    overlay.remove();

    thanks.remove();
    thanks.classList.remove('active');
    thanks.classList.remove('consult');
}

// MODAL-QUIZ

var quizTrigger = document.getElementById('quizTrigger');
quizTrigger.addEventListener('click', function () {
    openModalById('#modalQuiz');
})
const prevButtons = document.querySelectorAll('.quiz__btn_prev');
const nextButtons = document.querySelectorAll('.quiz__btn_next');
const quizItems = document.querySelectorAll('.quiz__item');


let quizCount = 0;

for(let i = 0; i < prevButtons.length; i++) {
    let prevButton = prevButtons[i];

    prevButton.addEventListener('click', function () {
        quizCount--;
        if(quizCount < 0){
            quizCount = 0;
        }
        for(let j = 0; j < quizItems.length; j++){
            let quizItem = quizItems[j];

            quizItem.classList.remove('active');
        }
        quizItems[quizCount].classList.add('active');
    })
}

for(let i = 0; i < nextButtons.length; i++) {
    let nextButton = nextButtons[i];


    nextButton.addEventListener('click', function () {
        quizCount++;
        for(let j = 0; j < quizItems.length; j++){
            let quizItem = quizItems[j];
            
            quizItem.classList.remove('active');
        }
        quizItems[quizCount].classList.add('active');
    })
}



// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
var quizFile = document.getElementById('quizFile');
quizFile.addEventListener('change', function(){
    checkedFile.innerHTML = quizFile.files[0].name;
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 



// COLLAPSE - PRODUCT-LIST
const collapses = document.querySelectorAll('.collapse');

for(let i = 0; i < collapses.length; i++){
    let collapse            = collapses[i];
    let collapseToggle      = collapse.querySelector('.collapse__toggle');
    let collapseContent     = collapse.nextElementSibling;


    collapseToggle.addEventListener('click', function(){
        if(!collapseContent.offsetHeight){
            collapse.classList.add('open');
            // collapseToggle.classList.add('open');
            collapseContent.style.maxHeight = collapseContent.scrollHeight + 'px';

        } else{
            // collapseToggle.classList.remove('open');
            collapse.classList.remove('open');
            collapseContent.style.maxHeight = '';
        }
    })
}

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// ПОДСЧЕТ ИТОГОВОЙ СУММЫ ВЫБРАННОГО ОБОРУДОВАНИЯ И ЗАПИСЬ В HTML
calculateTotalPrice( document.querySelectorAll('.equipment-check:checked') );

function calculateTotalPrice(activeCheckboxes) {
    let totalPrice = 0;

    let uniqueItemsId = getItemsList(activeCheckboxes);   

    uniqueItemsId.forEach((id) => {
        let item = document.querySelector(`.product-list__item[data-item-id='${id}']`);
        let itemPrice = item.querySelector('.product__price').innerHTML;

        itemPrice = itemPrice.replace('₽',' ');
        itemPrice = itemPrice.replace(/ /g,'');
        itemPrice = parseInt(itemPrice, 10);

        totalPrice += itemPrice;
    })

    document.querySelector('.product__total-price').innerHTML = '<span class="product__total-text">Итого:</span> <span class="product__total-summ">' + totalPrice + ' ₽</span>';
}

function getItemsList(activeCheckboxes) {
    let itemsId = [];
    let uniqueItemsId = [];

    for (let i = 0; i < activeCheckboxes.length; i++) {
        let activeCheckbox = activeCheckboxes[i];
        let itemsBox = activeCheckbox.closest('.equipment__block');
        let items = itemsBox.querySelectorAll('.product-list__item');

        for (let j = 0; j < items.length; j++) {
            let item = items[j];
            itemsId.push(item.dataset.itemId);
        }

        uniqueItemsId = itemsId.filter (function (value, index, array) { 
            return array.indexOf (value) == index;
        });
    }
    return uniqueItemsId;
}



const checkboxes = document.getElementsByClassName('equipment-check');

for(let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];

    checkbox.addEventListener('change', function(){
        let activeCheckboxes = document.querySelectorAll('.equipment-check:checked');

        calculateTotalPrice(activeCheckboxes);
    })
}

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
var orderSumm = document.getElementById('orderSumm');

 // СКРИПТ ОТПРАВКИ ПИСЬМА ЧЕРЕЗ AJAX
 // форма модального окна
 $('#feedbackForm').submit(function (ev) {
    ev.preventDefault();
    setupLoader(feedbackForm);

// Получение выбранных категорий и запись в input[id="orderSumm"] вместе с итоговой суммой

let categoryList = '';
for(let i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
        categoryList += checkboxes[i].getAttribute('data-cat-name') + '<br> ';
    }
}

if(equipmentTotalPrice) {
    orderSumm.value = '<b>Выбрано оборудования на сумму</b>: ' + equipmentTotalPrice + ' руб.<br> <b>Выбранные категории:</b><br> ' + categoryList;

} else{
    orderSumm.value = '';
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

$.ajax({
    type: 'POST',
    url: 'feedback.php',
    data: $(this).serialize()
}).done(function () {
    $(this).find('input').val('');
    $('#feedbackForm').trigger('reset');

    removeLoader(feedbackForm);
    thanks.classList.add('active');
    feedbackContent.appendChild(thanks);
});
return false;
})

 // форма блока консультации
 $('#consultForm').submit(function (ev) {
    ev.preventDefault();

    
    setupLoader(consultForm);

    $.ajax({
        type: 'POST',
        url: 'consult.php',
        data: $(this).serialize()
    }).done(function () {
        $(this).find('input').val('');
        $('#consultForm').trigger('reset');
        removeLoader(consultForm);

        thanks.classList.add('consult');
        wrapper.appendChild(thanks);


        setTimeout(function(){
            thanks.remove();
            thanks.classList.remove('active');
            thanks.classList.remove('consult');
        }, 6500);
    });
    return false;
})

// ФУНКЦИИ УСТАНОВКИ, УДАЛЕНИЯ ЛОАДЕРА ФОРМЫ
function setupLoader(formId){
  let loader            = document.createElement('div'),
  loaderContainer   = formId.querySelector('.loader-container');
  loader.className  = 'submit-loader';
  loaderContainer.appendChild(loader);
}

function removeLoader(formId){
  let loader            = formId.querySelector('.submit-loader');
  loader.remove();
}
// ------------------------------------------------

!function(o){o(document).ready(function(){o("a[href^='mailto']").bind("copy",function(){return console.log("скопировал почту"),ym(10660576,"reachGoal","copy_mail"),!0}),o("a[href^='mailto']").on("click",function(){console.log("mail_click"),ym(10660576,"reachGoal","mail_click")}),o(document).ajaxSuccess(function(o,c,l){console.log(l),"feedback.php"==l.url&&(console.log("lead"),ym(10660576,"reachGoal","mcs_lead")),"consult.php"==l.url&&(console.log("lead"),ym(10660576,"reachGoal","mcs_lead"))})})}(jQuery);
