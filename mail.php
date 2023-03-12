<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  // Construct the email headers
  $to = "imamantripathi@gmail.com";
  $subject = "New message from $name";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Phone: $phone\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  // Construct the email body
  $body = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nMessage:\n$message";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
