import{_ as n,c as s,o as a,a as t}from"./app.1e429f93.js";const m='{"title":"Advanced usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Using component mixin","slug":"using-component-mixin"},{"level":2,"title":"Composition API","slug":"composition-api"},{"level":3,"title":"Using an object of refs","slug":"using-an-object-of-refs"},{"level":3,"title":"Using reactive state","slug":"using-reactive-state"},{"level":3,"title":"Using mixed (e.g. reactive and computed) state","slug":"using-mixed-e-g-reactive-and-computed-state"},{"level":2,"title":"Nested validations","slug":"nested-validations"},{"level":2,"title":"Validating Collections","slug":"validating-collections"},{"level":3,"title":"Using the new forEach helper","slug":"using-the-new-foreach-helper"},{"level":3,"title":"Using the ValidateEach component","slug":"using-the-validateeach-component"},{"level":2,"title":"Validation scopes","slug":"validation-scopes"},{"level":3,"title":"$scope property","slug":"scope-property"},{"level":3,"title":"$stopPropagation property","slug":"stoppropagation-property"},{"level":3,"title":"Collector only components","slug":"collector-only-components"},{"level":2,"title":"Returning extra data from validators","slug":"returning-extra-data-from-validators"},{"level":2,"title":"Providing global config to your Vuelidate instance","slug":"providing-global-config-to-your-vuelidate-instance"},{"level":3,"title":"Config with Options API","slug":"config-with-options-api"},{"level":3,"title":"Config with Composition API","slug":"config-with-composition-api"},{"level":2,"title":"Providing external validations, server side validation","slug":"providing-external-validations-server-side-validation"},{"level":3,"title":"External results with Composition API","slug":"external-results-with-composition-api"},{"level":3,"title":"External results with Options API","slug":"external-results-with-options-api"},{"level":3,"title":"Clearing $externalResults","slug":"clearing-externalresults"},{"level":2,"title":"i18n support","slug":"i18n-support"},{"level":3,"title":"Customising the i18n message","slug":"customising-the-i18n-message"},{"level":2,"title":"Calling useVuelidate from async setup function","slug":"calling-usevuelidate-from-async-setup-function"},{"level":2,"title":"Validation Groups","slug":"validation-groups"}],"relativePath":"advanced_usage.md","lastUpdated":1777558301320}',p={},o=t(`<h1 id="advanced-usage" tabindex="-1">Advanced usage <a class="header-anchor" href="#advanced-usage" aria-hidden="true">#</a></h1><h2 id="using-component-mixin" tabindex="-1">Using component mixin <a class="header-anchor" href="#using-component-mixin" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>BREAKING CHANGE:</strong> Since Vuelidate@2.0.0-alpha.9 the mixin has been removed. Instead, you have to use <code>useVuelidate</code> in your component\u2019s <code>setup</code>. You can still define your validation rules as part of the Options API.</p></div><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> minLength<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">requiredNameLength</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>requiredNameLength<span class="token punctuation">)</span><span class="token punctuation">,</span>
        required
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h2><p>Vuelidate is primarily built on top of the Composition API, so its best suited to work with it.</p><h3 id="using-an-object-of-refs" tabindex="-1">Using an object of <code>refs</code> <a class="header-anchor" href="#using-an-object-of-refs" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">// or &#39;@vue/composition-api&#39; in Vue &lt;2.7</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> minLength<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> requiredNameLength <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        required<span class="token punctuation">,</span>
        <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span>requiredNameLength<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> v$ <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> requiredNameLength<span class="token punctuation">,</span> v$ <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>useVuelidate</code> returns a <code>computed</code>, so you need to use <code>.value</code> when accessing any of it&#39;s properties, like <code>$error</code>, <code>$validate</code> inside the <code>setup</code> function.</p><p>In the template it is unwrapped for you.</p></div><h3 id="using-reactive-state" tabindex="-1">Using <code>reactive</code> state <a class="header-anchor" href="#using-reactive-state" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> minLength<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> requiredNameLength <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        required<span class="token punctuation">,</span>
        <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span>requiredNameLength<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> v$ <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> state<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> requiredNameLength<span class="token punctuation">,</span> v$ <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="using-mixed-e-g-reactive-and-computed-state" tabindex="-1">Using mixed (e.g. <code>reactive</code> and <code>computed</code>) state <a class="header-anchor" href="#using-mixed-e-g-reactive-and-computed-state" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> minValue<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// reactive state, e.g. form data</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">targetMonth</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">targetYear</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// computed state which needs validation</span>
    <span class="token keyword">const</span> targetDate <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>targetYear<span class="token punctuation">,</span> data<span class="token punctuation">.</span>targetMonth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// last day in the month</span>

    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">targetDate</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">minValue</span><span class="token operator">:</span> <span class="token function">minValue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> v$ <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> targetDate <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> v$ <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="nested-validations" tabindex="-1">Nested validations <a class="header-anchor" href="#nested-validations" aria-hidden="true">#</a></h2><p>When using <code>useVuelidate</code>, Vuelidate will collect all validation <code>$errors</code> and <code>$silentErrors</code> from all nested components. No need to pass any props or listen to any events. Additionally, calling <code>$touch</code> in the root component will automatically call <code>$touch</code> in the nested components, making building complex forms a breeze.</p><p>This is the recommended approach when handling collections. Create a new, nested component with its own validation rules.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CompA</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CompB</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- this will contain all $errors and $silentErrors from both &lt;CompA&gt; and &lt;CompB&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error of v.$errors<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error.$uid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ error.$message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> CompA <span class="token keyword">from</span> <span class="token string">&#39;@/components/CompA&#39;</span>
<span class="token keyword">import</span> CompB <span class="token keyword">from</span> <span class="token string">&#39;@/components/CompB&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CompA<span class="token punctuation">,</span> CompB <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this will collect all nested component\u2019s validation results</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="validating-collections" tabindex="-1">Validating Collections <a class="header-anchor" href="#validating-collections" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>BREAKING CHANGE:</strong> The <code>$each</code> helper has been removed from Vuelidate 2, we recommend using <a href="#nested-validations">Nested validations</a> instead. If you cannot migrate to it at this time, here are some workarounds:</p></div><h3 id="using-the-new-foreach-helper" tabindex="-1">Using the new forEach helper <a class="header-anchor" href="#using-the-new-foreach-helper" aria-hidden="true">#</a></h3><p>Using the <code>forEach</code> helper from <code>@vuelidate/validators</code>, you can easily validate all properties inside a collection, without any extra components.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>Note:</strong> This helper will re-run every validator, for every property, in every item in your collection, on every change in the collection. This may cause performance issues in more complex scenarios. Refer to <a href="#nested-validations">Nested Validators</a> in those cases.</p></div><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(input, index) in state.collection<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        error: v$.collection.$each.$response.$errors[index].name.length,
      }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input.name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error in v$.collection.$each.$response.$errors[index].name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      {{ error.$message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// setup in a component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> helpers<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">collection</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">$each</span><span class="token operator">:</span> helpers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            required
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">collection</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> v<span class="token punctuation">,</span> state <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>The <code>$response</code> for the validator follows the schema below, so you can use it as you wish:</p><div class="language-js"><pre><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">$data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">propertyToValidate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">validator</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">$errors</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">propertyToValidate</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">$message</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// the validator error</span>
          <span class="token literal-property property">$model</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// the model that was validated</span>
          <span class="token literal-property property">$params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// params, if validator has any</span>
          <span class="token literal-property property">$pending</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// always false, no async support.</span>
          <span class="token literal-property property">$property</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// the property to validate</span>
          <span class="token literal-property property">$response</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> <span class="token comment">// response</span>
          <span class="token literal-property property">$validator</span><span class="token operator">:</span> string <span class="token comment">// validator name</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">$valid</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span>
</code></pre></div><p>The <code>$message</code> of the validator is just a two-dimensional array.</p><div class="language-js"><pre><code><span class="token keyword">const</span> $message <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;Collection 1 - Error 1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Collection 1 - Error 2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;Collection 2 - Error 1&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre></div><p>Each validator function is passed 3 parameters - <code>rule(value, object, vm)</code></p><ol><li>The value of the property, for iterated object</li><li>The current iterated object, aka siblings to property</li><li>The component instance</li></ol><h3 id="using-the-validateeach-component" tabindex="-1">Using the ValidateEach component <a class="header-anchor" href="#using-the-validateeach-component" aria-hidden="true">#</a></h3><p>A simple validator provider like the <code>ValidateEach</code> component below comes in handy, when you just want to have a quick collection validation, without the need for dedicated form components. This would allow you to keep all the rules and state defined near your form data.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ValidateEach</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in collection<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:state</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ v }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v.name.$model<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(error, errorIndex) in v.name.$errors<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>errorIndex<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          {{ error.$message }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ValidateEach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ValidateEach <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/components&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> minLength<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ValidateEach <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        required<span class="token punctuation">,</span>
        <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> collection <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> rules<span class="token punctuation">,</span> collection<span class="token punctuation">,</span> v <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>The <code>ValidateEach</code> component is just a simple wrapper, without any template of its own. Its sole purpose is to create Vuelidate instances and pass them to its parent, and children as scoped slot parameters.</p><p>You can find <code>ValidateEach</code> inside the <code>@vuelidate/components</code> package.</p><h2 id="validation-scopes" tabindex="-1">Validation scopes <a class="header-anchor" href="#validation-scopes" aria-hidden="true">#</a></h2><p>As we learned in <a href="#nested-validations">Nested Validations</a>, you can rely on the parent component to collect validation results from its children. There are cases where we need to limit which forms get collected by the parent.</p><p>This is where the <code>$scope</code> and <code>$stopPropagation</code> properties come in handy. These are configuration settings, that can be passed as a third parameter to the <code>useVuelidate</code> composable.</p><h3 id="scope-property" tabindex="-1">$scope property <a class="header-anchor" href="#scope-property" aria-hidden="true">#</a></h3><p>The <code>$scope</code> property has three main use cases:</p><ol><li><code>true</code> (Collect all) - collect results from all and emits to all, this is the default setting. This means that each component that uses <code>useVuelidate</code>, can collect results from validation children, and emit to parent components.</li><li><code>false</code> (Collect none) - collect no validation results and emit none.</li><li><code>string|number|symbol</code> (Specific scope) - collect and emit results, only to/from components, that have the same scope.</li></ol><p><strong>Example using $scope</strong></p><div class="language-js"><pre><code><span class="token comment">// component that should not collect/emit any result.</span>
<span class="token keyword">const</span> IsolatedComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> validations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// do not send or collect any validations</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>validations<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$scope</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// .. other stuff</span>
<span class="token punctuation">}</span>

<span class="token comment">// child component that emits validations</span>
<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> validations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// sends validations to its parent, if it has the same scope.</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>validations<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$scope</span><span class="token operator">:</span> props<span class="token punctuation">.</span>scope <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// .. other stuff</span>
<span class="token punctuation">}</span>

<span class="token comment">// Parent component that collects child validations</span>
<span class="token keyword">const</span> ParentComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ChildComponent<span class="token punctuation">,</span> IsolatedComponent <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> scope <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
    <span class="token keyword">const</span> validations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// collects validations from \`ChildComponent\` but not from \`IsolatedComponent\`.</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>validations<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$scope</span><span class="token operator">:</span> scope <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> v<span class="token punctuation">,</span> scope <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;ChildComponent :scope=&quot;scope&quot;/&gt;&lt;IsolatedComponent /&gt;&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="stoppropagation-property" tabindex="-1">$stopPropagation property <a class="header-anchor" href="#stoppropagation-property" aria-hidden="true">#</a></h3><p>The <code>$stopPropagation</code> is used to stop emitting results up to parents, but still collect everything from children. Example use case would be a modal, which has its own validations, and shouldn&#39;t emit results to the outer forms.</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ChildComponent <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// collects validations from \`ChildComponent\` but does not emit it up to parent validations.</span>
    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>validations<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$stopPropagation</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="collector-only-components" tabindex="-1">Collector only components <a class="header-anchor" href="#collector-only-components" aria-hidden="true">#</a></h3><p>A collector only component is the top level component, in a chain of form validations. This component is used most often just to show error messages, and has no validation or state.</p><p>In such cases, you can just call <code>useVuelidate</code> without any parameters:</p><div class="language-js"><pre><code><span class="token comment">// a collector only component</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// ...other settings</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Note:</strong> You can pass validation configs as a single parameter to <code>useVuelidate</code></p><ul><li><a href="#passing-a-single-parameter-to-usevuelidate">Passing a single parameter to useVuelidate</a></li></ul></div><h2 id="returning-extra-data-from-validators" tabindex="-1">Returning extra data from validators <a class="header-anchor" href="#returning-extra-data-from-validators" aria-hidden="true">#</a></h2><p>In more advanced use cases, a validator needs to return more than just a boolean, rather extra data to help the user understand the error. In those cases, validators can return an object, which must have a <code>$valid</code> key, and any other data, that the developer chooses.</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">validator</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">$valid</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$valid</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;The value must be &quot;something&quot;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extraParams</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The entire response can be accessed from <code>$response</code> property in the validation and error objects.</p><div class="language-json5"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;v$&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;validator&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$error&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$invalid&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$dirty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;$valid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The value must be &#39;something&#39;&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;extraParams&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// other properties</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>We can use this to show a more custom error message.</p><div class="language-js"><pre><code><span class="token keyword">const</span> validatorWithMessage <span class="token operator">=</span> <span class="token function">withMessage</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $response <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> $response<span class="token operator">?.</span>message <span class="token operator">||</span> <span class="token string">&#39;Invalid Data&#39;</span><span class="token punctuation">,</span> validator<span class="token punctuation">)</span>
</code></pre></div><p>If you need to access the data, you can just go into the <code>$response</code> property.</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">someComputed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>v$<span class="token punctuation">.</span>name<span class="token punctuation">.</span>validatorName<span class="token punctuation">.</span>$response
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="providing-global-config-to-your-vuelidate-instance" tabindex="-1">Providing global config to your Vuelidate instance <a class="header-anchor" href="#providing-global-config-to-your-vuelidate-instance" aria-hidden="true">#</a></h2><p>You can provide configurations to your Vuelidate instance using the third parameter of <code>useVuelidate</code> or by using the <code>validationsConfig</code> for Options API. These config options can be used to change some core Vuelidate functionality, like <code>$autoDirty</code>, <code>$lazy</code>, <code>$scope</code> and more. Read about each one in <a href="./api/configuration.html">Validation Configuration</a>.</p><h3 id="config-with-options-api" tabindex="-1">Config with Options API <a class="header-anchor" href="#config-with-options-api" aria-hidden="true">#</a></h3><h4 id="using-validationconfig" tabindex="-1">Using <code>validationConfig</code> <a class="header-anchor" href="#using-validationconfig" aria-hidden="true">#</a></h4><p>If you are using the Options API, you can specify a <code>validationConfig</code> object, that Vuelidate will read configs from.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>validations <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">validationConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="using-the-config-object-of-usevuelidate" tabindex="-1">Using the config object of useVuelidate <a class="header-anchor" href="#using-the-config-object-of-usevuelidate" aria-hidden="true">#</a></h4><p>An alternative is to use the first parameter of <code>useVuelidate</code> to pass a config object, see <a href="#passing-a-single-parameter-to-usevuelidate">Passing a single parameter to useVuelidate</a> for more info.</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>validations <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">$autoDirty</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">$scope</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="config-with-composition-api" tabindex="-1">Config with Composition API <a class="header-anchor" href="#config-with-composition-api" aria-hidden="true">#</a></h3><p>When using the Composition API, you can pass your configuration object as the third parameter to <code>useVuelidate</code>, or as the first one, if the component is just a collector, see <a href="#passing-a-single-parameter-to-usevuelidate">Passing a single parameter to useVuelidate</a>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">// or &#39;@vue/composition-api&#39; in Vue &lt;2.7</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> required <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> v$ <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$lazy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> v$ <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="passing-a-single-parameter-to-usevuelidate" tabindex="-1">Passing a single parameter to useVuelidate <a class="header-anchor" href="#passing-a-single-parameter-to-usevuelidate" aria-hidden="true">#</a></h4><p>A common scenario is to call <code>useVuelidate()</code> without passing any state or validations, usually in validation collector components. In such cases you can pass global configs like <code>$scope</code>, <code>$stopPropagation</code> as a single parameter to <code>useVuelidate()</code>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/core&#39;</span>
<span class="token keyword">import</span> FormA <span class="token keyword">from</span> <span class="token string">&#39;@/componnets/FormA&#39;</span>
<span class="token keyword">import</span> FormB <span class="token keyword">from</span> <span class="token string">&#39;@/componnets/FormB&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> FormA<span class="token punctuation">,</span> FormB <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$stopPropagation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">$scope</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="providing-external-validations-server-side-validation" tabindex="-1">Providing external validations, server side validation <a class="header-anchor" href="#providing-external-validations-server-side-validation" aria-hidden="true">#</a></h2><p>To provide validation messages from an external source, like from a server side validation response, you can use the <code>$externalResults</code> functionality. Each property in the validated state can have a corresponding string or array of strings as response message. This works with both Composition API and Options API.</p><h3 id="external-results-with-composition-api" tabindex="-1">External results with Composition API <a class="header-anchor" href="#external-results-with-composition-api" aria-hidden="true">#</a></h3><p>When using the Composition API, you can pass a <code>reactive</code> or <code>ref</code> object, to the <code>$externalResults</code> global config.</p><div class="language-js"><pre><code><span class="token comment">// inside setup</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $externalResults <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// works with reactive({}) too.</span>

<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> someValidation <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> $externalResults <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// validate method</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">validate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// check if everything is valid</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">await</span> v<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">$validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">await</span> <span class="token function">doAsyncStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// do server validation, and assume we have these errors</span>
  <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// foo: &#39;error&#39;, is also supported</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Error one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Error Two&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// add the errors into the external results object</span>
  $externalResults<span class="token punctuation">.</span>value <span class="token operator">=</span> errors
  <span class="token comment">// if using a \`reactive\` object instead,</span>
  <span class="token comment">// Object.assign($externalResults, errors)</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span> v<span class="token punctuation">,</span> validate <span class="token punctuation">}</span>
</code></pre></div><h3 id="external-results-with-options-api" tabindex="-1">External results with Options API <a class="header-anchor" href="#external-results-with-options-api" aria-hidden="true">#</a></h3><p>When using the Options API, you can either define a <code>vuelidateExternalResults</code> data property, and assign the errors to it. You can also pass an <code>$externalResults</code> property to the <code>useVuelidate</code> config object.</p><p>It is a good practice to pre-define your external results keys, to match your form structure, otherwise Vue may have a hard time tracking changes.</p><h4 id="using-vuelidateexternalresults-property" tabindex="-1">Using <code>vuelidateExternalResults</code> property <a class="header-anchor" href="#using-vuelidateexternalresults-property" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vuelidateExternalResults</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> someValidation <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">validate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// perform validations</span>
      <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Error one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Error Two&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      <span class="token comment">// merge the errors into the validation results</span>
      Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vuelidateExternalResults<span class="token punctuation">,</span> errors<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="using-externalresults-config" tabindex="-1">Using <code>$externalResults</code> config <a class="header-anchor" href="#using-externalresults-config" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> someValidation <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> externalResults <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      externalResults<span class="token punctuation">,</span>
      <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$externalResults</span><span class="token operator">:</span> externalResults <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">validate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// perform validations</span>
      <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Error one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Error Two&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      <span class="token comment">// merge the errors into the validation results</span>
      Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>externalResults<span class="token punctuation">,</span> errors<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="clearing-externalresults" tabindex="-1">Clearing $externalResults <a class="header-anchor" href="#clearing-externalresults" aria-hidden="true">#</a></h3><p>If you are using <code>$model</code> to modify your form state, Vuelidate automatically will clear any corresponding external results.</p><p>If you are using <code>$autoDirty: true</code>, then Vuelidate will track any changes to your form state and reset the external results as well, no need to use <code>$model</code></p><p>If you need to clear the entire object, use the handy <code>$clearExternalResults()</code> method, that Vuelidate provides. It will properly handle both <code>ref</code> and <code>reactive</code> objects.</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">validate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// clear out old external results</span>
  v<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">$clearExternalResults</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// check if everything is valid</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">await</span> v<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">$validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="i18n-support" tabindex="-1">i18n support <a class="header-anchor" href="#i18n-support" aria-hidden="true">#</a></h2><p>Validator messages are very flexible. You can wrap each validator with a helper, that returns a translated error message, based on the validator name. Vuelidate already exports one for you, but you are free to create your own.</p><div class="language-js"><pre><code><span class="token comment">// @/utils/i18n-validators.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> validators <span class="token keyword">from</span> <span class="token string">&#39;@vuelidate/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> i18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/i18n&quot;</span>

<span class="token comment">// or import { createI18nMessage } from &#39;@vuelidate/validators&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createI18nMessage <span class="token punctuation">}</span> <span class="token operator">=</span> validators

<span class="token comment">// Create your i18n message instance. Used for vue-i18n@9</span>
<span class="token keyword">const</span> withI18nMessage <span class="token operator">=</span> <span class="token function">createI18nMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">t</span><span class="token operator">:</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// for vue-i18n@8</span>
<span class="token comment">// const withI18nMessage = createI18nMessage({ t: i18n.t.bind(i18n) })</span>

<span class="token comment">// wrap each validator.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> required <span class="token operator">=</span> <span class="token function">withI18nMessage</span><span class="token punctuation">(</span>validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span>
<span class="token comment">// validators that expect a parameter should have \`{ withArguments: true }\` passed as a second parameter, to annotate they should be wrapped</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> minLength <span class="token operator">=</span> <span class="token function">withI18nMessage</span><span class="token punctuation">(</span>validators<span class="token punctuation">.</span>minLength<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">withArguments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// or you can provide the param at definition, statically</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> maxLength <span class="token operator">=</span> <span class="token function">withI18nMessage</span><span class="token punctuation">(</span>validators<span class="token punctuation">.</span><span class="token function">maxLength</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>We can now use the validators as we normally do:</p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> required<span class="token punctuation">,</span> minLength <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/i18n-validators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">validations</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> required<span class="token punctuation">,</span> <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>The translations for the validation messages, with optional data inside each message can be defined like this:</p><div class="language-en.json"><pre><code>{
  &quot;validations&quot;: {
    &quot;required&quot;: &quot;The field {property} is required.&quot;,
    &quot;minLength&quot;: &quot;The {property} field has a value of &#39;{model}&#39;, but it must have a min length of {min}.&quot;
  }
}
</code></pre></div><h3 id="customising-the-i18n-message" tabindex="-1">Customising the i18n message <a class="header-anchor" href="#customising-the-i18n-message" aria-hidden="true">#</a></h3><p>The <code>t</code> function is responsible for doing the actual translation. It gets two parameters, a path and an object.</p><ol><li><p>The path is a <code>string</code>, representing the path for the validation message, it looks like <code>validations.\${validator}</code>. This means that by default, validation messages, are expected to live under the <code>validations</code> key in your translations.</p></li><li><p>The second parameter is an object, with similar properties as the one passed to <code>withMessage</code> functions. Mind that properties do not have <code>$</code> prefixed, this is intentional, as vue-i18n does not like those.</p></li></ol><div class="language-"><pre><code>{
    model: any,
    property: string,
    pending: boolean,
    invalid: boolean,
    response: any,
    validator: string,
    propertyPath: string,
    ...props.$params
}
</code></pre></div><p>If you wish to change the way <code>t</code> retrieves validation messages, you can pass a <code>messagePath</code> property to <code>createI18nMessage</code>. It will allow you to specify your own translation message paths. It gets access to the same params as the <code>withMessage</code> function, like the validator name, model etc.</p><div class="language-js"><pre><code><span class="token comment">// change the path for fetching validator messages</span>
<span class="token keyword">const</span> <span class="token function-variable function">messagePath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $validator <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">messages.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>$validator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> withI18nMessage <span class="token operator">=</span> <span class="token function">createI18nMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> t<span class="token punctuation">,</span> messagePath <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> required <span class="token operator">=</span> <span class="token function">withI18nMessage</span><span class="token punctuation">(</span>validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span>

</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Note:</strong> You can also pass a <code>messagePath</code> or <code>messageParams</code> function to <code>withI18nMessage</code> to override the global ones, on a per validator basis.</p></div><div class="language-js"><pre><code><span class="token keyword">const</span> required <span class="token operator">=</span> <span class="token function">withI18nMessage</span><span class="token punctuation">(</span>validators<span class="token punctuation">.</span>required<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token function-variable function">messagePath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;overrides.required&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="calling-usevuelidate-from-async-setup-function" tabindex="-1">Calling useVuelidate from async setup function <a class="header-anchor" href="#calling-usevuelidate-from-async-setup-function" aria-hidden="true">#</a></h2><p>In situations where you need to call useVuelidate from outside your setup function, or in an async setup function, you should use the <code>currentVueInstance</code> config to pass the component&#39;s vue instance.</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentVueInstance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>proxy
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">doAsyncStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> vuelidate <span class="token operator">=</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span>rules<span class="token punctuation">,</span> result<span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> currentVueInstance <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> vuelidate <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="validation-groups" tabindex="-1">Validation Groups <a class="header-anchor" href="#validation-groups" aria-hidden="true">#</a></h2><p>You may want to group a few validation rules under one roof, in which case a validation group is a perfect choice.</p><p>To create a validation group, you must specify a config property at the top level of your rules, called <code>$validationGroups</code>.</p><p>This is an object that holds the name of your groups and an array of property paths, which will be the group itself.</p><div class="language-js"><pre><code><span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span> isEven <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nested</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">required</span><span class="token operator">:</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token operator">!</span>v <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">$validationGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstGroup</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nested.word&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In the above example, it will create a group called <code>firstGroup</code> that will reflect the state of <code>number</code> and <code>nested.word</code>.</p><p>You can see all your defined groups in the <code>v$.$validationGroups</code> property of your vue instance.</p><p>The group has the typical properties of other validations:</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ValidationGroupItem</span> <span class="token punctuation">{</span>
  $invalid<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  $error<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  $pending<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  $errors<span class="token operator">:</span> ErrorObject<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  $silentErrors<span class="token operator">:</span> ErrorObject<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,118),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
