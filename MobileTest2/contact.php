<?php
    // Grab our POSTed form values
    // Note that whatever is enclosed by $_POST[""] matches the form input elements
    $contactName = $_POST["ContactName"];
    $contactEmail = $_POST["ContactEmail"];
    $contactLeastFavoriteColor = $_POST["ContactLeastFavoriteColor"];

    // Connect to our DB with mysql_connect(<server>, <username>, <password>)
    $sql_connection = mysql_connect("localhost", "root", "root");

    mysql_select_db("MyRadContactForm", $sql_connection);

    // Probably should check to make sure the connection was successful
    // But I'm too lazy...
    $sql = "INSERT INTO MyRadContacts (
                ContactName,
                ContactEmail,
                ContactLeastFavoriteColor,
                ContactDateCreated
            )
            VALUES (
                '$contactName',
                '$contactEmail',
                '$contactLeastFavoriteColor',
                NOW()
            )";

    mysql_query($sql, $sql_connection);

    mysql_close($sql_connection);
?>
