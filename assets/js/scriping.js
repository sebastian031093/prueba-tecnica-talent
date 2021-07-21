import { tempalteJobs } from "./tempalte-jobs.js";
//https://cors-anywhere.herokuapp.com/
const init = () => {

  const req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://zwangerpesiri.isolvedhire.com/jobs/",
    true
  );

  req.responseType = 'document';
  req.send();
  console.log(req);
  
  req.addEventListener('load', function () {
    const data = req.responseXML.querySelectorAll(".list-group-item.strip-side-borders");
    console.log(data)

    let arrayInfo = [];

    data.forEach(job => {
      const info = {
        url: job.href, //href
        title: job.childNodes[1].childNodes[1].textContent, //h4
        loation: job.childNodes[1].childNodes[3].childNodes[1].firstChild.data, //ul
        source__jobtype: job.childNodes[1].childNodes[3].childNodes[2].firstChild.data, //ul
      };
      console.log(info);
      arrayInfo.push(info);
    });

    console.log(arrayInfo);
    console.table(arrayInfo);

    tempalteJobs(arrayInfo)

  })

  //TODO:Aqui trate de emplear el codigo con fecht pero surgieron problemas de cors y otras cosas que no me permiteron implementarlo.
  // const URL =
  //   "https://cors-anywhere.herokuapp.com/https://zwangerpesiri.isolvedhire.com/jobs/";

  //   const scrapingWebPage = async function (url) {
  //   const res = await fetch(url,{mode:'cors',});
  //   const data = await res.text();
  //   const doc = 

  // }

  // scrapingWebPage(URL);

}




export {
  init,
}