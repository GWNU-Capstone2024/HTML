document.getElementById('waitingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const numberOfPeople = document.getElementById('numberOfPeople').value;

    // 여기에 서버에 데이터를 전송하는 로직을 추가합니다.
    // 예: fetch를 사용하여 서버로 데이터 전송
    console.log('이름:', name);
    console.log('연락처:', phone);
    console.log('방문 인원수:', numberOfPeople);

    alert('웨이팅 등록이 완료되었습니다!');
    document.getElementById('waitingForm').reset();
});
