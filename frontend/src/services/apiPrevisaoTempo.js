const basicFetch = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = await req.json();
  return json;
};

const get_clima = async () => {
  try {
    const weather = await basicFetch(
      "http://192.168.0.50:4000/api/previsaotempo"
    );
    return { weather: weather };
  } catch (err) {
    console.error(err);
  }

  return false;
};

export default get_clima;
