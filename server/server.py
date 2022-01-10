from flask import Flask
import requests

app = Flask(__name__)


@app.route('/stations/<system>', methods=['GET'])
def get_stations_by_system(system):
    response = requests.get(f'https://gbfs.bcycle.com/{system}/station_information.json')
    return response.json()['data']


@app.route('/station/<system>/<station_id>', methods=['GET'])
def get_station_by_id(system, station_id):
    status = requests.get(f'https://gbfs.bcycle.com/{system}/station_status.json')
    json_status = status.json()['data']['stations']
    result_status = list(filter(lambda x: (x["station_id"] == station_id), json_status))
    return result_status[0]


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
