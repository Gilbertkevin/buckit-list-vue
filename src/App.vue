<template>
  <div id="app">

    		<!-- Wrapper -->
    <div id="wrapper">

      <!-- Header -->
      <!-- Note: The "styleN" class below should match that of the banner element. -->
        <header id="header" class="alt style2">
          <a href="/login" class="logo"><strong>BuckIt</strong></a>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

      <!-- Menu -->
        <nav id="menu">
          <ul class="links">
            <li><a href="/buckit">Buckit</a></li>
            <li><a href="/category">Categories</a></li>
          </ul>
          <ul class="actions stacked">
            <li><a href="/login" class="button primary fit">Get Started</a></li>
            <li><a href="/signup" class="button fit">Log In</a></li>
          </ul>
        </nav>

      <!-- Banner -->
      <!-- Note: The "styleN" class below should match that of the header element. -->
        <!-- <section id="banner" class="style2">
          <div class="inner">
            <span class="image">
              <img src="images/pexels-suzy-hazelwood-1750268.jpg" alt="" width="100%"/>
            </span>
            <header class="major">
              <h1>BuckIt</h1>
            </header>
            <div class="content">
              <p>Lorem ipsum dolor sit amet nullam consequat<br />
              sed veroeros. tempus adipiscing nulla.</p>
            </div>
          </div>
        </section> -->
        
      <router-view />
      <!-- Contact -->
        
      <!-- Footer -->
        <footer id="footer">
          <div class="inner">
            <ul class="icons">
              <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
              <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            </ul>
            <ul class="copyright">
              <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>

    </div>
  </div>
</template>

<style>

</style>
