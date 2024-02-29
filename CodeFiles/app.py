import joblib
import pandas as pd
from flask import Flask, request
from flask import make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/askModel', methods=['POST'])
def askModel():

    prediction = '0'
    if request.method == 'POST':
        
        datafromjs = request.get_json()
        print(datafromjs)
        X_test = pd.DataFrame(datafromjs, index=[0])

        model = joblib.load("rf_model.pkl")
        prediction = str(model.predict(X_test)[0])
        print(prediction)
        resp = make_response('{"response": '+prediction+'}')
        resp.headers['Content-Type'] = "application/json"
        return prediction


if __name__ == '__main__':
    app.run(debug=True)