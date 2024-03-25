        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value == "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        window.addEventListener("scroll", function () {
            let header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0)
          })
  
          let menu = document.querySelector('.menu');
          let menuBtn = document.querySelector('.menu-btn');
          let closeBtn = document.querySelector('.close-btn');
  
          menuBtn.addEventListener("click", () => {
            menu.classList.add('active');
          })
          closeBtn.addEventListener("click", () => {
            menu.classList.remove('active');
          })