import fs from "fs";

async function getDemons() {
  const url = "https://api.aredl.net/api/aredl/list";
  const data = await fetch(url);
  return await data.json();
}

async function getYoutubeURL(demon) {
  const id = demon.id;
  const url = `https://api.aredl.net/api/aredl/levels/${id}?&verification=true`;

  const data = await fetch(url);
  const jsonn = await data.json();

  const yt = jsonn.verification.video_url;
  const author = jsonn.publisher.global_name;

  return [yt[8] === "w" ? yt.substring(32, 43) : yt.substring(17, 28), author];
}

getDemons()
  .then(async (demons) => {
    for (let i = 0; i < demons.length; i++) {
      console.log(`Retreiving #${demons[i].position}: ${demons[i].name}`);

      const parsedData = await getYoutubeURL(demons[i]);

      demons[i].thumbnail =
        `https://img.youtube.com/vi/${parsedData[0]}/maxresdefault.jpg`;
      demons[i].author = parsedData[1];
    }

    return JSON.stringify(demons, null, 2);
  })
  .then((content) => {
    fs.writeFile("./webscraper/demons.json", content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("success!");
      }
    });
  });
