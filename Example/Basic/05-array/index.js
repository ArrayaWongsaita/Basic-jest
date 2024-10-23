function sortNumbers(arr) {
  // ทำการคัดลอกอาร์เรย์เพื่อลดการเปลี่ยนแปลงค่าในอาร์เรย์ต้นฉบับ
  let sortedArray = [...arr];

  // วนลูปผ่านทุกๆ ค่าของอาร์เรย์
  for (let i = 0; i < sortedArray.length; i++) {
    // วนลูปเปรียบเทียบคู่ตัวเลขที่อยู่ติดกัน
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      // ถ้าตัวเลขตัวปัจจุบันมากกว่าตัวถัดไป ให้ทำการสลับที่
      if (sortedArray[j] > sortedArray[j + 1]) {
        // สลับตำแหน่ง
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  // คืนค่าอาร์เรย์ที่เรียงลำดับแล้ว
  return sortedArray;
}
module.exports =  sortNumbers ;