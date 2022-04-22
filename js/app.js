const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));



window.addEventListener("scroll", () => {
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}



function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1900,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 980,
  },

});

//member

const membersBTN = document.querySelectorAll('.filter-btn')
const grid = document.querySelector('.mainteam')

function Person(name, img, role, contact) {
  this.name = name;
  this.img = img;
  this.role = role;
  this.contact = contact;
}
//communication
const adel = new Person("TOUMI REDA/adel)","./img/members/com/adel.jpg","Web Dev / Desginer","toumireda34@gmail.com")
const yasmine = new Person("Boubezari yasmine","./img/members/com/yasmine.jpg","Chef","yasmineboubezari@gmail.com")
const hanane = new Person("Bekhti hanane ","./img/unnamed.jpg","Redaction","hananebekhti13@gmail.com")
const manel = new Person("Ghazi manel ","./img/members/com/manel.jpg","réseau sociaux ","ghazimanel2002@gmail.com")
const sofia = new Person("Djitli lilia sofia","./img/unnamed.jpg","redaction","djitlililia@gmail.com")
const Akawter = new Person("Ammar kaouter","./img/unnamed.jpg","réseau sociaux","ammarkaouter@gmail.com")
const taha = new Person("Arif louai ","./img/members/com/taha.jpg","infographie","tahaarif233@gmail.com")
const com = [yasmine,adel,taha,manel,sofia,hanane,Akawter]

//RE
const ouissem = new Person("Bakhti ouissem kadira","./img/members/re/bakhty.jpg","Chef","bakhtiouissem@gmail.com")
const aibManel = new Person("Aib manal ","./img/unnamed.jpg","membre","manelaib3@gmail.com")
const fwissam = new Person("Fetaitah wissam","./img/members/re/wissfat.jpg","membre","wissamfet@gmail.com")
const bghyzlene = new Person("Boukli ghyzlene ","./img/unnamed.jpg","membre ","ghyzlenebouk@gmail.com")
const diaa = new Person("Djaballah mohamed diaa","./img/unnamed.jpg","membre","mohameddia.djaballah@gmail.com")
const kawter = new Person("Kettab rabia kaouter ","./img/unnamed.jpg","membre","kettabkaouterrabia@gmail.com")
const amina = new Person("Amina Belkacemi ","./img/unnamed.jpg","membre","aminabelka01@gmail.com")
const relation = [ouissem,fwissam,diaa,bghyzlene,aibManel,amina]

//plannification
const abir = new Person("Boudghene stambouli abir","./img/members/plan/abir.jpeg","Chef","abir.boudghene@gmail.com")
const islam = new Person("Boutoub islam ","./img/unnamed.jpg","responsable SCI","boutoubmohamed@gmail.com")
const marwa = new Person("Ramdoum marwa","./img/members/plan/marwa.jpg","membre","marwaramdoum6@gmail.com")
const sara = new Person("Kadari sarah ","./img/unnamed.jpg","membre ","kadari.sara2001@gmail.com")
const kadi = new Person("Kadi taous","./img/unnamed.jpg","membre","kd_taous@hotmail.com")
const kami = new Person("Kamilia Belgacem","./img/members/plan/kami.jpeg","membre","belgkami@gmail.com")
const baya = new Person("Bouacid aya ","./img/unnamed.jpg","membre","bouacidaya@gmail.com")
const serin = new Person("Moussouni serine Leila  ","./img/members/plan/sirin.jpg","membre","moussouniserine@gmail.com")
const hind = new Person("Dekkak hind  ","./img/unnamed.jpg","membre","hinddekkak13@gmail.com")
const Brayan = new Person("Boutebel rayane  ","./img/unnamed.jpg","membre","not available")
const plan = [abir,serin,kami,marwa,sara,kadi,islam,baya,Brayan,hind]
//pr
const ilyes = new Person("Aissni ilyes","./img/members/ilyes.jpg","président ","aissaniilyes99@gmail.com")
const pr = [ilyes]

const malak = new Person("Sebaihi malak ","./img/members/malek.jpg","vice présidente","malaksebaihi2307@gmail.com")
const vc = [malak]

//all
const all = pr.concat(com,plan,relation,vc);

membersBTN.forEach((e)=>{
  e.addEventListener("click",(btn)=>{
    let Cbtn = btn.currentTarget
    let comite = btn.currentTarget.dataset.filter
    if(comite==='.co'){
      creatMembers(com)
      an(.5,.7)
      active(Cbtn)
    }
    if(comite==='.vc'){
      creatMembers(vc)
      an(.5,.7)
      active(Cbtn)
    }
    if(comite==='.pr'){
      creatMembers(pr)
      an(.5,.7)
      active(Cbtn)
    }
    if(comite==='.pl'){
      creatMembers(plan)
      an(.5,.7)
      active(Cbtn)
    }
    if(comite==='.re'){
      creatMembers(relation)
      an(.5,.7)
      active(Cbtn)
    }
    if(comite==='*'){
      creatMembers(all)
      an(.2,.3)
      active(Cbtn)
    }
    

  })
})
function active(x){
  filter_btns.forEach((button) => button.classList.remove("active"));
  x.classList.add("active");
}



function creatMembers(comite){
  grid.innerHTML=``
  comite.forEach((e)=>{

    let board = document.createElement('div');
    board.className = "profile-card";
    board.innerHTML=
    `
        <div class="img">
        <img src="${e.img} ">
        </div>
        <div class="caption">
          <h3>${e.name} </h3>
          <p>${e.role} </p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fas fa-envelope"></i></a>
          </div>            
        </div>
    `
     grid.appendChild(board);
    
  })
}


//scroll animation 
const sr = ScrollReveal({
  origin:"top",
  distance:"60px",
  duration:2500,
  delay:180
})
sr.reveal(".logo,.hamburger-menu")
sr.reveal(".header-content",{delay:600})
sr.reveal(".animLink",{delay:600,origin:"top",interval: 290})
sr.reveal(".foll",{delay:600,origin:"left",interval: 290})
sr.reveal(".gol ",{origin:"right"})
sr.reveal(".abt ",{origin:"right"})
sr.reveal(".abtl ",{origin:"left"})
sr.reveal(".us ",{origin:"right"})
sr.reveal(".card-wrap",{origin:"left",interval: 100})
sr.reveal(".evan ",{origin:"left"})
sr.reveal(".blog-wrap",{origin:"left",interval: 100})
sr.reveal(".blog-image",{delay:250,origin:"bottom"})
sr.reveal(".why ",{origin:"left"})
sr.reveal(".twhy ",{origin:"right"})
sr.reveal(".a ",{origin:"left"})

function an(d,s){
  gsap.from(".profile-card", {
      opacity: 0,
      duration:d, 
      x: "random(-100,100)",
      ease: "slow(0.7, 0.7, false)",
      stagger:s,
    });
}