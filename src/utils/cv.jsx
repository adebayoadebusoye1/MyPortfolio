import React from 'react';
const cv = () => {


    const handleDownload = () => {
        let fileUrl = '/cv.pdf';
        let link = document.createElement('a');
        link.href = fileUrl;
        link.download = '/cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const handleClick = () => {
        if('download'){
            handleDownload();
    
        }else{
            console.log('Clicked');
        }
    };
    
  return (
    <a onclick={handleClick} class="header__resume btn" href="#">Resume</a>
  )

}

export default cv;
