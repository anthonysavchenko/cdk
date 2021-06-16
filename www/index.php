<?php

	// Header Main
	//include '../common/main_header.ht';	

	// Header Core
	include 'header.ht';

	// Identify Device (Phone / Tablet / Computer)
	require_once 'php/mobile_detect.php';
	$detect = new Mobile_Detect;
	 
	if( $detect->isTablet()) {
 		include 'tablet.ht';
	}else if($detect->isMobile()) {
	    include 'phone.ht';
	}else{
		include 'computer.ht';
	}

	// Information Core
	//include 'info.ht';

	// Footer Main
	//include '../common/main_footer.ht';	

?>