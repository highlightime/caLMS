import socket
from flask import Flask, render_template, request
from flask import jsonify
from dbModule import result

app = Flask(__name__)

@app.route("/")
def print_hello():
   return (result)

@app.route('/test')#연결 html이랑
def test():
    return render_template('friend.html')

@app.route('/post', methods=['POST'])#id,pw 받고 바로 post에 들어가짐..?
def post():
    id = request.form['id']
    pw = request.form['pw']
    return id +" "+pw

# @app.route("/info", methods=["POST"])
# def info():
#     info_dict = dict()
#     info_dict["IP_ADDRESS"] = socket.gethostbyname(socket.gethostname())
#     info_dict["HOST_NAME"] = socket.gethostname()
#     return info_dict
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
