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
  {
    title: "Picture Point: HD Wallpaper", projectImageName: "1.png", projectLink: "https://play.google.com/store/apps/details?id=com.itcraftsolution.picturepoint",
    projectTechnologies: ["android", "java", "firebase"], projectDescription: `Using Picture Point, you can easily set the wallpaper on your Android or tablet phone screen.
      We have a wide selectilon of amazing and breathtaking best wallpapers & backgrounds with daily updates in 25+ categories.
      On any Android device, you can set a background image as your home screen.`
  },
  {
    title: "Rideo - Ride Sharing App", projectImageName: "3.png", projectLink: "https://play.google.com/store/apps/details?id=com.itcraftsolution.raido",
    projectTechnologies: ["android", "java", "firebase"], projectDescription: `Developed an Android app with Java and Material UI, facilitating the download of WhatsApp statuses
      (images and videos) in their phone’s gallery. Utilized Media APIs for seamless storage and retrieval of statuses, enabling users to easily save, share,
      delete, and repost them on social media platforms.`
  },
  {
    title: "To-do Planner App", projectImageName: "4.png", projectLink: "https://play.google.com/store/apps/details?id=com.itcraftsolution.todoplanner",
    projectTechnologies: ["android", "java", "sqlite",], projectDescription: `Rideo is a ride-sharing app that helps commuters save on transportation costs while promoting sustainable travel. Our app is designed for users who want to share their ride with others who are traveling to the same destination at the same time. With Rideo, users can either share their own car or join a ride with another user.`
  },
  {
    title: "Status Saver For Whatsapp", projectImageName: "2.png", projectLink: "https://play.google.com/store/apps/details?id=com.itcraftsolution.statussaverforwhatsappdownload",
    projectTechnologies: ["android", "java"], projectDescription: `Developed an Android app with Java and Material UI, facilitating the download of WhatsApp statuses
      (images and videos) in their phone’s gallery. Utilized Media APIs for seamless storage and retrieval of statuses, enabling users to easily save, share,
      delete, and repost them on social media platforms.`
  },
];
function techs(techs) {
  let str = ``;
  techs.forEach((tech) => {
    str += `<div style="background-color:rgba(0, 0, 0, 0.06); border-radius:50%; padding:12px;margin:6px">
    <img style="width: 32px;" src="images/technologies/${tech}.svg" alt="">
  </div>`
  })
  return str;
}

let projectDivStr = ``;
projectObject.forEach((obj) => {
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