function callQueue(id) {
    alert(id + '번 대기 팀 호출');
    removeQueue(id);
    decreaseWaitTime();
}

function enterQueue(id) {
    alert(id + '번 대기 팀 입장');
    removeQueue(id);
}

function removeQueue(id) {
    const queueItem = document.querySelector(`.queue-item[data-id='${id}']`);
    if (queueItem) {
        queueItem.remove();
        updateTeamCount();
    }
}

function updateTeamCount() {
    const queueList = document.getElementById('queue-list');
    const teamCount = queueList.getElementsByClassName('queue-item').length;
    document.getElementById('team-count').innerText = teamCount + '팀';
}

function decreaseWaitTime() {
    const waitTimeElement = document.getElementById('waiting-time');
    let currentWaitTime = parseInt(waitTimeElement.innerText);
    currentWaitTime = Math.max(currentWaitTime - 10, 0); // 최소값은 0분으로 설정
    waitTimeElement.innerText = currentWaitTime + '분';
}

function showLogoutPopup() {
    document.getElementById("logoutPopup").style.display = "block";
}

function closeLogoutPopup() {
    document.getElementById("logoutPopup").style.display = "none";
}

function confirmLogout() {
    location.href = 'R_main.html';
}

function showCallPopup(queueId) {
    document.getElementById("callPopup").style.display = "block";
    document.getElementById("confirmCallButton").onclick = function() {
        callQueue(queueId);
        closeCallPopup();
    };
}

function closeCallPopup() {
    document.getElementById("callPopup").style.display = "none";
}

function callQueue(queueId) {
    // 호출 기능 구현
    console.log("호출: " + queueId);
    updateWaitingInfo();
    removeQueueItem(queueId);
}

function updateWaitingInfo() {
    const teamCountElement = document.getElementById("team-count");
    const waitingTimeElement = document.getElementById("waiting-time");

    let teamCount = parseInt(teamCountElement.textContent.replace('팀', ''));
    let waitingTime = parseInt(waitingTimeElement.textContent.replace('분', ''));

    if (teamCount > 0) {
        teamCount -= 1;
        waitingTime -= 10; // 호출 시 대기시간을 10분 줄이는 예시
    }

    teamCountElement.textContent = teamCount + '팀';
    waitingTimeElement.textContent = waitingTime + '분';
}

function removeQueueItem(queueId) {
    const queueItem = document.querySelector(`.queue-item[data-id="${queueId}"]`);
    if (queueItem) {
        queueItem.remove();
    }
}
function removeQueue(queueId) {
    // 대기 번호에 해당하는 요소를 찾습니다.
    var queueItem = document.querySelector('[data-id="' + queueId + '"]');
    
    // 요소가 존재한다면
    if (queueItem) {
        // 대기 번호를 삭제합니다.
        queueItem.remove();

        // 대기 팀 수를 갱신합니다.
        updateTeamCount();

        // 대기 시간을 갱신합니다.
        updateWaitingTime();
    }
}

function updateTeamCount() {
    // 대기 팀 수를 업데이트합니다.
    var teamCountElement = document.getElementById('team-count');
    var currentTeamCount = parseInt(teamCountElement.textContent);
    teamCountElement.textContent = (currentTeamCount - 1) + "팀";
}

function updateWaitingTime() {
    // 대기 시간을 업데이트합니다.
    var waitingTimeElement = document.getElementById('waiting-time');
    var currentWaitingTime = parseInt(waitingTimeElement.textContent);
    // 예시로 5분 감소했다고 가정합니다.
    var newWaitingTime = currentWaitingTime - 20;
    waitingTimeElement.textContent = newWaitingTime + "분";
}
