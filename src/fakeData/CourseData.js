const courses = [
    {
        "id": 1,
        "name": "3D Animation With Game Development",
        "instructor": "PewDiPie",
        "img": "https://i.imgur.com/2FkYKU9.jpg",
        "price": 10.99,
        "category": ["Design", " Animation", " Game"],
        "star": 4.5,
        "bestSeller": true,
        "last_update": 5,
        "starCount": 57842,

        "enrolled": 11955
    },
    {
        "id": 2,
        "name": "Artificial Intelligence With Projects",
        "instructor": "Cleaver Quazi",
        "img": "https://i.imgur.com/YRRgMh8.jpg",
        "price": 13.99,
        "category": ["Artificial Intelligence", " Deep Learning", " Data Science"],
        "star": 4.2,
        "bestSeller": true,
        "last_update": 2,
        "starCount": 57842,

        "enrolled": 16650
    },
    {
        "id": 3,
        "name": "Auto CAD Ultimate Design",
        "instructor": "Shoeb Karim",
        "img": "https://i.imgur.com/9bThWLB.jpg",
        "price": 8.95,
        "category": ["Architecture", " Interior Design"],
        "star": 3.9,
        "bestSeller": true,
        "last_update": 8,
        "starCount": 57842,

        "enrolled": 1797
    },
    {
        "id": 4,
        "name": "AWS Certification Cloud",
        "instructor": "Tamim Karim",
        "img": "https://i.imgur.com/BcWjy2F.jpg",
        "price": 13.95,
        "category": ["AWS", "Cloud Hosting", " DevOps"],
        "star": 4.8,
        "bestSeller": true,
        "last_update": 9,
        "starCount": 57842,

        "enrolled": 19546
    },
    {
        "id": 5,
        "name": "Business Intelligence Professionals",
        "instructor": "Jhankar Mahabub",
        "img": "https://i.imgur.com/3NJeAXa.jpg",
        "price": 20.95,
        "category": [" Personal Development", " Career Development"],
        "star": 4.7,
        "bestSeller": true,
        "last_update": 11,
        "starCount": 57842,

        "enrolled": 10054
    },
    {
        "id": 6,
        "name": "Cisco CCNA Certification",
        "instructor": "Steve Jobs",
        "img": "https://i.imgur.com/EOrvjnj.jpg",
        "price": 9.95,
        "category": ["CCNA", "Security", "IT"],
        "star": 4.9,
        "bestSeller": true,
        "last_update": 1,
        "starCount": 57842,

        "enrolled": 1587
    },
    {
        "id": 7,
        "name": "CSS Mastering Development",
        "instructor": "Daniel Phillip",
        "img": "https://i.imgur.com/Q0j2acH.jpg",
        "price": 5.95,
        "category": ["Web design", " Front End"],
        "star": 4.2,
        "bestSeller": true,
        "starCount": 57842,

        "last_update": 9,
        "enrolled": 114742
    },
    {
        "id": 8,
        "name": "Cyber Security In IT Sector",
        "instructor": "Ari Afshar",
        "img": "https://i.imgur.com/Y8JXVsG.jpg",
        "price": 19.95,
        "category": ["Online Security", " Ethical Hacking"],
        "star": 4.9,
        "bestSeller": true,
        "last_update": 7,
        "starCount": 57842,

        "enrolled": 95466
    },
    {
        "id": 9,
        "name": "Data Science With Python",
        "instructor": "Dr. Sayeed",
        "img": "https://i.imgur.com/jvIaH4F.jpg",
        "price": 9.99,
        "category": ["AI", " Application Development", " IT"],
        "star": 4.7,
        "bestSeller": true,
        "last_update": 29,
        "starCount": 57842,

        "enrolled": 152121
    },
    {
        "id": 10,
        "name": "Deep Learning (AI) In Advance",
        "instructor": "Phillips Joshepin",
        "img": "https://i.imgur.com/EZwchiY.jpg",
        "price": 39.99,
        "category": ["AI", " Web Development", " IT"],
        "star": 4.9,
        "bestSeller": true,
        "last_update": 5,
        "starCount": 57842,

        "enrolled": 1541950
    },
    {
        "id": 11,
        "name": "Digital Marketing In Deversification",
        "instructor": "Joseph Phillips",
        "img": "https://i.imgur.com/mOJV99b.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 25,
        "starCount": 57842,

        "enrolled": 11213
    },
    {
        "id": 12,
        "name": "DJango Bootcamp With Projects",
        "instructor": "Joseph Phillips",
        "img": "https://i.imgur.com/ZHArJfG.jpg",
        "price": 11.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 45,
        "starCount": 57842,
        "enrolled": 1355155
    },
    {
        "id": 13,
        "name": "Docker Soultion With Project",
        "instructor": "Tamim Karim",
        "img": "https://i.imgur.com/CpykI4y.jpg",
        "price": 12.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 50,
        "starCount": 57842,
        "enrolled": 11950
    },
    {
        "id": 14,
        "name": "Documentary Filming Course",
        "instructor": "Joseph Phillips",
        "img": "https://i.imgur.com/fcnIZQ2.jpg",
        "price": 7.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 15,
        "starCount": 57892,
        "enrolled": 11950
    },
    {
        "id": 15,
        "name": "Ethical Hacking A-Z Professional",
        "instructor": "Jaheed Sabur",
        "img": "https://i.imgur.com/TWtCWeJ.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 5,
        "bestSeller": true,
        "last_update": 36,
        "starCount": 57892,
        "enrolled": 1194212
    },
    {
        "id": 16,
        "name": "Google Analytics Certification",
        "instructor": "Jhankar Mahbub",
        "img": "https://i.imgur.com/UY8tVJ0.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 12,
        "starCount": 57892,
        "enrolled": 11950
    },
    {
        "id": 17,
        "name": "Graphic Design For Beginners",
        "instructor": "Joseph Phillips",
        "img": "https://i.imgur.com/NgIAaIy.jpg",
        "price": 9.99,
        "category": ["Web design",  " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 5,
        "starCount": 57892,
        "enrolled": 11135
    },
    {
        "id": 18,
        "name": "Graphic Design (All in One)",
        "instructor": "Ayush Paul",
        "img": "https://i.imgur.com/8TTuArf.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 7,
        "starCount": 57892,
        "enrolled": 11950
    },
    {
        "id": 19,
        "name": "Investment Banking In Finance",
        "instructor": "Raiha Anushka",
        "img": "https://i.imgur.com/Ny3MTuM.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 50,
        "starCount": 57892,
        "enrolled": 119232
    },
    {
        "id": 20,
        "name": "Modern React with Projects",
        "instructor": "Niloy Sarwar ",
        "img": "https://i.imgur.com/xi5Outq.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "bestSeller": true,
        "last_update": 15,
        "starCount": 57892,
        "enrolled": 11950
        
    },
    {
        "id": 21,
        "name": "MySQL Database Course",
        "instructor": "Tanvir Islam",
        "img": "https://i.imgur.com/kzFuxYG.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 19,
        "enrolled": 11950
    },
    {
        "id": 22,
        "name": "Angular Advance Course",
        "instructor": "Shahariar Nihal",
        "img": "https://i.imgur.com/YP67bHL.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 11950
    },
    {
        "id": 23,
        "name": "iPhone Photography Certificate",
        "instructor": "Ayush Paul",
        "img": "https://i.imgur.com/95UxuRl.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 11950
    },
    {
        "id": 24,
        "name": "Pixel Art Ultimate Project",
        "instructor": "Iffat Jahin",
        "img": "https://i.imgur.com/Rme48kC.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 7,
        "enrolled": 11950
    },
    {
        "id": 25,
        "name": "Productivity Management",
        "instructor": "David Holland",
        "img": "https://i.imgur.com/d2iU8mD.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 9,
        "enrolled": 11950
    },
    {
        "id": 26,
        "name": "Python Mastering with Projects",
        "instructor": "David Drake",
        "img": "https://i.imgur.com/vlFXxt6.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 11950
    },
    {
        "id": 27,
        "name": "Ultimate React to Advance",
        "instructor": "Arham Choudhuri",
        "img": "https://i.imgur.com/Di7F70C.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 3,
        "enrolled": 11950
    },
    {
        "id": 28,
        "name": "React Native Course Advance",
        "instructor": "Mahia Tabassum",
        "img": "https://i.imgur.com/238zOkt.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 2,
        "enrolled": 11950
    },
    {
        "id": 29,
        "name": "Social Media Marketing",
        "instructor": "Joseph Phillips",
        "img": "https://i.imgur.com/bheR4dN.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 11950
    },
    {
        "id": 30,
        "name": "VUE Mastering Bootcamp",
        "instructor": "Tamim Karim",
        "img": "https://i.imgur.com/rqvLc2k.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.7,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 11950
    },
    {
        "id": 31,
        "name": "Web Development (Step by Step)",
        "instructor": "Cleaver Qazi",
        "img": "https://i.imgur.com/L38cZfB.jpg",
        "price": 10.99,
        "category": ["Web Development", "IT"],
        "star": 5.00,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 999999
    },
    {
        "id": 32,
        "name": "Web Development Bootcamp",
        "instructor": "Iram Wahid",
        "img": "https://i.imgur.com/15EGtS2.jpg",
        "price": 29.95,
        "category": [" Web Development", " IT"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 1,
        "enrolled": 99212185
    },
    {
        "id": 33,
        "name": "Python Mastering with Projects",
        "instructor": "David Drake",
        "img": "https://i.imgur.com/vlFXxt6.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 5,
        "enrolled": 11923
    },
    {
        "id": 34,
        "name": "Ultimate React to Advance",
        "instructor": "Arham Choudhuri",
        "img": "https://i.imgur.com/Di7F70C.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 3,
        "enrolled": 115950
    },
    {
        "id": 35,
        "name": "React Native Course Advance",
        "instructor": "Mahia Tabassum",
        "img": "https://i.imgur.com/238zOkt.jpg",
        "price": 9.99,
        "category": ["Web design", " Web Development"],
        "star": 4.6,
        "starCount": 57892,
        "bestSeller": true,
        "last_update": 2,
        "enrolled": 119545
    },
    
]

export default courses;