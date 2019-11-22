function pop_imports() {
    az.add_modal({
        "this_class": "imports_modal",
        "content_class": "imports_modal_content"
    })
    az.style_modal("imports_modal", 1, {
        "width": "400px",
        "height": "auto",
        "padding": "10px",
        "background": "#227093",
        "border": "2px solid #f7f1e3"
    })
    az.add_text("imports_modal_content", 1, {
        "this_class": "settings_title",
        "text": "IMPORTS"
    })
    az.style_text("settings_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Tomorrow",
        "color": "white"
    })
    az.add_text("imports_modal_content", 1, {
        "this_class": "settings_title_sub",
        "text": "Add import statements"
    })
    az.style_text("settings_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Tomorrow",
        "margin-bottom": "20px",
        "color": "lightgrey"
    })
    if (typeof(az.hold_value.imports) !== 'undefined') {
        az.add_code('imports_modal_content', 1, {
            "this_class": "imports_code",
            "contenteditable": true,
            "spellcheck": false,
            "strip_on_paste": true,
            "code": az.hold_value.imports
        })
    } else {
        az.add_code('imports_modal_content', 1, {
            "this_class": "imports_code",
            "contenteditable": true,
            "spellcheck": false,
            "strip_on_paste": true
        })
    }
    az.style_code('imports_code', 1, {
        "height": "200px",
        "max-height": "200px",
        "outline": 0
    })
    az.add_event("imports_code", 1, {
        "type": "as_change",
        "function": function() {
            az.hold_value.imports = $('.imports_code').html()
        }
    })
}