const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// North Eastern Region (NER) Monitoring Stations
const nerStations = [
  { id: "NER-AS01", name: "Guwahati Hills, Assam", lat: 26.1445, lng: 91.7362, baseRisk: 0.2 },
  { id: "NER-ML01", name: "Sohra (Cherrapunji), Meghalaya", lat: 25.2986, lng: 91.7324, baseRisk: 0.65 },
  { id: "NER-MZ01", name: "Aizawl Slopes, Mizoram", lat: 23.7271, lng: 92.7176, baseRisk: 0.4 },
  { id: "NER-SK01", name: "Gangtok Ridge, Sikkim", lat: 27.3389, lng: 88.6065, baseRisk: 0.55 }
];

/**
 * AI Heuristic Risk Calculation Engine
 * Risk Index = (Rainfall * 0.45) + (Soil Moisture * 0.35) + (Displacement * 0.20)
 */
function calculateLandslideRisk(rainfall, moisture, displacement) {
  const normRain = Math.min(rainfall / 200, 1.0);       // Max threshold 200mm/hr
  const normMoisture = Math.min(moisture / 100, 1.0);   // Percentage
  const normDisp = Math.min(displacement / 50, 1.0);    // Max threshold 50mm displacement

  const riskScore = (normRain * 0.45) + (normMoisture * 0.35) + (normDisp * 0.20);
  
  let alertLevel = "SAFE";
  if (riskScore > 0.75) alertLevel = "CRITICAL";
  else if (riskScore > 0.45) alertLevel = "WARNING";

  return { riskScore: parseFloat(riskScore.toFixed(2)), alertLevel };
}

// API Endpoint: Get Current NER Sensor Data & Risk Assessments
app.get('/api/v1/landslide/live-monitoring', (req, res) => {
  const telemetry = nerStations.map(station => {
    // Simulated sensor stream
    const rainfall = Math.floor(Math.random() * 180) + 10; // mm
    const moisture = Math.floor(Math.random() * 40) + 50;  // %
    const displacement = Math.floor(Math.random() * 30);   // mm

    const riskAssessment = calculateLandslideRisk(rainfall, moisture, displacement);

    return {
      stationId: station.id,
      location: station.name,
      coordinates: { lat: station.lat, lng: station.lng },
      metrics: { rainfall, soilMoisture: moisture, displacement },
      riskAssessment,
      timestamp: new Date().toISOString()
    };
  });

  res.json({ success: true, region: "North Eastern Region (India)", data: telemetry });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SIH26001 Early Warning Engine running on port ${PORT}`));
