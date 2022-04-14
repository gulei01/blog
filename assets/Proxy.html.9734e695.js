import{r as a,a as p,c as t,f as n,b as e,F as o,e as c,g as l}from"./app.eb5e24ec.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";var r="/img/tc39Proxy_Get.png",i="/img/proxyReflect.png";const k={},b=c(`<h1 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h1><p>\u4E00\u4E2A Proxy \u5BF9\u8C61\u5305\u88C5\u53E6\u4E00\u4E2A\u5BF9\u8C61\u5E76\u62E6\u622A\u8BF8\u5982\u8BFB\u53D6/\u5199\u5165\u5C5E\u6027\u548C\u5176\u4ED6\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u9009\u62E9\u81EA\u884C\u5904\u7406\u5B83\u4EEC\uFF0C\u6216\u8005\u900F\u660E\u5730\u5141\u8BB8\u8BE5\u5BF9\u8C61\u5904\u7406\u5B83\u4EEC\u3002</p><h2 id="\u53C2\u6570\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BE6\u89E3" aria-hidden="true">#</a> \u53C2\u6570\u8BE6\u89E3</h2><ul><li><p><code>target</code></p><p>\u76EE\u6807\u5BF9\u8C61\u3002</p></li><li><p><code>property</code></p><p>\u88AB\u83B7\u53D6\u7684\u5C5E\u6027\u540D\u3002</p></li><li><p><code>receiver</code></p><p>Proxy \u6216\u8005\u7EE7\u627F Proxy \u7684\u5BF9\u8C61</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7EE7\u627F Proxy \u5BF9\u8C61\u4E3E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> proxyFoo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>proxyFoo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></li></ul><h2 id="\u4EE3\u7406\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u8FC7\u7A0B" aria-hidden="true">#</a> \u4EE3\u7406\u8FC7\u7A0B</h2><ul><li>eg1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;call obj name.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bar <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> proxyFoo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;call proxy1 name.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> voo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>proxyFoo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;call proxy2 name.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>voo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// call proxy2 name.</span>
<span class="token comment">// call proxy1 name.</span>
<span class="token comment">// call obj name.</span>
<span class="token comment">// bar</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ul><li>eg2</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;call obj name.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> proxyFoo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;call proxy1 name.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> voo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>proxyFoo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;call proxy2 name.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// receiver \u6362\u4E3AproxyFoo \u6216\u8005 foo</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>voo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u6539\u53D8-20-\u884C\u53C2\u6570\u540E\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8-20-\u884C\u53C2\u6570\u540E\u7ED3\u679C" aria-hidden="true">#</a> \u6539\u53D8 20 \u884C\u53C2\u6570\u540E\u7ED3\u679C</h3><h4 id="receiver" tabindex="-1"><a class="header-anchor" href="#receiver" aria-hidden="true">#</a> receiver</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>call proxy2 name.
call proxy1 name.
call obj name.
call proxy2 name.
call proxy1 name.
bar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="proxyfoo" tabindex="-1"><a class="header-anchor" href="#proxyfoo" aria-hidden="true">#</a> proxyFoo</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>call proxy2 name.
call proxy1 name.
call obj name.
call proxy1 name.
bar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="foo" tabindex="-1"><a class="header-anchor" href="#foo" aria-hidden="true">#</a> foo</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>call proxy2 name.
call proxy1 name.
call obj name.
bar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Reflect</p><p><code>Reflect.get()</code>\u65B9\u6CD5\u4E0E\u4ECE \u5BF9\u8C61 (<code>target[propertyKey]</code>) \u4E2D\u8BFB\u53D6\u5C5E\u6027\u7C7B\u4F3C\uFF0C\u4F46\u5B83\u662F\u901A\u8FC7\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u6765\u64CD\u4F5C\u7684\u3002</p><ul><li>\u8BED\u6CD5:<code>Reflect.get(target, propertyKey[, receiver])</code></li><li>\u53C2\u6570:</li></ul><table><thead><tr><th>param</th><th>meaning</th></tr></thead><tbody><tr><td><code>target</code></td><td>\u9700\u8981\u53D6\u503C\u7684\u76EE\u6807\u5BF9\u8C61</td></tr><tr><td><code>propertyKey</code></td><td>\u9700\u8981\u83B7\u53D6\u7684\u503C\u7684\u952E\u503C</td></tr><tr><td><code>receiver</code></td><td>\u5982\u679C<code>target</code>\u5BF9\u8C61\u4E2D\u6307\u5B9A\u4E86<code>getter</code>\uFF0C<code>receiver</code>\u5219\u4E3A<code>getter</code>\u8C03\u7528\u65F6\u7684<code>this</code>\u503C\u3002<strong>\u4F1A\u6539\u53D8<code>this</code>\u6307\u5411</strong></td></tr></tbody></table></div><h2 id="map\u3001set\u3001weakset\u3001weakmap-\u7684\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#map\u3001set\u3001weakset\u3001weakmap-\u7684\u76D1\u542C" aria-hidden="true">#</a> Map\u3001Set\u3001WeakSet\u3001WeakMap \u7684\u76D1\u542C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zhengcaiyun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> mapProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u503C:&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapProxy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>Uncaught TypeError: Method Map.prototype.get called on incompatible receiver [object Object]</p></blockquote><p>Map\u3001Set \u5BF9\u8C61\u8D4B\u503C\u3001\u53D6\u503C\u548C\u4ED6\u4EEC\u5185\u90E8\u7684 this \u6307\u5411\u6709\u5173\u7CFB\uFF0C\u4F46\u8FD9\u91CC\u7684 this \u6307\u5411\u7684\u662F\u5176\u5B9E\u662F Proxy \u5BF9\u8C61\uFF0C\u6240\u4EE5\u5F97\u8FD9\u6837\u5E72</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wangyangyang&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> mapProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u503C:&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">==</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">?</span> <span class="token function">value</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">:</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mapProxy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bar<span class="token punctuation">.</span>get<span class="token punctuation">;</span> <span class="token comment">//  foo\u5B9E\u4F8B\u7684get\u65B9\u6CD5</span>

bar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo\u5B9E\u4F8B\u7684get\u65B9\u6CD5\u5728bar\u5BF9\u8C61\u4E0A\u8C03\u7528\uFF0C\u76F8\u5F53\u4E8Eget\u65B9\u6CD5\u91CC\u7684this\u6307\u5411\u4E86bar</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u91CD\u65B0\u7ED9\u6307\u5411this</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="`+r+'" alt=""></p>',24),m={href:"https://javascript.info/proxy#protected-properties-with-deleteproperty-and-other-traps",target:"_blank",rel:"noopener noreferrer"},d=l("\u539F\u6587"),g=n("p",null,[n("img",{src:i,alt:""})],-1);function y(v,f){const s=a("ExternalLinkIcon");return p(),t(o,null,[b,n("p",null,[n("a",m,[d,e(s)])]),g],64)}var w=u(k,[["render",y]]);export{w as default};