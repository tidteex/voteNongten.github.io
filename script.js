
// script.js
const voteForm = document.getElementById('voteForm');
const resultList = document.getElementById('resultList');

// สร้างตัวแปรสำหรับเก็บผลโหวต
const votes = {
  'Ten': 0
};

// เมื่อมีการส่งฟอร์ม
voteForm.addEventListener('submit', (e) => {
  e.preventDefault(); // ป้องกันการโหลดหน้าใหม่

  const selectedOption = document.querySelector('input[name="vote"]:checked');
  
  if (!selectedOption) {
    alert('Please select an option before voting.');
    return;
  }

  const vote = selectedOption.value;
  votes[vote] += 100; // เพิ่มจำนวนโหวตให้ตัวเลือก "Ten"

  updateResults(); // อัปเดตผลโหวต
  voteForm.reset(); // รีเซ็ตฟอร์ม
});

// ฟังก์ชันสำหรับอัปเดตผลโหวต
function updateResults() {
  resultList.innerHTML = '';
  for (const option in votes) {
    const listItem = document.createElement('li');
    listItem.textContent = `${option}: ${votes[option]} votes`;
    resultList.appendChild(listItem);
  }
}
