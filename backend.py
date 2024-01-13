from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
# import time

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/sum', methods=['POST'])
@cross_origin()
def sum_numbers():
    data = request.get_json()

    try:
        number1 = float(data['number1'])
        number2 = float(data['number2'])
        result = number1 + number2
        response = jsonify({'result': result})

        # time.sleep(5)

        return response, 200
    except ValueError:
        return jsonify({'error': 'Invalid numbers provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)