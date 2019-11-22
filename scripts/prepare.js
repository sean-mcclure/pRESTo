az.load_font("Tomorrow")
az.style_body({
    "background": "#f7f1e3",
    "font-family": "Tomorrow",
    "min-width": "900px",
    "max-width": "1400px"
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 1
})
az.style_sections("my_sections", 1, {
    "background": "#227093",
    "height": "auto",
    "border-radius": "8px"
})
az.add_layout("my_sections", 1, {
    "this_class": "title_layout",
    "row_class": "title_layout_rows",
    "cell_class": "title_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout("title_layout", 1, {
    "width": "100%",
    "height": "auto",
    "border": 0
})
az.add_text("title_layout_cells", 2, {
    "this_class": "main_title",
    "text": "pRESTo"
})
az.style_text("main_title", 1, {
    "color": "white",
    "align": "center",
    "font-size": "50px"
})
az.style_word("main_title", 1, {
    "this_class": "color_title",
    "word": "REST",
    "color": "#ffda79"
})
az.add_icon("title_layout_cells", 3, {
    "this_class": "settings_logo",
    "icon_class": "fa-cog"
})
az.style_icon("settings_logo", 1, {
    "color": "white",
    "align": "right",
    "font-size": "34px",
    "cursor": "pointer"
})
az.add_event("settings_logo", 1, {
    "type": "click",
    "function": function() {
        pop_settings()
    }
})
az.add_text("my_sections", 1, {
    "this_class": "main_title_sub",
    "text": "Python RESTifier"
})
az.style_text("main_title_sub", 1, {
    "color": "white",
    "align": "center",
    "font-size": "20px"
})
az.add_layout("my_sections", 1, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("main_layout", 1, {
    "width": "100%",
    "height": "300px",
    "align": "center",
    "margin-top": "30px",
    "border": 0
})
az.style_layout("main_layout_cells", 2, {
    "valign": "top",
    "padding-top": "20px"
})
az.add_scrollable_container("main_layout_cells", 2, {
    "this_class": "scroll_endpoints",
    "direction": "vertical"
})
az.style_scrollable_container("scroll_endpoints", 1, {
    "height": "300px",
    "width": "100%",
    "background": "transparent",
    "border": "none"
})
az.add_code('main_layout_cells', 1, {
    "this_class": "function_code",
    "contenteditable": true,
    "spellcheck": false,
    "strip_on_paste": true
})
az.style_code('function_code', 1, {
    "height": "250px",
    "max-height": "250px",
    "border-radius": "10px",
    "outline": 0
})
az.add_layout("main_layout_cells", 1, {
    "this_class": "button_layout",
    "row_class": "button_layout_rows",
    "cell_class": "button_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("button_layout", 1, {
    "width": "auto",
    "height": "auto",
    "align": "center",
    "margin-top": "-10px",
    "border": 0
})
az.add_button("button_layout_cells", 1, {
    "this_class": "add_button",
    "text": "CREATE ENDPOINT"
})
az.add_button("button_layout_cells", 2, {
    "this_class": "add_button",
    "text": "IMPORTS"
})
az.style_button("add_button", 1, {
    "background": "#33d9b2",
    "color": "black",
    "margin": "5px",
    "outline": 0
})
az.style_button("add_button", 2, {
    "background": "#ff5252",
    "margin": "5px",
    "outline": 0
})
az.add_event("add_button", 1, {
    "type": "click",
    "function": function() {
        add_endpoint()
    }
})
az.add_event("add_button", 2, {
    "type": "click",
    "function": function() {
        pop_imports()
    }
})