import{e as s}from"./app.eb5e24ec.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript</h1><h2 id="\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D" aria-hidden="true">#</a> \u547D\u540D</h2><h3 id="\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6" aria-hidden="true">#</a> \u6587\u4EF6</h3><p>\u4F7F\u7528<code>camelCase</code> \u4E3A ts \u6587\u4EF6\u547D\u540D\u3002</p><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><ol><li>\u4F7F\u7528 <code>PascalCase</code> \u4E3A\u7C7B\u578B\u547D\u540D\u3002</li></ol><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">todoItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TodoItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><ol start="2"><li>\u7C7B\u578B\u591A\u4E2A\u5C5E\u6027\u7ED3\u5C3E\u4E0D\u52A0<code>,</code>\u4F7F\u7528\u6362\u884C\u3002</li></ol><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TodoItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TodoItem</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><ol start="3"><li>\u4E0D\u8981\u4F7F\u7528 <code>I</code> \u505A\u4E3A\u63A5\u53E3\u540D\u524D\u7F00\u3002</li><li>\u4F7F\u7528 <code>PascalCase</code> \u4E3A\u679A\u4E3E\u503C\u547D\u540D\u3002</li><li>\u4F7F\u7528 <code>camelCase</code> \u4E3A\u51FD\u6570\u547D\u540D\u3002</li><li>\u4F7F\u7528 <code>camelCase</code> \u4E3A\u5C5E\u6027\u6216\u672C\u5730\u53D8\u91CF\u547D\u540D\u3002</li><li>\u79C1\u6709\u5C5E\u6027\u540D\u6DFB\u52A0<code>_</code>\u524D\u7F00\u3002</li><li>\u5C3D\u53EF\u80FD\u4F7F\u7528\u5B8C\u6574\u7684\u5355\u8BCD\u62FC\u5199\u547D\u540D\u3002</li></ol><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><ol><li>\u4E0D\u8981\u5BFC\u51FA\u7C7B\u578B/\u51FD\u6570\uFF0C\u9664\u975E\u4F60\u8981\u5728\u4E0D\u540C\u7684\u7EC4\u4EF6\u4E2D\u5171\u4EAB\u5B83\u3002</li><li>\u5982\u65E0\u5FC5\u8981\uFF0C\u4E0D\u8981\u5728\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u5185\u5B9A\u4E49\u7C7B\u578B/\u503C\u3002</li><li>\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\uFF0C\u7C7B\u578B\u5B9A\u4E49\u5E94\u8BE5\u51FA\u73B0\u5728\u9876\u90E8\u3002</li></ol><h2 id="null-\u548C-undefined" tabindex="-1"><a class="header-anchor" href="#null-\u548C-undefined" aria-hidden="true">#</a> null \u548C undefined</h2><ol><li>\u4F7F\u7528 <strong>undefined</strong>\uFF0C\u4E0D\u8981\u4F7F\u7528 <code>null</code>\u3002</li></ol><h2 id="\u4E00\u822C\u5047\u8BBE" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u5047\u8BBE" aria-hidden="true">#</a> \u4E00\u822C\u5047\u8BBE</h2><ol><li>\u5047\u8BBE\u50CF Nodes\uFF0CSymbols \u7B49\u8FD9\u6837\u7684\u5BF9\u8C61\u5728\u5B9A\u4E49\u5B83\u7684\u7EC4\u4EF6\u5916\u90E8\u662F\u4E0D\u53EF\u6539\u53D8\u7684\u3002\u4E0D\u8981\u53BB\u6539\u53D8\u5B83\u4EEC\u3002</li><li>\u5047\u8BBE\u6570\u7EC4\u662F\u4E0D\u80FD\u6539\u53D8\u7684\u3002</li></ol><h2 id="\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F</h2><p>\u4F7F\u7528 arrow \u51FD\u6570\u4EE3\u66FF\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p><h2 id="arrow-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#arrow-\u51FD\u6570" aria-hidden="true">#</a> arrow \u51FD\u6570</h2><p>\u53EA\u8981\u9700\u8981\u7684\u65F6\u5019\u624D\u628A arrow \u51FD\u6570\u7684\u53C2\u6570\u62EC\u8D77\u6765\u3002</p><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> x
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// i.</span>
x <span class="token operator">=&gt;</span> x <span class="token operator">+</span> x

<span class="token comment">// ii.</span>
<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y

<span class="token comment">// iii.</span>
<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">===</span> y

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><h2 id="\u5FAA\u73AF\u4F53\u548C\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u4F53\u548C\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> \u5FAA\u73AF\u4F53\u548C\u6761\u4EF6\u8BED\u53E5</h2><p>\u603B\u662F\u4F7F\u7528<code>{}</code>\u628A\u5FAA\u73AF\u4F53\u548C\u6761\u4EF6\u8BED\u53E5\u62EC\u8D77\u6765\u3002</p><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="\u5F00\u59CB\u7684" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u7684" aria-hidden="true">#</a> \u5F00\u59CB\u7684 &quot; { &quot;</h2><p>\u5F00\u59CB\u7684{\u603B\u662F\u5728\u540C\u4E00\u884C\u3002</p><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h2><p>\u5C0F\u62EC\u53F7\u91CC\u5F00\u59CB\u4E0D\u8981\u6709\u7A7A\u683C\u3002</p><p>\u9017\u53F7\uFF0C\u5192\u53F7\uFF0C\u5206\u53F7\u540E\u8981\u6709\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// i.</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// ii.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// iii.</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><h2 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a> \u53D8\u91CF\u58F0\u660E</h2><p>\u6BCF\u4E2A\u53D8\u91CF\u58F0\u660E\u8BED\u53E5\u53EA\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u3002</p><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> Any</h2><p>\u7981\u6B62\u4F7F\u7528 any \u5B9A\u4E49\u7C7B\u578B\uFF0C\u6700\u7CDF\u7CD5\u7684\u60C5\u51B5\u4F7F\u7528 unknow \u6765\u5B9A\u4E49</p><h2 id="\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5F15\u53F7" aria-hidden="true">#</a> \u5F15\u53F7</h2><p>\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\u90FD\u4F7F\u7528\u5355\u5F15\u53F7</p><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="\u7ED3\u5C3E\u9017\u53F7" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5C3E\u9017\u53F7" aria-hidden="true">#</a> \u7ED3\u5C3E\u9017\u53F7</h2><p>\u5B9A\u4E49\u51FD\u6570\u53C2\u6570\uFF0C\u5BF9\u8C61\uFF0C\u6570\u7EC4\u6216\u8005\u51FD\u6570\u4F20\u53C2\u65F6</p><ul><li>\u4E00\u884C <strong>\u4E0D\u52A0</strong> \u7ED3\u5C3E\u9017\u53F7</li><li>\u591A\u884C <strong>\u52A0</strong> \u7ED3\u5C3E\u9017\u53F7</li></ul><div class="custom-container code-style code-style-bad"><h4><i class="iconfont-code-style icon-code-style-error"></i><span>\u53CD\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u5355\u884C</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u591A\u884C</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> 
  b<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span>
  <span class="token number">1</span><span class="token punctuation">,</span> 
  <span class="token number">2</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">1</span><span class="token punctuation">,</span> 
  <span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token number">3</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> 
  age<span class="token operator">:</span> <span class="token number">19</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div><div class="custom-container code-style code-style-good"><h4><i class="iconfont-code-style icon-code-style-success"></i><span>\u6B63\u9762\u4F8B\u5B50</span></h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u5355\u884C</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u591A\u884C</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> 
  b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span>
  <span class="token number">1</span><span class="token punctuation">,</span> 
  <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">1</span><span class="token punctuation">,</span> 
  <span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> 
  age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div>`,50);function p(t,c){return e}var r=n(a,[["render",p]]);export{r as default};