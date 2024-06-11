// 식당 정보 저장 기능 
function saveRestaurantInfo() {
    const restaurantName = document.getElementById('restaurantName').value;
    const restaurantAddress = document.getElementById('restaurantAddress').value;
    const restaurantPhone = document.getElementById('restaurantPhone').value;
    const restaurantDescription = document.getElementById('restaurantDescription').value;

    alert('식당 정보가 저장되었습니다.\n' +
        '식당 이름: ' + restaurantName + '\n' +
        '식당 주소: ' + restaurantAddress + '\n' +
        '전화번호: ' + restaurantPhone + '\n' +
        '설명: ' + restaurantDescription);

    // 저장 후 메인 화면으로 이동
    window.location.href = 'waiting_R.html';
}

// 기존 대기 관리 기능 (이미 정의된 기능)
document.addEventListener('DOMContentLoaded', function() {
});
