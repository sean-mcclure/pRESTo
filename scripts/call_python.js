function update_script(code) {
    params = {
        "code": code
    }
    az.call_api({
        "url": az.hold_value.settings_url + ":" + az.hold_value.settings_port + "/update_script/",
        "parameters": params,
        "done": function(data) {
            console.log('endpoint created')
        }
    })
}

function call_function(function_text) {
    az.add_modal({
        "this_class": "test_endpoint_modal",
        "content_class": "test_endpoint_modal_content"
    })
    az.style_modal("test_endpoint_modal", 1, {
        "width": "600px",
        "height": "auto",
        "padding": "10px",
        "background": "#227093",
        "border": "2px solid #f7f1e3"
    })
    az.add_text("test_endpoint_modal_content", 1, {
        "this_class": "test_modal_title",
        "text": "PARAMETERS"
    })
    az.style_text("test_modal_title", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Tomorrow",
        "color": "white"
    })
    az.add_code('test_endpoint_modal_content', 1, {
        "this_class": "api_code",
        "contenteditable": true,
        "spellcheck": false,
        "strip_on_paste": true
    })
    az.style_code('api_code', 1, {
        "height": "auto",
        "max-height": "250px",
        "border-radius": "10px",
        "outline": 0
    })
    az.hold_value.function_name = az.get_everything_between(function_text.split('\n')[0], 'def ', '(').split(',')
    az.hold_value.function_args = az.get_everything_between(function_text.split('\n')[0], '(', ')').split(',')
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": "params = {<br>&nbsp;&nbsp;&nbsp;&nbsp;"
    })
    if(az.hold_value.function_args[0] !== "") {
    az.add_text("show_params", 1, {
        "this_class": "show_params",
        "text": '"function" : "' + az.hold_value.function_name + '",<br>&nbsp;&nbsp;&nbsp;&nbsp;'
    })
    } else {
    az.add_text("show_params", 1, {
        "this_class": "show_params",
        "text": '"function" : "' + az.hold_value.function_name + '"<br>&nbsp;&nbsp;&nbsp;&nbsp;'
    })
    }
    if(az.hold_value.function_args[0] !== "") {
    az.call_multiple({
        "iterations": az.hold_value.function_args.length,
        "function": function(elem, index) {
            if (index < az.hold_value.function_args.length - 1) {
                var use_breaker = ': "...",<br>&nbsp;&nbsp;&nbsp;&nbsp;'
            } else {
                var use_breaker = ': "..."<br>'
            }
            az.add_text("show_params", 1, {
                "this_class": "show_params",
                "text": '"' + az.hold_value.function_args[index].trim() + '"' + use_breaker
            })
        }
    })
    }
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": "}<br><br>"
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": "az.call_api({<br>"
    })
    az.add_text("api_code", 1, {
        "this_class": "breaker",
        "text": "&nbsp;&nbsp;&nbsp;&nbsp;"
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": '"url" : "' + az.hold_value.settings_url + ':' + az.hold_value.settings_port + '/call_function/",' + "<br>"
    })
    az.add_text("api_code", 1, {
        "this_class": "breaker",
        "text": "&nbsp;&nbsp;&nbsp;&nbsp;"
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": '"parameters" : params,<br>'
    })
    az.add_text("api_code", 1, {
        "this_class": "breaker",
        "text": "&nbsp;&nbsp;&nbsp;&nbsp;"
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": '"done" : function(data) {<br>'
    })
    az.add_text("api_code", 1, {
        "this_class": "breaker",
        "text": "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": 'alert(JSON.stringify(data))<br>'
    })
    az.add_text("api_code", 1, {
        "this_class": "breaker",
        "text": "&nbsp;&nbsp;&nbsp;&nbsp;"
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": '}<br>'
    })
    az.add_text("api_code", 1, {
        "this_class": "show_params",
        "text": '})'
    })
    az.style_word("show_params", 1, {
        "this_class": "gold_text",
        "word": "params",
        "color": "gold",
        "word_instance": 1
    })
    az.all_style_word("show_params", {
        "this_class": "gold_text",
        "word": "call_api",
        "color": "gold"
    })
    az.all_style_word("show_params", {
        "this_class": "pink_text",
        "word": "url",
        "color": "pink"
    })
    az.all_style_word("show_params", {
        "this_class": "pink_text",
        "word": "parameters",
        "color": "pink"
    })
    az.all_style_word("show_params", {
        "this_class": "pink_text",
        "word": "done",
        "color": "pink"
    })
    az.add_button("test_endpoint_modal", 1, {
        "this_class": "test_endpoint",
        "text": "TEST"
    })
    az.style_button("test_endpoint", 1, {
        "align": "center",
        "background": "#ffda79",
        "border": "1px solid black",
        "color": "black",
        "outline": 0
    })
    az.add_event("test_endpoint", 1, {
        "type": "click",
        "function": function() {
            eval($('.api_code').innerText())
        }
    })
}