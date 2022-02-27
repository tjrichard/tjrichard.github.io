const placeholderUrl = "url(/b2b-designers/members/profile/placeholder_black.png)";

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
      

    // 운영진 지원 동기 입력란 on/off
    var yes11 = document.getElementById("input-11-yes");
    var no11 = document.getElementById("input-11-no");
    var application = document.getElementById("application");

    yes11.addEventListener("click", () => {
        application.style.marginBottom = "";
        application.style.height = "";
        application.style.opacity = "";
    });
    no11.addEventListener("click", () => {
        application.style.marginBottom = "0px";
        application.style.height = "1px";
        application.style.opacity = "0";
    });

    // 공개 여부에 따른 Preview hidden
    var yes13 = document.getElementById("input-13-yes");
    var no13 = document.getElementById("input-13-no");
    var preview = document.getElementsByClassName("preview-wrapper")[0];

    yes13.addEventListener("click", () => {
        preview.style.opacity = "";
    });
    no13.addEventListener("click", () => {
        preview.style.opacity = "0";
    });

    // 개인정보 이용 동의에 따른 제출 불가
    var yes14 = document.getElementById("input-14-yes");
    var no14 = document.getElementById("input-14-no");
    var submitButton = document.getElementById("submitApplication");

    yes14.addEventListener("click", () => {
        submitButton.classList.remove("disabled");
    });
    no14.addEventListener("click", () => {
        submitButton.classList.add("disabled");
    });
}

// Image preview function
function handleFiles(files) {
    const previewArea = document.getElementById("preview-profile-image");
    if (files.length == 0) {
        previewArea.style.background = placeholderUrl;
        previewArea.style.backgroundSize = "cover";
        previewArea.style.backgroundPosition = "center";
    }else{
        for (let i = 0; i < files.length; i++) {
            const previewUrl = window.URL.createObjectURL(files[0]);
            previewArea.style.background = 'url("' + previewUrl + '")'
            previewArea.style.backgroundSize = "cover";
            previewArea.style.backgroundPosition = "center";
            previewUrl.onload = function() {
                window.URL.revokeObjectURL(this);
            }
        }
    }
};

// Submit Applicatoin - Record 생성
function submitApplication() {
    const inputName = document.getElementById("input-1").value;
    const inputImage = document.getElementById("input-2").files[0];
    const imageUrl = window.URL.createObjectURL(inputImage);
    // const profileImg = new FormData();
    //       profileImg.append("profileImg", inputImage);
    const inputCompany = document.getElementById("input-3").value;
    const inputProduct = document.getElementById("input-4").value;
    const inputRole = document.getElementById("input-5").value;
    const inputIntro = document.getElementById("input-6").value;
    const inputLink1 = document.getElementById("input-7").value;
    const inputLink2 = document.getElementById("input-8").value;
    const inputLink3 = document.getElementById("input-9").value;
    const inputContact = document.getElementById("input-10").value;
    const applyForManager = document.getElementById("input-11-yes").checked;
    const inputApplication = document.getElementById("input-11-1").value;
    const inputComment = document.getElementById("input-12").value;
    const isPublic = document.getElementById("input-13-yes").checked;
    const personalInformation = document.getElementById("input-14-yes").checked;
    const dateTime = new Date();
    let fullDate = dateTime.toISOString().slice(0,10);
    let fullTime = dateTime.toISOString().slice(11,19);
    const currentDatetime = fullDate + " " + fullTime;

    var record = {
        "records": [
            {
                "fields": {
                    "Name": inputName,
                    "Profile_Picture": imageUrl,
                    "Company": inputCompany,
                    "Product": inputProduct,
                    "Role": inputRole,
                    "Intro": inputIntro,
                    "Link1": inputLink1,
                    "Link2": inputLink2,
                    "Link3": inputLink3,
                    "Contact": inputContact,
                    "Apply_for_Manager": applyForManager,
                    "Reason_for_Application": inputApplication,
                    "Comments": inputComment,
                    "Public": isPublic,
                    "Personal_Information": personalInformation,
                    "Enrolled_Date": currentDatetime
                }
            }
        ]
    };
};