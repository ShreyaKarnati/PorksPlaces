### HTML W/ Flask
### HTTP Verb GET and POST

from flask import Flask,redirect,url_for,render_template,request
from markupsafe import escape
### WSGI Applicaiton 
app = Flask(__name__)

### Forwards
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/index.html')
def secondIndex():
    return render_template('index.html')

@app.route('/search.html')
def search():
    return render_template('search.html')

@app.route('/map.html')
def map():
    return render_template('map.html')

@app.route('/sustainability.html')
def sustainability():
    return render_template('sustainability.html')

@app.route('/creators.html')
def creators():
    return render_template('creators.html')



### Variable Rules
### Result Checker


if __name__ == '__main__':
    app.run(debug=True)
