import Vue from "vue"
import 'element-ui/lib/theme-chalk/display.css';
import {
	Button,
	Container,
	Header,
	Main,
	Footer,
	Menu,
	MenuItem,
	Submenu,
	Row,
	Col,
	Image,
	Input,
	Card,
	Carousel,
	CarouselItem,
	Form,
	FormItem,
	CheckboxGroup,
	Checkbox,
	ButtonGroup,
	Pagination,
	Dialog,
	Switch,
	Tabs,
	TabPane,
	Message,
	MessageBox,
	Breadcrumb,
	BreadcrumbItem,
	Upload,
	Tag,
	RadioGroup,
	Radio,
	Divider
} from 'element-ui';


// 使用
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Input)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(ButtonGroup)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Switch)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Upload)
Vue.use(Tag)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Divider)
	

// 挂载
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
