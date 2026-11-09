(() => {
  const { tools } = window.UtilityNestTools;
  const $ = s => document.querySelector(s);
  const grid = $('#tool-grid'), dialog = $('#tool-dialog'), content = $('#dialog-content');
  const categoryIcons = { Image:'◩', Text:'≡', Calculator:'∑', Generator:'✦' };
  function render(list) {
    $('#visible-count').textContent = list.length;
    $('#empty-state').hidden = list.length !== 0;
    grid.replaceChildren();
    list.forEach(tool => {
      const card = document.createElement('button'); card.className = 'tool-card'; card.type = 'button'; card.dataset.tool = tool.id;
      card.innerHTML = `<span class="tool-icon" aria-hidden="true">${categoryIcons[tool.category] || tool.icon}</span><h3>${tool.name}</h3><p>${tool.description}</p><span class="card-arrow" aria-hidden="true">↗</span>`;
      card.addEventListener('click', () => openTool(tool)); grid.append(card);
    });
  }
  function openTool(tool) {
    $('#dialog-title').textContent = tool.name;
    $('#dialog-category').textContent = `${tool.category.toUpperCase()} TOOL`;
    content.innerHTML = tool.render();
    tool.mount(content);
    dialog.showModal();
  }
  let activeFilter = 'all';
  function applyFilters() {
    const q = $('#tool-search').value.trim().toLocaleLowerCase();
    render(tools.filter(t => (activeFilter === 'all' || t.group === activeFilter) && `${t.name} ${t.description} ${t.category}`.toLocaleLowerCase().includes(q)));
  }
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active'); button.classList.add('active'); activeFilter = button.dataset.filter; applyFilters();
  }));
  $('#tool-search').addEventListener('input', applyFilters);
  document.addEventListener('keydown', e => { if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { e.preventDefault(); $('#tool-search').focus(); } });
  $('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  $('#year').textContent = new Date().getFullYear();
  render(tools);
})();
