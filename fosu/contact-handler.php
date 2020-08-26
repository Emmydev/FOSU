<?php
 if(isset($_POST['submit'])){
$first_name= $_POST['first_name'];
$last_name=$_POST['last_name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$comments= $_POST['comments'];

$to ='fosuogidi@gmail.com';
$email_subject=  "Federation Of Ogidi Student Union";
$email_message="First Name: ".$first_name."\n"."Last Name: ".$last_name."\n"."Email: ".$email."\n"."Phone No: ".$phone."\n"."From www.fosuogidi.com Wrote the Following: "."\n\n".$comments;
$headers="From: ".$email;
if (mail($to, $email_subject, $email_message, $headers)) {
echo "<script>
alert('Message Sent Successfully');
window.location.href='index.html';
</script>";
}
else{
	echo "<script>
alert('An Error Occurred');
window.location.href='index.html';
</script>";
	}
}
?>