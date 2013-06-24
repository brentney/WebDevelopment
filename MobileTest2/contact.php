<?
//contactform.php
mysql_connect("localhost","root","admin");//database connection
mysql_select_db("example");

//inserting data order
$order = "INSERT INTO sample_example
			(FName, LName, Phone, Email, Address, City)
			VALUES
			('$FName',
			'$LName','$Phone','$Email','$Address','$City')";

//declare in the order variable
$result = mysql_query($order);	//order executes
if($result){
	echo("<br>Input data is succeed");
} else{
	echo("<br>Input data is fail");
}
?>