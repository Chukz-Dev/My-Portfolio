const download = document.querySelector('.js-download');

 function whenClicked(selector) {
      const download = document.querySelector(selector);
     if (!download.classList.contains('is-toogled')) {
       download.classList.add('is-toogled');
     } else {
       download.classList.remove('is-toogled');
     } 
    }

   
    function change() {
       const container = document.querySelector('.education-section');

      container.innerHTML = `<div class="service">
      <p class="ser">Web Development</p>
      <p class="ser">Web Design</p>
      <p class="ser">Responsive Designs</p>
      </div>`;
    }


    function change2() {
      const ctn = document.querySelector('.education-section');
      ctn.innerHTML = ` <div class="education-section">
      <i class="fa-brands fa-html5"></i>
      <p>HTML5</p>
      <i class="fa-brands fa-square-js"></i>
      <P>JavaScript</P>
      <label>University</label>
      <p>Nnamdi Azikiwe University, Awka.</p>
      <label>Course</label>
      <p>Applied Geophysics</p>
    </div>`;
    }