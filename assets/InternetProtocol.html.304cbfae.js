import{e as t}from"./app.eb5e24ec.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var a="/img/InternetProtocolFrame.png",e="/img/InternetProtocolBroadcast.png",i="/img/InternetProtocolIpv4.png",o="/img/InternetProtocolIpData.png",d="/img/InternetProtocolTCPUDPdata.png",p="/img/InternetProtocolAppdata.png",n="/img/InternetProtocolDHCPdata.png",h="/img/tcpServer.gif",u="/img/tcpTransportData.gif",s="/img/tcpClose.gif";const P={},l=t('<h2 id="\u4E92\u8054\u7F51\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u534F\u8BAE" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u534F\u8BAE</h2><p>\u4E92\u8054\u7F51\u7684\u6838\u5FC3\u662F\u4E00\u7CFB\u5217\u534F\u8BAE\uFF0C\u603B\u79F0\u4E3A&quot;\u4E92\u8054\u7F51\u534F\u8BAE&quot;\uFF08Internet Protocol Suite\uFF09\u3002\u5B83\u4EEC\u5BF9\u7535\u8111\u5982\u4F55\u8FDE\u63A5\u548C\u7EC4\u7F51\uFF0C\u505A\u51FA\u4E86\u8BE6\u5C3D\u7684\u89C4\u5B9A\u3002\u7406\u89E3\u4E86\u8FD9\u4E9B\u534F\u8BAE\uFF0C\u5C31\u7406\u89E3\u4E86\u4E92\u8054\u7F51\u7684\u539F\u7406\u3002</p><h2 id="osi-7-\u5C42\u6A21\u578B\u4E0E-tcp-ip-\u534F\u8BAE-5-\u5C42\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#osi-7-\u5C42\u6A21\u578B\u4E0E-tcp-ip-\u534F\u8BAE-5-\u5C42\u6A21\u578B" aria-hidden="true">#</a> OSI 7 \u5C42\u6A21\u578B\u4E0E TCP/IP \u534F\u8BAE 5 \u5C42\u6A21\u578B</h2><table><thead><tr><th>OSI \u4E03\u5C42\u7F51\u7EDC\u6A21\u578B</th><th>TCP/IP \u56DB\u5C42\u6982\u5FF5\u6A21\u578B</th><th>\u5BF9\u5E94\u7F51\u7EDC\u534F\u8BAE</th><th>OSI \u5404\u5C42\u89E3\u91CA</th></tr></thead><tbody><tr><td>\u5E94\u7528\u5C42\uFF08Application\uFF09</td><td rowspan="3">\u5E94\u7528\u5C42</td><td>HTTP\u3001TFTP, FTP, NFS, WAIS\u3001SMTP</td><td>\u4E3A\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u529F\u80FD</td></tr><tr><td>\u8868\u793A\u5C42\uFF08Presentation\uFF09</td><td>Telnet, Rlogin, SNMP, Gopher</td><td>\u6570\u636E\u683C\u5F0F\u5316\u3001\u6570\u636E\u52A0\u5BC6</td></tr><tr><td>\u4F1A\u8BDD\u5C42\uFF08Session\uFF09</td><td>SMTP, DNS</td><td>\u5EFA\u7ACB\u3001\u7BA1\u7406\u3001\u7EF4\u62A4\u4F1A\u8BDD</td></tr><tr><td>\u4F20\u8F93\u5C42\uFF08Transport\uFF09</td><td>\u4F20\u8F93\u5C42</td><td>TCP, UDP</td><td>\u5EFA\u7ACB\u3001\u7BA1\u7406\u548C\u7EF4\u62A4\u7AEF\u5230\u7AEF\u7684\u8FDE\u63A5</td></tr><tr><td>\u7F51\u7EDC\u5C42\uFF08Network\uFF09</td><td>\u7F51\u7EDC\u5C42</td><td>IP, ICMP, ARP, RARP, AKP, UUCP</td><td>IP \u9009\u5740\u53CA\u8DEF\u7531\u9009\u62E9</td></tr><tr><td>\u6570\u636E\u94FE\u8DEF\u5C42\uFF08Data Link\uFF09</td><td rowspan="2">\u6570\u636E\u94FE\u8DEF\u5C42</td><td>FDDI, Ethernet, Arpanet, PDN, SLIP, PPP</td><td>\u63D0\u4F9B\u4ECB\u8D28\u8BBF\u95EE\u548C\u94FE\u8DEF\u7BA1\u7406</td></tr><tr><td>\u7269\u7406\u5C42\uFF08Physical\uFF09</td><td>IEEE 802.1A, IEEE 802.2 \u5230 IEEE 802.11</td><td>\u7269\u7406\u5C42</td></tr></tbody></table><h3 id="\u7269\u7406\u5C42" tabindex="-1"><a class="header-anchor" href="#\u7269\u7406\u5C42" aria-hidden="true">#</a> \u7269\u7406\u5C42</h3><p>\u628A\u7535\u8111\u8FDE\u63A5\u8D77\u6765\u7684\u7269\u7406\u624B\u6BB5\u3002\u5B83\u4E3B\u8981\u89C4\u5B9A\u4E86\u7F51\u7EDC\u7684\u4E00\u4E9B\u7535\u6C14\u7279\u6027\uFF0C\u4F5C\u7528\u662F\u8D1F\u8D23\u4F20\u9001 0 \u548C 1 \u7684\u7535\u4FE1\u53F7\u3002</p><h3 id="\u6570\u636E\u94FE\u8DEF\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u94FE\u8DEF\u5C42" aria-hidden="true">#</a> \u6570\u636E\u94FE\u8DEF\u5C42</h3><p>Q\uFF1A\u5355\u7EAF\u7684 0 \u548C 1 \u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\uFF0C\u5FC5\u987B\u89C4\u5B9A\u89E3\u8BFB\u65B9\u5F0F\uFF1A\u591A\u5C11\u4E2A\u7535\u4FE1\u53F7\u7B97\u4E00\u7EC4\uFF1F\u6BCF\u4E2A\u4FE1\u53F7\u4F4D\u6709\u4F55\u610F\u4E49\uFF1F</p><p>A\uFF1A \u786E\u5B9A\u4E86 0 \u548C 1 \u7684\u5206\u7EC4\u65B9\u5F0F\u3002</p><h4 id="\u4EE5\u592A\u7F51\u534F\u8BAE-ethernet" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u592A\u7F51\u534F\u8BAE-ethernet" aria-hidden="true">#</a> \u4EE5\u592A\u7F51\u534F\u8BAE Ethernet</h4><p>\u65E9\u671F\u7684\u65F6\u5019\uFF0C\u6BCF\u5BB6\u516C\u53F8\u90FD\u6709\u81EA\u5DF1\u7684\u7535\u4FE1\u53F7\u5206\u7EC4\u65B9\u5F0F\u3002\u9010\u6E10\u5730\uFF0C\u4E00\u79CD\u53EB\u505A&quot;\u4EE5\u592A\u7F51&quot;\uFF08Ethernet\uFF09\u7684\u534F\u8BAE\uFF0C\u5360\u636E\u4E86\u4E3B\u5BFC\u5730\u4F4D\u3002 <br>\u4EE5\u592A\u7F51\u89C4\u5B9A\uFF0C\u4E00\u7EC4\u7535\u4FE1\u53F7\u6784\u6210\u4E00\u4E2A\u6570\u636E\u5305\uFF0C\u53EB\u505A&quot;\u5E27&quot;\uFF08Frame\uFF09\u3002\u6BCF\u4E00\u5E27\u5206\u6210\u4E24\u4E2A\u90E8\u5206\uFF1A\u6807\u5934\uFF08Head\uFF09\u548C\u6570\u636E\uFF08Data\uFF09\u3002</p><p><img src="'+a+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">Ethernet Prototal</p><p>&quot;\u6807\u5934&quot;\u5305\u542B\u6570\u636E\u5305\u7684\u4E00\u4E9B\u8BF4\u660E\u9879\uFF0C\u6BD4\u5982\u53D1\u9001\u8005\u3001\u63A5\u53D7\u8005\u3001\u6570\u636E\u7C7B\u578B\u7B49\u7B49\uFF1B&quot;\u6570\u636E&quot;\u5219\u662F\u6570\u636E\u5305\u7684\u5177\u4F53\u5185\u5BB9\u3002</p><p>&quot;\u6807\u5934&quot;\u7684\u957F\u5EA6\uFF0C\u56FA\u5B9A\u4E3A 18 \u5B57\u8282\u3002&quot;\u6570\u636E&quot;\u7684\u957F\u5EA6\uFF0C\u6700\u77ED\u4E3A 46 \u5B57\u8282\uFF0C\u6700\u957F\u4E3A 1500 \u5B57\u8282\u3002<br>\u56E0\u6B64\uFF0C\u6574\u4E2A&quot;\u5E27&quot;\u6700\u77ED\u4E3A 64 \u5B57\u8282\uFF0C\u6700\u957F\u4E3A 1518 \u5B57\u8282\u3002\u5982\u679C\u6570\u636E\u5F88\u957F\uFF0C\u5C31\u5FC5\u987B\u5206\u5272\u6210\u591A\u4E2A\u5E27\u8FDB\u884C\u53D1\u9001\u3002</p></div><h4 id="mac-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#mac-\u5730\u5740" aria-hidden="true">#</a> MAC \u5730\u5740</h4><p><strong>Q\uFF1A\u4EE5\u592A\u7F51\u6570\u636E\u5305\u7684&quot;\u6807\u5934&quot;\uFF0C\u5305\u542B\u4E86\u53D1\u9001\u8005\u548C\u63A5\u53D7\u8005\u7684\u4FE1\u606F\u3002\u90A3\u4E48\uFF0C\u53D1\u9001\u8005\u548C\u63A5\u53D7\u8005\u662F\u5982\u4F55\u6807\u8BC6\u5462\uFF1F</strong><br><br> A\uFF1A\u4EE5\u592A\u7F51\u89C4\u5B9A\uFF0C\u8FDE\u5165\u7F51\u7EDC\u7684\u6240\u6709\u8BBE\u5907\uFF0C\u90FD\u5FC5\u987B\u5177\u6709&quot;\u7F51\u5361&quot;\u63A5\u53E3\u3002\u6570\u636E\u5305\u5FC5\u987B\u662F\u4ECE\u4E00\u5757\u7F51\u5361\uFF0C\u4F20\u9001\u5230\u53E6\u4E00\u5757\u7F51\u5361\u3002\u7F51\u5361\u7684\u5730\u5740\uFF0C\u5C31\u662F\u6570\u636E\u5305\u7684\u53D1\u9001\u5730\u5740\u548C\u63A5\u6536\u5730\u5740\uFF0C\u8FD9\u53EB\u505A MAC \u5730\u5740\u3002<br> \u6709\u4E86 MAC \u5730\u5740\uFF0C\u5C31\u53EF\u4EE5\u5B9A\u4F4D\u7F51\u5361\u548C\u6570\u636E\u5305\u7684\u8DEF\u5F84\u4E86\u3002<br></p><h4 id="\u5E7F\u64AD" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u64AD" aria-hidden="true">#</a> \u5E7F\u64AD</h4><p>\u5B9A\u4E49\u5730\u5740\u53EA\u662F\u7B2C\u4E00\u6B65\uFF0C\u540E\u9762\u8FD8\u6709\u66F4\u591A\u7684\u6B65\u9AA4\u3002<br></p><p><strong>Q\uFF1A\u9996\u5148\uFF0C\u4E00\u5757\u7F51\u5361\u600E\u4E48\u4F1A\u77E5\u9053\u53E6\u4E00\u5757\u7F51\u5361\u7684 MAC \u5730\u5740\uFF1F</strong><strong>\u5176\u6B21\uFF0C\u5C31\u7B97\u6709\u4E86 MAC \u5730\u5740\uFF0C\u7CFB\u7EDF\u600E\u6837\u624D\u80FD\u628A\u6570\u636E\u5305\u51C6\u786E\u9001\u5230\u63A5\u6536\u65B9\uFF1F</strong><br><br> A\uFF1A\u4EE5\u592A\u7F51\u91C7\u7528\u4E86\u4E00\u79CD\u5F88&quot;\u539F\u59CB&quot;\u7684\u65B9\u5F0F\uFF0C\u5B83\u4E0D\u662F\u628A\u6570\u636E\u5305\u51C6\u786E\u9001\u5230\u63A5\u6536\u65B9\uFF0C\u800C\u662F\u5411\u672C\u7F51\u7EDC\u5185\u6240\u6709\u8BA1\u7B97\u673A\u53D1\u9001\uFF0C\u8BA9\u6BCF\u53F0\u8BA1\u7B97\u673A\u81EA\u5DF1\u5224\u65AD\uFF0C\u662F\u5426\u4E3A\u63A5\u6536\u65B9\u3002</p><p><img src="'+e+'" alt=""></p><p>\u90FD\u4F1A\u6536\u5230\u8FD9\u4E2A\u5305\u3002\u5B83\u4EEC\u8BFB\u53D6\u8FD9\u4E2A\u5305\u7684&quot;\u6807\u5934&quot;\uFF0C\u627E\u5230\u63A5\u6536\u65B9\u7684 MAC \u5730\u5740\uFF0C\u7136\u540E\u4E0E\u81EA\u8EAB\u7684 MAC \u5730\u5740\u76F8\u6BD4\u8F83\uFF0C\u5982\u679C\u4E24\u8005\u76F8\u540C\uFF0C\u5C31\u63A5\u53D7\u8FD9\u4E2A\u5305\uFF0C\u505A\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u5426\u5219\u5C31\u4E22\u5F03\u8FD9\u4E2A\u5305\u3002\u8FD9\u79CD\u53D1\u9001\u65B9\u5F0F\u5C31\u53EB\u505A<strong>\u5E7F\u64AD\uFF08broadcasting\uFF09</strong>\u3002<br><br> \u6709\u4E86\u6570\u636E\u5305\u7684\u5B9A\u4E49\u3001\u7F51\u5361\u7684 MAC \u5730\u5740\u3001\u5E7F\u64AD\u7684\u53D1\u9001\u65B9\u5F0F\uFF0C&quot;\u94FE\u63A5\u5C42&quot;\u5C31\u53EF\u4EE5\u5728\u591A\u53F0\u8BA1\u7B97\u673A\u4E4B\u95F4\u4F20\u9001\u6570\u636E\u4E86\u3002</p><h3 id="\u7F51\u7EDC\u5C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5C42" aria-hidden="true">#</a> \u7F51\u7EDC\u5C42</h3><ul><li>\u5EFA\u7ACB&quot;\u4E3B\u673A\u5230\u4E3B\u673A&quot;\u7684\u901A\u4FE1</li></ul><p>\u4EE5\u592A\u7F51\u534F\u8BAE\uFF0C\u4F9D\u9760 MAC \u5730\u5740\u53D1\u9001\u6570\u636E\u3002\u7406\u8BBA\u4E0A\uFF0C\u5355\u5355\u4F9D\u9760 MAC \u5730\u5740\uFF0C\u4E0A\u6D77\u7684\u7F51\u5361\u5C31\u53EF\u4EE5\u627E\u5230\u6D1B\u6749\u77F6\u7684\u7F51\u5361\u4E86\u3002<br><br> \u4F46\u662F\u4EE5\u592A\u7F51\u91C7\u7528\u5E7F\u64AD\u65B9\u5F0F\u53D1\u9001\u6570\u636E\u5305\uFF0C\u6240\u6709\u6210\u5458\u4EBA\u624B\u4E00&quot;\u5305&quot;\uFF0C\u4E0D\u4EC5\u6548\u7387\u4F4E\uFF0C\u800C\u4E14\u5C40\u9650\u5728\u53D1\u9001\u8005\u6240\u5728\u7684\u5B50\u7F51\u7EDC\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4E24\u53F0\u8BA1\u7B97\u673A\u4E0D\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\uFF0C\u5E7F\u64AD\u662F\u4F20\u4E0D\u8FC7\u53BB\u7684\u3002<br> \u8FD9\u79CD\u8BBE\u8BA1\u662F\u5408\u7406\u7684\uFF0C\u5426\u5219\u4E92\u8054\u7F51\u4E0A\u6BCF\u4E00\u53F0\u8BA1\u7B97\u673A\u90FD\u4F1A\u6536\u5230\u6240\u6709\u5305\uFF0C\u90A3\u4F1A\u5F15\u8D77\u707E\u96BE\u3002</p><p>\u987B\u627E\u5230\u4E00\u79CD\u65B9\u6CD5\uFF0C\u80FD\u591F\u533A\u5206\u54EA\u4E9B MAC \u5730\u5740\u5C5E\u4E8E\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\uFF0C\u54EA\u4E9B\u4E0D\u662F\u3002<br><strong>\u8FD9\u5C31\u5BFC\u81F4\u4E86&quot;\u7F51\u7EDC\u5C42&quot;\u7684\u8BDE\u751F\u3002\u5B83\u7684\u4F5C\u7528\u662F\u5F15\u8FDB\u4E00\u5957\u65B0\u7684\u5730\u5740\uFF0C\u4F7F\u5F97\u6211\u4EEC\u80FD\u591F\u533A\u5206\u4E0D\u540C\u7684\u8BA1\u7B97\u673A\u662F\u5426\u5C5E\u4E8E\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\u3002\u8FD9\u5957\u5730\u5740\u5C31\u53EB\u505A&quot;\u7F51\u7EDC\u5730\u5740&quot;\uFF0C\u7B80\u79F0&quot;\u7F51\u5740&quot;\u3002</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7F51\u7EDC\u5730\u5740\u5E2E\u52A9\u6211\u4EEC\u786E\u5B9A\u8BA1\u7B97\u673A\u6240\u5728\u7684\u5B50\u7F51\u7EDC\uFF0CMAC \u5730\u5740\u5219\u5C06\u6570\u636E\u5305\u9001\u5230\u8BE5\u5B50\u7F51\u7EDC\u4E2D\u7684\u76EE\u6807\u7F51\u5361\u3002</p></div><h4 id="_1-ip-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#_1-ip-\u534F\u8BAE" aria-hidden="true">#</a> 1. IP \u534F\u8BAE</h4><p>\u89C4\u5B9A\u7F51\u7EDC\u5730\u5740\u7684\u534F\u8BAE\uFF0C\u53EB\u505A IP \u534F\u8BAE\u3002\u5B83\u6240\u5B9A\u4E49\u7684\u5730\u5740\uFF0C\u5C31\u88AB\u79F0\u4E3A IP \u5730\u5740\u3002<br></p><p><strong>\u4F5C\u7528:</strong></p><ul><li>\u4E00\u4E2A\u662F\u4E3A\u6BCF\u4E00\u53F0\u8BA1\u7B97\u673A\u5206\u914D IP \u5730\u5740</li><li>\u53E6\u4E00\u4E2A\u662F\u786E\u5B9A\u54EA\u4E9B\u5730\u5740\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC</li></ul><p>\u76EE\u524D\uFF0C\u5E7F\u6CDB\u91C7\u7528\u7684\u662F IP \u534F\u8BAE\u7B2C\u56DB\u7248\uFF0C\u7B80\u79F0 IPv4\u3002\u8FD9\u4E2A\u7248\u672C\u89C4\u5B9A\uFF0C\u7F51\u7EDC\u5730\u5740\u7531 32 \u4E2A\u4E8C\u8FDB\u5236\u4F4D\u7EC4\u6210\u3002</p><p><img src="'+i+'" alt=""></p><p>\u4E60\u60EF\u4E0A\uFF0C\u6211\u4EEC\u7528\u5206\u6210\u56DB\u6BB5\u7684\u5341\u8FDB\u5236\u6570\u8868\u793A IP \u5730\u5740\uFF0C\u4ECE 0.0.0.0 \u4E00\u76F4\u5230 255.255.255.255\u3002<br><br></p><p><strong>IP \u5730\u5740\u4E24\u4E2A\u90E8\u5206 \u524D\u4E00\u90E8\u5206\u4EE3\u8868\u7F51\u7EDC\uFF0C\u540E\u4E00\u90E8\u5206\u4EE3\u8868\u4E3B\u673A</strong><br> \u5355\u4ECE IP \u5730\u5740\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5224\u65AD\u7F51\u7EDC\u90E8\u5206</p><h5 id="\u5B50\u7F51\u63A9\u7801-subnet-mask" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7F51\u63A9\u7801-subnet-mask" aria-hidden="true">#</a> \u5B50\u7F51\u63A9\u7801\uFF08subnet mask\uFF09</h5><blockquote><p>\u5F62\u5F0F\u4E0A\u7B49\u540C\u4E8E IP \u5730\u5740\uFF0C\u4E5F\u662F\u4E00\u4E2A 32 \u4F4D\u4E8C\u8FDB\u5236\u6570\u5B57<br>\u5B83\u7684\u7F51\u7EDC\u90E8\u5206\u5168\u90E8\u4E3A 1\uFF0C\u4E3B\u673A\u90E8\u5206\u5168\u90E8\u4E3A 0\u3002</p></blockquote><p>IP \u5730\u5740 172.16.254.1\uFF0C\u5982\u679C\u5DF2\u77E5\u7F51\u7EDC\u90E8\u5206\u662F\u524D 24 \u4F4D\uFF0C\u4E3B\u673A\u90E8\u5206\u662F\u540E 8 \u4F4D\uFF0C\u90A3\u4E48\u5B50\u7F51\u7EDC\u63A9\u7801\u5199\u6210\u5341\u8FDB\u5236\u5C31\u662F 255.255.255.0\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u77E5\u9053<strong>\u5B50\u7F51\u63A9\u7801</strong>\u5C31\u80FD\u5224\u65AD\u4EFB\u610F\u4E24\u4E2A IP \u5730\u5740\u662F\u5426\u5904\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\u3002\u65B9\u6CD5\u662F\u5C06\u4E24\u4E2A IP \u5730\u5740\u4E0E\u5B50\u7F51\u63A9\u7801\u5206\u522B\u8FDB\u884C AND \u8FD0\u7B97\uFF08\u4E24\u4E2A\u6570\u4F4D\u90FD\u4E3A 1\uFF0C\u8FD0\u7B97\u7ED3\u679C\u4E3A 1\uFF0C\u5426\u5219\u4E3A 0\uFF09\uFF0C\u7136\u540E\u6BD4\u8F83\u7ED3\u679C\u662F\u5426\u76F8\u540C\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5C31\u8868\u660E\u5B83\u4EEC\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\u4E2D\uFF0C\u5426\u5219\u5C31\u4E0D\u662F\u3002</p></div><h4 id="_2-ip-\u6570\u636E\u5305" tabindex="-1"><a class="header-anchor" href="#_2-ip-\u6570\u636E\u5305" aria-hidden="true">#</a> 2. IP \u6570\u636E\u5305</h4><p>\u6839\u636E IP \u534F\u8BAE\u53D1\u9001\u7684\u6570\u636E\uFF0C\u5C31\u53EB\u505A IP \u6570\u636E\u5305\u3002<br> &quot;\u6807\u5934&quot;\u90E8\u5206\u4E3B\u8981\u5305\u62EC\u7248\u672C\u3001\u957F\u5EA6\u3001IP \u5730\u5740\u7B49\u4FE1\u606F\uFF0C&quot;\u6570\u636E&quot;\u90E8\u5206\u5219\u662F IP \u6570\u636E\u5305\u7684\u5177\u4F53\u5185\u5BB9\u3002\u5B83\u653E\u8FDB\u4EE5\u592A\u7F51\u6570\u636E\u5305\u540E\uFF0C\u4EE5\u592A\u7F51\u6570\u636E\u5305\u5C31\u53D8\u6210\u4E86\u4E0B\u9762\u8FD9\u6837\u3002</p><p><img src="'+o+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>IP \u6570\u636E\u5305\u7684&quot;\u6807\u5934&quot;\u90E8\u5206\u7684\u957F\u5EA6\u4E3A 20 \u5230 60 \u5B57\u8282\uFF0C\u6574\u4E2A\u6570\u636E\u5305\u7684\u603B\u957F\u5EA6\u6700\u5927\u4E3A 65,535 \u5B57\u8282\u3002\u56E0\u6B64\uFF0C\u7406\u8BBA\u4E0A\uFF0C\u4E00\u4E2A IP \u6570\u636E\u5305\u7684&quot;\u6570\u636E&quot;\u90E8\u5206\uFF0C\u6700\u957F\u4E3A 65,515 \u5B57\u8282\u3002<br>\u524D\u9762\u8BF4\u8FC7\uFF0C\u4EE5\u592A\u7F51\u6570\u636E\u5305\u7684&quot;\u6570\u636E&quot;\u90E8\u5206\uFF0C\u6700\u957F\u53EA\u6709 1500 \u5B57\u8282\u3002\u56E0\u6B64\uFF0C\u5982\u679C IP \u6570\u636E\u5305\u8D85\u8FC7\u4E86 1500 \u5B57\u8282\uFF0C\u5B83\u5C31\u9700\u8981\u5206\u5272\u6210\u51E0\u4E2A\u4EE5\u592A\u7F51\u6570\u636E\u5305\uFF0C\u5206\u5F00\u53D1\u9001\u4E86\u3002</p></div><h4 id="arp-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#arp-\u534F\u8BAE" aria-hidden="true">#</a> ARP \u534F\u8BAE</h4><p>IP \u6570\u636E\u5305\u662F\u653E\u5728\u4EE5\u592A\u7F51\u6570\u636E\u5305\u91CC\u53D1\u9001\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u540C\u65F6\u77E5\u9053\u4E24\u4E2A\u5730\u5740\uFF0C\u4E00\u4E2A\u662F\u5BF9\u65B9\u7684 MAC \u5730\u5740\uFF0C\u53E6\u4E00\u4E2A\u662F\u5BF9\u65B9\u7684 IP \u5730\u5740\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u65B9\u7684 IP \u5730\u5740\u662F\u5DF2\u77E5\u7684\uFF08\u9759\u6001 IP \u5730\u5740\u6216 DHCP\uFF09\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u77E5\u9053\u5B83\u7684 MAC \u5730\u5740\u3002<br><br></p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u673A\u5236\uFF0C\u80FD\u591F\u4ECE IP \u5730\u5740\u5F97\u5230 MAC \u5730\u5740\u3002<br><br></p><p>\u8FD9\u91CC\u53C8\u53EF\u4EE5\u5206\u6210\u4E24\u79CD\u60C5\u51B5\u3002\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\u5982\u679C\u4E24\u53F0\u4E3B\u673A\u4E0D\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\uFF0C\u90A3\u4E48\u4E8B\u5B9E\u4E0A\u6CA1\u6709\u529E\u6CD5\u5F97\u5230\u5BF9\u65B9\u7684 MAC \u5730\u5740\uFF0C\u53EA\u80FD\u628A\u6570\u636E\u5305\u4F20\u9001\u5230\u4E24\u4E2A\u5B50\u7F51\u7EDC\u8FDE\u63A5\u5904\u7684&quot;\u7F51\u5173&quot;\uFF08gateway\uFF09\uFF0C\u8BA9\u7F51\u5173\u53BB\u5904\u7406\u3002<br><br></p><p>\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF0C\u5982\u679C\u4E24\u53F0\u4E3B\u673A\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u7528 ARP \u534F\u8BAE\uFF0C\u5F97\u5230\u5BF9\u65B9\u7684 MAC \u5730\u5740\u3002ARP \u534F\u8BAE\u4E5F\u662F\u53D1\u51FA\u4E00\u4E2A\u6570\u636E\u5305\uFF08\u5305\u542B\u5728\u4EE5\u592A\u7F51\u6570\u636E\u5305\u4E2D\uFF09\uFF0C\u5176\u4E2D\u5305\u542B\u5B83\u6240\u8981\u67E5\u8BE2\u4E3B\u673A\u7684 IP \u5730\u5740\uFF0C\u5728\u5BF9\u65B9\u7684 MAC \u5730\u5740\u8FD9\u4E00\u680F\uFF0C\u586B\u7684\u662F FF:FF:FF:FF:FF:FF\uFF0C\u8868\u793A\u8FD9\u662F\u4E00\u4E2A&quot;\u5E7F\u64AD&quot;\u5730\u5740\u3002\u5B83\u6240\u5728\u5B50\u7F51\u7EDC\u7684\u6BCF\u4E00\u53F0\u4E3B\u673A\uFF0C\u90FD\u4F1A\u6536\u5230\u8FD9\u4E2A\u6570\u636E\u5305\uFF0C\u4ECE\u4E2D\u53D6\u51FA IP \u5730\u5740\uFF0C\u4E0E\u81EA\u8EAB\u7684 IP \u5730\u5740\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C\u4E24\u8005\u76F8\u540C\uFF0C\u90FD\u505A\u51FA\u56DE\u590D\uFF0C\u5411\u5BF9\u65B9\u62A5\u544A\u81EA\u5DF1\u7684 MAC \u5730\u5740\uFF0C\u5426\u5219\u5C31\u4E22\u5F03\u8FD9\u4E2A\u5305\u3002<br><br></p><p>\u603B\u4E4B\uFF0C\u6709\u4E86 ARP \u534F\u8BAE\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F97\u5230\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\u5185\u7684\u4E3B\u673A MAC \u5730\u5740\uFF0C\u53EF\u4EE5\u628A\u6570\u636E\u5305\u53D1\u9001\u5230\u4EFB\u610F\u4E00\u53F0\u4E3B\u673A\u4E4B\u4E0A\u4E86\u3002</p><h3 id="\u4F20\u8F93\u5C42" tabindex="-1"><a class="header-anchor" href="#\u4F20\u8F93\u5C42" aria-hidden="true">#</a> \u4F20\u8F93\u5C42</h3><ul><li>\u5EFA\u7ACB&quot;\u7AEF\u53E3\u5230\u7AEF\u53E3&quot;\u7684\u901A\u4FE1</li></ul><blockquote><p>\u6709\u4E86 MAC \u5730\u5740\u548C IP \u5730\u5740\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5728\u4E92\u8054\u7F51\u4E0A\u4EFB\u610F\u4E24\u53F0\u4E3B\u673A\u4E0A\u5EFA\u7ACB\u901A\u4FE1\u3002</p></blockquote><p><strong>Q\uFF1A\u63A5\u4E0B\u6765\u7684\u95EE\u9898\u662F\uFF0C\u540C\u4E00\u53F0\u4E3B\u673A\u4E0A\u6709\u8BB8\u591A\u7A0B\u5E8F\u90FD\u9700\u8981\u7528\u5230\u7F51\u7EDC\uFF0C\u6BD4\u5982\uFF0C\u4F60\u4E00\u8FB9\u6D4F\u89C8\u7F51\u9875\uFF0C\u4E00\u8FB9\u4E0E\u670B\u53CB\u5728\u7EBF\u804A\u5929\u3002\u5F53\u4E00\u4E2A\u6570\u636E\u5305\u4ECE\u4E92\u8054\u7F51\u4E0A\u53D1\u6765\u7684\u65F6\u5019\uFF0C\u4F60\u600E\u4E48\u77E5\u9053\uFF0C\u5B83\u662F\u8868\u793A\u7F51\u9875\u7684\u5185\u5BB9\uFF0C\u8FD8\u662F\u8868\u793A\u5728\u7EBF\u804A\u5929\u7684\u5185\u5BB9\uFF1F</strong></p><p>A\uFF1A\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u8FD9\u4E2A\u6570\u636E\u5305\u5230\u5E95\u4F9B\u54EA\u4E2A\u7A0B\u5E8F\uFF08\u8FDB\u7A0B\uFF09\u4F7F\u7528\u3002\u8FD9\u4E2A\u53C2\u6570\u5C31\u53EB\u505A&quot;\u7AEF\u53E3&quot;\uFF08port\uFF09\uFF0C\u5B83\u5176\u5B9E\u662F\u6BCF\u4E00\u4E2A\u4F7F\u7528\u7F51\u5361\u7684\u7A0B\u5E8F\u7684\u7F16\u53F7\u3002\u6BCF\u4E2A\u6570\u636E\u5305\u90FD\u53D1\u5230\u4E3B\u673A\u7684\u7279\u5B9A\u7AEF\u53E3\uFF0C\u6240\u4EE5\u4E0D\u540C\u7684\u7A0B\u5E8F\u5C31\u80FD\u53D6\u5230\u81EA\u5DF1\u6240\u9700\u8981\u7684\u6570\u636E\u3002<br><br></p><p>&quot;\u7AEF\u53E3&quot;\u662F 0 \u5230 65535 \u4E4B\u95F4\u7684\u4E00\u4E2A\u6574\u6570\uFF0C\u6B63\u597D 16 \u4E2A\u4E8C\u8FDB\u5236\u4F4D\u30020 \u5230 1023 \u7684\u7AEF\u53E3\u88AB\u7CFB\u7EDF\u5360\u7528\uFF0C\u7528\u6237\u53EA\u80FD\u9009\u7528\u5927\u4E8E 1023 \u7684\u7AEF\u53E3\u3002\u4E0D\u7BA1\u662F\u6D4F\u89C8\u7F51\u9875\u8FD8\u662F\u5728\u7EBF\u804A\u5929\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4F1A\u968F\u673A\u9009\u7528\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u7136\u540E\u4E0E\u670D\u52A1\u5668\u7684\u76F8\u5E94\u7AEF\u53E3\u8054\u7CFB\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Unix \u7CFB\u7EDF\u5C31\u628A\u4E3B\u673A+\u7AEF\u53E3\uFF0C\u53EB\u505A&quot;\u5957\u63A5\u5B57&quot;\uFF08socket\uFF09</p></div><h4 id="tcp-udp-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#tcp-udp-\u534F\u8BAE" aria-hidden="true">#</a> TCP/UDP \u534F\u8BAE</h4><p>\u6570\u636E\u5305\uFF0C\u4E5F\u662F\u7531&quot;\u6807\u5934&quot;\u548C&quot;\u6570\u636E&quot;\u4E24\u90E8\u5206\u7EC4\u6210\u3002<br><br> &quot;\u6807\u5934&quot;\u90E8\u5206\u4E3B\u8981\u5B9A\u4E49\u4E86\u53D1\u51FA\u7AEF\u53E3\u548C\u63A5\u6536\u7AEF\u53E3\uFF0C&quot;\u6570\u636E&quot;\u90E8\u5206\u5C31\u662F\u5177\u4F53\u7684\u5185\u5BB9\u3002\u7136\u540E\uFF0C\u628A\u6574\u4E2A\u6570\u636E\u5305\u653E\u5165 IP \u6570\u636E\u5305\u7684&quot;\u6570\u636E&quot;\u90E8\u5206\uFF0C\u800C\u524D\u9762\u8BF4\u8FC7\uFF0CIP \u6570\u636E\u5305\u53C8\u662F\u653E\u5728\u4EE5\u592A\u7F51\u6570\u636E\u5305\u4E4B\u4E2D\u7684\uFF0C\u6240\u4EE5\u6574\u4E2A\u4EE5\u592A\u7F51\u6570\u636E\u5305\u73B0\u5728\u53D8\u6210\u4E86\u4E0B\u9762\u8FD9\u6837\uFF1A</p><p><img src="'+d+'" alt=""></p><ul><li>UDP \u6570\u636E\u5305\u975E\u5E38\u7B80\u5355\uFF0C&quot;\u6807\u5934&quot;\u90E8\u5206\u4E00\u5171\u53EA\u6709 8 \u4E2A\u5B57\u8282\uFF0C\u603B\u957F\u5EA6\u4E0D\u8D85\u8FC7 65,535 \u5B57\u8282\uFF0C\u6B63\u597D\u653E\u8FDB\u4E00\u4E2A IP \u6570\u636E\u5305\u3002</li><li>TCP \u6570\u636E\u5305\u548C UDP \u6570\u636E\u5305\u4E00\u6837\uFF0C\u90FD\u662F\u5185\u5D4C\u5728 IP \u6570\u636E\u5305\u7684&quot;\u6570\u636E&quot;\u90E8\u5206\u3002TCP \u6570\u636E\u5305\u6CA1\u6709\u957F\u5EA6\u9650\u5236\uFF0C\u7406\u8BBA\u4E0A\u53EF\u4EE5\u65E0\u9650\u957F\uFF0C\u4F46\u662F\u4E3A\u4E86\u4FDD\u8BC1\u7F51\u7EDC\u7684\u6548\u7387\uFF0C\u901A\u5E38 TCP \u6570\u636E\u5305\u7684\u957F\u5EA6\u4E0D\u4F1A\u8D85\u8FC7 IP \u6570\u636E\u5305\u7684\u957F\u5EA6\uFF0C\u4EE5\u786E\u4FDD\u5355\u4E2A TCP \u6570\u636E\u5305\u4E0D\u5FC5\u518D\u5206\u5272\u3002</li></ul><h3 id="\u5E94\u7528\u5C42" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u5C42" aria-hidden="true">#</a> \u5E94\u7528\u5C42</h3><ul><li>\u89C4\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u6570\u636E\u683C\u5F0F\u3002</li></ul><p>\u5E94\u7528\u7A0B\u5E8F\u6536\u5230&quot;\u4F20\u8F93\u5C42&quot;\u7684\u6570\u636E\uFF0C\u63A5\u4E0B\u6765\u5C31\u8981\u8FDB\u884C\u89E3\u8BFB\u3002\u7531\u4E8E\u4E92\u8054\u7F51\u662F\u5F00\u653E\u67B6\u6784\uFF0C\u6570\u636E\u6765\u6E90\u4E94\u82B1\u516B\u95E8\uFF0C\u5FC5\u987B\u4E8B\u5148\u89C4\u5B9A\u597D\u683C\u5F0F\uFF0C\u5426\u5219\u6839\u672C\u65E0\u6CD5\u89E3\u8BFB\u3002<br><br></p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0CTCP \u534F\u8BAE\u53EF\u4EE5\u4E3A\u5404\u79CD\u5404\u6837\u7684\u7A0B\u5E8F\u4F20\u9012\u6570\u636E\uFF0C\u6BD4\u5982 Email\u3001WWW\u3001FTP \u7B49\u7B49\u3002\u90A3\u4E48\uFF0C\u5FC5\u987B\u6709\u4E0D\u540C\u534F\u8BAE\u89C4\u5B9A\u7535\u5B50\u90AE\u4EF6\u3001\u7F51\u9875\u3001FTP \u6570\u636E\u7684\u683C\u5F0F\uFF0C\u8FD9\u4E9B\u5E94\u7528\u7A0B\u5E8F\u534F\u8BAE\u5C31\u6784\u6210\u4E86&quot;\u5E94\u7528\u5C42&quot;\u3002<br><br></p><p>\u8FD9\u662F\u6700\u9AD8\u7684\u4E00\u5C42\uFF0C\u76F4\u63A5\u9762\u5BF9\u7528\u6237\u3002\u5B83\u7684\u6570\u636E\u5C31\u653E\u5728 TCP \u6570\u636E\u5305\u7684&quot;\u6570\u636E&quot;\u90E8\u5206\u3002\u56E0\u6B64\uFF0C\u73B0\u5728\u7684\u4EE5\u592A\u7F51\u7684\u6570\u636E\u5305\u5C31\u53D8\u6210\u4E0B\u9762\u8FD9\u6837\u3002</p><p><img src="'+p+'" alt=""></p><h3 id="\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145" aria-hidden="true">#</a> \u8865\u5145</h3><h4 id="\u7528\u6237\u7684\u4E0A\u7F51\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7684\u4E0A\u7F51\u8BBE\u7F6E" aria-hidden="true">#</a> \u7528\u6237\u7684\u4E0A\u7F51\u8BBE\u7F6E</h4><ul><li>\u672C\u673A\u7684 IP \u5730\u5740</li><li>\u5B50\u7F51\u63A9\u7801</li><li>\u7F51\u5173\u7684 IP \u5730\u5740</li><li>DNS \u7684 IP \u5730\u5740</li></ul><p>\u56DB\u4E2A\u7F3A\u4E00\u4E0D\u53EF</p><h4 id="\u9759\u6001-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001-ip-\u5730\u5740" aria-hidden="true">#</a> \u9759\u6001 IP \u5730\u5740</h4><p>\u8BA1\u7B97\u673A\u6BCF\u6B21\u5F00\u673A\uFF0C\u90FD\u4F1A\u5206\u5230\u540C\u6837\u7684 IP \u5730\u5740\uFF0C\u6240\u4EE5\u8FD9\u79CD\u60C5\u51B5\u88AB\u79F0\u4F5C&quot;\u9759\u6001 IP \u5730\u5740&quot;\u4E0A\u7F51<br> \u4F46\u662F\uFF0C\u8FD9\u6837\u7684\u8BBE\u7F6E\u5F88\u4E13\u4E1A\uFF0C\u666E\u901A\u7528\u6237\u671B\u800C\u751F\u754F\uFF0C\u800C\u4E14\u5982\u679C\u4E00\u53F0\u7535\u8111\u7684 IP \u5730\u5740\u4FDD\u6301\u4E0D\u53D8\uFF0C\u5176\u4ED6\u7535\u8111\u5C31\u4E0D\u80FD\u4F7F\u7528\u8FD9\u4E2A\u5730\u5740\uFF0C\u4E0D\u591F\u7075\u6D3B\u3002\u51FA\u4E8E\u8FD9\u4E24\u4E2A\u539F\u56E0\uFF0C\u5927\u591A\u6570\u7528\u6237\u4F7F\u7528&quot;\u52A8\u6001 IP \u5730\u5740\u4E0A\u7F51&quot;\u3002</p><h4 id="\u52A8\u6001-ip-\u5730\u5740-dhcp-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001-ip-\u5730\u5740-dhcp-\u534F\u8BAE" aria-hidden="true">#</a> \u52A8\u6001 IP \u5730\u5740\uFF08DHCP \u534F\u8BAE\uFF09</h4><p>\u8FD9\u4E2A\u534F\u8BAE\u89C4\u5B9A\uFF0C\u6BCF\u4E00\u4E2A\u5B50\u7F51\u7EDC\u4E2D\uFF0C\u6709\u4E00\u53F0\u8BA1\u7B97\u673A\u8D1F\u8D23\u7BA1\u7406\u672C\u7F51\u7EDC\u7684\u6240\u6709 IP \u5730\u5740\uFF0C\u5B83\u53EB\u505A&quot;DHCP \u670D\u52A1\u5668&quot;\u3002\u65B0\u7684\u8BA1\u7B97\u673A\u52A0\u5165\u7F51\u7EDC\uFF0C\u5FC5\u987B\u5411&quot;DHCP \u670D\u52A1\u5668&quot;\u53D1\u9001\u4E00\u4E2A&quot;DHCP \u8BF7\u6C42&quot;\u6570\u636E\u5305\uFF0C\u7533\u8BF7 IP \u5730\u5740\u548C\u76F8\u5173\u7684\u7F51\u7EDC\u53C2\u6570\u3002<br><br></p><p><strong>Q\uFF1A\u524D\u9762\u8BF4\u8FC7\uFF0C\u5982\u679C\u4E24\u53F0\u8BA1\u7B97\u673A\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\uFF0C\u5FC5\u987B\u77E5\u9053\u5BF9\u65B9\u7684 MAC \u5730\u5740\u548C IP \u5730\u5740\uFF0C\u624D\u80FD\u53D1\u9001\u6570\u636E\u5305\u3002\u4F46\u662F\uFF0C\u65B0\u52A0\u5165\u7684\u8BA1\u7B97\u673A\u4E0D\u77E5\u9053\u8FD9\u4E24\u4E2A\u5730\u5740\uFF0C\u600E\u4E48\u53D1\u9001\u6570\u636E\u5305\u5462\uFF1F</strong><br><br></p><p>DHCP \u534F\u8BAE\u505A\u4E86\u4E00\u4E9B\u5DE7\u5999\u7684\u89C4\u5B9A\u3002<br></p><p>\u9996\u5148\uFF0C\u5B83\u662F\u4E00\u79CD\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u5EFA\u7ACB\u5728 UDP \u534F\u8BAE\u4E4B\u4E0A\uFF0C\u6240\u4EE5\u6574\u4E2A\u6570\u636E\u5305\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="'+n+'" alt=""></p><p>\uFF081\uFF09\u6700\u524D\u9762\u7684&quot;\u4EE5\u592A\u7F51\u6807\u5934&quot;\uFF0C\u8BBE\u7F6E\u53D1\u51FA\u65B9\uFF08\u672C\u673A\uFF09\u7684 MAC \u5730\u5740\u548C\u63A5\u6536\u65B9\uFF08DHCP \u670D\u52A1\u5668\uFF09\u7684 MAC \u5730\u5740\u3002\u524D\u8005\u5C31\u662F\u672C\u673A\u7F51\u5361\u7684 MAC \u5730\u5740\uFF0C\u540E\u8005\u8FD9\u65F6\u4E0D\u77E5\u9053\uFF0C\u5C31\u586B\u5165\u4E00\u4E2A\u5E7F\u64AD\u5730\u5740\uFF1AFF-FF-FF-FF-FF-FF\u3002<br></p><p>\uFF082\uFF09\u540E\u9762\u7684&quot;IP \u6807\u5934&quot;\uFF0C\u8BBE\u7F6E\u53D1\u51FA\u65B9\u7684 IP \u5730\u5740\u548C\u63A5\u6536\u65B9\u7684 IP \u5730\u5740\u3002\u8FD9\u65F6\uFF0C\u5BF9\u4E8E\u8FD9\u4E24\u8005\uFF0C\u672C\u673A\u90FD\u4E0D\u77E5\u9053\u3002\u4E8E\u662F\uFF0C\u53D1\u51FA\u65B9\u7684 IP \u5730\u5740\u5C31\u8BBE\u4E3A 0.0.0.0\uFF0C\u63A5\u6536\u65B9\u7684 IP \u5730\u5740\u8BBE\u4E3A 255.255.255.255\u3002<br></p><p>\uFF083\uFF09\u6700\u540E\u7684&quot;UDP \u6807\u5934&quot;\uFF0C\u8BBE\u7F6E\u53D1\u51FA\u65B9\u7684\u7AEF\u53E3\u548C\u63A5\u6536\u65B9\u7684\u7AEF\u53E3\u3002\u8FD9\u4E00\u90E8\u5206\u662F DHCP \u534F\u8BAE\u89C4\u5B9A\u597D\u7684\uFF0C\u53D1\u51FA\u65B9\u662F 68 \u7AEF\u53E3\uFF0C\u63A5\u6536\u65B9\u662F 67 \u7AEF\u53E3\u3002<br><br></p><p>\u8FD9\u4E2A\u6570\u636E\u5305\u6784\u9020\u5B8C\u6210\u540E\uFF0C\u5C31\u53EF\u4EE5\u53D1\u51FA\u4E86\u3002\u4EE5\u592A\u7F51\u662F\u5E7F\u64AD\u53D1\u9001\uFF0C\u540C\u4E00\u4E2A\u5B50\u7F51\u7EDC\u7684\u6BCF\u53F0\u8BA1\u7B97\u673A\u90FD\u6536\u5230\u4E86\u8FD9\u4E2A\u5305\u3002\u56E0\u4E3A\u63A5\u6536\u65B9\u7684 MAC \u5730\u5740\u662F FF-FF-FF-FF-FF-FF\uFF0C\u770B\u4E0D\u51FA\u662F\u53D1\u7ED9\u8C01\u7684\uFF0C\u6240\u4EE5\u6BCF\u53F0\u6536\u5230\u8FD9\u4E2A\u5305\u7684\u8BA1\u7B97\u673A\uFF0C\u8FD8\u5FC5\u987B\u5206\u6790\u8FD9\u4E2A\u5305\u7684 IP \u5730\u5740\uFF0C\u624D\u80FD\u786E\u5B9A\u662F\u4E0D\u662F\u53D1\u7ED9\u81EA\u5DF1\u7684\u3002\u5F53\u770B\u5230\u53D1\u51FA\u65B9 IP \u5730\u5740\u662F 0.0.0.0\uFF0C\u63A5\u6536\u65B9\u662F 255.255.255.255\uFF0C\u4E8E\u662F DHCP \u670D\u52A1\u5668\u77E5\u9053&quot;\u8FD9\u4E2A\u5305\u662F\u53D1\u7ED9\u6211\u7684&quot;\uFF0C\u800C\u5176\u4ED6\u8BA1\u7B97\u673A\u5C31\u53EF\u4EE5\u4E22\u5F03\u8FD9\u4E2A\u5305\u3002<br><br></p><p>\u63A5\u4E0B\u6765\uFF0CDHCP \u670D\u52A1\u5668\u8BFB\u51FA\u8FD9\u4E2A\u5305\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u5206\u914D\u597D IP \u5730\u5740\uFF0C\u53D1\u9001\u56DE\u53BB\u4E00\u4E2A&quot;DHCP \u54CD\u5E94&quot;\u6570\u636E\u5305\u3002\u8FD9\u4E2A\u54CD\u5E94\u5305\u7684\u7ED3\u6784\u4E5F\u662F\u7C7B\u4F3C\u7684\uFF0C\u4EE5\u592A\u7F51\u6807\u5934\u7684 MAC \u5730\u5740\u662F\u53CC\u65B9\u7684\u7F51\u5361\u5730\u5740\uFF0CIP \u6807\u5934\u7684 IP \u5730\u5740\u662F DHCP \u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF08\u53D1\u51FA\u65B9\uFF09\u548C 255.255.255.255\uFF08\u63A5\u6536\u65B9\uFF09\uFF0CUDP \u6807\u5934\u7684\u7AEF\u53E3\u662F 67\uFF08\u53D1\u51FA\u65B9\uFF09\u548C 68\uFF08\u63A5\u6536\u65B9\uFF09\uFF0C\u5206\u914D\u7ED9\u8BF7\u6C42\u7AEF\u7684 IP \u5730\u5740\u548C\u672C\u7F51\u7EDC\u7684\u5177\u4F53\u53C2\u6570\u5219\u5305\u542B\u5728 Data \u90E8\u5206\u3002<br><br></p><p>\u65B0\u52A0\u5165\u7684\u8BA1\u7B97\u673A\u6536\u5230\u8FD9\u4E2A\u54CD\u5E94\u5305\uFF0C\u4E8E\u662F\u5C31\u77E5\u9053\u4E86\u81EA\u5DF1\u7684 IP \u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801\u3001\u7F51\u5173\u5730\u5740\u3001DNS \u670D\u52A1\u5668\u7B49\u7B49\u53C2\u6570\u3002<br><br></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>MAC \u5730\u5740\u53EF\u4E0D\u662F\u4E16\u754C\u4E0A\u72EC\u4E00\u65E0\u4E8C\u7684\uFF0C\u53EA\u662F\u5176\u6563\u5217\u8DB3\u591F\u5927\uFF0C\u4F7F\u5F97\u5728\u540C\u4E00\u4E2A\u5B50\u7F51\u4E2D MAC \u5730\u5740\u78B0\u5DE7\u76F8\u540C\u7684\u4E24\u5757\u7F51\u5361\u51E0\u7387\u5F88\u5C0F\u5F88\u5C0F\u800C\u5DF2\u3002\u4F7F\u7528\u7F51\u7EDC 15 \u5E74\u6765\uFF0C\u5DF2\u7ECF\u78B0\u5230\u8FC7\u4E24\u6B21\u7F51\u5361 MAC \u76F8\u540C\u7684\u4E8B\u4E86\u3002</p><p>\u800C\u4E14 MAC \u76F8\u540C\u6709\u4E24\u4E2A\u65B9\u6CD5\u89E3\u51B3\uFF1A 1\u3001\u7F51\u5361\u5382\u5546\u63D0\u4F9B\u6709\u914D\u7F6E\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6539\u786C\u4EF6 MAC\u3002\u5982\u679C\u4F7F\u7528\u4E8C\u5C42\u7F51\u7EDC\u7CFB\u7EDF\u5C31\u53EA\u80FD\u7528\u6B64\u6CD5\u89E3\u51B3\uFF0C 2\u3001\u5404\u79CD\u64CD\u4F5C\u7CFB\u7EDF\u4E5F\u90FD\u63D0\u4F9B\u4F2A\u9020 MAC \u5730\u5740\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u4E09\u5C42\u7CFB\u7EDF\u4E2D MAC \u51B2\u7A81\u7684\u95EE\u9898\u3002</p></div><h2 id="osi-\u6A21\u578B\u548C-tcp-ip-\u534F\u8BAE\u7C07\u5173\u7CFB\u548C\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#osi-\u6A21\u578B\u548C-tcp-ip-\u534F\u8BAE\u7C07\u5173\u7CFB\u548C\u533A\u522B" aria-hidden="true">#</a> OSI \u6A21\u578B\u548C TCP/IP \u534F\u8BAE\u7C07\u5173\u7CFB\u548C\u533A\u522B</h2><ol><li>OSI \u5F15\u5165\u4E86\u670D\u52A1\u3001\u63A5\u53E3\u3001\u534F\u8BAE\u3001\u5206\u5C42\u7684\u6982\u5FF5\uFF0CTCP/IP \u501F\u9274\u4E86 OSI \u7684\u8FD9\u4E9B\u6982\u5FF5\u5EFA\u7ACB TCP/IP \u6A21\u578B\u3002</li><li>OSI \u5148\u6709\u6A21\u578B\uFF0C\u540E\u6709\u534F\u8BAE\uFF0C\u5148\u6709\u6807\u51C6\uFF0C\u540E\u8FDB\u884C\u5B9E\u8DF5\uFF1B\u800C TCP/IP \u5219\u76F8\u53CD\uFF0C\u5148\u6709\u534F\u8BAE\u548C\u5E94\u7528\u518D\u63D0\u51FA\u4E86\u6A21\u578B\uFF0C\u4E14\u662F\u53C2\u7167\u7684 OSI \u6A21\u578B\u3002</li><li>OSI \u662F\u4E00\u79CD\u7406\u8BBA\u4E0B\u7684\u6A21\u578B\uFF0C\u800C TCP/IP \u5DF2\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u6210\u4E3A\u7F51\u7EDC\u4E92\u8054\u4E8B\u5B9E\u4E0A\u7684\u6807\u51C6\u3002</li></ol><ul><li>TCP/IP \u4ED6\u662F\u4E00\u4E2A\u534F\u8BAE\u7C07\uFF1B\u800C OSI\uFF08\u5F00\u653E\u7CFB\u7EDF\u4E92\u8054\uFF09\u5219\u662F\u4E00\u4E2A\u6A21\u578B\uFF0C\u4E14 TCP/IP \u7684\u5F00\u53D1\u65F6\u95F4\u5728 OSI \u4E4B\u524D\u3002</li><li>TCP/IP \u662F\u7531\u4E00\u4E9B\u4EA4\u4E92\u6027\u7684\u6A21\u5757\u505A\u6210\u7684\u5206\u5C42\u6B21\u7684\u534F\u8BAE\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u6A21\u5757\u63D0\u4F9B\u7279\u5B9A\u7684\u529F\u80FD\uFF1BOSi \u5219\u6307\u5B9A\u4E86\u54EA\u4E2A\u529F\u80FD\u662F\u5C5E\u4E8E\u54EA\u4E00\u5C42\u7684\u3002</li><li>\u5206\u5C42\u4E0D\u540C</li></ul><h2 id="tcp-ip-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#tcp-ip-\u534F\u8BAE" aria-hidden="true">#</a> TCP/IP \u534F\u8BAE</h2><p>TCP/IP \u534F\u8BAE\u662F\u4E00\u4E2A\u534F\u8BAE\u96C6\uFF0C\u91CC\u9762\u5305\u62EC\u5F88\u591A\u534F\u8BAE\u7684\uFF0CTCP\u3001UDP\u3001TLS \u7B49\u53EA\u662F\u5176\u4E2D\u7684\u534F\u8BAE\u3002<br><br> TCP/IP \u534F\u8BAE\u96C6\u5305\u62EC\u5E94\u7528\u5C42\uFF0C\u4F20\u8F93\u5C42\uFF0C\u7F51\u7EDC\u5C42\uFF0C\u7F51\u7EDC\u8BBF\u95EE\u5C42\u3002<br><br></p><h3 id="\u5E94\u7528\u5C42\u5305\u62EC" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u5C42\u5305\u62EC" aria-hidden="true">#</a> \u5E94\u7528\u5C42\u5305\u62EC\uFF1A</h3><ul><li>\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE(HTTP)\uFF1A\u4E07\u7EF4\u7F51\u7684\u57FA\u672C\u534F\u8BAE\uFF1B</li><li>\u6587\u4EF6\u4F20\u8F93(TFTP \u7B80\u5355\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE)\uFF1B</li><li>\u8FDC\u7A0B\u767B\u5F55(Telnet)\uFF0C\u63D0\u4F9B\u8FDC\u7A0B\u8BBF\u95EE\u5176\u5B83\u4E3B\u673A\u529F\u80FD\uFF0C\u5B83\u5141\u8BB8\u7528\u6237\u767B\u5F55\uFF1B</li><li>internet \u4E3B\u673A\uFF0C\u5E76\u5728\u8FD9\u53F0\u4E3B\u673A\u4E0A\u6267\u884C\u547D\u4EE4\uFF1B</li><li>\u7F51\u7EDC\u7BA1\u7406(SNMP \u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE)\uFF0C\u8BE5\u534F\u8BAE\u63D0\u4F9B\u4E86\u76D1\u63A7\u7F51\u7EDC\u8BBE\u5907\u7684\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u914D\u7F6E\u7BA1\u7406,\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\uFF0C\u6027\u80FD\u7BA1\u7406\u53CA\u5B89\u5168\u7BA1\u7406\u7B49\uFF1B</li><li>\u57DF\u540D\u7CFB\u7EDF(DNS)\uFF0C\u8BE5\u7CFB\u7EDF\u7528\u4E8E\u5728 internet \u4E2D\u5C06\u57DF\u540D\u53CA\u5176\u516C\u5171\u5E7F\u64AD\u7684\u7F51\u7EDC\u8282\u70B9\u8F6C\u6362\u6210 IP \u5730\u5740\u3002</li></ul><h3 id="\u4F20\u8F93\u5C42\u5305\u62EC" tabindex="-1"><a class="header-anchor" href="#\u4F20\u8F93\u5C42\u5305\u62EC" aria-hidden="true">#</a> \u4F20\u8F93\u5C42\u5305\u62EC\uFF1A</h3><ul><li>TLS\uFF0C\u4E5F\u5373 SSL(Secure Sockets Layer\uFF0C\u5B89\u5168\u5957\u63A5\u5B57\u5C42)\u534F\u8BAE\uFF0C\u540E\u6765 IETF \u5728\u6807\u51C6\u5316 SSL \u534F\u8BAE\u65F6\uFF0C\u5C06\u5176\u6539\u540D\u4E3A Transport Layer Security\uFF08TLS\uFF0C\u4F20\u8F93\u5C42\u5B89\u5168\uFF09\u3002</li></ul><h3 id="\u7F51\u7EDC\u5C42\u5305\u62EC" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5C42\u5305\u62EC" aria-hidden="true">#</a> \u7F51\u7EDC\u5C42\u5305\u62EC\uFF1A</h3><ul><li>Internet \u534F\u8BAE(IP)</li><li>Internet \u63A7\u5236\u4FE1\u606F\u534F\u8BAE(ICMP)</li><li>\u5730\u5740\u89E3\u6790\u534F\u8BAE(ARP)</li><li>\u53CD\u5411\u5730\u5740\u89E3\u6790\u534F\u8BAE(RARP)</li></ul><h3 id="\u7F51\u7EDC\u8BBF\u95EE\u5C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8BBF\u95EE\u5C42" aria-hidden="true">#</a> \u7F51\u7EDC\u8BBF\u95EE\u5C42\uFF1A</h3><ul><li>\u7F51\u7EDC\u8BBF\u95EE\u5C42\u53C8\u79F0\u4F5C\u4E3B\u673A\u5230\u7F51\u7EDC\u5C42(host-to-network)\u3002\u7F51\u7EDC\u8BBF\u95EE\u5C42\u7684\u529F\u80FD\u5305\u62EC IP \u5730\u5740\u4E0E\u7269\u7406\u5730\u5740\u786C\u4EF6\u7684\u6620\u5C04\uFF0C\u4EE5\u53CA\u5C06 IP \u5C01\u88C5\u6210\u5E27\u3002\u57FA\u4E8E\u4E0D\u540C\u786C\u4EF6\u7C7B\u578B\u7684\u7F51\u7EDC\u63A5\u53E3\uFF0C\u7F51\u7EDC\u8BBF\u95EE\u5C42\u5B9A\u4E49\u4E86\u548C\u7269\u7406\u4ECB\u8D28\u7684\u8FDE\u63A5\u3002</li></ul><h2 id="tcp-\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B" tabindex="-1"><a class="header-anchor" href="#tcp-\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B" aria-hidden="true">#</a> TCP \u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B</h2><h3 id="\u5EFA\u7ACB\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u8FDE\u63A5" aria-hidden="true">#</a> \u5EFA\u7ACB\u8FDE\u63A5</h3><p><img src="'+h+'" alt=""></p><h3 id="\u4F20\u8F93\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F20\u8F93\u6570\u636E" aria-hidden="true">#</a> \u4F20\u8F93\u6570\u636E</h3><blockquote><p>tcp \u94FE\u63A5\u662F\u300C\u53CC\u5DE5\u7684\u300D\uFF0C\u53CC\u65B9\u90FD\u53EF\u4EE5\u4E3B\u52A8\u53D1\u8D77\u6570\u636E\u4F20\u8F93\u3002\u4E0D\u8FC7\u65E0\u8BBA\u662F\u54EA\u65B9\u558A\u8BDD\uFF0C\u90FD\u9700\u8981\u6536\u5230\u5BF9\u65B9\u7684\u786E\u8BA4\u624D\u80FD\u8BA4\u4E3A\u5BF9\u65B9\u6536\u5230\u4E86\u81EA\u5DF1\u7684\u558A\u8BDD\u3002 \u5F20\u4E09\u53EF\u80FD\u662F\u4E2A\u9AD8\u5C04\u70AE\uFF0C\u4E00\u8BF4\u8FDE\u8BF4\u4E86\u516B\u53E5\u8BDD\uFF0C\u8FD9\u65F6\u5019\u674E\u56DB\u53EF\u4EE5\u4E0D\u7528\u4E00\u53E5\u4E00\u53E5\u56DE\u590D\uFF0C\u800C\u662F\u8FDE\u7EED\u542C\u4E86\u8FD9\u516B\u53E5\u8BDD\u4E4B\u540E\uFF0C\u4E00\u8D77\u5411\u5BF9\u65B9\u56DE\u590D\u8BF4\u524D\u9762\u4F60\u8BF4\u7684\u516B\u53E5\u8BDD\u6211\u90FD\u542C\u89C1\u4E86\uFF0C\u8FD9\u5C31\u662F\u6279\u91CF ack\u3002\u4F46\u662F\u5F20\u4E09\u4E5F\u4E0D\u80FD\u4E00\u6B21\u6027\u8BF4\u4E86\u592A\u591A\u8BDD\uFF0C\u674E\u56DB\u7684\u8111\u5B50\u77ED\u65F6\u95F4\u53EF\u80FD\u65E0\u6CD5\u6D88\u5316\u592A\u591A\uFF0C\u4E24\u4EBA\u4E4B\u95F4\u9700\u8981\u6709\u534F\u5546\u597D\u7684\u5408\u9002\u7684\u53D1\u9001\u548C\u63A5\u53D7\u901F\u7387\uFF0C\u8FD9\u4E2A\u5C31\u662F\u300CTCP \u7A97\u53E3\u5927\u5C0F\u300D\u3002 \u7F51\u7EDC\u73AF\u5883\u7684\u6570\u636E\u4EA4\u4E92\u540C\u4EBA\u7C7B\u4E4B\u95F4\u7684\u5BF9\u8BDD\u8FD8\u8981\u590D\u6742\u4E00\u4E9B\uFF0C\u5B83\u5B58\u5728\u6570\u636E\u5305\u4E71\u5E8F\u7684\u73B0\u8C61\u3002\u540C\u4E00\u4E2A\u6765\u6E90\u53D1\u51FA\u6765\u7684\u4E0D\u540C\u6570\u636E\u5305\u5728\u300C\u7F51\u9645\u8DEF\u7531\u300D\u4E0A\u53EF\u80FD\u4F1A\u8D70\u8FC7\u4E0D\u540C\u7684\u8DEF\u5F84\uFF0C\u6700\u7EC8\u8FBE\u5230\u540C\u4E00\u4E2A\u5730\u65B9\u65F6\uFF0C\u987A\u5E8F\u5C31\u4E0D\u4E00\u6837\u4E86\u3002\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7F51\u7EDC\u5185\u6838\u6A21\u5757\u4F1A\u8D1F\u8D23\u5BF9\u6570\u636E\u5305\u8FDB\u884C\u6392\u5E8F\uFF0C\u5230\u7528\u6237\u5C42\u65F6\u987A\u5E8F\u5C31\u5DF2\u7ECF\u5B8C\u5168\u4E00\u81F4\u4E86\u3002</p></blockquote><p><img src="'+u+'" alt=""></p><h3 id="\u5173\u95ED\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u8FDE\u63A5" aria-hidden="true">#</a> \u5173\u95ED\u8FDE\u63A5</h3><p><img src="'+s+'" alt=""></p>',104);function c(I,q){return l}var m=r(P,[["render",c]]);export{m as default};
