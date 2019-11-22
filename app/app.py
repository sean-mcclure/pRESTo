from flask import Flask, request, jsonify
from main import *
import json

app = Flask(__name__)

@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    response.headers['Access-Control-Allow-Methods'] = "POST, GET, PUT, DELETE, OPTIONS"
    return response

@app.route("/call_function/", methods=["GET"])
def call_function():
    response = eval(request.args.get('function'))
    return(jsonify(response))

@app.route("/update_script/", methods=["GET"])
def update_script():
    with open('app/main.py', 'w') as f:
        f.write(request.args.get('code').replace('    ', '    '))
    return (jsonify('done'))

if __name__ == "__main__":
    app.run(debug=True, port=5000)

