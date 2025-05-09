const apiKey = '';
const apiUrl = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';

async function getRandomMessage() {
    const messageElement = document.getElementById('random-message');
    messageElement.textContent = '正在生成中...';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'doubao-1-5-lite-32k-250115',
                messages: [
                    {
                        role: 'user',
                        content: '我正在备考26考研，但我现在天天不认真学习，请生成一句阴阳怪气劝我学习的话'
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const randomMessage = data.choices[0].message.content;
        messageElement.textContent = randomMessage;
    } catch (error) {
        console.error('请求出错:', error);
        messageElement.textContent = '生成失败，请稍后重试。';
    } finally {
    }
}

getRandomMessage();
