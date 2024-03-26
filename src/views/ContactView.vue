<template>
    <div class="container bg-white mt-5 mb-5">
      <h1 class="hea text-danger p-5">Contact Me</h1>
      <div class="contact-wrapper">

<!-- Left contact page -->

<form id="contact-form" class="form-horizontal" action="https://formspree.io/f/xjvqlqny" method="post">

  <div class="form-group mt-5">
    <div class="col">
      <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
    </div>
  </div>

  <div class="form-group">
    <div class="col-sm-12">
      <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
    </div>
  </div>

  <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

  <button class="btn btn-dark send-button mb-5 mt-4 " id="submit" type="submit" value="SEND">
    <div class="alt-send-button">
      <i class="bi bi-send"></i><span class="send-text">SEND</span>
    </div>


  </button>

</form>


<!-- Right contact page -->

<div class="direct-contact-container mt-5">

  <ul class="contact-list mb-5">
    <li class="list-item"><i class="bi bi-geo-alt"><span class="contact-text place">Cape
          Town, Khayelitsha</span></i></li>

    <li class="list-item"><i class="bi bi-telephone-fill"><span class="contact-text phone"><a
            href="tel:+27 65 6013 640" title="Give me a call">(+27) 656 013 640</a></span></i></li>

    <li class="list-item"><i class="bi bi-envelope"><span class="contact-text gmail"><a href="mailto:Princetancu"
            title="Send me an email">Princetancu06@gmail.com</a></span></i></li>

  </ul>

  <hr>
  <ul class="social-media-list">

    <a href="https://github.com/Simamkele20" target="_blank" class="contact-icon">
      <i class="bi bi-github" aria-hidden="true"></i>
    </a>

    <a href="https://www.linkedin.com/in/simamkele-tancu-a74744262/" target="_blank" class="contact-icon">
      <i class="bi bi-linkedin" aria-hidden="true"></i>
    </a>


  </ul>
  <hr>
</div>
</div>
    </div>
  
   

  </template>
  