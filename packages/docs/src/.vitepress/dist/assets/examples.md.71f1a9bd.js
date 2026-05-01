import{_ as n,c as a,o as s,a as t}from"./app.1e429f93.js";const m='{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Without v-model","slug":"without-v-model"},{"level":2,"title":"Form submission","slug":"form-submission"},{"level":2,"title":"Contextified validators","slug":"contextified-validators"},{"level":2,"title":"Data nesting","slug":"data-nesting"},{"level":2,"title":"Collections validation","slug":"collections-validation"},{"level":2,"title":"Asynchronous validation","slug":"asynchronous-validation"},{"level":2,"title":"Accessing validator parameters","slug":"accessing-validator-parameters"},{"level":2,"title":"Dynamic validation schema","slug":"dynamic-validation-schema"},{"level":3,"title":"Options API","slug":"options-api"},{"level":3,"title":"Composition API","slug":"composition-api"},{"level":2,"title":"Dynamic parameters","slug":"dynamic-parameters"},{"level":2,"title":"Returning metadata from validators","slug":"returning-metadata-from-validators"},{"level":2,"title":"Reward early, punish late mode","slug":"reward-early-punish-late-mode"}],"relativePath":"examples.md","lastUpdated":1777558301323}',p={},o=t(`<h1 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h1><h2 id="without-v-model" tabindex="-1">Without v-model <a class="header-anchor" href="#without-v-model" aria-hidden="true">#</a></h2><p>In case you don&#39;t want to modify your model directly, you can still use separate <code>:input</code> and <code>@event</code> bindings. This is especially useful if you are using data from external source, like Vuex, or transforming the data on each keystroke. In that case you have to manually take care of setting the <code>$dirty</code> by calling <code>$touch()</code> method.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setName</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do some silly transformation</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> $event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>v$<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">$touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="form-submission" tabindex="-1">Form submission <a class="header-anchor" href="#form-submission" aria-hidden="true">#</a></h2><p>A common thing to do with forms, is to check their validity before submission. You can do this by calling the <code>$validate</code> method and check it&#39;s output.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">submit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>v$<span class="token punctuation">.</span><span class="token function">$validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// notify user form is invalid</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// perform async actions</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="contextified-validators" tabindex="-1">Contextified validators <a class="header-anchor" href="#contextified-validators" aria-hidden="true">#</a></h2><p>You can link fields together, by passing a field&#39;s value to another field&#39;s validator. An example of this being <code>sameAs</code> builtin validator.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sameAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">confirmPassword</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">confirmPassword</span><span class="token operator">:</span> <span class="token function">sameAs</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="data-nesting" tabindex="-1">Data nesting <a class="header-anchor" href="#data-nesting" aria-hidden="true">#</a></h2><p>You can nest validators to match your data as deep as you want. Parent validator is <code>$invalid</code> when any of its children validators reports an <code>$invalid</code> state. This might be very useful for overall form validation.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sameAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="collections-validation" tabindex="-1">Collections validation <a class="header-anchor" href="#collections-validation" aria-hidden="true">#</a></h2><p>A parent element will collect all of its child component validations. This allows for easy validation of collections.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>householdName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PersonForm</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person in people<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addPerson<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add person<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- this will contain all $errors from every &lt;PersonForm/&gt; component --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error of v.$errors<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error.$uid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ error.$message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> PersonForm <span class="token keyword">from</span> <span class="token string">&#39;@/components/PersonForm&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> PersonForm <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">householdName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">people</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">householdName</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addPerson</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>people<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="asynchronous-validation" tabindex="-1">Asynchronous validation <a class="header-anchor" href="#asynchronous-validation" aria-hidden="true">#</a></h2><p>Async validators are just validators that return a Promise and are wrapped in the <code>withAsync</code> helper. Read more about it in <a href="./custom_validators.html#async-validators">Async Validators</a></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> helpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">isEmailTaken</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/unique/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// check the email in the server</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isUnique</span><span class="token operator">:</span> helpers<span class="token punctuation">.</span><span class="token function">withAsync</span><span class="token punctuation">(</span>isEmailTaken<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The <code>async/await</code> syntax is fully supported. It works especially great in combination with Fetch API.</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">async</span> <span class="token function">isUnique</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
          <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/unique/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>valid
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="accessing-validator-parameters" tabindex="-1">Accessing validator parameters <a class="header-anchor" href="#accessing-validator-parameters" aria-hidden="true">#</a></h2><p>You can access information about your validations through <code>$params</code>.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Note: Name must be at least {{ v$.name.$params.min }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> minLength <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="dynamic-validation-schema" tabindex="-1">Dynamic validation schema <a class="header-anchor" href="#dynamic-validation-schema" aria-hidden="true">#</a></h2><p>Validations being a function or computed property, allow for a dynamic and changing schema, based on your model&#39;s data. Re-computation will happen automatically. Validation&#39;s <code>$dirty</code> state is preserved even if the property tree gets temporarily removed.</p><h3 id="options-api" tabindex="-1">Options API <a class="header-anchor" href="#options-api" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">shippingAddress</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">billingSameAsShipping</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">billingAddress</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> localRules <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">shippingAddress</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>billingSameAsShipping<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// if billing is not the same as shipping, require it</span>
      localRules<span class="token punctuation">.</span>billingAddress <span class="token operator">=</span> <span class="token punctuation">{</span>
        required
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> localRules
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">shippingAddress</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">billingSameAsShipping</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">billingAddress</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> localRules <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">shippingAddress</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>state<span class="token punctuation">.</span>billingSameAsShipping<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// if billing is not the same as shipping, require it</span>
        localRules<span class="token punctuation">.</span>billingAddress <span class="token operator">=</span> <span class="token punctuation">{</span>
          required
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> localRules
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> v$ <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      v$
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="dynamic-parameters" tabindex="-1">Dynamic parameters <a class="header-anchor" href="#dynamic-parameters" aria-hidden="true">#</a></h2><p>Parameters passed to validators can be reactive, and be accessed from <code>$params</code> property.</p><div class="language-js"><pre><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fieldLength <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span>fieldLength<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  fieldLength
<span class="token punctuation">}</span>
</code></pre></div><p>Now everytime the <code>fieldLength</code> changes, the <code>minLength</code> validator will use the new value.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Name Length: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fieldLength<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v$.name.$model<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="returning-metadata-from-validators" tabindex="-1">Returning metadata from validators <a class="header-anchor" href="#returning-metadata-from-validators" aria-hidden="true">#</a></h2><p>In cases where a validator can return more than just a boolean, we can return an object with a <code>$valid</code> boolean. All the extra data from what we return can be read through the <code>$response</code> property.</p><p>Let&#39;s implement a <code>$warn</code> concept, where a validator returns a warning, if the data is valid, but not ideal.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DragAndDropArea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v$.avatar.$model<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v$.name.imageSize.$response?.$warn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert--warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      We recommend uploading an image at least {{ v$.name.imageSize.$response.recommendedSize }}kb,
      yours is {{ v$.name.imageSize.$response.currentSize }}kb.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">validateImage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// perform some fancy FileReader logic, and return results</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">$valid</span><span class="token operator">:</span> isValid<span class="token punctuation">,</span>
        <span class="token literal-property property">$warn</span><span class="token operator">:</span> isImageBigEnough<span class="token punctuation">,</span>
        recommendedSize<span class="token punctuation">,</span>
        currentSize
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">imageSize</span><span class="token operator">:</span> validateImage
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> avatar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> <span class="token punctuation">{</span> avatar <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="reward-early-punish-late-mode" tabindex="-1"><code>Reward early, punish late</code> mode <a class="header-anchor" href="#reward-early-punish-late-mode" aria-hidden="true">#</a></h2><p>The <code>$rewardEarly</code> mode of Vuelidate stops validators from running once a field becomes valid. You can re-run them using either <code>$validate</code> or <code>$commit</code>. This is often done on <code>blur</code> of the field.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v$.name.$model<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v$.name.$commit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error of v.$errors<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error.$uid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ error.$message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$rewardEarly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,42),e=[o];function c(l,u,i,r,k,d){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
