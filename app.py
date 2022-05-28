from flask import Flask, jsonify, request, session
import os
from flaskext.mysql import MySQL
from flask_session import Session #pip install flask-session
from flask_bcrypt import Bcrypt #pip install flask-bcrypt
import hashlib
from flask_cors import CORS , cross_origin #pip install flask-cors
import json
import mysql.connector as mysql

conn = mysql.connect(
    host = 'localhost',
    user = 'root',
    passwd = '34261043',
    database = 'zero_company'
)

app = Flask(__name__)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials = True)
server_session = Session(app)

app.static_folder = 'public'
app.static_url_path = '/public'

UPLOAD_PICTURE_FOLDER = os.path.join(os.path.dirname(__file__),"public/pic")

@app.route("/@e")
def get_current_user():
    customers_id = session.get("Customers_ID")
    
    if not customers_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    conn.reconnect()
    cur = conn.cursor()
    sql_query = '''
    SELECT Customers_ID, Customers_Name
    FROM customers
    WHERE Customers_ID
    '''
    val = (customers_id,)
    cur.execute(sql_query,val)
    record = cur.fetchone() #(asdasdasdasd,fghfghfghfgh)
    conn.close()
    
    if record[0] ==  customers_id:
        return jsonify({
        "Customers_ID": customers_id,
    }) 
    
@app.route('/register', methods=["POST"])
def signup():
    username = request.json['username']
    email = request.json['email']
    address = request.json['address']
    phone = request.json['phone']
    password = request.json['password']
    cfpassword = request.json['cfpassword']

    if username !="" and email !="" and password !="" and password == cfpassword:
        password_encrpt = hashlib.md5(password.encode()).hexdigest()

        conn.reconnect()
        cur = conn.cursor()
        
        sql_insert = '''
        INSERT INTO customers(Customers_Name, Customers_Email, Customers_Add, Customers_Phone, password, audit)
        VALUES(%s,%s,%s,%s,%s,%s)
        '''
        val = (username, email, address, phone, password_encrpt,1)
        cur.execute(sql_insert, val)
        conn.commit()
        conn.close()
    
    return jsonify({
        "Customers_Name": username,
    })  

@app.route('/login', methods=["POST"])
def login():
    email = request.json['email']
    password = request.json['password']

    if email !="" and password !="":
        
        conn.reconnect()
        cur = conn.cursor()
        sql_query = '''
        SELECT password
        FROM customers
        WHERE Customers_Email = %s
        '''
        val = (email,)

        cur.execute(sql_query,val)
        record = cur.fetchone() #(asdasdasdasd,fghfghfghfgh)
        conn.close()

        password_encrpt = hashlib.md5(password.encode()).hexdigest()
        if record[0] == password_encrpt:
            return jsonify({
                "Customers_Email": email,
        })

@app.route("/shoping", methods = ['GET'])
def shoping():
    conn.reconnect()
    cur = conn.cursor()

    sql_query = '''
    SELECT * FROM picstorage
    WHERE Product_ID
    '''

    cur.execute(sql_query,)
    #row_headers = [x[0] for x in cur.description]
    record = cur.fetchall()
    payload = []
    content = {} 
    for result in record:
        content = {'Product_ID': result[0], 'Product_Name': result[1], 'Product_cap': result[2],'Product_Price'
        : result[3], 'Product_Switches1': result[4], 'Product_Switches2': result[5],'Product_Switches3': result[6], 'Product_Layout': result[7], 'thumbnailUrl': result[8]}
        payload.append(content)
        content = {}
    conn.close()
    return jsonify({'name':payload})



@app.route("/shopingInside", methods = ['GET'])
def shopingInside():
    conn.reconnect()
    cur = conn.cursor()

    sql_query = '''
    SELECT * FROM picstorage
    WHERE Product_ID
    '''

    cur.execute(sql_query,)
    #row_headers = [x[0] for x in cur.description]
    record = cur.fetchall()
    payload = []
    content = {} 
    for result in record:
        content = {'Product_ID': result[0], 'Product_Name': result[1], 'Product_cap': result[2],'Product_Price'
        : result[3], 'Product_Switches1': result[4], 'Product_Switches2': result[5],'Product_Switches3': result[6], 'Product_Layout': result[7], 'thumbnailUrl': result[8]}
        payload.append(content)
        content = {}
    conn.close()
    return jsonify({'data':payload})    

@app.route("/profile", methods = ['GET'])
def profile():
    conn.reconnect()
    cur = conn.cursor()

    sql_query = '''
    SELECT * FROM customers
    WHERE Customers_ID
    '''

    cur.execute(sql_query,)
    #row_headers = [x[0] for x in cur.description]
    record = cur.fetchall()
    payload = []
    content = {} 
    for result in record:
        content = {'Customers_ID': result[0], 'Customers_Name': result[1], 'Customers_Add': result[2],'Customers_Phone'
        : result[3], 'Customers_Email': result[4], 'audit': result[5]}
        payload.append(content)
        content = {}
    conn.close()
    return jsonify({'pro':payload})  


if __name__=='__main__':
    app.run(debug=True)