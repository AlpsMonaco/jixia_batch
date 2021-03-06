console.log("jixia_extension.js start");

const __jixia_extension_object = (function () {
	const __target_class_name = 'mdui-list-item mdui-ripple file-list-c'
	const __target_dialog_class_name = 'mdui-dialog mdui-dialog-open'
	const __target_button_class_name = 'mdui-btn mdui-ripple mdui-text-color-primary'
	const __target_button_display_name = '发送到 motiox'
	const __msg_class_name = 'nx-message nx-with-icon'
	const __dialog_overlay_class_name = 'mdui-overlay mdui-overlay-show'
	const __dialog_action_bar_class_name = 'mdui-dialog-actions'

	const _Enum = {
		DownloadFromHere: 0,
		CheckMessageLog: 1,
		SingleDownload: 2,
	}

	const _enum_msg_status = {
		START: 1,
		ERROR: 2,
		SUCCESS: 3,
		RESOLVE_FAILED: 4
	}


	function _load_inject_js() {
		let path = 'js/inject.js';
		let script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.src = chrome.extension.getURL(path);
		script.onload = function () {
			this.parentNode.removeChild(this);
		}
		document.body.appendChild(script);
	}

	function __redirect_element(element) {
		if (element == 'null') {
			return null
		}
		if (element.getAttribute('class') == __target_class_name) {
			return element;
		}
		for (let target = element.parentElement; target != null; target = target.parentElement) {
			if (target.getAttribute('class') == __target_class_name) {
				return target;
			}
		}
		return null
	}

	function _wait_for_dialog_open(target) {
		console.log('waiting for target open dialog', target)
		target.click()
		return new Promise((resolve, reject) => {
			let i = 0
			let interval = setInterval(() => {
				let dialog = document.getElementsByClassName(__target_dialog_class_name)[0]
				if (dialog != null) {
					console.log("open dialog success", target)
					clearInterval(interval)
					resolve(dialog)
				} else {
					i++
					if (i > 20) {
						console.error("dialog open timeout", target)
						clearInterval(interval)
						reject()
					}
				}
			}, 1000)
		})
	}


	function _action(action_bar) {
		return {
			start: function () {
				action_bar.childNodes[3].click()
			},
			fix: function () {
				action_bar.childNodes[4].click()
			}
		}
	}


	function _parse_msg(msg) {
		if (msg.indexOf('解析失败') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('获取失败') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('账号出现异常') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('转存文件失败') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('API连接中') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('API连接失败') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		return _enum_msg_status.ERROR
	}


	const _msg_status = (function () {
		let _status = _enum_msg_status.START

		return {
			GetStatus: function () {
				return _status
			},
			SetStatus: function (status) {
				_status = status
			},
			ResetStatus: function () {
				_status = _enum_msg_status.START
			}
		}
	})()


	function _start_mission() {
		_msg_status.ResetStatus()
		return new Promise(
			(resolve, reject) => {
				let interval = setInterval(
					() => {
						let status = _msg_status.GetStatus()
						switch (status) {
							case _enum_msg_status.START:
								return
							case _enum_msg_status.ERROR:
								clearInterval(interval)
								resolve(false)
								return
							case _enum_msg_status.SUCCESS:
								clearInterval(interval)
								resolve(true)
								return
							default:
								return
						}
					}, 1000
				)
			}
		)
	}

	async function _async_download_one(singleTarget) {
		console.log("downloading...", singleTarget)
		for (; ;) {
			try {
				let dialog = await _wait_for_dialog_open(singleTarget)
				let action_bar = dialog.getElementsByClassName(__dialog_action_bar_class_name)[0]
				let action = _action(action_bar)
				action.start()
				let is_success = await _start_mission()
				if (is_success) {
					console.log("download success", singleTarget)
					return
				} else {
					console.error("download failed,retrying...", singleTarget)
					action.fix()
					await _timer(1000)
					await _wait_util_dialog_close()
					continue
				}
			} catch {
				_close_dialog()
				await _timer(1000)
				await _wait_util_dialog_close()
				continue
			}
		}
	}


	function _wait_util_dialog_close() {
		console.log("waiting for dialog close")
		return new Promise((resolve, reject) => {
			let interval = setInterval(() => {
				let i = 0
				let dialog = document.getElementsByClassName(__target_dialog_class_name)[0]
				if (dialog == null) {
					console.log("dialog closed")
					clearInterval(interval)
					resolve()
				}
			}, 1000)
		})
	}

	function _close_dialog() {
		console.log("closing dialog...")
		for (let o of document.getElementsByClassName(__dialog_overlay_class_name)) {
			o.click()
		}
	}

	function _timer(t = 1000) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			}, t)
		})
	}


	function _get_remain_list(element) {
		let list = []
		list.push(element)
		for (; ;) {
			element = element.nextElementSibling
			if (element == null) break
			list.push(element)
		}
		return list
	}

	async function _async_batch_download(target_list) {
		console.log(target_list)
		for (let i = 0; i < target_list.length; i++) {
			let singleTarget = target_list[i]
			await _async_download_one(singleTarget)
			_close_dialog()
			await _timer(1000)
			await _wait_util_dialog_close()
		}
	}

	let _lastRightClickEvent = null
	function _init_listener() {
		document.addEventListener("contextmenu", function (event) {
			_lastRightClickEvent = event
		}, true);

		chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
			switch (request) {
				case _Enum.DownloadFromHere:
					let target = _lastRightClickEvent.target;
					target = __redirect_element(target);
					if (target == null)
						console.log("target is null");
					else {
						let remain_list = _get_remain_list(target)
						_async_batch_download(remain_list).then(() => { console.log("done") })
					}
					break;
				case _Enum.CheckMessageLog:
					console.log("this feature is deprecated")
					break;
				case _Enum.SingleDownload:
					let singleTarget = _lastRightClickEvent.target;
					singleTarget = __redirect_element(singleTarget);
					if (singleTarget == null)
						console.log("target is null");
					else
						_async_download_one(singleTarget).then(() => { _close_dialog() })
					break;
				default:
					console.log("unknown request");
			}
		});
	}


	function _connect_aria2_rpc(aria2) {
		return new Promise((resolve, reject) => {
			aria2
				.open()
				.then(() => {
					console.log("open aria2c rpc");
					aria2.on("onDownloadStart", (param) => {
						_msg_status.SetStatus(_enum_msg_status.START)
					})
					aria2.on("onDownloadError", (param) => {
						_msg_status.SetStatus(_enum_msg_status.ERROR)
					})
					aria2.on("onDownloadComplete", (param) => {
						_msg_status.SetStatus(_enum_msg_status.SUCCESS)
					})
					resolve()
				})
				.catch(err => { console.log("error", err); reject() });
		})
	}

	async function _init_aria2_rpc() {
		const param = {
			host: '127.0.0.1',
			port: 16800,
			secure: false,
			secret: '',
			path: '/jsonrpc'
		}

		var Aria2 = require('aria2');
		const aria2 = new Aria2(param);

		for (; ;) {
			try {
				console.log("connecting to aria2c rpc...")
				await _connect_aria2_rpc(aria2)
				console.log("connected to aria2c rpc")
				break
			} catch {
				console.log("connect failed, retrying...")
				await _timer(1000)
				continue
			}
		}
	}

	function _init() {
		_load_inject_js()
		_init_listener()
		_init_aria2_rpc()
	}

	function _get_current_list() {
		return document.getElementsByClassName(__target_class_name)
	}

	_init()
	return {
		GetLastEvent: function () {
			return _lastRightClickEvent
		},

		GetCurrentList: function () {
			return _get_current_list()
		}
	}
})();


