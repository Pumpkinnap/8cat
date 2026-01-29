const box = document.createElement('div');
// 2. 设置样式（正方形 + 红色背景）
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';
// 3. 设置定位（利用 fixed 和 transform 绝对居中）
box.style.position = 'fixed';
box.style.top = '50%';
box.style.left = '50%';
box.style.transform = 'translate(-50%, -50%)';
// 4. 将元素添加到页面
document.body.appendChild(box);
