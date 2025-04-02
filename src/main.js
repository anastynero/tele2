document.addEventListener('DOMContentLoaded', function() {

    const cities = ['Воронеж', 'Иркутск', 'Кемерово', 'Красноярск', 'Москва', 'Н. Новгород', 
                   'Новосибирск', 'Пермь', 'Ростов-на-Дону', 'Санкт Петербург', 'Челябинск'];
    
    const selectorTemplate = document.getElementById('city-selector-template');
    const selectorContent = selectorTemplate.content.cloneNode(true);
    document.body.appendChild(selectorContent);
    
    const selector = document.querySelector('.city-selector');
    const selectorList = selector.querySelector('.city-selector__list');
    const cityBtn = document.getElementById('location-btn');
    const cityName = document.getElementById('city-name');

    const modalTemplate = document.getElementById('modal-template');
    const modalContent = modalTemplate.content.cloneNode(true);
    document.body.appendChild(modalContent);
    const openModalBtn = document.getElementById('open-modal');
    const modalWindow = document.getElementById('modal');
    
    cities.forEach(city => {
      const cityItem = document.createElement('div');
      cityItem.classList.add('city-selector__item');
      cityItem.textContent = city;
      cityItem.addEventListener('click', () => {
        localStorage.setItem('selectedCity', city);
        cityName.textContent = city;
        selector.close();
      });
      selectorList.appendChild(cityItem);
    });
    
    cityBtn.addEventListener('click', () => {
      selector.showModal();
    });
    
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
      cityName.textContent = savedCity;
    }
    
    selector.addEventListener('click', (e) => {
      if (e.target === selector) {
        selector.close();
      }
    });

    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.showModal();
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            modalWindow.close();
        }
    });

  });