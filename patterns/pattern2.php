<?php
$n=10;
$t=10;
for($i=$n;$i>=1;$i--)
{
	
	for($j=1;$j<=$i;$j++)
	{
		echo "&nbsp"."&nbsp";
	}
	
	for($k=$n;$k>=$i;$k--)
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

	for($j=$i;$j>=1;$j--)
	{
		echo "&nbsp"."&nbsp";
	}
	
	for($k=$n;$k>=$i;$k--)
	{
		echo "*";
	}
	

	echo "</br>";

	
}
?>