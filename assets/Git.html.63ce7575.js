import{r as i,a as r,c as l,f as e,b as n,F as c,g as s,e as t}from"./app.eb5e24ec.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const o={},p=e("blockquote",null,[e("p",null,"Git \u7684\u4E00\u4E9B\u5E38\u7528\u547D\u4EE4\u548C\u53C2\u8003\u5B66\u4E60\u8D44\u6599")],-1),u={href:"https://www.aliyundrive.com/drive/folder/5fbdc9942244793fd64a443fb69a62c2d77050ea",target:"_blank",rel:"noopener noreferrer"},g=s("\u5E38\u7528\u547D\u4EE4\u53C2\u8003 1"),b={href:"https://segmentfault.com/a/1190000007497383",target:"_blank",rel:"noopener noreferrer"},h=s("\u5E38\u7528\u547D\u4EE4\u53C2\u8003 2"),m={href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"},x=s("\u5B66\u4E60 Git \u962E\u4E00\u5CF0"),v={href:"https://progit.bootcss.com/#_remote_repos",target:"_blank",rel:"noopener noreferrer"},f=s("\u5B66\u4E60 Git Bootstrap"),k={href:"https://blog.zengrong.net/post/1746.html",target:"_blank",rel:"noopener noreferrer"},_=s("\u8FDC\u7A0B\u64CD\u4F5C\u53C2\u8003"),w=t(`<h2 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token punctuation">[</span>feature-branch-rebase<span class="token punctuation">]</span>  <span class="token comment">#current in feature-branch.</span>
<span class="token function">git</span> checkout master
<span class="token function">git</span> pull
<span class="token function">git</span> checkout <span class="token punctuation">[</span>feature-branch-rebase<span class="token punctuation">]</span>
<span class="token function">git</span> rebase -i <span class="token punctuation">[</span>commit-id-\u8FD9\u4E2A\u5206\u652F\u7684\u591A\u6B21\u63D0\u4EA4\u7684\u524D\u4E00\u4E2A<span class="token punctuation">]</span><span class="token comment">#\u5C06\u672C\u5730\u7684\u591A\u6B21\u63D0\u4EA4\u5408\u5E76\u4E3A\u4E00\u4E2A\uFF0C\u4EE5\u7B80\u5316\u63D0\u4EA4\u5386\u53F2\u3002\u672C\u5730\u6709\u591A\u4E2A\u63D0\u4EA4\u65F6,\u5982\u679C\u4E0D\u8FDB\u884C\u8FD9\u4E00\u6B65,\u5728git rebase master\u65F6\u4F1A\u591A\u6B21\u89E3\u51B3\u51B2\u7A81(\u6700\u574F\u60C5\u51B5\u4E0B,\u6BCF\u4E00\u4E2A\u63D0\u4EA4\u90FD\u4F1A\u76F8\u5E94\u89E3\u51B3\u4E00\u4E2A\u51B2\u7A81)</span>
<span class="token function">git</span> rebase master -i  <span class="token comment">#current in feature-branch-rebase.</span>
<span class="token comment"># 2.resolve conflict</span>
<span class="token comment"># 3. commit file to stage</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 4. continue</span>
<span class="token function">git</span> rebase --continue
<span class="token function">git</span> checkout master
<span class="token function">git</span> merge feature-branch-rebase
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u672C\u5730\u5E93\u5173\u8054\u8FDC\u7A0B\u5E93" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5E93\u5173\u8054\u8FDC\u7A0B\u5E93" aria-hidden="true">#</a> \u672C\u5730\u5E93\u5173\u8054\u8FDC\u7A0B\u5E93</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote add origin git@github.com:nanfei9330/learngit.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u67E5\u770B\u6240\u6709\u5206\u652F-\u672C\u5730\u52A0\u8FDC\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u5206\u652F-\u672C\u5730\u52A0\u8FDC\u7A0B" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u5206\u652F\uFF08\u672C\u5730\u52A0\u8FDC\u7A0B\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch -a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u67E5\u770B\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch -r
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730\u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git checkout -b \u672C\u5730\u5206\u652F\u540D origin/\u8FDC\u7A0B\u5206\u652F\u540D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u63A8\u9001\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u63A8\u9001\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push origin \u672C\u5730\u5206\u652F\u540D:\u8FDC\u7A0B\u5206\u652F\u540D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5220\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u8FDC\u7A0B\u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push origin --delete [name]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git checkout 234ab5
git reset --hard 534iu4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h2><h2 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git chekout -b dev   // -b \u521B\u5EFA\u5E76\u8FDB\u5165
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> \u5207\u6362\u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git chekout dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h2><ul><li><strong>\u6B63\u5E38\u5408\u5E76</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git merge dev    //\u5F53\u524D\u5206\u652F\u5408\u5E76 dev \u5206\u652F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>--no-ff \u5408\u5E76</strong> --no-ff \u7981\u7528 Fast forward \u6A21\u5F0F\u5728 merge \u65F6\u751F\u6210\u4E00\u4E2A\u65B0\u7684 commit\uFF0C\u8FD9\u6837\uFF0C\u4ECE\u5206\u652F\u5386\u53F2\u4E0A\u5C31\u53EF\u4EE5\u770B\u51FA\u5206\u652F\u4FE1\u606F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git merge --no-ff -m &quot;merge with no-ff&quot; dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch -d dev   // -D \u5F3A\u5236\u5220\u9664
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="push-\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B" tabindex="-1"><a class="header-anchor" href="#push-\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B" aria-hidden="true">#</a> push \u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push origin dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u67E5\u770B\u8BB0\u5F55-log" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8BB0\u5F55-log" aria-hidden="true">#</a> \u67E5\u770B\u8BB0\u5F55 log</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git log --graph --pretty=oneline --abbrev-commit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u5C06\u5F53\u524D\u5206\u652F\u7684\u4FEE\u6539\u72B6\u6001\u5B58\u50A8\u8D77\u6765\uFF0C\u5B58\u50A8\u540E\u4F7F\u5F97\u5DE5\u4F5C\u533A\u662F\u5E72\u51C0\u7684\uFF0C\u5C31\u53EF\u4EE5 pull \u6700\u65B0\u4EE3\u7801\u3002</p></blockquote><h2 id="\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8" aria-hidden="true">#</a> \u5B58\u50A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git stash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a> \u67E5\u770B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git stash list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u53D6\u51FA" tabindex="-1"><a class="header-anchor" href="#\u53D6\u51FA" aria-hidden="true">#</a> \u53D6\u51FA</h2><ul><li><strong>\u53D6\u51FA\u5217\u8868\u67D0\u4E2A</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git stash drop  statsh@{2}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>\u53D6\u51FA\u6700\u540E\u4E00\u4E2A</strong>: \u53D6\u51FA\u540E\u4F1A\u5220\u9664\u6700\u540E\u4E00\u4E2A\u72B6\u6001</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git stash pop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6807\u7B7E-tag" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E-tag" aria-hidden="true">#</a> \u6807\u7B7E tag</h2><h3 id="\u521B\u5EFA-1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-1" aria-hidden="true">#</a> \u521B\u5EFA</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag &lt;tagname&gt; [ commit id ]  //\u9ED8\u8BA4\u4E3AHEAD\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2Acommit id
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>-m \u6307\u5B9A\u6807\u7B7E\u4FE1\u606F</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>\u63A8\u9001\u67D0\u4E2A\u6807\u7B7E\u5230\u8FDC\u7A0B</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push origin &lt;tagname&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>\u63A8\u9001\u5168\u90E8\u6807\u7B7E\u5230\u8FDC\u7A0B</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push origin --tags
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u770B-1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-1" aria-hidden="true">#</a> \u67E5\u770B</h3><ul><li><strong>\u5168\u90E8</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>tag \u540D\u79F0</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git show &lt;tagname&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><ul><li><strong>\u672C\u5730</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -d v0.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>\u8FDC\u7A0B</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -d v0.1
git push origin :refs/tags/v0.9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="tag-other" tabindex="-1"><a class="header-anchor" href="#tag-other" aria-hidden="true">#</a> tag other</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -l | xargs git tag -d #\u5220\u9664\u6240\u6709\u672C\u5730\u5206\u652F
git fetch origin --prune #\u4ECE\u8FDC\u7A0B\u62C9\u53D6\u6240\u6709\u4FE1\u606F

#\u67E5\u8BE2\u8FDC\u7A0Btags\u7684\u547D\u4EE4\u5982\u4E0B\uFF1A
git ls-remote --tags origin

tag\u5E38\u7528git\u547D\u4EE4\uFF1A
git tag #\u5217\u51FA\u6240\u6709tag
git tag -l v1.* #\u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684tag\uFF08\u7B5B\u9009\u4F5C\u7528\uFF09
git tag [tag\u540D] #\u521B\u5EFA\u8F7B\u91CFtag\uFF08\u65E0-m\u6807\u6CE8\u4FE1\u606F\uFF09
git tag -a [tag\u540D] #\u521B\u5EFA\u542B\u6CE8\u89E3\u7684tag

git push origin --tags #\u63A8\u9001\u6240\u6709\u672C\u5730tag\u5230\u8FDC\u7A0B
git push origin [\u672C\u5730tag\u540D] #\u63A8\u9001\u6307\u5B9A\u672C\u5730tag\u5230\u8FDC\u7A0B

git tag -d [\u672C\u5730tag\u540D] #\u5220\u9664\u672C\u5730\u6307\u5B9Atag
git push origin :refs/tags/[\u8FDC\u7A0Btag\u540D] #\u5220\u9664\u8FDC\u7A0B\u6307\u5B9Atag

git fetch origin [\u8FDC\u7A0Btag\u540D] #\u62C9\u53D6\u8FDC\u7A0B\u6307\u5B9Atag
git show [tag\u540D] #\u663E\u793A\u6307\u5B9Atag\u8BE6\u7EC6\u4FE1\u606F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D" aria-hidden="true">#</a> \u522B\u540D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config \u2014global alias.lg \u201Clog \u2014color \u2014graph \u2014pretty=format:\u2019%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset\u2019 \u2014abbrev-commit\u201D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="pull-push-\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#pull-push-\u914D\u7F6E\u9879" aria-hidden="true">#</a> pull push \u914D\u7F6E\u9879</h2><p>\u8981\u628A\u5F53\u524D\u5206\u652F push \u548C pull \u7684\u9ED8\u8BA4\u5206\u652F\u8BBE\u7F6E\u4E3A dev</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch --set-upstream-to=origin/dev dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u672A\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u672A\u5206\u7C7B" aria-hidden="true">#</a> \u672A\u5206\u7C7B</h2><h2 id="\u4E22\u5F03\u5DE5\u4F5C\u533A\u6587\u4EF6\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4E22\u5F03\u5DE5\u4F5C\u533A\u6587\u4EF6\u4FEE\u6539" aria-hidden="true">#</a> \u4E22\u5F03\u5DE5\u4F5C\u533A\u6587\u4EF6\u4FEE\u6539</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git checkout -- b.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6682\u5B58\u533A\u4FEE\u6539\u653E\u56DE\u5DE5\u4F5C\u533A" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u533A\u4FEE\u6539\u653E\u56DE\u5DE5\u4F5C\u533A" aria-hidden="true">#</a> \u6682\u5B58\u533A\u4FEE\u6539\u653E\u56DE\u5DE5\u4F5C\u533A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git reset HEAD b.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5C06\u6587\u4EF6\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664-\u975E\u7269\u7406" tabindex="-1"><a class="header-anchor" href="#\u5C06\u6587\u4EF6\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664-\u975E\u7269\u7406" aria-hidden="true">#</a> \u5C06\u6587\u4EF6\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\uFF08\u975E\u7269\u7406\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rm --cached  &quot;\u6587\u4EF6\u8DEF\u5F84&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u7248\u672C\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a> \u7248\u672C\u56DE\u9000</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6700\u8FD1300\u6761\u63D0\u4EA4\u8BB0\u5F55</span>
<span class="token function">git</span> log -300
<span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commitID<span class="token punctuation">]</span>
<span class="token comment">#\u5F3A\u5236\u63D0\u4EA4</span>
<span class="token function">git</span> push -f origin master
<span class="token comment">#\u66F4\u7B80\u5355\u7684\u505A\u6CD5\uFF08\u56DE\u590D\u4E0A\u4E00\u4E2A\u7248\u672C\uFF09</span>
<span class="token function">git</span> reset --hard HEAD~1
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> push -f origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="git-\u5982\u4F55\u5FFD\u7565\u672C\u5730\u6587\u4EF6-\u4F46\u8FD9\u4E2A\u6587\u4EF6\u8981\u4FDD\u5B58\u5728\u8FDC\u7AEF\u5E93" tabindex="-1"><a class="header-anchor" href="#git-\u5982\u4F55\u5FFD\u7565\u672C\u5730\u6587\u4EF6-\u4F46\u8FD9\u4E2A\u6587\u4EF6\u8981\u4FDD\u5B58\u5728\u8FDC\u7AEF\u5E93" aria-hidden="true">#</a> git \u5982\u4F55\u5FFD\u7565\u672C\u5730\u6587\u4EF6 , \u4F46\u8FD9\u4E2A\u6587\u4EF6\u8981\u4FDD\u5B58\u5728\u8FDC\u7AEF\u5E93</h2><blockquote><p>git \u5728\u8FDC\u7AEF\u5E93\u6709\u4E00\u4E2A web.config \u7684\u914D\u7F6E\u6587\u4EF6, \u628A\u8FD9\u4E2A\u5E93\u514B\u9686\u5230\u672C\u5730\u4EE5\u540E, \u9700\u8981\u5FFD\u7565\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u7684 push \u548C pull . \u5E94\u8BE5\u600E\u6837\u505A?</p></blockquote><p>\u901A\u5E38\uFF0C\u8FDC\u7AEF\u5E93\u5E94\u8BE5\u4FDD\u5B58\u7684\u662F web.config.example \u8FD9\u6837\u7684\u6587\u4EF6\uFF0C\u7136\u540E\u5F00\u53D1\u8005 clone \u4ED3\u5E93\u4E0B\u6765\uFF0Ccp web.config.example web.config\uFF0C\u518D\u5BF9 web.config \u8FDB\u884C\u4FEE\u6539\u3002\u800C web.config \u662F git ignore \u7684\u3002\u6216\u8005\uFF0C\u4F60\u5728\u672C\u5730\u6267\u884C git update-index --assume-unchanged web.config\uFF0C\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u968F\u610F\u66F4\u6539\u4E86\u3002\u4F46\u5F53\u8FDC\u7AEF\u5E93\u7684 web.config \u66F4\u6539\u65F6\uFF0C\u4F60\u672C\u5730 pull \u65F6\u4F1A\u63D0\u793A\u9700\u8981\u624B\u52A8\u5904\u7406 web.config \u6587\u4EF6\uFF08\u56E0\u4E3A\u6709 uncommitted \u7684\u5185\u5BB9\uFF09\uFF0C\u4F60\u53EF\u4EE5\u5148\u6267\u884C git update-index --no-assume-unchanged web.config \u628A changes \u653E\u51FA\u6765\uFF0C\u7136\u540E stash \u4E0B... \u7136\u540E pull\uFF0C\u7136\u540E\u89E3\u51B3\u51B2\u7A81\u3002</p><h2 id="\u522B\u540D-1" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D-1" aria-hidden="true">#</a> \u522B\u540D</h2>`,83),q={href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-Git-%E5%88%AB%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},E=s("\u5B98\u65B9\u6587\u6863"),C=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u793A\u4F8B</span>
<span class="token function">git</span> config --global alias.mlog <span class="token string">&#39;log --oneline --graph&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1);function A(B,D){const a=i("ExternalLinkIcon");return r(),l(c,null,[p,e("p",null,[e("a",u,[g,n(a)]),e("a",b,[h,n(a)]),e("a",m,[x,n(a)]),e("a",v,[f,n(a)]),e("a",k,[_,n(a)])]),w,e("p",null,[e("a",q,[E,n(a)])]),C],64)}var F=d(o,[["render",A]]);export{F as default};