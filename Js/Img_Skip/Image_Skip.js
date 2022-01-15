var i = 0; 
var images = [];
var selct_images = [];
var time = 5000;

// Image List

images[0] = 'Js/Img_Skip/Main_Page_FirstThing_Img2.jpeg'; //img2
images[1] = 'Js/Img_Skip/Main_Page_FirstThing_Img1.jpg'; //img1
images[2] = 'Js/Img_Skip/Main_Page_FirstThing_Img3.jpg'; //img3

// Select Image List

selct_images[0] = 'Js/Img_Skip/3eme_Image_Selc.png';
selct_images[1] = 'Js/Img_Skip/2eme_Image_Selc.png';
selct_images[2] = 'Js/Img_Skip/1er_Image_Selc.png';


// Change Image

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        
      i++;

    } 

    else{

      i = 0;

    }

    setTimeout("changeImg()", time);
}

function changeSelectImg(){
 
  document.Img_Selc.src = selct_images[i];
 
  if(i < selct_images.length - 1){
   
    i++;

  } 

  else{

   i = 0;

  }


  setTimeout("changeSelectImg()", time);
}


window.onload = changeImg();
window.onload = changeSelectImg();