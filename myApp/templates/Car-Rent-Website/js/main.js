(function ($) {
    "use strict";

    /* Focus on input fields */
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() !== "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        });
    });

    /* Validate after type */
    $('.validate-input .input100').each(function () {
        $(this).on('blur', function () {
            if (!validate(this)) {
                showValidate(this);
            } else {
                $(this).parent().addClass('true-validate');
            }
        });
    });

    /* Form validation on submit */
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (!validate(input[i])) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });

    /* Hide validation on focus */
    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
            $(this).parent().removeClass('true-validate');
        });
    });

    /* Function to validate input */
    function validate(input) {
        if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
                return false;
            }
        } else {
            if ($(input).val().trim() === '') {
                return false;
            }
        }
        return true;
    }

    /* Function to show validation message */
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    /* Function to hide validation message */
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);
