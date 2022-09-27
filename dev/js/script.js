
$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
});


$(function() {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});



  $('.promocode-add').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-promocode.close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });



   $('.but-change-password').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-promocode.close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


$('.but_new_parcel').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-promocode.close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});



$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "");
});

function ValidatePassword() {
  var rules = [{
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
  ];
  var password = $(this).val();

  $("#Length").removeClass(password.length > 8 ? "glyphicon-remove" : "glyphicon-ok");
  $("#Length").addClass(password.length > 8 ? "glyphicon-ok" : "glyphicon-remove");

  for (var i = 0; i < rules.length; i++) {

    $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
    $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
      }
    }

    $(document).ready(function() {
      $(".password").on('keyup', ValidatePassword)
    });



$(function() {
    $(".login-form-valid").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
        },
    });
});

 

$(".change_password_valid").validate({
    rules: {
        "email": {
            required: true,
            emailRegex: true,
        },
    },
    messages: {
        "email": {
            required: "You must enter a email name",
            emailRegex: "Login format not valid"
        },
    },
});


$(".prohibited_items_valid").validate({
    rules: {
        "obligatory_check": {
            required: true,
        },
    },
    messages: {
        "obligatory_check": {
            required: "Required field",
        },
    },
});

/*$(".btn_prohibited_items").click(function(e){
  e.preventDefault();
 let prohibited_submit = $(".prohibited_items_valid").submit();
  if (prohibited_submit==true) {
    window.open('new-parcel.html');
  } else {
    
  }
});*/



  $(".prohibited_items_valid").submit(function() { 
    let th = $(this); 
    if (th.valid()) { 
        location.href = 'new-parcel.html';
     }
  }



 $(".promocode_valid").validate({
    rules: {
        "promocode": {
            required: true,
        },
    },
    messages: {
        "promocode": {
            required: "Required field",
        },
    },
});


 $(".amount-form").validate({
    rules: {
        "amount_sent": {
            required: true,
        },
    },
    messages: {
        "amount_sent": {
            required: "Required field",
        },
    },
});








$(function() {
    $(".form-create-account").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
            "password_confirm": {
              required: true,
              equalTo : '[name="password"]'
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "year": {
              required: true,
            },
            "month": {
              required: true,
            },
            "day": {
              required: true,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
            "password_confirm": {
              required: "Password is reguired",
              equalTo : "Enter the correct password"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "year": {
              required: "Required field",
            },
            "month": {
              required: "Required field",
            },
            "day": {
              required: "Required field",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
        },
    });
});

$(function() {
    $(".phone").intlTelInput({
      allowDropdown: true,
      initialCountry: "us",
      separateDialCode: true,
      preferredCountries: ["fr", "us", "gb"],

        // options here
    });
});

$(function() {
    $(".form-user-address").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            "street": {
              required: true,
            },
            "apt": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Email format not valid"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
            "street": {
              required: "Required field",
            },
            "apt": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
        }
    });
});


$(".form-parcel-details").validate({
        rules: {
            "province": {
                required: true,
            },
            "country": {
                required: true,
                passwordRegex: true,
            },
            "parcel_weight": {
              required: true,
            },
            "length": {
              required: true,
            },
            "height": {
              required: true,
            },
            "width": {
              required: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
            "password_confirm": {
              required: "Password is reguired",
              equalTo : "Enter the correct password"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "year": {
              required: "Required field",
            },
            "month": {
              required: "Required field",
            },
            "day": {
              required: "Required field",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
        },
    });


$(".form-deliver-to").validate({
        rules: {
            "province": {
                required: true,
            },
            "oblast": {
                required: true,
                passwordRegex: true,
            },
            "street": {
              required: true,
            },
            "apt": {
              required: true,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "apt": {
              required: "Required field",
            },
            "street": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "oblast": {
              required: "Required field",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
        },
    });



$(".form-parcel-content").validate({
        rules: {
           "declared_value": {
              required: true,
           },
           "declared_value2": {
              required: true,
           },
           "obligatory_checkbox": {
              required: true,
           },  
        },
        messages: {
            "declared_value": {
              required: "Required field",
           },
           "declared_value2": {
              required: "Required field",
           },
           "obligatory_checkbox": {
              required: "Required field",
           },
        },
});



$(".form-payment").validate({
        rules: {
           "card_number": {
              required: true,
              maxlength: 16,
              number: true,
           },
           "first_name": {
              required: true,
              minlength: 3,
           },
           "last_name": {
              required: true,
              minlength: 3,
           }, 
           "expiration": {
              required: true,
              number: true,
              maxlength: 2,
           }, 
           "exp_year": {
              required: true,
              number: true,
              maxlength: 2,
           },
           "cvc": {
              required: true,
              number: true,
              maxlength: 3,
           },
        },
        messages: {
           "card_number": {
              required: "Required field",
              maxlength: "Please enter no more than 16 characters.",
              number: "Please enter only number"
           },
           "first_name": {
              
           },
           "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
           }, 
           "expiration": {
              required: "Required field",
           }, 
           "exp_year": {
              required: "Required field",
           },
           "cvc": {
              required: "Required field",
           },
        },
});



$(".gumb").click(function(){
  $(this).toggleClass('active');
  $(".nav-menu").slideToggle(400)
});



    $(".click-user-profile").click(function(){
        $('.profile-create-wrap .w33').hide()
        $(".profile-create-menu li").removeClass('active')
        $(".user-profile").show()
        $(this).addClass('active')
        return false
      });

      $(".click-send-form").click(function(){
        $('.profile-create-wrap .w33').hide()
        $(".profile-create-menu li").removeClass('active')
        $(".send-form").show()
        $(this).addClass('active')
        return false
      });

      $(".click-deliver-to").click(function(){
        $('.profile-create-wrap .w33').hide()
        $(".profile-create-menu li").removeClass('active')
        $(".deliver-to").show()
        $(this).addClass('active')
        return false
      });  


$('.click-dots').click(function(){
  $(this).find('.dots-submenu').toggleClass('active')
})



$(document).ready(function(){
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
let canvasWidth = $('#canvas_width').innerWidth();

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = 240;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
};
})

$('.link-menu a').click(function(){
  $(this).toggleClass('active')
})

$('.modile-delivery-price .accordion-title').click(function(){
  $(this).next('.modile-delivery-price .accordion .text').toggleClass('active')
});



















