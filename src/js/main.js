import './lib/lib';
import $ from './lib/lib';





$('.btn').on('click', () =>{
    $('.more').fadeToggle(800);
})



$('.wrap').html(
    `
    <div class="dropdown">
       <button class="btn btn-primary  dropdown-toggle" id='dropDownButton'>Dropdown button</button>
       <div class="dropdown-menu" data-toggle-id='dropDownButton'>
           <a href="#" class="dropdown-item">Item 1</a>
           <a href="#" class="dropdown-item">Item 2</a>
           <a href="#" class="dropdown-item">Item 3</a>
       </div>
   </div>
   ` 
);

$('.dropdown-toggle').dropdown();

 





