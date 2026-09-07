import http.server
import socketserver
import json
import random
import datetime
import os

PORT = 8000

NER_STATIONS = [
    {"id": "NER-AS01", "name": "Guwahati Hills, Assam", "lat": 26.1445, "lng": 91.7362, "baseRisk": 0.2},
    {"id": "NER-ML01", "name": "Sohra (Cherrapunji), Meghalaya", "lat": 25.2986, "lng": 91.7324, "baseRisk": 0.65},
    {"id": "NER-MZ01", "name": "Aizawl Slopes, Mizoram", "lat": 23.7271, "lng": 92.7176, "baseRisk": 0.4},
    {"id": "NER-SK01", "name": "Gangtok Ridge, Sikkim", "lat": 27.3389, "lng": 88.6065, "baseRisk": 0.55}
]

def calculate_landslide_risk(rainfall, moisture, displacement):
    norm_rain = min(rainfall / 200.0, 1.0)
    norm_moisture = min(moisture / 100.0, 1.0)
    norm_disp = min (displacement / 50.0, 1.0)

    risk_score = (norm_rain * 0.45) + (norm_moisture * 0.35) + (norm_disp * 0.20)
    
    alert_level = "SAFE"
    if risk_score > 0.75:
        alert_level = "CRITICAL"
    elif risk_score > 0.45:
        alert_level = "WARNING"

    return {
        "riskScore": round(risk_score, 2),
        "alertLevel": alert_level
    }

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/v1/landslide/live-monitoring':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

            telemetry = []
            for station in NER_STATIONS:
                rainfall = random.randint(10, 190)
                moisture = random.randint(50, 90)
                displacement = random.randint(0, 30)

                risk_assessment = calculate_landslide_risk(rainfall, moisture, displacement)

                telemetry.append({
                    "stationId": station["id"],
                    "location": station["name"],
                    "coordinates": {"lat": station["lat"], "lng": station["lng"]},
                    "metrics": {
                        "rainfall": rainfall,
                        "soilMoisture": moisture,
                        "displacement": displacement
                    },
                    "riskAssessment": risk_assessment,
                    "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
                })

            response_data = {
                "success": True,
                "region": "North Eastern Region (India)",
                "data": telemetry
            }
            self.wfile.write(json.dumps(response_data).encode('utf-8'))
        else:
            super().do_GET()

if __name__ == '__main__':
    # Change working directory to workspace root
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Serving HTTP on port {PORT} (http://localhost:{PORT}/)...")
        httpd.serve_forever()
