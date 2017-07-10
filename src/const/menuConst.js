const menu = {};
const map = {};
menu.data = [
	{
		text: '个人中心',
		path: '/statistics',
		icon: 'iconfont icon-statistics',
		type: 'item'
	},
	{
		text: '用户管理',
		path: '/userList',
		icon: '',
		type: 'item'
	},
	{
		text: '提案',
		path: '/proposal',
		icon: 'iconfont icon-proposal',
		type: 'submenu',
		children: [
			{
				text: '提案列表',
				path: '/proposal/list',
				icon: 'iconfont icon-proposal-list',
				type: 'item'
			},
			{
				text: '新建提案',
				path: '/proposal/add',
				icon: 'iconfont icon-proposal-add',
				type: 'item'
			}
		]
	},
	{
		text: '专利',
		path: '/patent',
		icon: 'iconfont icon-patent',
		type: 'submenu',
		children: [
			{
				text: '专利管理',
				path: '/patent/list',
				icon: 'iconfont icon-patent-applied',
				type: 'item',
			},{
				text: '专利统计',
				path: '/patent/statistics',
				icon: '',
				type: 'item',
			},{
				text: '通知书管理',
				path: '/patent/notice',
				icon: '',
				type: 'item',
			},{
				text: '新建专利',
				path: '/patent/add',
				icon: 'iconfont icon-patent',
				type: 'item'
			}
		]
	},
	{
		text: '商标',
		path: '/trademark',
		icon: 'iconfont	 icon-task',
		type: 'submenu',
		children: [
			{
				text: '商标管理',
				path: '/trademark/list',
				icon: '',
				type: 'item'
			},{
				text: '通知书管理',
				path: '/trademark/notice',
				icon: '',
				type: 'item'

			},{
				text: '商标统计',
				icon: '',
				path: '/trademark/statistics',
				type: 'item',
			}]
	},
	{
		text: '版权',
		path: '/copyright',
		icon: 'iconfont	 icon-task',
		type: 'submenu',
		children: [
			{
				text: '版权管理',
				path: '/copyright/list',
				icon: '',
				type: 'item'
			},{
				text: '通知书管理',
				path: '/copyright/notice',
				icon: '',
				type: 'item'
			},{
				text: '版权统计',
				path: '/copyright/statistics',
				icon: '',
				type: 'item'
			}
		]
	},
	{
		text: '任务中心',
		path: '/task',
		icon: 'iconfont icon-task',
		type: 'submenu',
		children: [
			{
				text: '待处理',
				path: '/task/pending',
				icon: 'iconfont icon-task-pending',
				type: 'item'
			},
			{
				text: '提案审核',
				path: '/task/pending/check',
				icon: 'iconfont icon-task-check',
				type: 'none'
			}
		]
	},
	{
		text: '设置',
		path: '/setting',
		icon: 'iconfont icon-task',
		type: 'submenu',
		children: [{
			text: '我的个人设置',
			path: '/setting/individual',
			icon: '',
			type: 'item'
		},{
			text: '用户管理',
			path: '/setting/user',
			icon: '',
			type: 'item'
		},{
			text: '用户权限管理',
			path: '/setting/jurisdiction',
			icon: '',
			type: 'item'
		},{
			text: '代理机构管理',
			path: '/setting/agency',
			icon: '',
			type: 'item'
		},{
			text: '案件类型管理',
			path: '/setting/case',
			icon: '',
			type: 'item'
		},{
			text: '系统设置',
			path: '/setting/system',
			icon: '',
			type: 'item'
		},{
			text: '模板管理',
			path: '/setting/template',
			icon: '',
			type: 'item'
		},{
			text: '发文规则',
			path: '/setting/rule',
			icon: '',
			type: 'item'
		}]
	},
	{
		text: '费用',
		path: '/fee',
		icon: 'iconfont icon-task',
		type: 'submenu',
		children: [{
			text: '应付明细',
			path: '/fee/expense',
			icon: '',
			type: 'item',
		},{
			text: '付款单',
			path: '/fee/payment',
			icon: '',
			type: 'item',
		},{
			text: '年费监控',
			path: '/fee/monitor',
			icon: '',
			type: 'item',
		},{
			text: '奖励',
			path: '/fee/hortation',
			icon: '',
			type: 'item',
		}]
	}
];

menu.map = {
	'/': {text: '主页', icon: 'iconfont icon-home', path: '/'},
	'/task/pending/check': {text: '提案审核', icon: 'iconfont icon-task-check', 'path': '/task/pending/check'},
	'/patent/applied/detail': {text: '专利详情', icon: '', path: '/patent/applied/detail'},
	'/patent/applying/detail': {text: '专利详情', icon: '', path: '/patent/applying/detail'},
	'/proposal/list/edit': {text: '提案编辑', icon: '', path: '/proposal/list/edit'},
	'/trademark/list/detail': {text: '商标详情', icon: '', path: '/trademark/list/detail/babel'},
};
tailRecursion(menu.data);

export default menu;

function tailRecursion(data) {
	for( let x of data ) {
		menu["map"][x["path"]] = {text: x["text"], icon: x["icon"], path: x["path"]};
		if( x.children && x.children.length != 0) {
			tailRecursion(x["children"]);
		}
	}
}