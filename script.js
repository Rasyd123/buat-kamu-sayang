const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");

Iya.addEventListener("click", function () {
  Iya.value = parseInt(Iya.value) + 1;
  Text.classList.remove("text-animate");

  if (Iya.value == 1) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "halo sayang";
    Text.classList.add("text-animate");
  } else if (Iya.value == 2) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "aku mohon maaf jika ada salah";
    Image.setAttribute(
      "src",
      "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif"
    );
    Text.classList.add("text-animate");
  } else if (Iya.value == 3) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "berbuat khilaf adalah sifat";
    Text.classList.add("text-animate");
  } else if (Iya.value == 4) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "meminta maaf adalah kewajiban";
    Text.classList.add("text-animate");
  } else if (Iya.value == 5) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "mohon maaf kalo aku ada salah ke kamu";
    Text.classList.add("text-animate");
  } else if (Iya.value == 6) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "di hari idul adha ini kamu jangan keluar nanti takut keinjek sapi";
    Text.classList.add("text-animate");
  } else if (Iya.value == 7) {
    Image.setAttribute(
      "src",
      "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif"
    );
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML =
      "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum";
    Text.classList.add("text-animate");
  } else if (Iya.value == 8) {
    Image.setAttribute(
      "src",
      "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif"
    );
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Selamat hari raya Idul Adha!!";
    Text.classList.add("text-animate");
  } else if (Iya.value == 9) {
    Image.setAttribute("src", "https://i.imgur.com/WxXIZYY.jpeg");
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Silahkan klo mau ngasih THR, Hehe :D";
    Text.classList.add("text-animate");
    Iya.remove();
  }
});
