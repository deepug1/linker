<?php
$servername = "localhost"; 
$username = "root"; 
$password = "";  
$dbname = "user_register"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Primary Claimant Data
    $first_name = $_POST['q122_primaryClaimant']['first']; // First Name
    $last_name = $_POST['q122_primaryClaimant']['last']; // Last Name
    $company_name = $_POST['q123_companyName123']; // Company Name
    $address_line1 = $_POST['q125_address125']['addr_line1']; // Address Line 1
    $address_line2 = $_POST['q125_address125']['addr_line2']; // Address Line 2
    $city = $_POST['q125_address125']['city']; // City
    $state = $_POST['q125_address125']['state']; // State
    $postal_code = $_POST['q125_address125']['postal']; // Postal Code
    $country = $_POST['q125_address125']['country']; // Country
    $phone_number = $_POST['q217_phoneNumber217']; // Phone Number
    $email = $_POST['q127_email127']; // Email
    $percentage_share = $_POST['q128_percentage128']; // Percentage Share
    $work_title = $_POST['q34_workTitle'];
    $description = $_POST['q11_feedbackAbout11']; 
    $type_of_work = $_POST['q8_howDid8'];
    $subcategory = isset($_POST['q248_subcategory']) ? $_POST['q248_subcategory'] : null;
    $year_of_creation = $_POST['q203_yearOf']; // Year of Completion
    $month = $_POST['q202_dateOf']['month']; // Month
    $day = $_POST['q202_dateOf']['day']; // Day
    $year = $_POST['q202_dateOf']['year']; // Year
    $nation_of_publication = $_POST['q206_nationOf']; // Nation of First Publication
    $same_as_claimants = $_POST['q15_willYou15']; // Will you use the same as claimants?

    // Validate the date
    if (!checkdate($month, $day, $year)) {
        die("Invalid date provided.");
    }
    $date_of_publication = "$year-$month-$day";

    // File upload handling
    $file_path = null;
    if (isset($_FILES['q209_fileUpload'])) {
        $files = $_FILES['q209_fileUpload'];
        for ($i = 0; $i < count($files['name']); $i++) {
            $fileName = $files['name'][$i];
            $fileTmpName = $files['tmp_name'][$i];
            $fileError = $files['error'][$i];
            $fileSize = $files['size'][$i];
            $uploadDir = 'uploads/'; 
            $uploadFilePath = $uploadDir . basename($fileName);
            if ($fileError === 0) {
                // Check file size (1GB = 1048576000 bytes)
                if ($fileSize <= 1048576000) {
                    // Move the uploaded file to the specified directory
                    if (move_uploaded_file($fileTmpName, $uploadFilePath)) {
                        $file_path = $uploadFilePath; // Save the file path for database insertion
                    } else {
                        echo "Error moving uploaded file.";
                    }
                } else {
                    echo "File size exceeds the limit.";
                }
            } else {
                echo "Error uploading file: " . $fileError;
            }
        }
    }

    // Prepare an SQL statement to insert into register_data
    $stmt = $conn->prepare("INSERT INTO register_data 
        (first_name, last_name, company_name, address_line1, address_line2, city, state, postal_code, country, phone_number, email, percentage_share, work_title, 
        description, type_of_work, subcategory, year_of_creation, date_of_publication, nation_of_publication, same_as_claimants, file_path) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die("Error preparing statement for primary claimant: " . $conn->error);
    }

    // Bind parameters for the primary claimant
    $stmt->bind_param("sssssssssssssssssssss", 
        $first_name, 
        $last_name, 
        $company_name, 
        $address_line1, 
        $address_line2, 
        $city, 
        $state, 
        $postal_code, 
        $country, 
        $phone_number, 
        $email, 
        $percentage_share, 
        $work_title, 
        $description, 
        $type_of_work, 
        $subcategory, 
        $year_of_creation, 
        $date_of_publication, 
        $nation_of_publication, 
        $same_as_claimants, 
        $file_path
    );

    // Execute the statement for primary claimant
    if ($stmt->execute()) {
        echo "Primary claimant record inserted successfully.<br>";
        // Get the last inserted ID
        $primary_claimant_id = $stmt->insert_id; 
    } else {
        echo "Error inserting primary claimant record: " . $stmt->error . "<br>";
    }

    // Close the statement for primary claimant
    $stmt->close();

    // Second Claimant Data
    $second_first_name = $_POST['q131_2ndClaimant']['first']; // First Name
    $second_last_name = $_POST['q131_2ndClaimant']['last']; // Last Name
    $second_company_name = $_POST['q132_companyName132']; // Company Name (Optional)
    $second_address_line1 = $_POST['q133_address133']['addr_line1']; // Address Line 1
    $second_address_line2 = isset($_POST['q133_address133']['addr_line2']) ? $_POST['q133_address133']['addr_line2'] : ''; // Address Line 2
    $second_city = $_POST['q133_address133']['city']; // City
    $second_state = $_POST['q133_address133']['state']; // State
    $second_postal_code = $_POST['q133_address133']['postal']; // Postal Code
    $second_country = $_POST['q133_address133']['country']; // Country
    $second_phone_number = $_POST['q219_phoneNumber']; // Phone Number
    $second_email = $_POST['q135_email135']; // Email
    $second_percentage = $_POST['q136_percentage136']; // Percentage

    // Prepare an SQL statement to insert into second_claimants
    $stmt = $conn->prepare("INSERT INTO second_claimants (first_name, last_name, company_name, street_address_line1, street_address_line2, city, state, postal_code, country, phone_number, email, percentage, register_data_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die("Error preparing statement for second claimant: " . $conn->error);
    }

    // Bind parameters for the second claimant, including the foreign key
    $stmt->bind_param("sssssssssssss", 
        $second_first_name, 
        $second_last_name, 
        $second_company_name, 
        $second_address_line1, 
        $second_address_line2, 
        $second_city, 
        $second_state, 
        $second_postal_code, 
        $second_country, 
        $second_phone_number, 
        $second_email, 
        $second_percentage,
        $primary_claimant_id // Foreign key reference
    );

    // Execute the statement for second claimant
    if ($stmt->execute()) {
        echo "Second claimant record inserted successfully.";
    } else {
        echo "Error inserting second claimant record: " . $stmt->error;
    }

    // Close the statement for second claimant
    $stmt->close();
}
$third_first_name = $_POST['q139_3rdClaimant']['first']; // First Name
$third_last_name = $_POST['q139_3rdClaimant']['last']; // Last Name
$third_company_name = $_POST['q140_companyName140']; // Company Name (Optional)
$third_address_line1 = $_POST['q141_address141']['addr_line1']; // Address Line 1
$third_address_line2 = isset($_POST['q141_address141']['addr_line2']) ? $_POST['q141_address141']['addr_line2'] : ''; // Address Line 2
$third_city = $_POST['q141_address141']['city']; // City
$third_state = $_POST['q141_address141']['state']; // State
$third_postal_code = $_POST['q141_address141']['postal']; // Postal Code
$third_country = $_POST['q141_address141']['country']; // Country
$third_phone_number = $_POST['q220_phoneNumber220']; // Phone Number
$third_email = $_POST['q143_email143']; // Email
$third_percentage = $_POST['q144_percentage144']; // Percentage

// Prepare an SQL statement to insert into third_claimants
$stmt = $conn->prepare("INSERT INTO second_claimants (first_name, last_name, company_name, street_address_line1, street_address_line2, city, state, postal_code, country, phone_number, email, percentage, register_data_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    die("Error preparing statement for third claimant: " . $conn->error);
}

// Bind parameters for the third claimant, including the foreign key
$stmt->bind_param("sssssssssssss", 
    $third_first_name, 
    $third_last_name, 
    $third_company_name, 
    $third_address_line1, 
    $third_address_line2, 
    $third_city, 
    $third_state, 
    $third_postal_code, 
    $third_country, 
    $third_phone_number, 
    $third_email, 
    $third_percentage,
    $primary_claimant_id // Foreign key reference
);

// Execute the statement for third claimant
if ($stmt->execute()) {
    echo "Third claimant record inserted successfully.";
} else {
    echo "Error inserting third claimant record: " . $stmt->error;
}

// Close the statement for third claimant
$stmt->close();
// Close the database connection

// Capture form data
$author_first_name = $_POST['q3_fullName3']['first']; // First Name
$author_last_name = $_POST['q3_fullName3']['last']; // Last Name
$author_company_name = isset($_POST['q100_companyName']) ? $_POST['q100_companyName'] : ''; // Company Name (Optional)
$author_address_line1 = $_POST['q4_address4']['addr_line1']; // Address Line 1
$author_address_line2 = isset($_POST['q4_address4']['addr_line2']) ? $_POST['q4_address4']['addr_line2'] : ''; // Address Line 2
$author_city = $_POST['q4_address4']['city']; // City
$author_state = $_POST['q4_address4']['state']; // State
$author_postal_code = $_POST['q4_address4']['postal']; // Postal Code
$author_country = $_POST['q4_address4']['country']; // Country
$author_phone_number = $_POST['q215_typeA215']; // Phone Number (assuming this is captured correctly)
$author_email = $_POST['q6_email6']; // Email

// Prepare an SQL statement to insert into authors table
$stmt = $conn->prepare("INSERT INTO authors (first_name, last_name, company_name, street_address_line1, street_address_line2, city, state, postal_code, country, phone_number, email, register_data_id) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    die("Error preparing statement for author: " . $conn->error);
}

// Bind parameters for the author
$stmt->bind_param("sssssssssss", 
    $author_first_name, 
    $author_last_name, 
    $author_company_name, 
    $author_address_line1, 
    $author_address_line2, 
    $author_city, 
    $author_state, 
    $author_postal_code, 
    $author_country, 
    $author_phone_number, 
    $author_email,
    $primary_claimant_id 
);

// Execute the statement for author
if ($stmt->execute()) {
    echo "Author record inserted successfully.";
} else {
    echo "Error inserting author record: " . $stmt->error;
}

// Close the statement for author
$stmt->close();
$conn->close();
?>