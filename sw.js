// 通知をクリックした時の動作
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('./') 
    );
});

// タイマー終了のメッセージを受け取って通知を表示
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'TIMER_DONE') {
        self.registration.showNotification("30分経過しました！", {
            body: "要約の清書を提出してください。",
            // icon: "icon.png", // アイコン画像がないためコメントアウト
            vibrate: [200, 100, 200],
            tag: "timer-done",
            renotify: true
        });
    }
});