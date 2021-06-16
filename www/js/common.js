






//Template function
// Generate Base64 from image
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
// END Generate Base64 from image

// Generate Cookie ID
function Create_Cookie() {
  var local_cookie = id_klient;
  createCookie('local_cookie',local_cookie,'10');
}
// END Generate Cookie ID

// Create Cookie
function createCookie(name,value,days) {
    if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+escape(value)+expires+"; path=/";
}
// END Create Cookie

// Read Cookie
function readсookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
    }
    return null;
}
// END Read Cookie
//END Template function







// Oboi background ----------------------------------
// Oboi background download
function oboi_set_from_image(img_tmp){
  document.getElementById("uploadFile_div").innerHTML = '<input type="file" multiple id="oboi_img" name="oboi_img" accept="image/jpeg,image/png,image/gif" onChange="javascript:add_images_upload();"/>';

  document.getElementById("id_upload_oboi_oboi_example_pre").innerHTML = '<span style="margin-right: 28px;">Загрузить фото обоев</span>';
  document.getElementById("id_load_block").style.display = "none";
  document.getElementById("id_oboi1").style.background = "transparent";
  document.getElementById("id_oboi2").style.background = "transparent";
  document.getElementById("id_oboi3").style.background = "transparent";
  document.getElementById("id_oboi4").style.background = "transparent";
  document.getElementById("id_oboi5").style.background = "transparent";
  document.getElementById("id_oboi6").style.background = "transparent";

  document.getElementById("id_oboi1").style.backgroundImage = "url('tmp_files/" + img_tmp + "?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi2").style.backgroundImage = "url('tmp_files/" + img_tmp + "?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi3").style.background = "url('tmp_files/" + img_tmp + "?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi4").style.background = "url('tmp_files/" + img_tmp + "?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi5").style.background = "url('tmp_files/" + img_tmp + "?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi6").style.backgroundImage = "url('tmp_files/" + img_tmp + "?rnd=" + Math.random() + "')";
}
// END Oboi background download

// Oboi background example
function oboi_set_from_image_src(img_tmp_src){
  document.getElementById("id_load_block").style.display = "none";
  document.getElementById("id_oboi1").style.background = "transparent";
  document.getElementById("id_oboi2").style.background = "transparent";
  document.getElementById("id_oboi3").style.background = "transparent";
  document.getElementById("id_oboi4").style.background = "transparent";
  document.getElementById("id_oboi5").style.background = "transparent";
  document.getElementById("id_oboi6").style.background = "transparent";

  document.getElementById("id_oboi1").style.backgroundImage = "url('images/oboi/ob_ex" + img_tmp_src + ".jpg?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi2").style.backgroundImage = "url('images/oboi/ob_ex" + img_tmp_src + ".jpg?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi3").style.background = "url('images/oboi/ob_ex" + img_tmp_src + ".jpg?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi4").style.background = "url('images/oboi/ob_ex" + img_tmp_src + ".jpg?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi5").style.background = "url('images/oboi/ob_ex" + img_tmp_src + ".jpg?rnd=" + Math.random() + "')";
  document.getElementById("id_oboi6").style.backgroundImage = "url('images/oboi/ob_ex" + img_tmp_src + ".jpg?rnd=" + Math.random() + "')";
}
// END Oboi background example

function add_images(){
  open_color_set_mini_cl();
  document.getElementById("oboi_img").click(); 
} 
  
function add_images_upload(){
  if(document.getElementById("oboi_img").files.length > 0){
    document.getElementById("id_upload_oboi_oboi_example_pre").innerHTML = "Загрузка...";
    document.getElementById("id_text_up1").value = id_klient;
    document.nameupload.myupload.click();
  }
} 

// Oboi background color
function oboi_set_from_color(color_tmp){
  document.getElementById("id_oboi1").style.background = color_tmp;
  document.getElementById("id_oboi2").style.background = color_tmp;
  document.getElementById("id_oboi3").style.background = color_tmp;
  document.getElementById("id_oboi4").style.background = color_tmp;
  document.getElementById("id_oboi5").style.background = color_tmp;
  document.getElementById("id_oboi6").style.background = color_tmp;

  document.getElementById("id_oboi1").style.backgroundImage = "none";
  document.getElementById("id_oboi2").style.backgroundImage = "none";
  document.getElementById("id_oboi3").style.backgroundImage = "none";
  document.getElementById("id_oboi4").style.backgroundImage = "none";
  document.getElementById("id_oboi5").style.backgroundImage = "none";
  document.getElementById("id_oboi6").style.backgroundImage = "none";
}
// END Oboi background color

// Oboi example
function list_ex_open(){
  if(document.getElementById("id_potolok_list_ex").style.display == "block"){
    document.getElementById("id_potolok_list_ex").style.display = "none";
    $("#id_potolok_example").toggleClass("oboi_example_rot");
  }
  document.getElementById("id_open_color_set_mini1").innerHTML = "";
  document.getElementById("id_open_color_set_mini2").innerHTML = "";
  document.getElementById("id_open_color_set_mini3").innerHTML = "";
  document.getElementById("id_open_color_set_mini4").innerHTML = "";
  document.getElementById("id_set_color_block_mini").style.display = "none";

  if(document.getElementById("id_oboi_list_ex").style.display == "none"){
    document.getElementById("id_oboi_list_ex").style.display = "block";
  }else{
    document.getElementById("id_oboi_list_ex").style.display = "none";
  }
  $("#id_oboi_example").toggleClass("oboi_example_rot");
}
// END Oboi example
// END Oboi background ----------------------------------







// Potolok background ----------------------------------
function potolok_set_from_image(potolok_tmp){
  document.getElementById("uploadFile_div").innerHTML = '<input type="file" multiple id="potolok_img" name="potolok_img" accept="image/jpeg,image/png,image/gif" onChange="javascript:add_images_potolok_upload();"/>';

  document.getElementById("id_upload_oboi_pot").innerHTML = "Загрузить изображение";
  document.getElementById("id_load_block").style.display = "none";
  potolok_tmp_main = potolok_tmp;
  if(document.getElementById("checkBox1").checked == true){
    document.getElementById("id_potolok_oboi_two").style.background = "transparent";
  }else{
    document.getElementById("id_potolok_oboi_two").style.background = "transparent";
    document.getElementById("id_potolok_oboi_two").style.background = "url('tmp_files/" + potolok_tmp_main + "?rnd=" + Math.random() + "')";
  }
}

function potolok_set_from_image_src(potolok_tmp){
  potolok_tmp_main = potolok_tmp;
  document.getElementById("id_potolok_oboi_two").style.background = "transparent";
  document.getElementById("id_potolok_oboi_two").style.background = "url('images/potolok/ob_ex" + potolok_tmp_main + ".jpg?rnd=" + Math.random() + "')";
}

function add_images_potolok(){
  open_color_set_mini_cl();
  document.getElementById("potolok_img").click(); 
} 
  
function add_images_potolok_upload(){
  if(document.getElementById("potolok_img").files.length > 0){
    document.getElementById("id_upload_oboi_pot").innerHTML = "Загрузка...";
    if(device.mobile() == true ){
      document.getElementById("id_load_block").style.display = "block";
    }
    document.getElementById("id_text_up2").value = id_klient;
    document.nameupload1.myupload1.click();
  }
} 

// Potolok Oboi example
function list_ex_open_pot(){
  if(document.getElementById("id_oboi_list_ex").style.display == "block"){
    document.getElementById("id_oboi_list_ex").style.display = "none";
    $("#id_oboi_example").toggleClass("oboi_example_rot");
  }
  document.getElementById("id_open_color_set_mini1").innerHTML = "";
  document.getElementById("id_open_color_set_mini2").innerHTML = "";
  document.getElementById("id_open_color_set_mini3").innerHTML = "";
  document.getElementById("id_open_color_set_mini4").innerHTML = "";
  document.getElementById("id_set_color_block_mini").style.display = "none";

  if(document.getElementById("id_potolok_list_ex").style.display == "none"){
    document.getElementById("id_potolok_list_ex").style.display = "block";
  }else{
    document.getElementById("id_potolok_list_ex").style.display = "none";
  }
  $("#id_potolok_example").toggleClass("oboi_example_rot");
}
// END Potolok Oboi example

// Potolok Two Level
function two_level(){
  if(document.getElementById("checkBox1").checked == true){
    document.getElementById("id_tw_l_img").style.display = "block";
    document.getElementById("id_tw_l_img1").style.display = "block";
  }else{
    document.getElementById("id_tw_l_img").style.display = "none";
    document.getElementById("id_tw_l_img1").style.display = "none";
  }
}
// END Potolok Two Level
// END Potolok background ----------------------------------







// Select color theme ----------------------------------
function open_color_set_mini_cl(){

if(device.mobile() == true ){
  $("#id_set_color_block_mini").animate({bottom: '-' + color_height},500, function() {

  }); 
}else if(device.tablet() == true ){

}else{
  document.getElementById("id_set_color_block_mini").style.display = "none";
}


  main_color_reg = 0;
  document.getElementById("id_open_color_set_mini1").innerHTML = "";
  document.getElementById("id_open_color_set_mini2").innerHTML = "";
  document.getElementById("id_open_color_set_mini3").innerHTML = "";
  document.getElementById("id_open_color_set_mini4").innerHTML = "";
}

$(document).ready(function() {
  $("#id_set_color_block_mini, #id_set_color_block_mini_mobile").on('click', '.set_color_block_item', function() {
    if(main_color_reg == 1){
      document.getElementById("id_open_color_set_mini1").style.background = $(this).css("background-color");
      oboi_set_from_color($(this).css("background-color"));
      document.getElementById("id_set_ccolor1").style.background = $(this).css("background-color");
    }else if(main_color_reg == 2){
      document.getElementById("id_open_color_set_mini2").style.background = $(this).css("background-color");
      document.getElementById("id_potolok").style.background = $(this).css("background-color");
      document.getElementById("id_potolok_oboi_two").style.background = 'transparent';
      document.getElementById("id_set_ccolor2").style.background = $(this).css("background-color");
    }else if(main_color_reg == 3){
      document.getElementById("id_open_color_set_mini3").style.background = $(this).css("background-color");
      document.getElementById("id_pol").style.background = $(this).css("background-color");
      document.getElementById("id_set_ccolor3").style.background = $(this).css("background-color");
    }else if(main_color_reg == 4){
      document.getElementById("id_tw_l_img").style.display = "block";
      document.getElementById("id_tw_l_img1").style.display = "block";
      document.getElementById("checkBox1").checked = true;

      document.getElementById("id_open_color_set_mini4").style.background = $(this).css("background-color");
      document.getElementById("id_tw_l_img").style.background = $(this).css("background-color");
      //document.getElementById("id_set_ccolor4").style.background = $(this).css("background-color");
    }
  });
});
// END Select color theme ----------------------------------







// Other Elements ----------------------------------
function material(material_tmp){
  $("#id_material-1").removeClass('active');
  $("#id_material-2").removeClass('active');
  $("#id_material-3").removeClass('active');

  if(material_tmp == 0){
    document.getElementById("id_glan").style.display = "none";
    document.getElementById("id_glan1").style.display = "none";
    $("#id_material-1").addClass('active');
  }else if(material_tmp == 1){
    document.getElementById("id_glan").style.display = "none";
    document.getElementById("id_glan1").style.display = "block";
    $("#id_material-2").addClass('active');
  }else{
    document.getElementById("id_glan").style.display = "block";
    document.getElementById("id_glan1").style.display = "none";
    $("#id_material-3").addClass('active');
  }
}

function svet(){
  if(document.getElementById("checkBox12").checked == true){
    document.getElementById("id_sv0").style.display = "block";
    document.getElementById("id_main_edit-title_svet").style.background = "#fff";
    document.getElementById("id_main_edit-title_svet").style.border = "1px dashed #7b7b7b";
    $("#id_main_edit-title_svet_desc").removeClass('active');
    document.getElementById("id_main_edit-title_svet").style.display = "block";
    document.getElementById("id_main_edit-title_svet_desc").style.display = "block";
  }else{
    document.getElementById("id_sv0").style.display = "none";
    document.getElementById("id_sv1").style.display = "none";
    document.getElementById("id_main_edit-title_svet").style.display = "none";
    document.getElementById("id_main_edit-title_svet_desc").style.display = "none";
  }
}

function svet_light(){
  if(document.getElementById("id_sv1").style.display == 'none'){
    document.getElementById("id_sv1").style.display = "block";
    document.getElementById("id_main_edit-title_svet").style.background = "#ffdd55";
    document.getElementById("id_main_edit-title_svet").style.border = "1px dashed #ffdd55";
    $("#id_main_edit-title_svet_desc").addClass('active');
  }else{
    document.getElementById("id_sv1").style.display = "none";
    document.getElementById("id_main_edit-title_svet").style.background = "#fff";
    document.getElementById("id_main_edit-title_svet").style.border = "1px dashed #7b7b7b";
    $("#id_main_edit-title_svet_desc").removeClass('active');
  }
}

var svet1 = 0;
function svet_mob(){
  if(svet1 == 0){
    document.getElementById("id_svet-1").style.background = "#e4e4e4";
    document.getElementById("id_sv0").style.display = "block";
    svet1 = 1;
  }else if(svet1 == 1){
    document.getElementById("id_svet-1").style.background = "#ffdd55";
    document.getElementById("id_sv1").style.display = "block";
    svet1 = 2;
  }else if(svet1 == 2){
    document.getElementById("id_svet-1").style.background = "transparent";
    document.getElementById("id_sv0").style.display = "none";
    document.getElementById("id_sv1").style.display = "none";
    svet1 = 0;   
  }
}

function lust(){
  if(document.getElementById("checkBox11").checked == true){
    document.getElementById("id_lust").style.display = "block";
    $("#id_main_edit-title_svet_lust_desc").removeClass('active');
    document.getElementById("id_main_edit-title_svet_lust").style.display = "block";
    document.getElementById("id_main_edit-title_svet_lust_desc").style.display = "block";
  }else{
    document.getElementById("id_lust").style.display = "none";
    document.getElementById("id_lust1").style.display = "none";
    document.getElementById("id_main_edit-title_svet_lust").style.display = "none";
    document.getElementById("id_main_edit-title_svet_lust_desc").style.display = "none";
  }
}

function svet_light_lust(){
  if(document.getElementById("id_lust1").style.display == 'none'){
    document.getElementById("id_lust1").style.display = "block";
    document.getElementById("id_main_edit-title_svet_lust").style.background = "#ffdd55";
    document.getElementById("id_main_edit-title_svet_lust").style.border = "1px dashed #ffdd55";
    $("#id_main_edit-title_svet_lust_desc").addClass('active');
  }else{
    document.getElementById("id_lust1").style.display = "none";
    document.getElementById("id_main_edit-title_svet_lust").style.background = "#fff";
    document.getElementById("id_main_edit-title_svet_lust").style.border = "1px dashed #a2a2a2";
    $("#id_main_edit-title_svet_lust_desc").removeClass('active');
  }
}

var lust1 = 0;
function lust_mob(){
  if(lust1 == 0){
    document.getElementById("id_lust-1").style.background = "#e4e4e4";
    document.getElementById("id_lust").style.display = "block";
    lust1 = 1;
  }else if(lust1 == 1){
    document.getElementById("id_lust-1").style.background = "#ffdd55";
    document.getElementById("id_lust1").style.display = "block";
    lust1 = 2;
  }else if(lust1 == 2){
    document.getElementById("id_lust-1").style.background = "transparent";
    document.getElementById("id_lust").style.display = "none";
    document.getElementById("id_lust1").style.display = "none";
    lust1 = 0;   
  }
}

function lenta(){
  if(document.getElementById("checkBox13").checked == true){
    document.getElementById("id_lenta").style.display = "block";
  }else{
    document.getElementById("id_lenta").style.display = "none";
  }
}

var lenta1 = 0;
function lenta_mob(){
  if(lenta1 == 0){
    document.getElementById("id_lenta-1").style.background = "#e4e4e4";
    document.getElementById("id_lenta").style.display = "block";
    lenta1 = 1;
  }else{
    document.getElementById("id_lenta-1").style.background = "transparent";
    document.getElementById("id_lenta").style.display = "none";
    lenta1 = 0;
  }
}
// END Other Elements ----------------------------------







//Send Block ----------------------------------
function open_form_send(){
  if(document.getElementById("id_send_form_btn").innerHTML == "Закрыть"){
    document.getElementById("id_send_form_btn").innerHTML = '<img src="images/ic_send.png" style="vertical-align: middle;"> Отправить эскиз';
    document.getElementById("id_send_form_btn").style.background = "#ffdd55";
    document.getElementById("id_send_form_btn").style.color = "#3d3c3c";
    document.getElementById("id_form_send_kont").style.display = "none";
  }else{
    document.getElementById("id_send_form_btn").innerHTML = "Закрыть";
    document.getElementById("id_send_form_btn").style.background = "#85888c";
    document.getElementById("id_send_form_btn").style.color = "#fff";
    document.getElementById("id_form_send_kont").style.display = "block";
  }

}

// Send block / Calc block open
function calc_open(){
  if(document.getElementById("id_calc_form").style.display == "none"){
    document.getElementById("id_calc_form_b").innerText = "Закрыть калькулятор";
    document.getElementById("id_calc_form").style.display = "block";
  }else{
    document.getElementById("id_calc_form_b").innerText = "Открыть калькулятор";
    document.getElementById("id_calc_form").style.display = "none";
  }
}
// END Send / Calc block open
// END Send Block ----------------------------------






// Screenshot Core ----------------------------------
function create_screenshot(){
  document.getElementById("id_load_srcc").innerHTML = 'Создание изображения...';
  document.getElementById("id_show_screeshot").style.display = "block";
  $("#id_show_screeshot").animate({opacity: '1'},500, function() {
    document.getElementById("id_screenshot_class").style.display = "none";
    var node = document.getElementById('id_main_png_screen');
    domtoimage.toPng(node).then(function (dataUrl){
    var node = document.getElementById('id_main_png_screen');
      document.getElementById("id_show_screeshot_img").src = dataUrl;
      document.getElementById("id_show_screeshot_img").style.display = "block";
      $("#id_show_screeshot_panel").animate({top: '0'},400, function() {

      }); 

      $("#id_save_screenshot").animate({bottom: '0'},400, function() {

      }); 

      })
  }); 
}

function close_screenshot(){
  document.getElementById("id_load_srcc").innerHTML = '';
  $("#id_save_screenshot").animate({bottom: '-52px'},400, function() {
    $("#id_show_screeshot_panel").animate({top: '-50px'},400, function() {
      document.getElementById("id_screenshot_class").style.display = "block";
      document.getElementById("id_show_screeshot_img").style.display = "none";
      $("#id_show_screeshot").animate({opacity: '0'},500, function() {
        document.getElementById("id_show_screeshot").style.display = "none";
        document.getElementById("id_show_screeshot_img").src = 'none';
      }); 
    }); 
  }); 
}

function save_screenshot(){
  document.getElementById("id_save_screenshot").innerHTML = 'Сохранение...';
  var img_to_server = getBase64Image(document.getElementById("id_show_screeshot_img"));
  $.ajax({
    type: 'POST',
    url: 'php/img_to_server.php',
    data: {'id_klient': id_klient, 'img_to_server': img_to_server},
    dataType: 'text',
    success: function(text) {
      var link = document.createElement("a");
      link.download = id_klient + "screen.jpg";
      link.href = "tmp_files/" + id_klient + "screen.jpg";
      link.click();
      document.getElementById("id_save_screenshot").innerHTML = '<img src="images/icon-save.png"> Сохранить';
    }
  }); 
}


var klient_name_text = "";
var klient_tel_text = "";
var klient_kom_text = "";

function send_screenshot(){
  klient_name_text = document.getElementById("id_klient_name").value;
  klient_tel_text = document.getElementById("id_klient_tel").value;
  klient_kom_text = document.getElementById("id_klient_kom").value;

  if(klient_name_text == ""){
    alert('Введите имя');
  }else{
    if(klient_tel_text ==""){
      alert('Введите телефон');
    }else{
      document.getElementById("id_send_screenshot").innerHTML = 'Отправка письма...';
      document.getElementById("id_send_form_btn_all").style.display = "block";
      document.getElementById("id_send_form_btn").innerHTML = "Отправить эскиз";
      document.getElementById("id_send_form_btn").style.background = "#4a76a8";
      document.getElementById("id_form_send_kont").style.display = "none";

      var node = document.getElementById('id_main_png_screen');
      domtoimage.toPng(node).then(function (dataUrl){
        document.getElementById("id_show_screeshot_img").src = dataUrl;
        setTimeout(send_screenshot_img, 3000);
        })      
    }
  }
}

function send_screenshot_img(){
  var img_to_server = getBase64Image(document.getElementById("id_show_screeshot_img"));
  $.ajax({
    type: 'POST',
    url: 'php/send_screen.php',
    data: {'id_klient': id_klient, 'img_to_server': img_to_server, 'klient_name': klient_name_text, 'klient_tel': klient_tel_text, 'klient_kom': klient_kom_text},
    dataType: 'text',
    success: function(text) {
      document.getElementById("id_send_screenshot").innerHTML = '<img src="images/icon-mail.png"> Отправить на почту';
      document.getElementById("id_send_form_btn_all").style.display = "none";
      document.getElementById("id_klient_name").value = "";
      document.getElementById("id_klient_tel").value = ""
      document.getElementById("id_klient_kom").value = "" 
      alert(text);
    }
  });       
}
// END Screenshot Core ----------------------------------







// Info pruduct ----------------------------------
// Open info pruduct
function info_product_open(){
  $(window).scrollTop(0);
  document.getElementById("id_info_product").style.display = "block";
}

function info_product_close(){
  document.getElementById("id_info_product").style.display = "none";
}
// END Open info pruduct
// END Info pruduct ----------------------------------






