export const allDoctors = Array.from({ length: 30 }, (_, i) => {
  const names = [
    "Dr. Aarav Mehta", "Dr. Kavya Sharma", "Dr. Rajat Patel", "Dr. Anaya Reddy",
    "Dr. Manish Verma", "Dr. Nisha Iyer", "Dr. Arjun Das", "Dr. Sneha Kapoor",
    "Dr. Rohit Nair", "Dr. Priya Bhatt", "Dr. Aniket Joshi", "Dr. Riya Ghosh",
    "Dr. Vikram Sethi", "Dr. Tanya Bansal", "Dr. Karan Malhotra", "Dr. Shruti Rao",
    "Dr. Devansh Singh", "Dr. Meera Jain", "Dr. Akash Tiwari", "Dr. Divya Shetty",
    "Dr. Mohit Choudhary", "Dr. Sanjana Desai", "Dr. Harsh Vora", "Dr. Ishita Roy",
    "Dr. Aditya Menon", "Dr. Mitali Sinha", "Dr. Neeraj Kaul", "Dr. Radhika Pillai",
    "Dr. Sandeep Bhatia", "Dr. Aditi Nair"
  ];

  const specialties = [
    "Cardiologist", "Dermatologist", "Pediatrician", "Neurologist", "Orthopedic",
    "Gynecologist", "ENT", "Ophthalmologist", "Dentist", "Psychiatrist"
  ];

  const locations = [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"
  ];

  return {
    id: i + 1,
    name: names[i],
    specialty: specialties[i % specialties.length],
    location: locations[i % locations.length],
    experience: `${5 + (i % 20)} years`,
    rating: (4 + (i % 10) * 0.1).toFixed(1),
    gender: i % 2 === 0 ? "Male" : "Female",
    cost: 300 + (i % 5) * 50
  };
});
