  //Project Core
  //Device type const
  // - device type constant:
  // - - device_const_type
  // - - - 1 - computer
  // - - - 2 - phone
  // - - - 3 - tablet
  // - - device_const_platform
  // - - - 1 - ios
  // - - - 2 - android
  // - - device_const_platform
  // - - - 1 - portrait
  // - - - 2 - landscape

  //Device type constant
  var device_const_type = 0;

  //Device platform constant
  var device_const_platform = 0;

  //Device orientation constant
  var device_const_porientation = 0;

  //Device identify
  if(device.mobile() == true ){
    device_const_type = 2;
    if(device.iphone() == true ){
      device_const_platform = 1;
    }else if(device.android() == true ){
      device_const_platform = 2;
    }
  }else if(device.tablet() == true ){
    device_const_type = 3;
    if(device.ipad() == true ){
      device_const_platform = 1;
    }else if(device.androidTablet() == true ){
      device_const_platform = 2;
    }
  }else{
    device_const_type = 1;
  }

  if(device.portrait() == true ){
    device_const_porientation = 1;
  }else if(device.landscape() == true ){
    device_const_porientation = 2;
  }

  //Change Orientation Core
  window.addEventListener("orientationchange", function() {
    if((screen.orientation.angle == 0) || (screen.orientation.angle == 180)){
      device_const_porientation = 1;
      kit_resize(1);
    }else{
      device_const_porientation = 2;
      kit_resize(2);
    }
});