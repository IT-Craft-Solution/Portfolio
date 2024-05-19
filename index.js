{/* <div class="col">
          <a href="https://play.google.com/store/apps/details?id=com.itcraftsolution.picturepoint" target="_blank" style="text-decoration: none; color: black">
            <div class="card" style="border-radius: 15px;overflow:hidden">
              <img style="width: inherit;height:350px;" src="images/projects/1.png" class="card-img-top"
                alt="...">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Picture Point: HD Wallpaper App</h5>
                  <div class="d-flex">
                    <div style="background-color:rgba(0, 0, 0, 0.06); border-radius:50%; padding:12px;margin:6px">
                      <img style="width: 32px;" src="images/technologies/android.svg" alt="">
                    </div>
                    <div style="background-color:rgba(0, 0, 0, 0.06); border-radius:50%; padding:12px;margin:6px">
                      <img style="width: 32px;" src="images/technologies/java.svg" alt="">
                    </div>
                    <div style="background-color:rgba(0, 0, 0, 0.06); border-radius:50%; padding:12px;margin:6px">
                      <img style="width: 32px;" src="images/technologies/firebase.svg" alt="">
                    </div>
                  </div>
                </div>
                <p class="card-text my-3">Using Picture Point, you can easily set the wallpaper on your Android or tablet phone screen.
                  We have a wide selection of amazing and breathtaking best wallpapers & backgrounds with daily updates in 25+ categories.
                  On any Android device, you can set a background image as your home screen.</p>
              </div>
            </div>
          </a>
        </div> */}

let projectObject = [
    {title: "Picture Point: HD Wallpaper", projectImageName:"1.png", projectLink:"https://play.google.com/store/apps/details?id=com.itcraftsolution.picturepoint", 
      projectTechnologies: ["android", "java", "firebase"], projectDescription: `Using Picture Point, you can easily set the wallpaper on your Android or tablet phone screen.
      We have a wide selection of amazing and breathtaking best wallpapers & backgrounds with daily updates in 25+ categories.
      On any Android device, you can set a background image as your home screen.`
    },
];
function techs (techs){
  let str = ``;
  techs.forEach((tech)=>{
    str += `<div style="background-color:rgba(0, 0, 0, 0.06); border-radius:50%; padding:12px;margin:6px">
    <img style="width: 32px;" src="images/technologies/${tech}.svg" alt="">
  </div>`
  })
  return str;
}

let projectDivStr = ``;
projectObject.forEach((obj)=>{
  projectDivStr += `<div class="col">
  <a href="${obj.projectLink}" target="_blank" style="text-decoration: none; color: black">
    <div class="card" style="border-radius: 15px;overflow:hidden">
      <img style="width: inherit;height:350px;" src="images/projects/${obj.projectImageName}" class="card-img-top"
        alt="Image not found">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">${obj.title}</h5>
          <div class="d-flex">
            ${techs(obj.projectTechnologies)}
          </div>
        </div>
        <p class="card-text my-3">${obj.projectDescription}</p>
      </div>
    </div>
  </a>
</div>`;
});
document.getElementById("projects").innerHTML = projectDivStr;