// 提交评价
function submitReview() {
  const reviewInput = document.getElementById('review-input');
  const review = reviewInput.value.trim();
  if (review) {
      alert('评价已提交：\n' + review);
      reviewInput.value = ''; // 清空输入框
  } else {
      alert('请输入评价内容');
  }
}

// 保存感想
function submitReflection() {
  const reflectionInput = document.getElementById('reflection-input');
  const reflection = reflectionInput.value.trim();
  if (reflection) {
      alert('感想已保存：\n' + reflection);
      reflectionInput.value = ''; // 清空输入框
  } else {
      alert('请输入感想内容');
  }
}