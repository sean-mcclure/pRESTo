function grab_all_code() {
    var res = []
    az.call_multiple({
        "iterations": az.number_of_elements('endpoint'),
        "function": function(elem, index) {
            this_code = az.fetch_data("endpoint", index + 1, {
                "key": "store_code"
            })
            res.push(this_code)
        }
    })
    return (res)
}

function check_function_syntax(f) {
    var res = {}
    if (f.includes('<div>')) {
        first_line = f.split('<div>')[0]
    } else {
        first_line = f.split('<br>')[0]
    }
    var last_char_of_first_line = first_line[first_line.length - 1];
    if (last_char_of_first_line === ':') {
        res.ends_with_colon = true
    } else {
        res.ends_with_colon = false
    }
    if (first_line.includes('def')) {
        res.begins_with_def = true
    } else {
        res.begins_with_def = false
    }
    return (res)
}
az.hold_value.already_added = []

function check_if_already_added(f) {
    function_name = az.get_everything_between(f, 'def ', ':')
    var res = {}
    if (az.hold_value.already_added.includes(function_name)) {
        res.already_added = true
    } else {
        res.already_added = false
    }
    az.hold_value.already_added.push(function_name)
    return (res)
}
(function($) {
    $.fn.innerText = function(msg) {
        if (msg) {
            if (document.body.innerText) {
                for (var i in this) {
                    this[i].innerText = msg;
                }
            } else {
                for (var i in this) {
                    this[i].innerHTML.replace(/&amp;lt;br&amp;gt;/gi, "n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
                }
            }
            return this;
        } else {
            if (document.body.innerText) {
                return this[0].innerText;
            } else {
                return this[0].innerHTML.replace(/&amp;lt;br&amp;gt;/gi, "n").replace(/(&amp;lt;([^&amp;gt;]+)&amp;gt;)/gi, "");
            }
        }
    };
})(jQuery);
$(document).delegate('.function_code', 'keydown', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 13) {
        e.preventDefault();
        $(this).append("<div></div>&nbsp;&nbsp;&nbsp;&nbsp;")
        placeCaretAtEnd($('.function_code').get(0))
    }
});

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}