/**
 * Created by pblead26 on 12-Dec-16.
 */


function displayBig(previewPic) {
    modal = document.getElementById('modal_image');

    modal.style.display = "block";
    document.getElementById('imageBig').style.backgroundImage = "url('" + previewPic.getAttribute("src")+"')";
}



