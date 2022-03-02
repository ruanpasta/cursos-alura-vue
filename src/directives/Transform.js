import Vue from 'vue';

Vue.directive('meu-transform', {
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('click', function () {
      const { value, modifiers } = binding;
      const increment = value || 90;
      let effect;

      if (!binding.arg || binding.arg === 'rotate') {
        if (modifiers.reverse) current -= increment;
        else current += increment;
        effect = `rotate(${current}deg)`;
      } else if (binding.arg === 'scale') {
        effect = `scale(${increment})`;
      }

      el.style.transform = effect;
      if (modifiers.animate) el.style.transition = 'transform 0.5s';
    })
  }
});