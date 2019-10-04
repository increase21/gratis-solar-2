(function ($) {
   'use strict';



   // Sticky Active Code ===================================================================

   $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
         $('.header-area-lit').addClass('sticky');
      } else {
         // $('#header').addClass('d-none')
         $('.header-area-lit').removeClass('sticky');
      }
   });

   // $('.carousel').carousel({
   //    interval: 2
   // })

   const displayError = (message) => {
      $('.error').text(message)
   }

   $('#submit_btn1').on('click', (e) => {
      e.preventDefault();
      var addr = $('#addr').val()
      var zCode = $('#zcode').val()
      var email = $('#email').val()
      var home_type = $('#home_type').val()

      if (addr === '') {
         return displayError('Address is required')
      }

      if (zCode === '') {
         return displayError('Address is required')
      }

      if (email === '') {
         return displayError('Address is required')
      }

      if (home_type === '') {
         return displayError('Home type not selected')
      }
      $('.qt_form').html(form2)
   })

   $('body').on('click', '#submit_btn2', (e) => {
      e.preventDefault();
      var propType = $('#prop_type').val()
      var roofShade = $('#roof_shade').val()
      var eBill = $('#e_bill').val()
      var PowerCom = $('#power_com').val()

      if (propType === '') {
         return displayError('Property type not selected')
      }

      if (roofShade === '') {
         return displayError('Roof shade not selected')
      }

      if (eBill === '') {
         return displayError('Electric Bill not selected')
      }
      $('.qt_form').html(form3)
   })

   // when the free quote btn is clicked
   $('.gfree_btn').on('click', () => {
      $('html,body').animate({ scrollTop: $('.free_quote_area').offset().top - 100 }, 400)
   })
   // when the final btn is clicked display the thank you page
   $('body').on('click', '#submit_btn3', () => {
      var firstName = $('#first_name').val()
      var lastName = $('#last_name').val()
      var phone = $('#phone').val()
      var creditScore = $('#credit_score').val()
      var checkbox = $('#fr_checkbox').prop('checked')


      if (firstName === '') {
         return displayError('First Name is required')
      }

      if (lastName === '') {
         return displayError('Last Name is required')
      }

      if (creditScore === '') {
         return displayError('Credit Score not selected')
      }

      if (phone === '') {
         return displayError('Phone number is required selected')
      }
      if (!checkbox) {
         return displayError('You have to accept the terms and conditions')
      }

      $('.free_quote_area').html(thankU)
   })


   const form2 = ` <div class="show_process d-flex">
<div><span>1</span></div>
<hr>
<div class="active"><span>2</span></div>
<hr>
<div><span>3</span></div>
</div>
<p class="text-center error neon-red mt-1" style="font-size: 15px">
</p>
<div class="">
<label for="prop_type">Property Type</label>
<select class="form-control" name="home_type" id="prop_type">
   <option value="">Property Type?</option>
   <option>Single Famile</option>
   <option>Multiple Family</option>
   <option>Townhome</option>
   <option>Condominium</option>
   <option>Duplex</option>
   <option>Mobile Home</option>
   <option>Others</option>
</select>
<label for="roof_shade">How Much Sun On Your Roof</label>
<select class="form-control" name="home_type" id="roof_shade">
   <option value="">Does Your Roof Get Sun?</option>
   <option>No Shade</option>
   <option>A Little Shade</option>
   <option>A Lot of Shade</option>
   <option>Uncertain</option>
</select>
<label for="e_bill">Average Monthly Electric Bill</label>
<select class="form-control" name="home_type" id="e_bill">
   <option value="">Your Average Electric Bill</option>
   <option>$0-50</option>
   <option>$51-100</option>
   <option>$101-150</option>
   <option>$151-200</option>
   <option>$201-300</option>
   <option>$301-400</option>
   <option>$401-500</option>
   <option>$501-600</option>
   <option>$601-700</option>
   <option>$701-800</option>
   <option>$801+</option>
</select>
<label for="power_com">Current Utility Provider</label>
<select class="form-control" name="home_type" id="power_com">
   <option>Others</option>
</select>
<button type="button" class="btn form-control bg-red white-color mt-1" type="submit" style="width: 100%" id="submit_btn2">NEXT </button></div>
</div>`


   const form3 = ` <div class="show_process d-flex">
<div><span>1</span></div>
<hr>
<div><span>2</span></div>
<hr>
<div class="active"><span>3</span></div>
</div>
<p class="text-center error neon-red mt-1" style="font-size: 15px">
</p>
<div class="">
<label for="first_name">First Name</label>
<input type="text" class="form-control" id="first_name" placeholder="First Name">

<label for="last_name">Last Name</label>
<input type="text" class="form-control" id="last_name" placeholder="Last Name">

<label for="phone">Phone: (10-Digits)</label>
<input type="tel" maxLength="10" minLength="10" class="form-control" id="phone" placeholder="Phone">

<label for="credit_score">What is your Credit Score</label>
<select class="form-control" name="home_type" id="credit_score">
   <option value="">Estimate Your Credit Score</option>
   <option>Excellent</option>
   <option>Good</option>
   <option>Fair</option>
   <option>Poor</option>
</select>

<div class="mt-1">
<label>
   <input type="checkbox" id="fr_checkbox" />
   <span style="font-size:12px"> By clicking the submit button, you agree to our <a href="http://www.solarebate.com/privacy.php" target="_blank">Privacy Policy</a> and authorize SolarEbate.com and its network of <a href="http://www.intelligentmediagroup.net/partners.asp#improvement" target="_blank"> service providers</a> to contact you at the telephone or mobile number you entered.</span>
</label>
</div>
<button type="button" class="btn form-control bg-red white-color mt-1" type="submit" style="width: 100%" id="submit_btn3">GET A QUOTE TODAY!</button></div>
</div>`


   const thankU = `<div style="line-height:2 text-center p-3"><h1 class="custom-font">Thank You</h1>
   <p style="font-size:18px">For using Solarebate.com</p>
   <p style="font-size:18px">You will be contacted shortly with great money-saving offers.</div>`


   // regarding offers for solar products and services using automated telephone technology including auto-dialers, pre-recorded messages, and text messages, even if your telephone or mobile number is currently listed on any state, federal, or corporate "Do Not Call" list, and you are not required to give your consent as a condition of purchase. You will receive calls from up to 4 solar providers. Message and data rates may apply. You understand that this consent is not a condition of purchase and that you may revoke this consent at any time




   // Welcome Slider Active Code ===================================================================

   $(".main-slide").owlCarousel({
      nav: true, // Show next and prev buttons
      slideSpeed: 500,
      paginationSpeed: 100,
      singleItem: true,
      loop: true,
      dot: false,
      autoplay: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   });


   //Gallery Slider ================================================================================

   $(".gallery-slide").owlCarousel({
      smartSpeed: 450,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      margin: 5,
      bullet: false,
      responsive: {
         0: {
            items: 2
         },
         480: {
            items: 2
         },
         800: {
            items: 3
         },
         900: {
            items: 4
         },
         1000: {
            items: 5
         },
         1200: {
            items: 6
         },
         1400: {
            items: 7
         }
      }
   });


   //Review Slider =================================================================================

   $(".review-slider").owlCarousel({
      nav: false, // Show next and prev buttons
      slideSpeed: 500,
      singleItem: true,
      paginationSpeed: 400,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 2
         }
      }
   });




   // Partner Slider Active Code ===================================================================

   $(".partner-slide").owlCarousel({
      smartSpeed: 450,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      margin: 5,
      bullet: false,
      responsive: {
         0: {
            items: 1
         },
         450: {
            items: 2
         },
         600: {
            items: 3
         },
         800: {
            items: 3
         },
         900: {
            items: 4
         },
         1000: {
            items: 5
         }
      }
   });


   // Mobile Menu  =================================================================================

   $('#nav').slicknav({
      label: '',
      closeOnClick: true,
      prependTo: '#mobile-menu '
   });




   //Timer  ========================================================================================

   $('.counter').counterUp({
      time: 2000
   });


   // Preloader active code  ==============================================================================

   $(window).on('load', function () {
      $('body').css('overflow-y', 'visible');
      $('#preloader').fadeOut('slow', function () {
         $(this).remove();
      });
   });



   // Active Menu Js  ==============================================================================

   var elm = document.querySelector('#header');
   var ms = new MenuSpy(elm);



   // WOW Js  ====================================================================================
   new WOW().init();


   // Smoth Scroll  ================================================================================

   // Smoth Scroll
   smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
      selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      offset: 70, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
      callback: function (anchor, toggle) { } // Function to run after scrolling
   });



})(jQuery);