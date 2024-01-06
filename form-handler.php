<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["jmeno"];
    $surname = $_POST["prijmeni"];
    $phone = $_POST["telefon"];
    $email = $_POST["email"];
    $message = $_POST["vzkaz"];


    $to = "marketa@markethorak.cz";
    $subject = "New Form Submission from $name $surname";

    $headers = "From: $email";

    $mailBody = "Name: $name\n";
    $mailBody .= "Surname: $surname\n";
    $mailBody .= "Phone: $phone\n";
    $mailBody .= "Email: $email\n\n";
    $mailBody .= "Message:\n$message";

    mail($to, $subject, $mailBody, $headers);
}
?>
