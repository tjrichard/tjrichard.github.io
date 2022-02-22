window.onload = function () {
    // name update
    const inputName = document.getElementById("input-1")
    const previewName = document.getElementById('preview-text__name');

    inputName.addEventListener('input', updateName);

    function updateName(e) {
        if(e.target.value == ""){
            previewName.textContent = "실명"
        }else{
            previewName.textContent = e.target.value;
        }
    }

    // role update
    const inputRole = document.getElementById("input-5")
    const previewRole = document.getElementById('preview-text__role');

    inputRole.addEventListener('input', updateRole);

    function updateRole(e) {
        if(e.target.value == ""){
            previewRole.textContent = "직무"
        }else{
            previewRole.textContent = e.target.value;
        }
    }

    // work update
    const inputProduct = document.getElementById("input-4")
    const inputCompany = document.getElementById("input-3")
    const previewWork = document.getElementById('preview-text__work');

    inputProduct.addEventListener('input', updateProduct);
    function updateProduct(e) {
        if(e.target.value == ""){
            let work = "프로덕트명@" + inputCompany.value;
            previewWork.textContent = work;
        }else{
            let work = e.target.value + "@" + inputCompany.value;
            previewWork.textContent = work;
        }
    }
    inputCompany.addEventListener('input', updateCompany);
    function updateCompany(e) {
        if(e.target.value == ""){
            let work = inputProduct.value + "@회사명";
            previewWork.textContent = work;
        }else{
            let work = inputProduct.value + "@" + e.target.value;
            previewWork.textContent = work;
        }
    }

    // intro update
    const inputIntro = document.getElementById("input-6")
    const previewIntro = document.getElementById('preview-text__intro');

    inputIntro.addEventListener('input', updateIntro);

    function updateIntro(e) {
        if(e.target.value == ""){
            previewIntro.textContent = "간단 소개"
        }else{
            let introValue = e.target.value.replace(/\n/g, "<br>");
            previewIntro.innerHTML = introValue;
        }
    }

    // link update
    const inputLink1 = document.getElementById("input-7")
    const inputLink2 = document.getElementById("input-8")
    const inputLink3 = document.getElementById("input-9")
    const previewLink1 = document.getElementById('preview-link1');
    const previewLink2 = document.getElementById('preview-link2');
    const previewLink3 = document.getElementById('preview-link3');

    inputLink1.addEventListener('input', updateLink1);
    inputLink2.addEventListener('input', updateLink2);
    inputLink3.addEventListener('input', updateLink3);

    function updateLink1(e) {
        if(e.target.value == ""){
            previewLink1.textContent = "🔗 Link 1"
        }else{
            let longUrl = e.target.value;
            let domain1 = longUrl.split("://")[1].split(".")[0];
            let domain2 = longUrl.split("://")[1].split(".")[1];
            let resultUrl = ""
            if(domain1 == "www" && domain2 == ""){
                resultUrl = "🔗 Link 1"
            }else if(domain1 == "www" &! domain2 ==""){
                resultUrl =  "🔗 " + domain2;
            }else{
                resultUrl = "🔗 " + domain1;
            }
            if(resultUrl == ""){
                previewLink1.textContent = "🔗 Link 1"
            }else{
                previewLink1.textContent = resultUrl;
            }
        }
    }
    function updateLink2(e) {
        if(e.target.value == ""){
            previewLink2.textContent = "🔗 Link 2"
        }else{
            let longUrl = e.target.value;
            let domain1 = longUrl.split("://")[1].split(".")[0];
            let domain2 = longUrl.split("://")[1].split(".")[1];
            let resultUrl = ""
            if(domain1 == "www" && domain2 == ""){
                resultUrl = "🔗 Link 2"
            }else if(domain1 == "www" &! domain2 ==""){
                resultUrl =  "🔗 " + domain2;
            }else{
                resultUrl = "🔗 " + domain1;
            }
            if(resultUrl == ""){
                previewLink2.textContent = "🔗 Link 2"
            }else{
                previewLink2.textContent = resultUrl;
            }
        }
    }
    function updateLink3(e) {
        if(e.target.value == ""){
            previewLink3.textContent = "🔗 Link 3"
        }else{
            let longUrl = e.target.value;
            let domain1 = longUrl.split("://")[1].split(".")[0];
            let domain2 = longUrl.split("://")[1].split(".")[1];
            let resultUrl = ""
            if(domain1 == "www" && domain2 == ""){
                resultUrl = "🔗 Link 3"
            }else if(domain1 == "www" &! domain2 ==""){
                resultUrl =  "🔗 " + domain2;
            }else{
                resultUrl = "🔗 " + domain1;
            }
            if(resultUrl == ""){
                previewLink3.textContent = "🔗 Link 3"
            }else{
                previewLink3.textContent = resultUrl;
            }
        }
    }
}