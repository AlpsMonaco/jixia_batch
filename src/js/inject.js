function foo() {
	setTimeout(() => {
		if (Home == null) { console.log(window) } else { console.log(Home) }
	}, 2000)
}
