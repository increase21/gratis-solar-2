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
   // validating for one
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
         return displayError('Zip code is required')
      }

      if (email === '') {
         return displayError('Email is required')
      }

      if (!email.includes('@') || !email.includes('.')) {
         return displayError('Invalid email')
      }

      if (home_type === '') {
         return displayError('Home type not selected')
      }
      $('.error').text('')
      $('#fieldset_one').addClass('d-none')
      $('#fieldset_two').removeClass('d-none')
   })

   // do zip lookup
   $('#zcode').on('change', () => {
      var zipcode = $('#zcode').val();

      $.ajax({
         type: "GET",
         url: 'https://api.zippopotam.us/us/' + zipcode,
         dataType: 'json',
         beforeSend: function () {
            $('#z-validate').text('Validation zip...')
         }
      })
         .done(function (data) {

            $('#z-validate').text('*Correct');
            $('#submit_btn1').prop('disabled', false)
            //console.log( "second success" );
            var geodata = data['places'];
            // var city = geodata[0]['place name'];
            var state = geodata[0]['state abbreviation'];
            // $('#city').val(city);
            // $('#state').val(state);

            // get the locat providers
            var $select = $('#power_com');
            $.getJSON('https://api.imgleads.com/data/9-current_provider.ashx?stateAbb=' + state, function (data) {
               $select.html('');
               $select.append('<option value="">Select Power Company</option>');
               $.each(data.currentProvider, function (key, val) {
                  $select.append('<option value="' + val.name + '">' + val.name + '</option>');
               });
            });

         })
         .fail(function (jqXHr, textStatus, errorThrown) {
            //console.log( "error" );
            $('#z-validate').text('Invalid Zip Code');
            $('#submit_btn1').prop('disabled', true)
         })
         .always(function () {
            //console.log( "complete" );
         });
   })

   // validating form two
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
      if (PowerCom === '') {
         return displayError('Power company not selected')
      }
      $('#fieldset_two').addClass('d-none')
      $('#fieldset_three').removeClass('d-none')
   })

   $('#phone').on('keyup', (e) => {
      var num = e.target.value
      if (num !== '' && e.keyCode !== 8) {
         var corretnum = num.match(/\d/g).join('')
         if (corretnum.length > 5) {
            var number = `(${corretnum.substr(0, 3)})-${corretnum.substr(3, 3)}-${corretnum.substr(6)}`
         } else if (corretnum.length >= 3) {
            var number = `(${corretnum.substr(0, 3)})-${corretnum.substr(3, 3)}`
         } else {
            var number = corretnum
         }
         e.target.value = number
      }
   })

   // when the free quote btn is clicked
   $('.gfree_btn').on('click', () => {
      fbq('track', 'ViewContent');
      $('html,body').animate({ scrollTop: $('.free_quote_area').offset().top - 100 }, 400);
   })
   // when the final btn is clicked display the thank you page
   $('body').on('click', '#submit_btn3', () => {
      var firstName = $('#first_name').val()
      var lastName = $('#last_name').val()
      var phone = $('#phone').val()
      var creditScore = $('#credit_score').val()
      var checkbox = $('#leadid_tcpa_disclosure').prop('checked')

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
      DoSignup()
   })

   // close the modal once the close btn is clicked
   $('body').on('click', '.refresh-btn', function () {
      location.reload()
   })

   const thankU = `<div style="line-height:2;" class="text-center p-3" id="thank_you_for"><h1 class="custom-font">Thank You</h1>
   <p style="font-size:18px">For using Topsolaroffers.com</p>
   <p style="font-size:18px">You will be contacted shortly with great money-saving offers.</div>`


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

   // FOr submitting sign-up forms
   function DoSignup(form) {
      // get the Leadid
      let Leadid = $('#leadid_token').val()
      // Live
      var url = "https://gratisdigital.listflex.com/lmadmin/api/leadimport.php?";
      // Test
      //var url = "/_submit-test.php";
      var formData = `apikey=F9AW57HCQW1R4JOM5&list_id=1576&cust_field_71=${Leadid}&`
      // get all the form inputs
      formData += $('#process_form').serialize();
      // append the form input with the url
      let callUrl = url + formData
      // submit to the database
      $.ajax({
         type: "GET",
         url: callUrl,
         // dataType: 'json',
         beforeSend: function () {
            // Disable the button and Open the Modal dialog to show Processing....
            $('#submit_btn3').attr('disabled', 'disabled');
            $('.spinner').removeClass('d-none')
         }
      })
         .done(function (data) {
            if (data == 'Success') {
               $('.free_quote_area').html(textSuccess)
               fbq('track', 'CompleteRegistration');
               $('html,body').animate({ scrollTop: $('#thank_you_for').offset().top - 100 }, 400)
            }
            else {
               $('.free_quote_area').html(textFail)
               $('html,body').animate({ scrollTop: $('#thank_you_for').offset().top - 100 }, 400)
            }
         })
         .fail(function (jqXHr, textStatus, errorThrown) {
            // show an error message
            return displayError('We\'re sorry, an error occurred. Please try again in a few minutes.');
         })
      // .always(function () {
      //    //console.log('Always');
      //    $('#signupButton').removeAttr('disabled');
      // });
   }


   const textSuccess = `<div id="thank_you_for" class="p-3">
   <h3 class="text-green">THANK YOU FOR YOUR REQUEST</h3>
<p class="mt-3"><strong>One of our agents will contact your shortly</strong></p>
</div>`
   const textFail = `<div id="thank_you_for" class="p-3">
   <h2 class="text-red">Oops!</h2>
<p class="mt-3"><strong>Something went wrong with your submission, try again</strong></p>
<p><button class="btn mt-2 text-white bg-red refresh-btn">Try Again</button>
</div>`

})(jQuery);