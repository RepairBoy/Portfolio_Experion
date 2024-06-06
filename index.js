const projectImage1 = document.getElementById("projectImage1");
projectImage1.addEventListener("mouseover", () =>{
    projectImage1.src = "./images/simonGamesquare.jpeg";
    projectImage1.classList.add("imagePopUp");
    
})
projectImage1.addEventListener("mouseleave", () =>{
    projectImage1.src = "./images/simonGamesquareb&w.jpeg";
    projectImage1.classList.remove("imagePopUp");
    
})

const projectImage2 = document.getElementById("projectImage2");
projectImage2.addEventListener("mouseover", () =>{
    projectImage2.src = "./images/diceGamesquare.jpeg";
    projectImage2.classList.add("imagePopUp");
    
})
projectImage2.addEventListener("mouseleave", () =>{
    projectImage2.src = "./images/diceGamesquareb&w.jpeg";
    projectImage2.classList.remove("imagePopUp");
    
})

const projectImage3 = document.getElementById("projectImage3");
projectImage3.addEventListener("mouseover", () =>{
    projectImage3.src = "./images/drumKitWebsitesquare.jpeg";
    projectImage3.classList.add("imagePopUp");
    
})
projectImage3.addEventListener("mouseleave", () =>{
    projectImage3.src = "./images/drumKitWebsitesquareb&w.jpeg";
    projectImage3.classList.remove("imagePopUp");
    
})

const projectImage4 = document.getElementById("projectImage4");
projectImage4.addEventListener("mouseover", () =>{
    projectImage4.src = "./images/wordleClonesquare.jpeg";
    projectImage4.classList.add("imagePopUp");
    
})
projectImage4.addEventListener("mouseleave", () =>{
    projectImage4.src = "./images/wordleClonesquareb&w.jpeg";
    projectImage4.classList.remove("imagePopUp");
    
})

const projectImage5 = document.getElementById("projectImage5");
projectImage5.addEventListener("mouseover", () =>{
    projectImage5.src = "./images/githubImagesquare.jpg";
    projectImage5.classList.add("imagePopUp");
    
})
projectImage5.addEventListener("mouseleave", () =>{
    projectImage5.src = "./images/githubImagesquareb&w.jpg";
    projectImage5.classList.remove("imagePopUp");
    
})

const projectImage6 = document.getElementById("projectImage6");
projectImage6.addEventListener("mouseover", () =>{
    projectImage6.src = "./images/gghospitalsquare.png";
    projectImage6.classList.add("imagePopUp");
    
})
projectImage6.addEventListener("mouseleave", () =>{
    projectImage6.src = "./images/gghospitalsquareb&w.png";
    projectImage6.classList.remove("imagePopUp");
    
})



// skill1
const myTarget1 = document.getElementById("svg1CircleClass")
const observer1 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("svg1CircleClass", entry.isIntersecting)
    })
},
{
    threshold: 0.2
})
observer1.observe(myTarget1);

// skill2
const myTarget2 = document.getElementById("svg2CircleClass")
const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("svg2CircleClass", entry.isIntersecting)
    })
},
{
    threshold: 0.2
})
observer2.observe(myTarget2);

// skill3
const myTarget3 = document.getElementById("svg3CircleClass")
const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("svg3CircleClass", entry.isIntersecting)
    })
},
{
    threshold: 0.2
})

observer3.observe(myTarget3);

// bannerani
// const myTarget4 = document.getElementById("myImageDiv")
// const observer4 = new IntersectionObserver(entries =>{
//     entries.forEach(entry =>{
//         entry.target.classList.toggle("myImageDiv", entry.isIntersecting)
//     })
// },
// {
//     threshold: 0.1
// })

// observer4.observe(myTarget4);

// const downloadBtn = document.getElementById('resumeDownloadBtn');

// downloadBtn.addEventListener('click', () => {
//     const pdfUrl = 'https://apricot-alikee-95.tiiny.site/'; // Replace with the actual URL of your PDF file
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'yourfile.pdf'; // The name for the downloaded file
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });



