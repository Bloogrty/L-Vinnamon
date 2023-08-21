// filter
document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.select');
    const caret = document.querySelector('.caret');
    const filterMenu = document.querySelector('.filter_menu');
    const options = document.querySelectorAll('.filter_menu li');
    const contentAll = document.querySelector('.content_all');
    const contentPastries = document.querySelector('.content_pastries');
    const contentCakes = document.querySelector('.content_cakes');
    const contentCookies = document.querySelector('.content_cookies');
    const contentBeverages = document.querySelector('.content_beverages');
  
    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      filterMenu.classList.toggle('filter_menu-open');
    });
  
    options.forEach(option => {
      option.addEventListener('click', () => {
        const selectedOption = option.innerText;
        
        // close option menunya
        filterMenu.classList.remove('filter_menu-open');

        // Update text in the select element
        select.querySelector('.selected').innerText = selectedOption;
    
        // Reset the appearance of all options
        options.forEach(option => {
          option.classList.remove('active');
        });
    
        // Add active class to the clicked option
        option.classList.add('active');
    
        // Show/hide content based on the filter
        if (selectedOption === 'All Products') {
          contentAll.style.display = 'block';
          contentPastries.style.display = 'none';
          contentCakes.style.display = 'none';
          contentCookies.style.display = 'none';
          contentBeverages.style.display = 'none';
        } else if (selectedOption === 'Pastries') {
          contentAll.style.display = 'none';
          contentPastries.style.display = 'block';
          contentCakes.style.display = 'none';
          contentCookies.style.display = 'none';
          contentBeverages.style.display = 'none';
        } else if (selectedOption === 'Cakes') {
          contentAll.style.display = 'none';
          contentPastries.style.display = 'none';
          contentCakes.style.display = 'block';
          contentCookies.style.display = 'none';
          contentBeverages.style.display = 'none';
        } else if (selectedOption === 'Cookies') {
          contentAll.style.display = 'none';
          contentPastries.style.display = 'none';
          contentCakes.style.display = 'none';
          contentCookies.style.display = 'block';
          contentBeverages.style.display = 'none';
        } else if (selectedOption === 'Beverages') {
          contentAll.style.display = 'none';
          contentPastries.style.display = 'none';
          contentCakes.style.display = 'none';
          contentCookies.style.display = 'none';
          contentBeverages.style.display = 'block';
        }

      });
    });
});