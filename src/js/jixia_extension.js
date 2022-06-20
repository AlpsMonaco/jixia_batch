console.log("jixia_extension.js start");

const __jixia_extension_object = (function () {
	const __target_class_name = 'mdui-list-item mdui-ripple file-list-c'
	const __target_dialog_class_name = 'mdui-dialog mdui-dialog-open'
	const __target_button_class_name = 'mdui-btn mdui-ripple mdui-text-color-primary'
	const __target_button_display_name = '发送到 motiox'
	const __msg_class_name = 'nx-message nx-with-icon'
	const __dialog_overlay_class_name = 'mdui-overlay mdui-overlay-show'
	const __dialog_action_bar_class_name = 'mdui-dialog-actions'


	const _msg_container = (function () {
		let _container = []
		let _last_msg_id = -1

		function _parse_msg_id(msg) {
			let msg_id = msg.parentElement.id
			let beginIndex = msg_id.indexOf('-')
			let endIndex = msg_id.length
			return parseInt(msg_id.substring(beginIndex + 1, endIndex))
		}

		return {
			append: function (msg) {
				let msg_id = _parse_msg_id(msg)
				if (msg_id <= _last_msg_id) {
					return
				}
				_last_msg_id = msg_id
				_container.push(msg)
			},
			get_last: function () {
				if (_container.length == 0) return null
				return _container[_container.length - 1]
			},
			get_all: function () {
				return _container
			},
			reset: function () {
				_container = []
				_last_msg_id = -1
			}
		}
	})()

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
		target.click()
		return new Promise((resolve, reject) => {
			let interval = setInterval(() => {
				let msg = _msg_container.get_last()
				if (msg != null) {
					if (_parse_msg(msg.innerHTML) == _enum_msg_status.RESOLVE_FAILED) {
						clearInterval(interval)
						reject()
					}
				}
				let dialog = document.getElementsByClassName(__target_dialog_class_name)[0]
				if (dialog != null) {
					clearInterval(interval)
					resolve(dialog)
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
		if (msg.indexOf('已经开始下载') != -1) {
			return _enum_msg_status.START
		}
		if (msg.indexOf('下载完成') != -1) {
			return _enum_msg_status.SUCCESS
		}
		if (msg.indexOf('解析失败') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('账号出现异常') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		if (msg.indexOf('转存文件失败') != -1) {
			return _enum_msg_status.RESOLVE_FAILED
		}
		return _enum_msg_status.ERROR
	}


	function _start_mission() {
		return new Promise(
			(resolve, reject) => {
				let interval = setInterval(
					() => {
						let msg = _msg_container.get_last()
						if (msg == null) return
						let status = _parse_msg(msg.innerHTML)
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
		_msg_container.reset()
		for (; ;) {
			try {
				let dialog = await _wait_for_dialog_open(singleTarget)
				let action_bar = dialog.getElementsByClassName(__dialog_action_bar_class_name)[0]
				let action = _action(action_bar)
				action.start()
				let is_success = await _start_mission()
				if (is_success) {
					return
				} else {
					action.fix()
					continue
				}
			} catch {
				_msg_container.reset()
				_close_dialog()
				_timer(1000)
				continue
			}
		}
	}


	function _close_dialog() {
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
					console.log(_msg_container.get_all())
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

	function _init_msg_receiver() {
		setInterval(() => {
			let list = document.getElementsByClassName(__msg_class_name)
			for (let i = 0; i < list.length; i++) {
				let msg = list[i]
				_msg_container.append(msg)
			}
		}, 500)
	}

	function _init() {
		_load_inject_js()
		_init_listener()
		_init_msg_receiver()
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


