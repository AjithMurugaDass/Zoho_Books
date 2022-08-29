let stickyHeader = document.querySelector(".zoho-header");
let langPopupShow = true;
let languagePopup = document.querySelector(".language-banner-container");
let close = document.querySelector(".close-icon");
let integration = document.querySelectorAll(".integration");
let slides = document.querySelectorAll(".slide-view");
let list = document.querySelectorAll(".featList");
let spiderBox = document.querySelector(".spider-box");
// spiderBox.style.display = 'none';
// console.log(slides, list);
slides[0].style.display = "block";
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    let slideName = list[i].innerHTML;
    //display None the all lists containers...
    console.log(slideName);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //Remove all the list(button) border bottom ...

    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("border-bottom");
    }
    // Show the current section list and list container
    list[i].classList.add("border-bottom");

    document.querySelector(`.${slideName}-slide`).style.display = "block";
  });
}

window.addEventListener("scroll", function () {
  let scrolled = window.pageYOffset;
  // console.log(scroll);
  if (scrolled >= 200) {
    stickyHeader.style.display = "block";

    scrolled >= 230 && langPopupShow
      ? languagePopup.classList.add("langPopup-visible")
      : languagePopup.classList.remove("langPopup-visible");

    // console.log('scrolled');
    // integration.style.visibility = 'hidden';
    if (scrolled >= 5250) {
     console.log(scrolled);
     spiderBox.style.display = 'block';
      for (let i = 0; i < integration.length; i++) {
        console.log(integration[i]);
        integration[i].style.visibility = "visible";
        integration[i].classList.add("animation");
      }
    }
  } else {
    document.querySelector(".zoho-header").style.display = "none";
  }
});

close.addEventListener(
  "click",
  () => (
    (langPopupShow = false), languagePopup.classList.remove("langPopup-visible")
  )
);
