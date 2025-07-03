export const fetchDoctors = async () => {
  // Replace with actual API
  return await fetch('/api/doctors').then(res => res.json());
};
