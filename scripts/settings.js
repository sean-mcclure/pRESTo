function pop_settings() {
    az.add_modal({
        "this_class": "settings_modal",
        "content_class": "settings_modal_content"
    })
    az.style_modal("settings_modal", 1, {
        "width": "400px",
        "height": "auto",
        "padding": "10px",
        "background": "#227093",
        "border": "2px solid #f7f1e3"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title",
        "text": "SETTINGS"
    })
    az.style_text("settings_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Tomorrow",
        "color": "white"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title_sub",
        "text": "..."
    })
    az.style_text("settings_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Tomorrow",
        "margin-bottom": "20px",
        "color": "lightgrey"
    })
    az.add_layout("settings_modal_content", 1, {
        "this_class": "settings_layout",
        "row_class": "settings_layout_rows",
        "cell_class": "settings_layout_cells",
        "number_of_rows": 2,
        "number_of_columns": 2
    })
    az.style_layout("settings_layout", 1, {
        "width": "100%",
        "height": "auto",
        "column_widths": ['70%', '30%'],
        "border": 0
    })
    az.add_text("settings_layout_cells", 1, {
        "this_class": "url_port_title",
        "text": "URL"
    })
    az.add_text("settings_layout_cells", 2, {
        "this_class": "url_port_title",
        "text": "PORT"
    })
    az.all_style_text("url_port_title", {
        "align": "center",
        "font-size": "18px",
        "font-family": "Tomorrow",
        "color": "white"
    })
    az.add_input("settings_layout_cells", 3, {
        "this_class": "url_port_input",
        "placeholder": "URL...",
        "spellcheck": false
    })
    az.add_input("settings_layout_cells", 4, {
        "this_class": "url_port_input",
        "placeholder": ":port",
        "spellcheck": false
    })
    az.all_style_input("url_port_input", {
        "width": "90%",
        "align": "center"
    })
    az.add_value("url_port_input", 1, {
        "value": az.hold_value.settings_url
    })
    az.add_value("url_port_input", 2, {
        "value": az.hold_value.settings_port
    })
    az.add_event("url_port_input", 1, {
        "type": "as_change",
        "function": function() {
            az.hold_value.settings_url = az.grab_value("url_port_input", 1)
        }
    })
    az.add_event("url_port_input", 2, {
        "type": "as_change",
        "function": function() {
            az.hold_value.settings_port = az.grab_value("url_port_input", 2)
        }
    })
}