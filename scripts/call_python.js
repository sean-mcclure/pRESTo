function update_script(code) {
    params = {
        "code": code
    }
    az.call_api({
        "url": az.hold_value.settings_url + ":" + az.hold_value.settings_port + "/update_script/",
        "parameters": params,
        "done": function(data) {
            //alert('endpoint created')
        }
    })
}

function call_function(f) {
    params = {
        "function": f
    }
    az.call_api({
        "url": az.hold_value.settings_url + ":" + az.hold_value.settings_port + "/call_function/",
        "parameters": params,
        "done": function(data) {
            console.log(data)
        }
    })
}