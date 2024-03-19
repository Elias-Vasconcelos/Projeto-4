document.addEventListener('DOMContentLoaded', function(){
    const NavButtons = document.querySelectorAll('[data-tab-button]');
    
    for (i=0; i < NavButtons.length; i++) {
        NavButtons[i].addEventListener('click', function(Focus){
            const TargetButton = Focus.target.dataset.tabButton;
            const TargetTab = document.querySelector(`[data-tab-id=${TargetButton}]`)
            TabRemove ();
            TargetTab.classList.add('whatch-content--active');
            BorderRemove();
            Focus.target.classList.add('whatch-list__button--active')

        } )
    }
})

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
