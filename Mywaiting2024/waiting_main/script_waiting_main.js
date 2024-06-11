document.addEventListener('DOMContentLoaded', () => {
    // 대기 팀 수, 대기 시간 확인 함수
    // 예시 데이터
    const teamCount = 3; // 현재 대기 팀 수
    const waitingTime = 50; // 현재 대기 시간

    document.getElementById('teamCount').textContent = `${teamCount}팀`;
    document.getElementById('waitingTime').textContent = `${waitingTime}분`;

});
