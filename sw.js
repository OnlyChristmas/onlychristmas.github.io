/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/07/09/【NLP比赛】中国中文信息学会文本溯源技术评测（SMP-ETST）Ranking-First/index.html","3cad544a9379f2c7e4bdfe7838223b88"],["/2018/07/14/Hexo_Next_博客搭建记/index.html","96a8610b424e073fb6e3bb6f4444bdb6"],["/2018/07/20/Use-linux-well/index.html","9f551e17fa892d3e831378eda6d9aef2"],["/2018/07/22/wikipedia-train-traditional-chinese-embedding（word2vec）model/index.html","1d0dc7563b34e0995bf8fe48c29ddf83"],["/2018/07/26/linux-uploading-baiduyunpan/index.html","7d8187b98b4ed9a2b8efe721d2708c70"],["/2018/07/29/Github-and-Coding-bulid-blog/index.html","685a234ffdf5380ab87050c4d600037b"],["/2018/08/07/Investigate-domestic-data-labeling-companies/index.html","88e8e5219a8fd706226eed6f10e91b9a"],["/2018/08/17/Summary-of-time-complexity-and-space-complexity/index.html","7067de81e2849fd0446ca65872dada21"],["/2018/09/07/Dual-NIC-configuration/index.html","f628b199c9c1bc046c074cd001adf353"],["/2018/09/09/win10-software/index.html","48d6b80e3e73c9059f3894cccab6d9aa"],["/2018/09/17/Configuring-the-best-development-environment-with-pycharm-and-jupyter-notebook/index.html","a1c058da07572fc628c4cd7d3671f751"],["/2018/09/29/How-to-write-a-great-paper/index.html","ed7f36aba9b60a885812221df0394a97"],["/2018/10/27/From-transformer-architecture-to-transfer-learning/index.html","a458a8299cc3177e47cbadfe2d50a680"],["/2018/11/16/an-unknown-person-is-not-unknown/index.html","8c95e4ffb66d196b92718a663efba895"],["/2019/01/19/python3-tips/index.html","56cd3c3f93c49a8d733908d585fd4c46"],["/404.html","3613f1ffb7d7b8657f04f434496ca70d"],["/about/index.html","d599a9d413ca0025a730f08b4b7e475c"],["/archives/2018/07/index.html","dbed82c1705be4f556292c3a63825faf"],["/archives/2018/08/index.html","d339eff2279fce01d4c2672e74c93327"],["/archives/2018/09/index.html","43ba727ba0fbfd10fdfe6e575df664c8"],["/archives/2018/10/index.html","bc4f8ee3d616e5a22473524d37077fb6"],["/archives/2018/11/index.html","3fc8b59f986eaf2bbaaec4a68611df3b"],["/archives/2018/index.html","2c699a0de4098e3cea1fb44aa1f62868"],["/archives/2018/page/2/index.html","f066d8e437fdf9e334d0441768d43fda"],["/archives/2019/01/index.html","9050a35ffc7e1bf29b545753aba7c781"],["/archives/2019/index.html","d993b5ebf68dedd5f2d28eea649accbf"],["/archives/index.html","647ebafe7049d14056336b379c60d62f"],["/archives/page/2/index.html","f73e3a36396b817aa3f9783e65e36559"],["/baidu_verify_tvNc42Gx3A.html","2adb6a363213ec96a2f5aff57b4f3334"],["/categories/Academic/Writing/index.html","205447b6d1d00c0fdfd35a3ba1cd5e92"],["/categories/Academic/index.html","ba179fa59cb3bff7740ac01fc6433ca6"],["/categories/Algorithm/index.html","dc44748ebd6844f516745009dc77f7a9"],["/categories/Deep-learning/Pre-training/index.html","bf4f7e2bea7389fa187c6aebbd450758"],["/categories/Deep-learning/index.html","ec52e6dd97ac5c4a7c459817933b0fe6"],["/categories/Linux/index.html","355e3bb6aa19c20fe5bb0dfb93804986"],["/categories/Machine-learning/Data-labeling/index.html","94f0c21b765775d59843acc9c0be28a7"],["/categories/Machine-learning/index.html","e004ace14066f2ffd0d67399b18235cd"],["/categories/Movie/Absurd-comedy/index.html","06a0cb9c420a191b3d3360c0390ab7ca"],["/categories/Movie/index.html","c10a4491e1ba6e2f42ec6ae5f23a17d4"],["/categories/NLP/Competition/index.html","0f6edd317c972fed94414410a557a1bd"],["/categories/NLP/Word2vex/index.html","23666b12bc4c382e40aa83ddd6caa031"],["/categories/NLP/index.html","b884f5412345fc55a1a720e64282b259"],["/categories/Operating-system/Win10/index.html","ce551b73ec16280b51ce1ba4079e69ea"],["/categories/Operating-system/index.html","45c5206fa8d1da3efd8b573f9adfb888"],["/categories/Programming-language/Python3/index.html","486753456747a5cac40ad7fa540c07b7"],["/categories/Programming-language/index.html","c033078397682fab1b7dfc70ba132732"],["/categories/Tool/Computer-network/index.html","505a15b1d3ca69d58f7c5792417ce167"],["/categories/Tool/Server/index.html","b608bcc86a394eb7a3db7d3367881a15"],["/categories/Tool/index.html","c213895a6c5bb362baa7b70bd85ea227"],["/categories/blog/index.html","330b922932d8fbc841254213ba56cba9"],["/categories/index.html","6c43285bcbe10ca6d0339ebfae4d54c1"],["/css/main.css","ab7bc82efce7a851f25587fc13a9abfd"],["/google47671999b73952db.html","e0b678617f67df2be4b6efe35702056c"],["/images/Wachat_money.png","adf5c583fd24719d2154005a6290129f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay_money.png","30225ede0367033ba4a2ea350e618946"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/christmas_ID_round.png","e57687a5869af45517673a93c5cc01ea"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/imagess/A_job/2019校招薪资_1.png","d8550c21dead3342f7bc80a3923e9b0a"],["/imagess/A_job/2019校招薪资_2.png","3f8f6bc1cf5d1ec2bb02781323c84ae1"],["/imagess/A_job/2019校招薪资_3.png","12e86a4219e1a8180012b8c6dc2dc522"],["/imagess/A_job/Domain Expert.jpg","03308dcdb6ea23757d26587251854f37"],["/imagess/A_job/Path finder.jpg","9643030457186173eb4e2e351ed2e6fa"],["/imagess/A_job/Rookie.jpg","4ae1216179d095b03c5ccecc3e0cdcaf"],["/imagess/Git_learn/git rebase1.png","e68be23d5247a71a6e83620bdc470eeb"],["/imagess/Git_learn/git rebase2.png","ad33f746eeb9df076ae38025a52910e8"],["/imagess/Git_learn/git rebase3.png","ea9cb10240cf11745b793175fbd752a1"],["/imagess/Git_learn/git rebase4.png","011153fe5bf3dd47959108c121b25650"],["/imagess/Git_learn/git revert1.png","0b4e269a5818b6e0d8d042b0fd5925f7"],["/imagess/Git_learn/git revert2.png","ee69b48b4fd9c36ea5ab1eb3877979b1"],["/imagess/Information_integration/2017工业设计软件领域.png","6c8d51131b45debbb84ae7058608154d"],["/imagess/Information_integration/2018 Z世代.png","041df585b41dde2ad99cb22f9a04a801"],["/imagess/Information_integration/985高校生毕业去哪里.png","df647d19764bfb5401158d838eb578fa"],["/imagess/Information_integration/两次牛市市场变化.png","2f2150c5e95b6f38bf02d5b168aad883"],["/imagess/Information_integration/中日人口结构对比.png","9b6b6f2389ca8e754dcdeea55a422e3c"],["/imagess/Information_integration/二线城市抢人政策.png","e368fd86c1fbd00181f504b652f6e12e"],["/imagess/Information_integration/互联网2019展望.png","9c15169a8a49c44da4b11815ab7653fa"],["/imagess/Information_integration/京沪深三大城市发展.png","871030393baf0a3413aca2bdc8da2776"],["/imagess/Information_integration/恐怖的中资显示屏三巨头.png","7ab93a3ec4640151ae4f7734c542fbf6"],["/imagess/Information_integration/时机与命运.png","67bd85eb3809a5881761ee4f1147ceec"],["/imagess/Information_integration/有趣又有利的社交裂变增长.png","b33919ab2104f016ad61d9a00534b5a2"],["/imagess/Information_integration/未来社会变迁.png","929f822efa6a6e7357f3d39d843a67a8"],["/imagess/Information_integration/本省高校的毕业生会留下吗.png","0956d3179351e2ace9c57a6bc8e85be5"],["/imagess/Information_integration/杭州创业氛围.png","84bd31c6f7b7eb8f7d5f3f6c2d698e2f"],["/imagess/Information_integration/泛文化产业 & 粉丝经济.png","2374f89af6f44db8ab695992ec82ebc2"],["/imagess/Information_integration/牛市各时期指标特征总结.png","9d7756f897b099be1ffd520cbe8480d1"],["/imagess/Information_integration/电子芯片产业的发展.png","569c4f91a48de030b2295bc37c4ddd8d"],["/imagess/Information_integration/科创版与A股的异同.png","5afef919ddd3f9f6e8139250ec8c70a6"],["/imagess/Information_integration/越南投资状况.png","4505d48b4fe91c1df0e45d4cbe32ae68"],["/imagess/Python_tips/浅拷贝.png","883191264cc9e148a2302a14b28f38bb"],["/imagess/Python_tips/深度拷贝.png","5b0c84b1483fb6492113b391ad32a53e"],["/imagess/Python_tips/赋值引用.png","a9924cb85c2d81a2a9db5f9fceea99f9"],["/imagess/Who_am_I/MBTI_1.png","7ef605d24faa69dcbfbe8451918522a0"],["/imagess/Who_am_I/MBTI_2.png","d644c644e0a4010def20b805c111a20c"],["/imagess/Who_am_I/MBTI_3.png","a4a646405fa921d62f55a2643ea3f837"],["/imagess/Who_am_I/MBTI_4.png","21ff818f43ba2b5036f7e9a916b8d4fb"],["/imagess/Who_am_I/MBTI_5.png","b2f13c73f65c1e3d10bf809b16be2026"],["/imagess/Who_am_I/MBTI_6.png","50e1f15b86d629a6aff9b9e2ab57d462"],["/imagess/玮.png","5147e502cf727ae8475f84dac84d1be7"],["/imagess/玮.svg","643456c390cacc2e5049660eeac8e78d"],["/imagess/玮_16.png","a89344157babb51c0b5b19dc4b2dd316"],["/imagess/玮_32.png","a71b7dce171519c39cdb7bfd698a9665"],["/index.html","01d69cb3ceef4ae0314edfc5bae56b3d"],["/js/crypto-js.js","a9d090555f71c39019be28a229179de2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clipboard-use.js","2dd2ee556391c3fe23a303e3902c4ad1"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/custom.js","a42eea7478955b886d8ec1f5c3bc6f5d"],["/js/src/custom_title.js","416a4fc617a5635326ed4a578ee3f3ea"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","fd5559b88c9328c9a419b0232e0ef1bd"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/particle.js","b1a64c0b4d871a43a2b873c8896bed46"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a03cd295104ce7467be869626c8d5e7f"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","e73e4f938b6c5edb0b2577484a9767bf"],["/tags/A-Cool-Fish/index.html","df3ce6f516f147492e3ade5efd717067"],["/tags/Absurd/index.html","ffc665f9c323a2ef9539ff580c2c3527"],["/tags/Attention/index.html","32ad834ba732f6891bd565a07b7a1df6"],["/tags/BERT/index.html","3e715427b82ec714c56832fb688d4ca5"],["/tags/BoW/index.html","033e6971a3f63cb33bdabb1c7e60fcd4"],["/tags/Bypy/index.html","0a7a32e2422241dbcaf4d791bcc66048"],["/tags/Coding-pages/index.html","bc73026a7cb48f522750417acca47923"],["/tags/Comedy/index.html","b9c1783bcff8dee4013e4fc5b2fbf7d5"],["/tags/Conference-papers/index.html","173dae55456c1467c47dea7d19c0ffc5"],["/tags/Crowdsourcing/index.html","6c470b112e65cb543a6a8cc51d883597"],["/tags/DNSpod/index.html","720aa097e5977cfc5df7beb1d2058781"],["/tags/Data-labeling/index.html","88e44439e4905dc347240ce5d197d2bb"],["/tags/Deep-learning/index.html","eb3a5edb22299f0ff3afb6d5d67eb0ea"],["/tags/Domain/index.html","837c0c9fddad39b6ec9427f5493f0019"],["/tags/ELMo/index.html","833b10651813e5e6588c0c78edc654d1"],["/tags/Embedding/index.html","1af318edd8ca34a0658c795b7688e1aa"],["/tags/File-operations/index.html","58ab86b2b27606850a2d448ba0494da2"],["/tags/Flux/index.html","658024c2691b37e1c68ab2d20003bb85"],["/tags/GNMT/index.html","12e029f94fc050b4f43a5f8b81f26deb"],["/tags/Gensim/index.html","e0bed4d6634aa75728752e7db36175a4"],["/tags/Github-pages/index.html","1c5c09a0bd9452ce3a20f595afedc19b"],["/tags/Hexo/index.html","b8b7f25ac0cd87f64cbbc165041b2ba6"],["/tags/Hop-number/index.html","bb7675fc830247c878f5ff6247a4f1a0"],["/tags/Information-retrieval/index.html","7461f32732671b26a25db15a56bb2bca"],["/tags/Inverted-index/index.html","691f22c180fd2d0ff01a28757f93844e"],["/tags/Jupyter/index.html","50985cbabf204acd112a79a5d37522c4"],["/tags/Linux/index.html","48d688f2ea6e08bc9d35ffae77f2215c"],["/tags/Machine-learning/index.html","fc9dbe288bf6da3fc6e41a21b4f1694c"],["/tags/Movie/index.html","d5bed06180fb7abe876f4c8e73ff074c"],["/tags/Multi-head-attention/index.html","a760525b66c16912b9470d68b42803fe"],["/tags/Multithreading/index.html","71d3ec9b5e13d7d6f0f7429b273eba68"],["/tags/N-gram/index.html","09d3c5b250bf371487fe8fd5ac4c87c8"],["/tags/Next/index.html","b0800f47c069bd9c072e6b07784da074"],["/tags/Opencc/index.html","a01aee2e8909559052e3fb987b144b91"],["/tags/Paraphrase/index.html","f3f770ec17c367aea996e89ec3906ec1"],["/tags/Positional-encoding/index.html","6b88c72c2ba1863c84593e568fe661e9"],["/tags/Pre-training/index.html","fc6a020650efb436bea6d15168ee49de"],["/tags/PyCharm/index.html","301313d6354bb87a0573453aaf3b9021"],["/tags/Routing-table/index.html","92ca6f6f144b89b7a90c4c6a9419a02b"],["/tags/SSL/index.html","d2a84cde5eb968cad9848ab54d21963e"],["/tags/Segment/index.html","02c45deae0a3adf1219417b7e3aca152"],["/tags/Self-attention/index.html","d786e52ed227c7b87b39ba091abe6c7b"],["/tags/Semi-supervised-learning/index.html","2d8648da3a5e9173a7b9206553b16a8f"],["/tags/Shadowsocks/index.html","6a256edbf3ce551db92ffb49b86ac5e2"],["/tags/Shell/index.html","7ce4541dbab569f824e3f2d161b16baf"],["/tags/Space-complexity/index.html","d3e1179138953aa7c99f1216bb480145"],["/tags/Teamviwer/index.html","8b6709bce670394a7f3900b59ba8f004"],["/tags/Time-complexity/index.html","e0cb78845252b840fa53c6e7827850c1"],["/tags/Tpyora/index.html","7b6de4e2fa771655cfbd7d3479c9eab0"],["/tags/Transfer-learning/index.html","59de2a89ba6d326d569a1badafc81a21"],["/tags/Transformer/index.html","a079663920be80f525110b737842a9e9"],["/tags/Web-design/index.html","c12d93ecdda8a4a3f33183cbb4a3ca5e"],["/tags/Wikipedia/index.html","40459e0bedfc7f197aeea0a72394d330"],["/tags/Write-a-paper/index.html","2873172a3840f043550e8010e7f2cf2f"],["/tags/copy/index.html","608444546849a3164e64d8fc2d5f7541"],["/tags/deepcopy/index.html","ee21afccbd9f0f3af10993d706e78b59"],["/tags/generator/index.html","e211ecb7cd64877896a4a0a429165589"],["/tags/index.html","e3b6249fcbaef33de2a7af678d372544"],["/tags/python/index.html","f271c9caa91f8c4548f2e50a69a00705"],["/top/index.html","7c3275b85fe0f407daeafe6b4e0cb148"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
