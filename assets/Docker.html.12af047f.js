import{e}from"./app.eb5e24ec.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><h3 id="\u67E5\u770B\u6240\u6709\u7684\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u7684\u955C\u50CF" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u7684\u955C\u50CF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker images ls
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5220\u9664\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u955C\u50CF" aria-hidden="true">#</a> \u5220\u9664\u955C\u50CF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker image rm [imageName]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668" aria-hidden="true">#</a> \u5BB9\u5668</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker container ls #\u5217\u51FA\u672C\u673A\u8FD0\u884C\u7684\u5BB9\u5668
docker container ls --all # \u5217\u51FA\u672C\u673A\u6240\u6709\u5BB9\u5668\uFF0C\u5305\u62EC\u7EC8\u6B62\u8FD0\u884C\u7684\u5BB9\u5668
docker container run hello-world  #\u8FD0\u884C\u5B8C\u5C31\u505C\u6B62
docker container run -it ubuntu bash #\u670D\u52A1\u7C7B\u578B\uFF08\u9700\u624B\u52A8\u505C\u6B62\uFF09
docker container kill [containID] #\u624B\u52A8\u505C\u6B62\u5BB9\u5668
docker container rm [containerID] # \u5220\u9664\u5BB9\u5668\uFF0C\u7EC8\u6B62\u8FD0\u884C\u7684\u5BB9\u5668\u6587\u4EF6\uFF0C\u4F9D\u7136\u4F1A\u5360\u636E\u786C\u76D8\u7A7A\u95F4\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u8FD0\u884C\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> \u8FD0\u884C\u547D\u4EE4\u8BE6\u89E3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker container run
ocker container run -p 8000:3000 -it koa-demo /bin/bash
docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
#-p\u53C2\u6570\uFF1A\u5BB9\u5668\u7684 3000 \u7AEF\u53E3\u6620\u5C04\u5230\u672C\u673A\u7684 8000 \u7AEF\u53E3\u3002
#-it\u53C2\u6570\uFF1A\u5BB9\u5668\u7684 Shell \u6620\u5C04\u5230\u5F53\u524D\u7684 Shell\uFF0C\u7136\u540E\u4F60\u5728\u672C\u673A\u7A97\u53E3\u8F93\u5165\u7684\u547D\u4EE4\uFF0C\u5C31\u4F1A\u4F20\u5165\u5BB9\u5668\u3002
#--rm\u53C2\u6570\uFF1A\u5BB9\u5668\u7EC8\u6B62\u8FD0\u884C\u540E\u81EA\u52A8\u5220\u9664\u5BB9\u5668\u6587\u4EF6\u3002
#koa-demo:0.0.1\uFF1Aimage \u6587\u4EF6\u7684\u540D\u5B57\uFF08\u5982\u679C\u6709\u6807\u7B7E\uFF0C\u8FD8\u9700\u8981\u63D0\u4F9B\u6807\u7B7E\uFF0C\u9ED8\u8BA4\u662F latest \u6807\u7B7E\uFF09\u3002
#/bin/bash\uFF1A\u5BB9\u5668\u542F\u52A8\u4EE5\u540E\uFF0C\u5185\u90E8\u7B2C\u4E00\u4E2A\u6267\u884C\u7684\u547D\u4EE4\u3002\u8FD9\u91CC\u662F\u542F\u52A8 Bash\uFF0C\u4FDD\u8BC1\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Shell\u3002
# --network host|bridge|none \u9ED8\u8BA4\u662Fbridge\uFF0C\u5373\u6865\u63A5\u7F51\u7EDC\uFF0C\u4EE5\u6865\u63A5\u6A21\u5F0F\u8FDE\u63A5\u5230\u5BBF\u4E3B\u673A\uFF1Bhost\u662F\u5BBF\u4E3B\u7F51\u7EDC\uFF0C\u5373\u4E0E\u5BBF\u4E3B\u673A\u5171\u7528\u7F51\u7EDC\uFF1Bnone\u5219\u8868\u793A\u65E0\u7F51\u7EDC\uFF0C\u5BB9\u5668\u5C06\u65E0\u6CD5\u8054\u7F51\u3002\u5F53\u5BB9\u5668\u4F7F\u7528host\u7F51\u7EDC\u65F6\uFF0C\u5BB9\u5668\u4E0E\u5BBF\u4E3B\u5171\u7528\u7F51\u7EDC\uFF0C\u8FD9\u6837\u5C31\u80FD\u5728\u5BB9\u5668\u4E2D\u8BBF\u95EE\u5BBF\u4E3B\u673A\u7F51\u7EDC\uFF0C\u90A3\u4E48\u5BB9\u5668\u7684localhost\u5C31\u662F\u5BBF\u4E3B\u673A\u7684localhost\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u542F\u52A8-ngnix" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-ngnix" aria-hidden="true">#</a> \u542F\u52A8 ngnix</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker container run --name testnginx --volume &quot;$PWD/html&quot;:/usr/share/nginx/html --volume &quot;$PWD/ngnix-config/nginx&quot;:/etc/nginx -p 8887:80 -d nginx

# &quot;$PWD/html&quot;:/usr/share/nginx/html \u628A\u5F53\u524D\u5DE5\u4F5C\u8DEF\u5F84\u5B50\u76EE\u5F55html\uFF0C\u6620\u5C04\u5230\u5BB9\u5668\u7684\u7F51\u9875\u6587\u4EF6\u76EE\u5F55/usr/share/nginx/html

docker container cp mynginx:/etc/nginx .
# \u628Amynginx\u5BB9\u5668\u7684/etc/nginx\u62F7\u8D1D\u5230\u5F53\u524D\u76EE\u5F55\u3002\u4E0D\u8981\u6F0F\u6389\u6700\u540E\u90A3\u4E2A\u70B9\u3002

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5982\u4F55\u89E3\u51B3-docker-\u5185\u90E8\u8BBF\u95EE\u4E0D\u4E86\u5BBF\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u89E3\u51B3-docker-\u5185\u90E8\u8BBF\u95EE\u4E0D\u4E86\u5BBF\u4E3B\u673A" aria-hidden="true">#</a> \u5982\u4F55\u89E3\u51B3 docker \u5185\u90E8\u8BBF\u95EE\u4E0D\u4E86\u5BBF\u4E3B\u673A</h2><blockquote><p>\u5728\u9632\u706B\u5899\u5F00\u542F\u7684\u72B6\u6001\u4E0B\uFF0Cdocker \u5BB9\u5668\u5185\u90E8\u65E0\u6CD5\u8BBF\u95EE\u5BBF\u4E3B\u673A\u670D\u52A1\uFF08\u80FD\u591F\u8BBF\u95EE\u975E\u5BBF\u4E3B\u673A\u7684\u5176\u4ED6\u5C40\u57DF\u7F51\u8BA1\u7B97\u673A\u7684\u670D\u52A1\uFF09\uFF0C\u89E3\u51B3\u65B9\u6CD5\uFF1A</p></blockquote><p>_\u8865\u5145\uFF1A\u7531\u4E8E\u5BB9\u5668\u5185\u8BF7\u6C42\u7684\u6E90\u5730\u5740\u662F\u4F7F\u7528\u7684 docker0 \u7F51\u6BB5\u7684\u5185\u7F51\u5730\u5740\uFF0C\u5BBF\u4E3B\u673A\u9632\u706B\u5899\u65E0\u6CD5\u8BC6\u522B\u6765\u6E90\u4E3A\u975E\u5BBF\u4E3B\u673A\u7F51\u6BB5\u7684 docker0 \u7F51\u6BB5\u7684\u5185\u7F51\u5730\u5740\u8BF7\u6C42\uFF0C\u5C06\u5176\u6807\u8BB0\u4E3A\u672A\u77E5\u6765\u6E90\uFF0C\u4E8E\u662F\u5BF9\u8BF7\u6C42\u8FDB\u884C\u4E86\u62E6\u622A\uFF0C\u53EF\u901A\u8FC7\u6DFB\u52A0\u9632\u706B\u5899\u6765\u6E90\u89C4\u5219\uFF08docker \u5BB9\u5668\u9ED8\u8BA4\u5185\u7F51\u7F51\u6BB5\u4E3A 172.17.0.0/16\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ip addr show # \u67E5\u770Bdocker0\u7684\u8F6C\u53D1\u7F51\u7EDC\u5730\u5740\u548C\u7AEF\u53E3
sudo ufw allow from 172.17.0.0/16 #\u5141\u8BB8\u6240\u6709RFC1918\u7F51\u7EDC\uFF08\u5C40\u57DF\u7F51/\u65E0\u7EBF\u5C40\u57DF\u7F51\u7684\uFF09\u8BBF\u95EE\u8FD9\u4E2A\u4E3B\u673A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="raspberry-\u5185\u7F6E\u7684\u9632\u706B\u5899-ufw-\u8BBE\u7F6E\u548C\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#raspberry-\u5185\u7F6E\u7684\u9632\u706B\u5899-ufw-\u8BBE\u7F6E\u548C\u542F\u7528" aria-hidden="true">#</a> Raspberry\uFF0C\u5185\u7F6E\u7684\u9632\u706B\u5899 ufw \u8BBE\u7F6E\u548C\u542F\u7528</h2><h3 id="\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528" aria-hidden="true">#</a> \u542F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo ufw enable
sudo ufw default deny
# \u4F5C\u7528\uFF1A\u5F00\u542F\u4E86\u9632\u706B\u5899\u5E76\u968F\u7CFB\u7EDF\u542F\u52A8\u540C\u65F6\u5173\u95ED\u6240\u6709\u5916\u90E8\u5BF9\u672C\u673A\u7684\u8BBF\u95EE\uFF08\u672C\u673A\u8BBF\u95EE\u5916\u90E8\u6B63\u5E38\uFF09\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED" aria-hidden="true">#</a> \u5173\u95ED</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo ufw disable
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u770B\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u72B6\u6001" aria-hidden="true">#</a> \u67E5\u770B\u72B6\u6001</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo ufw status
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5F00\u542F-\u7981\u7528\u76F8\u5E94\u7AEF\u53E3\u6216\u670D\u52A1\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-\u7981\u7528\u76F8\u5E94\u7AEF\u53E3\u6216\u670D\u52A1\u4E3E\u4F8B" aria-hidden="true">#</a> \u5F00\u542F/\u7981\u7528\u76F8\u5E94\u7AEF\u53E3\u6216\u670D\u52A1\u4E3E\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo ufw allow 80 #\u5141\u8BB8\u5916\u90E8\u8BBF\u95EE80\u7AEF\u53E3
sudo ufw delete allow 80 #\u7981\u6B62\u5916\u90E8\u8BBF\u95EE80
sudo ufw allow from 192.168.1.1 #\u5141\u8BB8\u6B64IP\u8BBF\u95EE\u6240\u6709\u7684\u672C\u673A\u7AEF\u53E3
sudo ufw deny smtp #\u7981\u6B62\u5916\u90E8\u8BBF\u95EEsmtp\u670D\u52A1
sudo ufw delete allow smtp #\u5220\u9664\u4E0A\u9762\u5EFA\u7ACB\u7684\u67D0\u6761\u89C4\u5219
ufw deny proto tcp from 10.0.0.0/8 to 192.168.0.1 port #\u8981\u62D2\u7EDD\u6240\u6709\u7684\u6D41\u91CF\u4ECETCP\u768410.0.0.0/8 \u5230\u7AEF\u53E322\u7684\u5730\u5740192.168.0.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,24);function r(l,i){return s}var t=n(a,[["render",r]]);export{t as default};