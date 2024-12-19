// 模拟数据
let videoEntries = [
    { title: "视频1", content: "线条小狗1", tags: ["视频", "线条小狗", "治愈"], date: "2023-10-01", src: "assets/video1.mp4", url: "video1.html" },
    { title: "视频2", content: "线条小狗2。", tags: ["视频", "线条小狗"], date: "2023-10-02", src: "assets/video2.mp4", url: "video2.html" }
];

let diaryEntries = [
    { title: "探索自然的一天", content: "今天是一个阳光明媚的日子，我和朋友们决定去附近的森林公园徒步旅行。清晨，我们早早地出发，带着背包和水壶，满怀期待地踏上了这段旅程。\n 一路上，我们穿过了茂密的树林，听到了鸟儿的歌唱，感受到了微风拂面的清爽。走到半山腰时，我们发现了一条清澈的小溪，溪水在阳光下闪闪发光。我们停下来休息，喝了几口水，感受大自然的宁静与美好。", tags: ["天气", "散步"], date: "2023-10-01", url: "diary1.html" },
    { title: "城市的喧嚣与宁静", content: "今天，我决定去城市中心走走，感受一下城市的喧嚣与繁华。早晨，我乘坐地铁来到了市中心，街道上人来人往，车水马龙，充满了活力。", tags: ["学习", "前端"], date: "2023-10-02", url: "diary2.html" }
];

let noteEntries = [
    { title: "《如何阅读一本书》", content: "作者莫提默·J. 艾德勒和查尔斯·范多伦详细介绍了如何通过不同层次的阅读方法来提高理解能力。书中将阅读分为四个层次：基础阅读、检视阅读、分析阅读和主题阅读。基础阅读是理解字面意思，检视阅读是快速浏览书籍，分析阅读是深入理解书籍内容，而主题阅读则是跨书籍比较和分析。作者强调，阅读是一种主动的行为，读者需要提出问题并寻找答案，例如：书籍的主题是什么？作者的观点是什么？论据是否充分？此外，做笔记是阅读过程中不可或缺的一部分，它可以帮助读者更好地理解和记忆内容。笔记可以包括摘录、总结和自己的思考。通过这些方法，读者可以更高效地吸收知识，并将其应用于实际生活中。这本书不仅适合学生，也适合所有希望提升阅读能力的人。", tags: ["书籍", "概念"], date: "2023-10-03", url: "note1.html" },
    { title: "《活着》", content: "余华的《活着》是一部深刻反映中国社会变迁和人性坚韧的小说。故事围绕主人公福贵展开，他经历了从富家子弟到家破人亡的巨大转变。在动荡的时代背景下，福贵失去了父母、妻子和子女，但他始终顽强地活着。小说通过福贵的经历，揭示了生命的脆弱与坚韧，以及人在苦难中的生存本能。余华用简洁而有力的语言，描绘了福贵在逆境中的挣扎与坚持，展现了人类面对苦难时的顽强精神。书中没有过多的情感渲染，而是通过冷静的叙述，让读者感受到生命的沉重与无奈。《活着》不仅是一部关于个人命运的小说，更是一部关于时代和人性的深刻反思。它提醒我们，生命的意义不在于外在的成就，而在于在苦难中依然保持对生活的热爱与希望。", tags: ["学习", "前端"], date: "2023-10-04", url: "note2.html" }
];

let tableEntries = [
    { title: "表格1", content: "成绩表", tags: ["数据", "表格"], date: "2023-10-05", url: "table1.html" },
    { title: "表格2", content: "假期预算消费表", tags: ["学习", "表格"], date: "2023-10-06", url: "table2.html" }
];

let audioEntries = [
    { title: "海绵宝宝", content: "海绵宝宝主题曲", tags: ["音频", "娱乐"], date: "2023-10-07", src: "assets/audio1.mp3", url: "audio1.html" },
    { title: "银临", content: "银临-茉莉花", tags: ["学习", "音频"], date: "2023-10-08", src: "assets/audio2.mp3", url: "audio2.html" }
];

let imageEntries = [
    { title: "雏菊", content: "分得出是雏菊还是洋甘菊吗？", tags: ["图片", "娱乐"], date: "2023-10-09", src: "assets/image1.jpg", url: "image1.html" },
    { title: "玫瑰", content: "玫瑰", tags: ["学习", "编程"], date: "2023-10-10", src: "assets/image2.jpg", url: "image2.html" }
];

// 获取所有标签，返回一个包含所有标签的数组。
function getAllTags() {
    const allTags = new Set();
    [...videoEntries, ...diaryEntries, ...noteEntries, ...tableEntries, ...audioEntries, ...imageEntries].forEach(entry => {
        entry.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags);
}

// 初始化筛选条件
function initTagFilter() {
    const tagFilter = document.getElementById('tagFilter');
    const tags = getAllTags();
    tags.forEach(tag => {
        let option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

function loadCards(containerId, entries, type) {
    const cardsContainer = document.getElementById(containerId);
    cardsContainer.innerHTML = ''; // 清空容器

    entries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${entry.title}</h3><p>${entry.content}</p>`;

        // 根据类型判断点击事件
        if (type === 'video' || type === 'table' || type === 'audio') {
            card.onclick = () => window.open(entry.url, '_blank'); // 视频和表格卡片点击跳转
        } else if(type === 'image'){
            card.onclick = () => showModal(entry.title, entry.content, entry.src, null); // 其他类型显示模态框
        } else if(type === 'audio'){
            card.onclick = () => showModal(entry.title, entry.content, null, entry.audioSrc); // 其他类型显示模态框
        } else {
            card.onclick = () => showModal(entry.title, entry.content); // 其他类型显示模态框
        }

        cardsContainer.appendChild(card);
    });
}

// 筛选卡片
function filterCards() {
    let selectedTag = document.getElementById('tagFilter').value;
    let filteredVideoEntries = selectedTag ? videoEntries.filter(entry => entry.tags.includes(selectedTag)) : videoEntries;
    let filteredDiaryEntries = selectedTag ? diaryEntries.filter(entry => entry.tags.includes(selectedTag)) : diaryEntries;
    let filteredNoteEntries = selectedTag ? noteEntries.filter(entry => entry.tags.includes(selectedTag)) : noteEntries;
    let filteredTableEntries = selectedTag ? tableEntries.filter(entry => entry.tags.includes(selectedTag)) : tableEntries;
    let filteredAudioEntries = selectedTag ? audioEntries.filter(entry => entry.tags.includes(selectedTag)) : audioEntries;
    let filteredImageEntries = selectedTag ? imageEntries.filter(entry => entry.tags.includes(selectedTag)) : imageEntries;
    
    loadCards('videoCards', filteredVideoEntries, 'video');
    loadCards('diaryCards', filteredDiaryEntries, 'diary');
    loadCards('noteCards', filteredNoteEntries, 'note');
    loadCards('tableCards', filteredTableEntries, 'table');
    loadCards('audioCards', filteredAudioEntries, 'audio');
    loadCards('imageCards', filteredImageEntries, 'image');
}


// 事件监听
document.getElementById('tagFilter').addEventListener('change', filterCards);
function showModal(title, content, imageSrc, audioSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-content').innerText = content;

    // 处理图像
    const modalImage = document.getElementById('modal-image');
    if (imageSrc != null) {
        modalImage.src = imageSrc;
        modalImage.style.display = 'block'; // 显示图像
    } else {
        modalImage.style.display = 'none'; // 隐藏图像
    }

    // 处理音频
    const modalAudio = document.getElementById('modal-audio');
    if (audioSrc != null) {
        modalAudio.src = audioSrc;
        modalAudio.style.display = 'inline'; // 显示音频控件
        modalAudio.play(); // 播放音频
    } else {
        modalAudio.style.display = 'none'; // 隐藏音频控件
    }

    document.getElementById('modal').style.display = 'block';
}
function closeModal() {
    const modalAudio = document.getElementById('modal-audio');
    if (modalAudio) {
        modalAudio.pause(); // 暂停音频
        modalAudio.currentTime = 0; // 将音频时间重置为0
    }
    document.getElementById('modal').style.display = 'none';
}

// window.onload = loadCards;
// 初始化加载所有卡片
window.onload = function() {
    initTagFilter();
    loadCards('videoCards', videoEntries, 'video');
    loadCards('diaryCards', diaryEntries, 'diary');
    loadCards('noteCards', noteEntries, 'note');
    loadCards('tableCards', tableEntries, 'table');
    loadCards('audioCards', audioEntries, 'audio');
    loadCards('imageCards', imageEntries, 'image');
};

function generateHeart() {
    const heart = document.createElement('div');
    heart.innerText =  "💖";
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.classList.add('heart');
    document.body.appendChild(heart);
}

setInterval(generateHeart, 300);
