var app = new Vue({
    el: '#app',
    data(){
        return{
            thrListIndex: 0,
            sixListIndex: 0,
            popupSec: false,
            oneBoxList: [
                {
                    image: '/images/one-list-img1.png',
                    title: '标准产品',
                    stitle: '私有化',
                    label: ['独立部署', '数据安全', '系统稳定', '塑造品牌']
                },
                {
                    image: '/images/one-list-img2.png',
                    title: '量身定制',
                    stitle: '1V1',
                    label: ['个性化需求', '1V1专属服务']
                },
                {
                    image: '/images/one-list-img3.png',
                    title: '系统源码',
                    stitle: '二次开发',
                    label: ['源码售卖', '二次开发', '拓展性强', '产品文档']
                },
                {
                    image: '/images/one-list-img4.png',
                    title: '数据同步',
                    stitle: '多终端',
                    label: ['电脑端网校', '移动H5网校', '微信小程序', '专属网校APP']
                }
            ],
            thrBoxList: {
                menuList: [{
                    title: '招生引流',
                    image: '/images/thrSec-img/thr-menu-li1.png',
                    imagehover: '/images/thrSec-img/thr-menu-h-li1.png',
                }, {
                    title: '品牌网校',
                    image: '/images/thrSec-img/thr-menu-li2.png',
                    imagehover: '/images/thrSec-img/thr-menu-h-li2.png',
                }, {
                    title: '直播教学',
                    image: '/images/thrSec-img/thr-menu-li3.png',
                    imagehover: '/images/thrSec-img/thr-menu-h-li3.png',
                }, {
                    title: '考试题库',
                    image: '/images/thrSec-img/thr-menu-li4.png',
                    imagehover: '/images/thrSec-img/thr-menu-h-li4.png',
                }, {
                    title: '互动班级',
                    image: '/images/thrSec-img/thr-menu-li5.png',
                    imagehover: '/images/thrSec-img/thr-menu-h-li5.png',
                }, {
                    title: '教务管理',
                    image: '/images/thrSec-img/thr-menu-li6.png',
                    imagehover: '/images/thrSec-img/thr-menu-h-li6.png',
                }],
                secList: [{
                    image: '/images/thrSec-img/thr-sec-img1.png',
                    title: '招生引流',
                    subtitle: '搭建线上招生获客渠道，构建私域流量池',
                    text: '多种营销裂变工具自由组合，可跨渠道、跨终端帮助机构完成招生 引流全过程，全程数据追踪，提高转化率。',
                    label: [{
                        labeltitle: '六度人脉',
                        labelimage: '/images/thrSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '拼团活动',
                        labelimage: '/images/thrSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '裂变海报',
                        labelimage: '/images/thrSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '优惠卡券',
                        labelimage: '/images/thrSec-img/label-images/label-1_04.png'
                    },]
                }, {
                    image: '/images/thrSec-img/thr-sec-img2.png',
                    title: '品牌网校',
                    subtitle: '小班课采用2-16人的强互动模式',
                    text: '最高支持16位学员同时开启音视频，高清画质，智能降噪，延迟达到业内较高水平，让师生零距离。',
                    label: [{
                        labeltitle: '视频连麦',
                        labelimage: '/images/thrSec-img/label-images/label-2_01.png'
                    }, {
                        labeltitle: '文档白板',
                        labelimage: '/images/thrSec-img/label-images/label-2_02.png'
                    }, {
                        labeltitle: '桌面共享',
                        labelimage: '/images/thrSec-img/label-images/label-2_03.png'
                    }, {
                        labeltitle: '旁听监课',
                        labelimage: '/images/thrSec-img/label-images/label-2_04.png'
                    },]
                }, {
                    image: '/images/thrSec-img/thr-sec-img3.png',
                    title: '直播教学',
                    subtitle: '支持1V500人的大班课直播',
                    text: '集举手发言、聊天互动，点名签到等功能的多人课堂直播产品，还原真实线下课堂。',
                    label: [{
                        labeltitle: '点名/签到',
                        labelimage: '/images/thrSec-img/label-images/label-3_01.png'
                    }, {
                        labeltitle: '举手发言',
                        labelimage: '/images/thrSec-img/label-images/label-3_02.png'
                    }, {
                        labeltitle: '直播弹题',
                        labelimage: '/images/thrSec-img/label-images/label-3_03.png'
                    }, {
                        labeltitle: '音视频直播',
                        labelimage: '/images/thrSec-img/label-images/label-3_04.png'
                    },]
                }, {
                    image: '/images/thrSec-img/thr-sec-img4.png',
                    title: '考试题库',
                    subtitle: '承载上百万学员同时在线直播',
                    text: '提供高清流畅的互动直播画面，并支持红包打赏、投票问卷、聊天互动、录制回放。',
                    label: [{
                        labeltitle: '红包打赏',
                        labelimage: '/images/thrSec-img/label-images/label-4_01.png'
                    }, {
                        labeltitle: '投票问卷',
                        labelimage: '/images/thrSec-img/label-images/label-4_02.png'
                    }, {
                        labeltitle: '聊天互动',
                        labelimage: '/images/thrSec-img/label-images/label-4_03.png'
                    }, {
                        labeltitle: '录制回放',
                        labelimage: '/images/thrSec-img/label-images/label-4_04.png'
                    },]
                }, {
                    image: '/images/thrSec-img/thr-sec-img5.png',
                    title: '互动班级',
                    subtitle: '名师直播教学+线下辅导老师服务',
                    text: '基于网络互动视频直播技术，满足主讲老师远程线上直播授课，和辅导老师在课堂中的线下管理、答疑等需求。',
                    label: [{
                        labeltitle: '连麦互动',
                        labelimage: '/images/thrSec-img/label-images/label-5_01.png'
                    }, {
                        labeltitle: '资源共享',
                        labelimage: '/images/thrSec-img/label-images/label-5_02.png'
                    }, {
                        labeltitle: '教学工具',
                        labelimage: '/images/thrSec-img/label-images/label-5_03.png'
                    }, {
                        labeltitle: '即开即用',
                        labelimage: '/images/thrSec-img/label-images/label-5_04.png'
                    },]
                }, {
                    image: '/images/thrSec-img/thr-sec-img6.png',
                    title: '教务管理',
                    subtitle: '适合K12升学冲刺备考，初高中线上课堂',
                    text: '一体化的线上教学流程，可签到考勤，随堂检测上课效果，并通过视频连麦面对面答疑，保证教学最佳效果。',
                    label: [{
                        labeltitle: '签到考勤',
                        labelimage: '/images/thrSec-img/label-images/label-6_01.png'
                    }, {
                        labeltitle: '随堂检测',
                        labelimage: '/images/thrSec-img/label-images/label-6_02.png'
                    }, {
                        labeltitle: '白板画笔',
                        labelimage: '/images/thrSec-img/label-images/label-6_03.png'
                    }, {
                        labeltitle: '数据统计',
                        labelimage: '/images/thrSec-img/label-images/label-6_04.png'
                    },]
                }]
            },
            fourBoxList: [
                {
                    image: '/images/fourSec-img/sec-li-img1.png',
                    title: '职业教育',
                    text: '会计 | HR | 心理 | 经济师 建造师 | 证券等'
                },
                {
                    image: '/images/fourSec-img/sec-li-img2.png',
                    title: '成人学历',
                    text: '自学考试 | 高起专 | 专升本 成考自考 | 考研培训'
                },
                {
                    image: '/images/fourSec-img/sec-li-img3.png',
                    title: '语言培训',
                    text: '英语四、六级 | 托福 雅思 韩语 | 日语等'
                },
                {
                    image: '/images/fourSec-img/sec-li-img4.png',
                    title: 'K12教育',
                    text: '小学 | 初中 | 高中 学科培训 | 1对1'
                },
                {
                    image: '/images/fourSec-img/sec-li-img5.png',
                    title: '兴趣教育',
                    text: '舞蹈 | 瑜伽 | 手动DIY美术 摄影 | 美妆 | 减肥健身'
                },
                {
                    image: '/images/fourSec-img/sec-li-img6.png',
                    title: '学院学校',
                    text: '中小院校 | 大专院校 | 高等 院校 | 私立院校'
                },
                {
                    image: '/images/fourSec-img/sec-li-img7.png',
                    title: '企业培训',
                    text: '金融 | 医疗 | 餐饮 | 制造 地产 | 服务 | 政府单位'
                },
                {
                    image: '/images/fourSec-img/sec-li-img8.png',
                    title: '更多场景',
                    text: '出版社 | 司法 | 传媒'
                }
            ],
            fifBoxList: [
                {
                    image: '/images/fifSec-img/fif-sec-icon1.png',
                    title: '需求对接',
                    text: '顾问式的需求、沟通 确认、对需求给出合理 的意见及建议',
                    id: 1,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon2.png',
                    title: '签订合同',
                    text: '签订合同、项目周期 项目价格、保密协议',
                    id: 2,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon3.png',
                    title: '项目启动',
                    text: '组织产品经理、UI设计师、 开发工程师等人员发起 会议，组建项目团队',
                    id: 3,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon4.png',
                    title: '产品原型',
                    text: '制作原型图和 客户确认',
                    id: 4,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon8.png',
                    title: '验收交付',
                    text: '提供最终产品 包给客户验收 验收交付 拷贝',
                    id: 5,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon7.png',
                    title: '测试',
                    text: '开发自测、测试部 测试销售部配合 项目测试',
                    id: 6,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon6.png',
                    title: '研发',
                    text: '项目研发，结束 客户反馈后进行 调整',
                    id: 7,
                },
                {
                    image: '/images/fifSec-img/fif-sec-icon5.png',
                    title: '视觉效果',
                    text: '设计高保真视觉 图与客户确认',
                    id: 8,
                },
                
            ],
            sixBoxList: {
                menuList: [{
                    title: '雄厚公司资质',
                    image: '/images/sixSec-img/six-menu-li1.png',
                    imagehover: '/images/sixSec-img/six-menu-h-li1.png',
                }, {
                    title: '敏锐行业前瞻',
                    image: '/images/sixSec-img/six-menu-li2.png',
                    imagehover: '/images/sixSec-img/six-menu-h-li2.png',
                }, {
                    title: '优质售后服务',
                    image: '/images/sixSec-img/six-menu-li3.png',
                    imagehover: '/images/sixSec-img/six-menu-h-li3.png',
                }],
                secList: [{
                    label: [{
                        labeltitle: '高新技术企业',
                        labeltext: '268教育获北京市高新技术企业认证。',
                        labelimage: '/images/sixSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '10余年经验开发团队',
                        labeltext: '268团队自2009年起就一直致力于推进教育信息化发展，我们具备丰富的在线教育技术开发经验，对在线教育应用场景的痛点和需求有深刻的理解。',
                        labelimage: '/images/sixSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '10余年在线教育技术积累',
                        labeltext: '团队服务过多家上市教育企业，无缝 解决市场运营、教学产品、平台技术层面的各种复杂场景问题。',
                        labelimage: '/images/sixSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '30+软件著作权证书',
                        labeltext: '获30余款在线教育创新产品，自主知识产权软件著作权证书。',
                        labelimage: '/images/sixSec-img/label-images/label-1_04.png'
                    },]
                }, {
                    label: [{
                        labeltitle: '高新技术企业',
                        labeltext: '268教育获北京市高新技术企业认证。',
                        labelimage: '/images/sixSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '10余年经验开发团队',
                        labeltext: '268团队自2009年起就一直致力于推进教育信息化发展，我们具备丰富的在线教育技术开发经验，对在线教育应用场景的痛点和需求有深刻的理解。',
                        labelimage: '/images/sixSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '10余年在线教育技术积累',
                        labeltext: '团队服务过多家上市教育企业，无缝 解决市场运营、教学产品、平台技术层面的各种复杂场景问题。',
                        labelimage: '/images/sixSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '30+软件著作权证书',
                        labeltext: '获30余款在线教育创新产品，自主知识产权软件著作权证书。',
                        labelimage: '/images/sixSec-img/label-images/label-1_04.png'
                    },]
                }, {
                    label: [{
                        labeltitle: '高新技术企业',
                        labeltext: '268教育获北京市高新技术企业认证。',
                        labelimage: '/images/sixSec-img/label-images/label-1_01.png'
                    }, {
                        labeltitle: '10余年经验开发团队',
                        labeltext: '268团队自2009年起就一直致力于推进教育信息化发展，我们具备丰富的在线教育技术开发经验，对在线教育应用场景的痛点和需求有深刻的理解。',
                        labelimage: '/images/sixSec-img/label-images/label-1_02.png'
                    }, {
                        labeltitle: '10余年在线教育技术积累',
                        labeltext: '团队服务过多家上市教育企业，无缝 解决市场运营、教学产品、平台技术层面的各种复杂场景问题。',
                        labelimage: '/images/sixSec-img/label-images/label-1_03.png'
                    }, {
                        labeltitle: '30+软件著作权证书',
                        labeltext: '获30余款在线教育创新产品，自主知识产权软件著作权证书。',
                        labelimage: '/images/sixSec-img/label-images/label-1_04.png'
                    },]
                }]
            },
            eigBoxList: [
                {
                    image: '/images/eigSec-img/eig-ban-img1.png',
                    title: '付费问答',
                    text: '提供学员进行问题付费提问的场所，可通过后台创建问题标签，设置旁听收益。'
                }, {
                    image: '/images/eigSec-img/eig-ban-img2.png',
                    title: '互动班级',
                    text: '课程对应生成班级，以班级为单位来布置作业，开展话题，督导活跃管理用户。'
                }, {
                    image: '/images/eigSec-img/eig-ban-img3.png',
                    title: '教务管理',
                    text: '将平台用户进行划分，帮助机构精细化定向运营，提高运营效果和平台转化。'
                }, {
                    image: '/images/eigSec-img/eig-ban-img4.png',
                    title: '免费直播',
                    text: '根据平台重点主打课程，或推荐课程做免费直播，通过免费直播拉新引流。'
                }, {
                    image: '/images/eigSec-img/eig-ban-img5.png',
                    title: '新闻资讯',
                    text: '设置热门，推荐等重要资讯信息，上传平台动态，行业资讯，最新新闻等。'
                }, {
                    image: '/images/eigSec-img/eig-ban-img6.png',
                    title: '辅助图书',
                    text: '通过后台设置教辅图书，可与课程关联，辅助课程进行售卖，提高平台销售量。'
                },
            ],
            nineBoxList: [
                {
                    image: '/images/nineSec-img/nine-li-img1.png',
                    title: '数据概况',
                    text: '核心数据深度剖析，为机构决策者提供数据支持'
                }, {
                    image: '/images/nineSec-img/nine-li-img2.png',
                    title: '订单管理',
                    text: '平台销售，充值，退费，赠送，分销流水记录'
                }, {
                    image: '/images/nineSec-img/nine-li-img3.png',
                    title: '流量数据',
                    text: '平台各时间段下的流量变化和分布情况'
                }, {
                    image: '/images/nineSec-img/nine-li-img4.png',
                    title: '交易数据',
                    text: '平台的交易趋势和交易成功分析，和其他支付数据分析'
                }, {
                    image: '/images/nineSec-img/nine-li-img5.png',
                    title: '用户数据',
                    text: '可看到平台用户的增长变化趋势和付费用户的成长变化趋势'
                }, {
                    image: '/images/nineSec-img/nine-li-img6.png',
                    title: '商品数据',
                    text: '平台所有的商品数量和各个类目下的top5'
                }
            ],
            tenBoxList: {
                menuTop: [{
                    image: '/images/tenSec-img/ten-menu-img1.png',
                    text: '需求对接'
                }, {
                    image: '/images/tenSec-img/ten-menu-img2.png',
                    text: '项目启动'
                }, {
                    image: '/images/tenSec-img/ten-menu-img3.png',
                    text: '视觉效果'
                }, {
                    image: '/images/tenSec-img/ten-menu-img4.png',
                    text: '测试'
                }],
                menuBtm: [{
                    image: '/images/tenSec-img/ten-menu-img5.png',
                    text: '签订合同'
                }, {
                    image: '/images/tenSec-img/ten-menu-img6.png',
                    text: '产品原型'
                }, {
                    image: '/images/tenSec-img/ten-menu-img7.png',
                    text: '研发'
                }, {
                    image: '/images/tenSec-img/ten-menu-img8.png',
                    text: '验收交付'
                }]
            },
            eleBoxList: [
                {
                    image: '/images/ele-sec-img1.png',
                    title: '商业授权',
                    text: '提供源码私有化部署，深度化定制，一次付费终生使用',
                    list: [{
                        listtitle: '1V1量身定制',
                        listtext: '支持根据机构需求的全套私有化定制及深度定制开发'
                    }, {
                        listtitle: '开放源码',
                        listtext: '提供系统源码及产品文档，方便机构自行扩展与二次开发'
                    }, {
                        listtitle: '陪伴式服务',
                        listtext: '签订长期战略合作伙伴关系，随时答疑解惑，响应平台技术支持'
                    }]
                },
                {
                    image: '/images/ele-sec-img2.png',
                    title: 'SaaS租赁',
                    text: '开通账号即可使用，无需部署和运维',
                    list: [{
                        listtitle: '开通即用',
                        listtext: '不需要考虑技术、运维，长期升级，即时享用新功能'
                    }, {
                        listtitle: '版权保护',
                        listtext: '签署保密协议，版权+数据保护、防黑客、容灾保护'
                    }, {
                        listtitle: '更省成本',
                        listtext: '无需组建技术团队、购买服务器，按网校使用量计费'
                    }]
                }
            ],
            username: '',
            usertel: '',
            userneed: '',
            popusername: '',
            popusertel: ''
        }
    },
    created() {
    },
    mounted() {
        let that = this;
        that.swiperEigList();
    },
    methods: {
        menuthrList(idx) {
            let that = this;
            that.thrListIndex = idx;
        },

        menusixList(idx) {
            let that = this;
            that.sixListIndex = idx;
        },

        swiperEigList() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },

        openKfPopup(){
            window.open('https://tb.53kf.com/code/client/e49613946bf78d7197f3af52fac2e1986/1','newwindow', 'toolbar=no,scrollbars=yes,location=no,resizable=no,top=200,left=300,width=800,height=600')
        },

        closePopup(){
            let that = this;
            that.popupSec = false;
        },

        openPopup(){
            let that = this;
            that.popupSec = true;
        },

        submitForm(){
            let that = this;
            let username = that.username || that.popusername;
            let mobile = that.usertel || that.popusertel; 
            var pattern = /^1{1}[0-9]{10}$/;
            if(mobile==""){
                alert("请输入手机号!");
                return;
            } else {
                if (!pattern.test(mobile)) {
                    alert("请输入正确的手机号！");
                    return;
                }
            }	
            let requirement = '页面路径：' + window.location.href
            + '；页面来源：推广页网校页面'
            + ((!that.userneed) ? '' : ('；备注需求：' + that.userneed)) 
    
            console.log(username);
            console.log(mobile);
            console.log(requirement)
            $.ajax({
                url : "http://tj.268xue.com/customer/apply!addApplyInfo.action",
                data : {
                    "user.userName":username,
                    "user.mobile":mobile,
                    "user.requirement":requirement
                },
                type : "post",
                dataType : "json",
                cache : false,
                async : false,
                success : function(result) {
                    console.log(1);
                    console.log(result)
                    alert("提交成功！");
                    $(".mobile,.userName,.mobileSmall").val("");
                    that.username = ''; 
                    that.popusername = '';
                    that.usertel = '';
                    that.popusertel = ''; 
                    that.userneed = '';
                },
                error : function(error) {
                    console.log(2);
                    console.log(error)
                    alert("提交成功！");
                    $(".mobile,.userName,.mobileSmall").val("");
                    that.username = ''; 
                    that.popusername = '';
                    that.usertel = '';
                    that.popusertel = ''; 
                    that.userneed = '';
                }
            });
        
        }

    }
})