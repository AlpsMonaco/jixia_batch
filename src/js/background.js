const Enum = {
	DownloadFromHere: 0,
	CheckMessageLog: 1,
	SingleDownload: 2,
}


chrome.contextMenus.create({
	title: "从此处开始下载",
	contexts: ['all'],
	onclick: (info, tab) => {
		chrome.tabs.sendMessage(tab.id, Enum.DownloadFromHere, () => {
		});
	}
});

chrome.contextMenus.create({
	title: "查看消息记录",
	contexts: ['all'],
	onclick: (info, tab) => {
		chrome.tabs.sendMessage(tab.id, Enum.CheckMessageLog, () => {
		});
	}
});

chrome.contextMenus.create({
	title: "仅下载该项目",
	contexts: ['all'],
	onclick: (info, tab) => {
		chrome.tabs.sendMessage(tab.id, Enum.SingleDownload, () => {
		});
	}
});
