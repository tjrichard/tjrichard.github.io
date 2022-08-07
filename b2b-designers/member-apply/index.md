---
layout: default
title: "B2B 디자이너들의 모임 멤버 신청"
subtitle: "커뮤니티 멤버로 등록해주세요"
header-img: "b2b_graphic_cover_600x300.png"
---
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('c-header').remove();
        document.getElementById('c-footer').remove();
        document.body.style.backgroundColor = '#FAFAFA';
    });
</script>
<script src="./script.js"></script>
<div class="f-page-wrapper">
    <div class="f-grid">
        <div class="f-header">
            <h1>B2B 디자이너들의 모임 멤버 등록</h1>
            <div class="f-description">
                B2B 디자이너들의 모임 커뮤니티 멤버 간 활발한 정보공유, 소통, 활동을 위한 멤버 등록 신청서입니다.<br>
                <br>
                멤버로 등록하면 어떤 혜택이 있나요?<br>
                1️⃣ 커뮤니티 내 스터디, 커피챗, 이벤트 등 활동들을 등록된 멤버들을 우선해 진행합니다.<br>
                2️⃣ 커뮤니티 활동을 통해 생산된 양질의 자료들은 기본적으로 멤버들에게만 공개됩니다.<br>
                3️⃣ B2B 프로덕트 메이커로서 양질의 정보에 꾸준히 노출되고 성장할 수 있습니다.<br>
                <br>
                🌏 등록된 멤버 리스트는 퍼블릭하게 공개됩니다.<br>
                🌏 원하지 않는 경우 등록 시 공개 여부를 결정할 수 있습니다.
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    실명을 입력해주세요
                </div>
                <input type="text" id="input-1" class="input" placeholder="실명">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    프로필 이미지를 등록해주세요
                </div>
                <div class="f-description">
                    멤버 베이스에 소개를 위한 이미지입니다
                </div>
                <input type="file" id="input-2" class="file_button" name="profileImg" accept="image/*" onchange="handleFiles(this.files)">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    회사 명을 입력해주세요
                </div>
                <div class="f-description">
                    학생인 경우 학교 명을, 이직 준비중인 경우 '이직중' 으로 입력해주세요
                </div>
                <input type="text" id="input-3" class="input" placeholder="회사 명">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    만들고 있는 프로덕트 명을 입력해주세요
                </div>
                <div class="f-description">
                    재직중인 상태가 아니라면 생략해주세요
                </div>
                <input type="text" id="input-4" class="input" placeholder="프로덕트 명">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    현재 맡고있는 직무를 입력해주세요
                </div>
                <div class="f-description">
                    예: 프로덕트 디자이너, UX 디자이너, UI 디자이너, 학생, 이직중
                </div>
                <input type="text" id="input-5" class="input" placeholder="직무 명">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    본인에 대해 간략하게 소개해주세요
                </div>
                <div class="f-description">
                    커뮤니티 멤버들에게 공유됩니다. 예: 하는 일, 경력, 관심사, 취미
                </div>
                <textarea id="input-6" class="input" rows="5" placeholder="간단 소개"></textarea>
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    개인 PR용 링크 1 (Optional)
                </div>
                <div class="f-description">
                    예: 블로그 링크, SNS 링크, 서핏 디렉토리, 깃헙, 사이드프로젝트
                </div>
                <input type="text" id="input-7" class="input" placeholder="https://…">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    개인 PR용 링크 2 (Optional)
                </div>
                <div class="f-description">
                    예: 블로그 링크, SNS 링크, 서핏 디렉토리, 깃헙, 사이드프로젝트
                </div>
                <input type="text" id="input-8" class="input" placeholder="https://…">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    개인 PR용 링크 3 (Optional)
                </div>
                <div class="f-description">
                    예: 블로그 링크, SNS 링크, 서핏 디렉토리, 깃헙, 사이드프로젝트
                </div>
                <input type="text" id="input-9" class="input" placeholder="https://…">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    연락받으실 이메일
                </div>
                <div class="f-description">
                    추후 커뮤니티 활동 관련 이메일 수신과 커뮤니티 디스코드 그룹 참여용 이메일로 사용됩니다
                </div>
                <input type="text" id="input-10" class="input" placeholder="example@email.com">
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    커뮤니티 운영진으로 참여하실 의향이 있나요?
                </div>
                <div class="f-description">
                    운영진은 커뮤니티 운영 방향을 결정하고 관리합니다. 커뮤니티 활동에 참여할 수 있는 우선권이 있으며, 다양한 경험을 통해 본인 뿐만 아니라 다른 B2B 디자이너들의 커리어 성장에도
                    도움을 줄 수 있습니다.
                </div>
                <div class="radio-wrapper">
                    <label><input type="radio" name="manager" value="yes" id="input-11-yes" checked>예</label>
                    <label><input type="radio" name="manager" value="no" id="input-11-no">아니오</label>
                </div>
            </div>
        </div>
        <div class="f-wrapper" id="application">
            <div class="f-input-wrapper">
                <div class="f-title">
                    커뮤니티 운영진에 참여하시고 싶은 동기를 간단히 알려주세요
                </div>
                <div class="f-description">
                    커뮤니티 성장과 개인의 성장을 동시에 추구하고 있습니다
                </div>
                <textarea id="input-11-1" class="input" rows="5" placeholder="운영진 참여 동기"></textarea>
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    기타 질문/피드백/코멘트가 있다면 알려주세요
                </div>
                <textarea id="input-12" class="input" rows="5" placeholder="어떤 말이라도 상관없어요!"></textarea>
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    공개 멤버로 등록할까요?
                </div>
                <div class="f-description">
                    '아니오'를 선택한 경우 등록된 정보는 외부에 공개되지 않습니다
                </div>
                <div class="radio-wrapper">
                    <label><input type="radio" name="public" value="yes" id="input-13-yes" checked>예</label>
                    <label><input type="radio" name="public" value="no" id="input-13-no">아니오</label>
                </div>
            </div>
        </div>
        <div class="f-wrapper">
            <div class="f-input-wrapper">
                <div class="f-title">
                    개인정보 활용 동의
                </div>
                <div class="f-description">
                    B2B 디자이너들의 모임 커뮤니티 운영, 활동 진행과 교류를 위해 기재해주신 개인정보를 수집하고 이용합니다. 수집된 정보는 커뮤니티 멤버들 간 교류 외 다른 목적으로 이용되지
                    않으며, 탈퇴 혹은 삭제 요청시 즉시 파기됩니다. (<a href="https://open.kakao.com/me/Nam_D">멤버 탈퇴 및 삭제 요청: 남디</a>)
                </div>
                <div class="radio-wrapper">
                    <label><input type="radio" name="privacy" value="yes" id="input-14-yes" checked>예</label>
                    <label><input type="radio" name="privacy" value="no" id="input-14-no">아니오 (등록할 수 없습니다)</label>
                </div>
            </div>
        </div>
        <input type="button" id="submitApplication" class="button" value="멤버로 등록하기" onclick="submitApplication()">
    </div>
    <div class="f-grid">
        <div class="preview-wrapper">
            <div class="preview-profile-image" id="preview-profile-image">
                <div class="preview-text__role" id="preview-text__role">직무</div>
            </div>
            <div class="m-name-container">
                <h3 class="m-name" id="preview-text__name">실명</h3>
            </div>
            <div class="m-work" id="preview-text__work">프로덕트명@회사명</div>
            <div class="m-intro" id="preview-text__intro">간단 소개</div>
            <div class="flex-row">
                <div class="m-link" id="preview-link1">🔗 Link 1</div>
                <div class="m-link" id="preview-link2">🔗 Link 2</div>
                <div class="m-link" id="preview-link3">🔗 Link 3</div>
            </div>
        </div>
    </div>
</div>
<div id="snackbar-bottom">필수 입력 필드를 채워주세요</div>