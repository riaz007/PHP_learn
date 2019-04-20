Program to create diamond pattern</br></br>

 <?php
$n=8;
for($i=$n;$i>=1;$i--)
{
	
	for($j=1;$j<=$i;$j++)
	{
		echo "&nbsp";
	}
	
	for($k=$n;$k>=$i;$k--)
	{
		echo "*";
	}
	
	echo "</br>";
	
}
for($i=1;$i<=$n;$i++)
{
	
	for($j=1;$j<=$i;$j++)
	{
		echo "&nbsp";
	}
	
	for($k=$n;$k>=$i;$k--)
	{
		echo "*";
	}
	
	echo "</br>";
	
}
for($i=$n;$i>=1;$i--)
{
	
	for($j=1;$j<=$i;$j++)
	{
		echo "&nbsp";
	}
	
	for($k=$n;$k>=$i;$k--)
	{
		echo "*";
	}
	
	echo "</br>";
	
}
for($i=1;$i<=$n;$i++)
{
	
	for($j=1;$j<=$i;$j++)
	{
		echo "&nbsp";
	}
	
	for($k=$n;$k>=$i;$k--)
	{
		echo "*";
	}
	
	echo "</br>";
	
}
	
?>