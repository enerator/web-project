var api = "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";
var input = document.getElementById('in');
var images = document.querySelector('.image')
var getimage = async () => {
    // make request to openia api
    var methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify({

            "prompt":input.value,
            "n":4,
            "size": "256x256"
        })

    }
    var res = await fetch("https://api.openai.com/v1/images/generations", methods);
    // parse the response as json
    var data = await res.json();

    var listimage = data.data;
    images.innerHTML = ''
    listimage.map(photo => {
        var container = document.createElement("div")
        images.append(container)
        var imag = document.createElement("img")
        container.append(imag)
        imag.src = photo.url

    })
}