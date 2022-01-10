from flask import Flask
import requests

app = Flask(__name__)


@app.route('/stations/<system>', methods=['GET'])
def get_stations_by_system(system):
    response = requests.get(f'https://gbfs.bcycle.com/{system}/station_information.json')
    return response.json()['data']


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
