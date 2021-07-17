let iterador = 0;

const contador = () => {
    iterador++;
    return iterador +'';
}

const tabla = document.querySelector(".table");

const tempalteJobs = (arrjobs) =>{
    const markut = `
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
              <th scope="col">Job Tipe</th>
              <th scope="col">Job URL</th>
            </tr>
          </thead>
          <tbody>
            ${arrjobs.map(fila => {
                return `
                    <tr>
                        <th scope="row">${contador()}</th>
                        <td>${fila.title}</td>
                        <td>${fila.loation}</td>
                        <td>${fila.source__jobtype}</td>
                        <td><a target="_blank" href="${fila.url}">${fila.url}</a></td>
                    </tr>
                `;
            }).join('')}
          </tbody>
    `;
    tabla.innerHTML = '';
    tabla.insertAdjacentHTML('afterbegin', markut);
};

export {
    tempalteJobs
}