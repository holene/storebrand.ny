(function($){
// Start navigation padding

  $(document).ready(function() {

    if(window.location.href.indexOf("/kontakt-oss") > -1 && document.referrer.indexOf("/bedrift") > -1){
       window.location.href=window.location.href + '#tab-Bedrift';
    }

    if ( window.location.href.indexOf('#tab-') > -1 ){
      var anchor = window.location.href.substring(window.location.href.lastIndexOf("#")).split("?")[0];
      var contactTabs = $('#tabs li');
      $(contactTabs).each(function(){
        if($(this).children("a").attr("href") === anchor) {
          $(this).children("a").click();
          return;
        }
      });
    }

    $(".dropdown").on("hide.bs.dropdown", function() {
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        if( $(this).closest('#top-menu-nav').length ) {
          $(".shadow-overlay").css("display","none");
          $('.current').css("background-color", "#da291c;");
        }
      }
    });

    $(".dropdown").on("show.bs.dropdown", function() {
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        if( $(this).closest('#top-menu-nav').length ) {
          $(".shadow-overlay").css("display","block");
          if(!$(this).is($('.current'))) {
            $('.current').css("background-color", "#bb1b18");
          }
        }
      }
    });

    $(".dropdown").on("shown.bs.dropdown", function() {
      if(!$(this).is($('.current.login'))){
        $('#start-login-form input').focus();
      }
    });

    // Slide up the dropdown on clicking the remove icon
    $(".dropdown-menu > li > a").click(function() {
      $(".dropdown").removeClass('open');
      $(".dropdown").trigger("hide.bs.dropdown");
    });
  });

  //Checking for carts
  $(document).ready(function() {
   var cartCount = readCookie("cartCount");
   // seatbelt: window.showCartIcon might not be defined:
   if(window.hasOwnProperty('showCartIcon')){
    if (cartCount != null && showCartIcon === true && cartCount != 0) {
        addCartBtn(cartCount);
      }
    }
  });

// Showing/hiding the overlay on clicking the dropdown toggle
  $(document).ready(function() {
    //initialize the overlay to get the document's dimensions
    $(".shadow-overlay").css("width",$(document).width());
    $(".shadow-overlay").css("height",$(document).height());
    showImportantNotice();
  });

  $(window).resize(function() {
    //Recalculate the overlay when window is resized
    $(".shadow-overlay").css("width",$(document).width());
    $(".shadow-overlay").css("height",$(document).height());
  });

  // Script for populating the dropdown with the selected tab link
  $(document).ready(function() {
    $(".dropdown-tabs .dropdown .heading").html($(".dropdown-tabs .dropdown-menu li.active a").html());
    $(".dropdown-tabs .dropdown-menu li a").click(function() {
      $(".dropdown-tabs .dropdown-menu li.active").removeClass("active");
      $(".dropdown-tabs .dropdown .heading").html($(this).html());
    });

    $(".dropdown-tabs button").click(function() {
      $(".dropdown-tabs button span.icon").toggleClass('chevron-up chevron-down');
    });
  });

 $(document).ready(function() {
    $(".dropdown-tabs .dropdown-select").change(function() {
      $("#main-tab-content > .tab-pane.active").removeClass("active");
      $(".tab-content #tab-"+this.value).addClass("active");
    });
  });

// Start prevent top menu clicks from running away with the page
  $(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation();
  });
// End prevent top menu clicks from running away with the page

// End navigation padding

// Start content padding

// Start Adding twister effect to accordion/FAQ
  $(document).ready(function () {
    $("ul[data-widget=stbFaq]").stbFaq();
  });

  $.fn.stbFaq = function () {
    $(this).find("a").on("click", function (b) {
      if ($(this).hasClass("twister")) {
        b.preventDefault();
        var c = $(this).siblings("ul.accordion li .answer");
        $(this).hasClass("open") ? ($(this).removeClass("open"), c.slideUp(200)) : ($(this).addClass("open"), c.slideDown(200)); // jshint ignore:line
      }
    });
  };

  $(document).ready(function() {
    $('.stb-accordion').on('show.bs.collapse', function (event) {
      if($(event.target).parents('.stb-accordion').is('.toggle-red-chevron')) {
        $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up red');
      }else{
        $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up');
      }
      $(event.target).parent().addClass('active');
    });

    $('.stb-accordion').on('hide.bs.collapse', function () {
      if($(event.target).parents('.stb-accordion').is('.toggle-red-chevron')) {
        $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up red');
      }else{
        $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up');
      }
      $('.panel-collapse.collapse.in').parent().removeClass('active');
    });
  });
// End twister effect on accordion/FAQ

// Achieve Equal height columns
  $("document").ready(function() {
    $(".row .column").matchHeight(true);
  });

  $(window).resize(function() {
    $(".row .column").matchHeight(true);
  });

  //Equalheights fix for elements in hidden tabs
  $(document).ready(function() {
    $('ul[data-tabs="tabs"] a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.tab-pane.active .row .column').matchHeight(true);
    });
  });
  // End achieve Equal heights


  // Opens the href in the rel-attribute to the clickable class
  // DS-1425 make containers with only one link clickable, remove clickable class when more
  $(document).ready(function () {
    $(".clickable.stb-box.big").each(function (index, elem) {
      if ($(elem).find("a").length != 1) $(this).removeClass('clickable');
    });
    $(".clickable").click(function () {
      if ($(this).find("a").first().attr("target") === '_blank') {
        window.open($(this).attr("rel"));
      } else {
        window.document.location = $(this).attr("rel");
      }
    }).find("a").click(function (event) {
      event.preventDefault();
      //Do nothing, as the clickable will handle this click.
    });
  });

  //Appending arrow after link for clickable links
  $(document).ready(function() {
    var arrowCode ='<span class="stb-sprite-small arrow-right pull-right"></span>';
    $('a.list-group-item').append(arrowCode);
  });

  //Adding link visibility to contents in first column in clickable rows in tables
  $(document).ready(function() {
    $('tr.clickable td:first-child').each(function() {
      if($(this).parent().hasClass('analyze')){
        $(this).html('<a href="#"' + ' class="analyze">' + $(this).text() + '</' + 'a>');
      }else{
        $(this).html('<a href="#"' + '>' + $(this).text() + '</' + 'a>');
      }
    });
  });

  // End content padding

  // Adding hotkeys based on Resig
  $("document").ready(function() {

    //Hotkey for search
    if($('.typeahead').length) {
      $(document).bind('keydown', 'shift+s', function(event){event.preventDefault();$('.navbar-nav .typeahead').focus();});
    }

    //Hotkey for bottom
    if( $('footer').length) {
      $(document).bind('keydown', 'shift+b', function(){$('html, body').animate({ scrollTop: $('footer').offset().top}, 500);});
    }

    //Hotkey for login
    if($('li.login > a').length) {
      $(document).bind('keydown', 'shift+l', function(){$('li.login > a').click();});
    }

    //Hotkey for top
    $(document).bind('keydown', 'shift+t', function(){$('html, body').animate({ scrollTop: 0}, 500);});
  });

// Check for list groups with .expandable class and make them expandable
  $(document).ready(function() {
    $('ul.stb-list-group.expandable').each(function(index) {
      makeExpandableList($(this),2);
    });
  });
  /* ***** START Make lists expandable ***** */
  function makeExpandableList(selector) {
    initialExpandable(selector);

    var showMore = selector.find('.showMore');

    showMore.click(function() {
      if(showMore.hasClass('open')) {
        initialExpandable(selector);
        showMore.find('span').toggleClass('chevron-up red chevron-down');
      } else {
        selector.children('li').show(400);
        showMore.find('span').toggleClass('chevron-up red chevron-down');
      }
      showMore.find("span.show-detail, span.hide-detail").toggle();
      showMore.toggleClass('open');
    });
  }
  /* ***** END Make lists expandable ***** */

  /* ***** START Loop through list, showing li elements with summary class and hide all other li elements ***** */
  function initialExpandable(selector) {
    selector.children('li').each(function(index) {
      if(!$(this).is('.summary, .showMore')) {
        $(this).hide(400);
      }
    });
  }
  /* ***** END Loop through list, showing li elements with summary class and hide all other li elements ***** */


  // Adjustments to Bootstrap Modal window
  var modalDialog = {
    triggerModal : function(type,options) {
      if(type === 'confirm') {
        var markup = '<div class="modal stb-modal fade" id="dialogModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-span6">' +
            '<div class="modal-content">' +
            '<div class="modal-header stbcolor-secondary fifth">' +
            '<button type="button" class="close" data-dismiss="modal" onclick="options.onCloseAction();"><p class="pull-left">Lukk</p><span class="stb-sprite-medium remove pull-left"></span></button>' +
            '<h4 class="modal-title"><span class="stb-color-sprite-medium info"></span></h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<h3>'+options.title+'</h3>' +
            '<p>'+options.text+'</p>' +
            '<form>' +
            '<button class="stb-btn" onclick="options.onConfirmAction();">Yes</button>' +
            '<button class="stb-btn transparent light" onclick="options.onCancelAction();">No</button>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        if($('#dialogModal').length === 0) {
          $('body').append(markup);
        }

        $('#dialogModal').show();
        $('#dialogModal').modal();
      }
    }
  };
  // End Adjustments to Bootstraps Modal window

  // Script to highlight anchor tags in mini and big boxes on mouseenter
  $("document").ready(function () {
    $(".stb-box.mini").mouseenter(
      function () {
        $(this).find('a').addClass('link-lookalike-fake-hover');
      }).mouseleave(
      function () {
        $(this).find('a').removeClass('link-lookalike-fake-hover');
      });
    $(".stb-box.big.clickable").mouseenter(
      function () {
        $(this).find('a').addClass('link-lookalike-fake-hover');
      }).mouseleave(
      function () {
        $(this).find('a').removeClass('link-lookalike-fake-hover');
      });
  });

  // Helper function to establish presence of scroll bar
  $.fn.hasScrollBar = function() {
    return this.get(0).scrollWidth > this.get(0).clientWidth;
  };

  //Show and hide contact us links
  $(document).ready(function() {
    $('a.contact').click(function() {
      showHideForm(this);
    });

    $('.contactus-cancel').click( function() {
      showHideForm($(this).parents('.contactus-form').prev('div').find('.contact'));
    });

    $('.contactus').submit(function(event) {
      event.preventDefault();
      var form = $(this);
      $(form).find(".help-block").remove();
      var phoneNumber = $(form).find('input.phone').val();
      if(!isNaN(phoneNumber) && phoneNumber.length === 8){
        var callbackUrl = $(form).find(".callback-channel").val() + phoneNumber;
        $(form).append("<iframe src='" + callbackUrl + "' scrolling='auto' frameborder='0' width='1' height='1' name='call'></iframe>");
        $(form).next('.contactus-receipt').find('.contact-number').append(phoneNumber);
        $(form).next('.contactus-receipt').show();
        $(form).hide();
      } else {
        $(form).find('input.phone').before("<span class='help-block has-error'><small class='help-block'><span class='stb-color-sprite-small warning'></span> Ugyldig telefonnummer!</small></span>");
      }
    });
  });

  function showHideForm(elem) {
    $(elem).parent('div').next('div').slideToggle('fast');
    $(elem).find('span:last').toggleClass('chevron-down chevron-up');
  }

  $(document).ready(function() {
    $(".contactElements a.chat.open").click(function(event){
      var contactElement = $(this);
      var contentKey = $(this).attr('data-key');
      var elementId = $(this).attr('data-element-id');
      var chatStatusUrl = $('#chat-status').attr('data-url');
      if (chatStatusUrl !== '' && contentKey !== null) {
        $.ajax({
          url: chatStatusUrl + '?key=' + contentKey,
          async: false,
          dataType: "json",
          data: {},
          success: function (chatData) {
            if (chatData.status === 'true') {
              try {
                $(contactElement).openChatResponsive();
                event.preventDefault();
              } catch (e) {
                return true;
              }
            } else {
              $(contactElement).removeAttr('href').removeClass('open').addClass('closed');
              $(contactElement).next().children().text(chatData.text);
              var icon = $(contactElement).children('.circle-16');
              $(icon).removeClass("stbcolor-secondary");
              $(icon).addClass("stbcolor-gray");
              event.preventDefault();
            }
          },
          error: function () {
            contactElement.attr('target','_blank');
          }
        });
      };
    });
  });

  $(document).ready(function() {
    $('.attachmentUpload input.file').change(function(e) {
      if(e.target.files.length > 0){
        var attachments = e.target.files.length > 1 ? "<p><b>"+e.target.files.length+" filer valgt:</b></p>" :  "<p><b>1 fil valgt:</b></p>";

        for(var i = 0; i < e.target.files.length; i++){
          attachments += '<ul class="stb"><li>'+e.target.files[i].name+'</li></ul>';
        }

        $(this).parent().prev('.uploadedAttachments').empty().append(attachments);
      }else{
        $(this).parent().prev('.uploadedAttachments').empty();
      }

    });

    $('.stb-btn.uploadFile').click(function(e) {
      e.preventDefault();
      $(this).prev('.attachmentUpload').find('input.file').click();
    });

  });

}(jQuery));

/* Validator for national identity number */
/* PRIVATE */
var idValidator = {
  message: '<span class="stb-color-sprite-small warning"></span> Ugyldig fødselsnummer!',
  callback: function(value, validor){
    return verifyIDNumber(value);
  }
};
/* CORPORATE */
var idValidatorCorporate = {
  message: '<span class="stb-color-sprite-small warning"></span> Ugyldig fødselsnummer!',
  callback: function(value, validor){
    return verifyIDNumberCorporate(value);
  }
};

function getCartUrl() {
  var path = '/utsjekk/#/cart/';
  var hostname = window.location.hostname;
  if (hostname === 'localhost' || /^((client(-(u|t|ts))?)|(t|u|pr|ts))\.stb\.intra$/.test(hostname)) {
    return path;
  }
  var subHost = window.location.hostname.split('.')[0];
  var env = subHost.split('-')[1] || '';
  var getOptionalEnv = function() {
    return env ? '-' + env : '';
  }
  var getOrderClientHost = function() {
    return 'www' + getOptionalEnv() + '.storebrand.no';
  }
  return location.protocol + '//' + getOrderClientHost() + path;

}


var stb = stb || {};
(function(namespace){
    namespace.cart = {
      refreshCartCount: function() {
        var cartCount = readCookie("cartCount");
        if(window.hasOwnProperty('showCartIcon')){
          if (cartCount != null && showCartIcon === true && cartCount != 0) {
              $('#cartCount').html(cartCount);
            }
          }
      },
      showCart: function() {
        var cartCount = readCookie("cartCount");
        if(window.hasOwnProperty('showCartIcon')){
          if (cartCount != null && showCartIcon === true && cartCount != 0) {
              addCartBtn(cartCount);
            }
          }
      }
    }

})(stb);

//Adds cartIcon if cartCount cookie is found
function addCartBtn(count) {
  var cartUrl = getCartUrl();
  $('body').prepend('<div class="cartIcon shoppingCartIcon"><a href="'+cartUrl+'"><div class="circle-24 stbcolor-secondary first"><span class="stb-sprite-medium white shopping-cart"></span></div><div class="circle-16 stbcolor-primary first cartNr" style="border-radius:24px;height:24px;width:24px;padding-left:8px;padding-top:2px;"><span class="h2Number" id="cartCount">'+count+'</span></div></a></div>');
}

//Toggle cart show/hide when scrolling
$(window).scroll(function(event) {
  if ($(window).scrollTop() === 0) {
    $('.shoppingCartIcon').fadeIn('slow');
  } else {
    $('.shoppingCartIcon').fadeOut('slow');
 }
});

// Adding Chrome-friendly "Skip to main content" functionality
$(document).ready(function () {
  $("#skipToContent").click(function () {
    $('#mainContent').attr('tabIndex', -1).focus();
  });
});

// Adding ARIA fixes
$(document).ready(function() {
  $('.tab-container a').click(function(e){
    e.preventDefault();
    $('.tab-container a').attr('aria-selected', 'false');
    $(this).tab('show').attr('aria-selected', 'true');
  });
});
