import Vue from "vue"
import axios from 'axios'
import store from "../store/index.js"
import {
	Message
} from 'element-ui';

// axios.defaults.baseURL = 'http://192.168.1.3/zhongbao/public'
axios.defaults.baseURL = '/zhongbao/public'
// axios.defaults.baseURL = '/public/index.php'
axios.defaults.withCredentials = true;

export function request(config) {
	const instance = axios.create({
		timeout: 10000,
	});

	instance.interceptors.request.use(config => {
		console.log("URL=", config.url, ",data=", config.data);
		return config
	}, err => {
		Message.error(err)
	});

	instance.interceptors.response.use(config => {
		console.log(config.data);
		return config.data.data
	}, err => {
		console.log(err)
		Message.error("服务器繁忙");
	});

	// 发送网络请求 ==> 且返回的是一个Promise
	return instance(config);
}

export function requestPost(url, data) {
	const instance = axios.create({
		timeout: 10000,
	});
	instance.interceptors.request.use(config => {
		console.log("URL=", config.url, ",data=", config.data)
		//请求偷里添加 token字段 用于校验登陆状况
		return config
	}, err => {
		Message.error(err);
	});

	instance.interceptors.response.use(config => {
		console.log(config.data);
		if (config.data.code == 0) {
			Message.error(config.data.msg);
			// resolve(config.data);
		} else {
			return config.data
		}
	}, err => {
		console.log(err)
		Message.error("服务器繁忙");
	});

	// 发送网络请求 ==> 且返回的是一个Promise
	return instance.post(url, data);
}
