import joblib
import pandas as pd
from flask import Flask, request
from flask import make_response

app = Flask(__name__)

@app.route('/askModel', methods=['POST'])
def askModel():

    prediction = '0'
    if request.method == 'POST':
        
        datafromjs = request.form['mydata']
        X_test = pd.read_json(datafromjs, index=[0])

        model = joblib.load("rf_model.pkl")
        prediction = model.predict(X_test)[0]
        resp = make_response('{"response": '+prediction+'}')
        resp.headers['Content-Type'] = "application/json"
        return resp


if __name__ == '__main__':
    app.run(debug=True)