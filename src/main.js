document.addEventListener('DOMContentLoaded', function(){
    const NavButtons = document.querySelectorAll('[data-tab-button]');
    const faqQuestion = document.querySelectorAll('[data-faq-item]');

    const HeroSection = document.querySelector('.hero')
    const HeroHeight = HeroSection.clientHeight;
    window.addEventListener('scroll', function(){
        const screanPosition = window.scrollY;
        if(screanPosition < HeroHeight ){
            ShowHeader();
        }else{
            HidenHeader();
        }
    } )

    for (i=0; i < NavButtons.length; i++) {
        NavButtons[i].addEventListener('click', function(Focus){
            const TargetButton = Focus.target.dataset.tabButton;
            const TargetTab = document.querySelector(`[data-tab-id=${TargetButton}]`)
            TabRemove ();
            TargetTab.classList.add('whatch-content--active');
            BorderRemove();
            Focus.target.classList.add('whatch-list__button--active');
        } )
    }
    for (i=0; i < faqQuestion.length; i++) {
        faqQuestion[i].addEventListener('click',ToggleFaq )
    }

})

function ShowHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--on-site')
}
function HidenHeader(){
    const header = document.querySelector('.header')
    header.classList.remove('header--on-site')
}

function ToggleFaq(elemento){
    const ClassFaq = 'faq-lis__item--is-active';
    const father = elemento.target.parentNode;
    father.classList.toggle(ClassFaq);
}

function BorderRemove (){
    const Border = document.querySelectorAll('[data-tab-button]');
    for (i=0; i < Border.length; i++){
        Border[i].classList.remove('whatch-list__button--active')
    }
} 
function TabRemove (){
    const Tabs = document.querySelectorAll('[data-tab-id]');
    for (i=0; i < Tabs.length; i++){
        Tabs[i].classList.remove('whatch-content--active')
    }
} 
