/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Basic Layout */
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensures body takes full height of the viewport */
    background-color: #f8f8f8;
}

header {
    background-color: #ffcc00;
    padding: 1rem;
    text-align: center;
}

.dog-breeds {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    flex-grow: 1; /* Allows the main content to grow and push footer down */
}

.dog-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    width: 250px; /* Fixed width for dog cards */
    text-align: center;
    overflow: hidden;
    transition: transform 0.2s;
}

.dog-card:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
}

.dog-card img {
    width: 100%;
    height: 150px; /* Set fixed height for images */
    object-fit: cover; /* Maintain aspect ratio */
}

footer {
    background-color: #ffcc00;
    text-align: center;
    padding: 1rem;
    margin-top: auto; /* Push footer to the bottom */
}
