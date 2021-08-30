const getLatLong = async () => {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return {
    lat: pos.coords.latitude,
    long: pos.coords.longitude,
  };
};

export { getLatLong };
