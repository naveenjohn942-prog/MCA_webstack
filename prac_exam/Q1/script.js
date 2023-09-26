     
        canavs = document.getElementById('canvas');
        btn = document.getElementById('btn');

        const load = `<p style = " font-size: 5vh;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
             color:#6390dd ;">Loading...<p>`

                

        function makeRequest(textURL)
        {
        return new Promise(

        (resolve,reject)=>
        {
            xhr = new XMLHttpRequest()
            xhr.open('GET',textURL)
            xhr.onload = ()=>{resolve(xhr.response);}
            xhr.onerror = ()=>{reject('{`"message":"No data"`}')}
            xhr.send()
        }
        )
    }
        async function fetchImage()
            {
                canvas.innerHTML = load;
               try
               {
                const response =  await makeRequest('https://dog.ceo/api/breeds/image/random')
                let imageURL = await JSON.parse(response)
                canvas.innerHTML =  canvas.innerHTML = `<img src="${imageURL.message}" alt=""Refresh the page>`
               }
               catch{

                (err)=>

                    {
                        `<p style = " font-size: 5vh;
             font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
             color:#f00 ;">ERR:${err}<p>`
                    }

               }

            }
            btn.addEventListener('click',fetchImage)
