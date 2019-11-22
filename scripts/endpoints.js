function add_endpoint() {
    check_python = check_function_syntax($('.function_code').html())
    check_if_added = check_if_already_added($('.function_code').html())
    function_name = az.get_everything_between($('.function_code').html(), 'def ', ':')
    if (az.grab_value("function_code", 1) === '' || !check_python.ends_with_colon || !check_python.begins_with_def || check_if_added.already_added) {
        if (az.grab_value("function_code", 1) === '') {
            az.animate_element("function_code", 1, {
                "type": "rubberBand"
            })
        }
        if (!check_python.ends_with_colon) {
            alert('The first line of your function must end with ":"')
        }
        if (!check_python.begins_with_def) {
            alert('Your function must begin with "def"')
        }
        if (check_if_added.already_added) {
            alert('You cannot add 2 functions with the same name"')
        }
    } else {
        az.add_button("scroll_endpoints", 1, {
            "this_class": "endpoint",
            "text": ""
        })
        az.all_style_button("endpoint", {
            "width": "auto",
            "height": "auto",
            "align": "center",
            "background": "#ffda79",
            "margin-bottom": "10px",
            "border": "1px solid black",
            "color": "black",
            "outline": 0
        })
        az.add_event("endpoint", az.last_class_instance("endpoint"), {
            "type": "click",
            "function": function(this_id) {
                $('.function_code').innerText(az.fetch_data("endpoint", az.get_target_instance(this_id), {
                    'key': 'store_code'
                }))
            }
        })
        az.store_data("endpoint", az.last_class_instance("endpoint"), {
            "key": "store_code",
            "value": $('.function_code').innerText()
        })
        az.add_layout("endpoint", az.last_class_instance("endpoint"), {
            "this_class": "hold_endpoint_options",
            "row_class": "hold_endpoint_options_rows",
            "cell_class": "hold_endpoint_options_cells",
            "number_of_rows": 1,
            "number_of_columns": 3
        })
        az.all_style_layout("hold_endpoint_options", {
            "width": "auto",
            "height": "auto",
            "border": 0
        })
        az.add_icon("hold_endpoint_options_cells", (az.last_class_instance("endpoint") * 3) - 2, {
            "this_class": "test_endpoint",
            "icon_class": "fa-cog"
        })
        az.all_style_icon("test_endpoint", {
            "color": "rgb(255, 82, 82)",
            "margin": "4px",
            "font-size": "34px",
            "float": "left"
        })
        az.add_event("test_endpoint", az.last_class_instance("test_endpoint"), {
                "type": "click",
                "function": function(this_id) {
                    f_name = $('.endpoint_title').eq(az.get_target_instance(this_id) * 3) - 2).text()
                call_function(f_name)
            }
        })
    az.add_text("hold_endpoint_options_cells", (az.last_class_instance("endpoint") * 3) - 1, {
        "this_class": "endpoint_title",
        "text": function_name.replace('()', '')
    })
    az.all_style_text("endpoint_title", {
        "align": "center",
        "font-family": "Tomorrow",
        "font-size": "20px"
    })
    update_script(grab_all_code().join('\n\n'))
    $('.function_code').html("")
}
}