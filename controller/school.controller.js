import { addSchool, getAllSchools } from '../models/school.model.js';

const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const createSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
console.log(req.body)
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const [result] = await addSchool({ name, address, latitude, longitude });

    res.status(201).json({ message: 'School added', id: result.insertId });
  } catch (err) {
    console.error('Error creating school:', err);
    res.status(500).json({ error: 'DB error' });
  }
};

export const listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.lat);
    const userLng = parseFloat(req.query.lng);

    if (isNaN(userLat) || isNaN(userLng)) {
      return res.status(400).json({ error: 'Valid coordinates required' });
    }

    const [results] = await getAllSchools();

    const sorted = results
      .map(s => ({
        ...s,
        distance: haversine(userLat, userLng, s.latitude, s.longitude),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (err) {
    console.error('Error listing schools:', err);
    res.status(500).json({ error: 'DB error' });
  }
};
