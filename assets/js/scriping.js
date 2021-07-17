
const init = () => {

  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://zwangerpesiri.isolvedhire.com/jobs/"
  );

  request.responseType = 'document';
  request.send();
  console.log(request);
  
  request.addEventListener('load', function () {
    const data = request.responseXML.querySelectorAll(".list-group-item.strip-side-borders");
    console.log(data)

    let arrayInfo = [];

    data.forEach(job => {
      const info = {
        url: job.href, //href
        title: job.childNodes[1].children[0].outerText, //h4
        loation: job.childNodes[1].childNodes[3].childNodes[1].firstChild.data, //ul
        source__jobtype: job.childNodes[1].childNodes[3].childNodes[2].firstChild.data, //ul
      };
      console.log(info);
      arrayInfo.push(info);
    });

    console.log(arrayInfo);
    console.table(arrayInfo);

  })

  //TODO:Aqui trate de emplear el codigo con fecht pero surgieron problemas de cors y otras cosas que no me permiteron implementarlo.
  // const URL = "https://cors-anywhere.herokuapp.com/https://zwangerpesiri.isolvedhire.com/jobs/";

  // const scrapingWebPage = async function (url) {
  //   const response = await fetch(url);
  //   // const data = await response;
  //   console.log(response)

  // }

  // scrapingWebPage(URL).then();

}




export {
  init
}