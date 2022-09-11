
$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
  })


$(function () {
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




  $(function ()
{
    $.validator.addMethod("loginRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");

    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");

    $(".login-form-valid").validate({
        rules: {
            "email": {
                required: true,
                loginRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true

            }
        },
        messages: {
            "email": {
                required: "You must enter a login name",
                loginRegex: "Login format not valid"
            },
            "password": {
                required: "",
            }
        }
    });
});


$(function ()
{
    $.validator.addMethod("loginRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");

    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");

    $(".form-create-account").validate({
        rules: {
            "email": {
                required: true,
                loginRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true

            }
        },
        messages: {
            "email": {
                required: "You must enter a login name",
                loginRegex: "Login format not valid"
            },
            "password": {
                required: "",
            }
        }
    });
});


$(".phone").intlTelInput({
  allowDropdown: true,
    // options here
});











