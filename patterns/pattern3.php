<?php
$r= 20;
function lie_in_circle ($i,$j,$r)
{
	$in_circle=(($i-$r)*($i-$r))+(($j-$r)*($j-$r))-($r*$r);
	if($in_circle<0)
		return 0;
	else
		return 1;
}

for($i=0; $i< 2*$r; $i++)
{
	for($j=0; $j<2*$r; $j++)
	{
		if (lie_in_circle($i,$j,$r))
			echo "&nbsp";
		else
			echo "* ";
	 }	
	echo "</br>";
}

?>