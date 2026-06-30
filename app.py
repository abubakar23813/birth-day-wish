
from flask import Flask,request,render_template

print(__name__)



application=Flask(__name__)

app=application

# Route for home page
@app.route("/")
def index():
    return render_template("index.html")
#@app.route("/predictdata", methods=["GET", "POST"])
#def predict_datapoint():
    #python app.py
    #pass
    

    
     
    """route for about page"""
#@app.route("/about")
#def about():
    #return render_template("about.html")

        
    

if __name__=="__main__":
    print("running app")
    app.run(port=5000,debug=True,use_reloader=False)  