document.addEventListener('DOMContentLoaded', () => {
    // 예시 데이터
    const teamCount = 8; // 실제 데이터로 교체 필요
    const waitingTime = 70; // 실제 데이터로 교체 필요

    // HTML 요소 업데이트
    document.getElementById('teamCount').textContent = `${teamCount}팀`;
    document.getElementById('waitingTime').textContent = `${waitingTime}분`;

    // 실제 데이터 가져오기 로직 추가 필요 (예: fetch를 사용한 API 호출)
    // fetch('/api/waiting-info')
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById('teamCount').textContent = `${data.teamCount}팀`;
    //         document.getElementById('waitingTime').textContent = `${data.waitingTime}분`;
    //     })
    //     .catch(error => console.error('Error fetching waiting info:', error));
});
