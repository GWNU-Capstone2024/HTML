// 식당 정보 저장 기능 추가
function saveRestaurantInfo() {
    const restaurantName = document.getElementById('restaurantName').value;
    const restaurantAddress = document.getElementById('restaurantAddress').value;
    const restaurantPhone = document.getElementById('restaurantPhone').value;
    const restaurantDescription = document.getElementById('restaurantDescription').value;

    // 여기서 실제로 서버에 저장하는 로직이 필요합니다.
    // 예를 들어, AJAX 요청을 통해 서버에 데이터를 전송합니다.
    // 이 예제에서는 단순히 alert로 표시합니다.

    alert('식당 정보가 저장되었습니다.\n' +
        '식당 이름: ' + restaurantName + '\n' +
        '식당 주소: ' + restaurantAddress + '\n' +
        '전화번호: ' + restaurantPhone + '\n' +
        '설명: ' + restaurantDescription);

    // 저장 후 메인 화면으로 돌아가기
    window.location.href = 'index.html';
}

// 기존 대기 관리 기능 (이미 정의된 기능)
document.addEventListener('DOMContentLoaded', function() {
    // 기존 로직 추가
});
