module.exports = {
	// 关闭eslint校验
	lintOnSave: false,
	devServer: {
		proxy: {
			'/zhongbao': {
				target: 'http://192.168.1.3/',
				// target: 'http://www.lyzbao.com/',
				changeOrigin: true
			}
		},
		// proxy: {
		// 	'/public': {
		// 		target: 'http://www.lyzbao.com/',
		// 		changeOrigin: true
		// 	}
		// }
	}
}
