const loadScript = (url, callback, type) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (type) {
    script.setAttribute('type', type);
  }
  script.onload = callback;
  head.append(script);
  return script;
};

export default function decorate(block) {
  const root = document.createElement('div')

  root.setAttribute('prism-auto-embed', null)
  root.setAttribute('data-prism-facet', 'ColorVisualizer')
  root.setAttribute('data-language', 'es-AR')
  root.setAttribute('data-brand', 'easy')
  root.setAttribute('data-cwv3', 'true')
  root.setAttribute('data-max-scene-height', '640')

  loadScript('https://prism.sherwin-williams.com/2.1.2/embed.js')

  block.append(root)
}
